import { useEffect, useRef, useState, useCallback } from 'react'

const CELLS = 17
const CELL = 16
const SIZE = CELLS * CELL
const SPEED = 110 // ms per step

const DIRS = {
  ArrowUp: { x: 0, y: -1 },
  ArrowDown: { x: 0, y: 1 },
  ArrowLeft: { x: -1, y: 0 },
  ArrowRight: { x: 1, y: 0 },
}

export default function SnakeGame() {
  const canvasRef = useRef(null)
  const hovered = useRef(false)
  const [status, setStatus] = useState('idle') // idle | running | over
  const [score, setScore] = useState(0)

  const game = useRef({
    snake: [{ x: 8, y: 8 }],
    dir: { x: 1, y: 0 },
    next: { x: 1, y: 0 },
    food: { x: 12, y: 8 },
    timer: null,
  })

  const randFood = useCallback((snake) => {
    const free = []
    for (let x = 0; x < CELLS; x++) {
      for (let y = 0; y < CELLS; y++) {
        if (!snake.some((s) => s.x === x && s.y === y)) free.push({ x, y })
      }
    }
    // Board full (win) — keep food on the head so the loop can't hang.
    return free.length ? free[Math.floor(Math.random() * free.length)] : { ...snake[0] }
  }, [])

  const draw = useCallback(() => {
    const ctx = canvasRef.current?.getContext('2d')
    if (!ctx) return
    const { snake, food } = game.current

    ctx.fillStyle = '#011221'
    ctx.fillRect(0, 0, SIZE, SIZE)

    // grid dots
    ctx.fillStyle = 'rgba(30,45,61,0.55)'
    for (let x = 0; x < CELLS; x++) {
      for (let y = 0; y < CELLS; y++) {
        ctx.fillRect(x * CELL + CELL / 2 - 1, y * CELL + CELL / 2 - 1, 1.5, 1.5)
      }
    }

    // food
    ctx.fillStyle = '#E99287'
    ctx.fillRect(food.x * CELL + 3, food.y * CELL + 3, CELL - 6, CELL - 6)

    // snake
    snake.forEach((s, i) => {
      ctx.fillStyle = i === 0 ? '#43D9AD' : '#4D5BCE'
      ctx.fillRect(s.x * CELL + 2, s.y * CELL + 2, CELL - 4, CELL - 4)
    })
  }, [])

  const stop = useCallback(() => {
    clearInterval(game.current.timer)
    game.current.timer = null
  }, [])

  const step = useCallback(() => {
    const g = game.current
    g.dir = g.next
    const head = { x: g.snake[0].x + g.dir.x, y: g.snake[0].y + g.dir.y }

    const hitWall = head.x < 0 || head.y < 0 || head.x >= CELLS || head.y >= CELLS
    const hitSelf = g.snake.some((s) => s.x === head.x && s.y === head.y)
    if (hitWall || hitSelf) {
      stop()
      setStatus('over')
      return
    }

    g.snake.unshift(head)
    if (head.x === g.food.x && head.y === g.food.y) {
      g.food = randFood(g.snake)
      setScore((s) => s + 1)
    } else {
      g.snake.pop()
    }
    draw()
  }, [draw, randFood, stop])

  const start = useCallback(() => {
    stop()
    game.current.snake = [{ x: 8, y: 8 }]
    game.current.dir = { x: 1, y: 0 }
    game.current.next = { x: 1, y: 0 }
    game.current.food = randFood(game.current.snake)
    setScore(0)
    setStatus('running')
    draw()
    game.current.timer = setInterval(step, SPEED)
  }, [draw, randFood, step, stop])

  const turn = useCallback(
    (key) => {
      const d = DIRS[key]
      if (!d) return
      const cur = game.current.dir
      // prevent reversing
      if (d.x === -cur.x && d.y === -cur.y) return
      game.current.next = d
    },
    [],
  )

  useEffect(() => {
    const onKey = (e) => {
      if (!DIRS[e.key]) return
      // Only capture arrows while playing or when the board is hovered,
      // so arrow-key scrolling still works everywhere else on the page.
      if (status !== 'running' && !hovered.current) return
      e.preventDefault()
      if (status !== 'running') start()
      turn(e.key)
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [status, start, turn])

  useEffect(() => {
    const g = game.current
    draw()
    return () => clearInterval(g.timer)
  }, [draw])

  return (
    <div className="flex flex-col items-center gap-4">
      <div
        className="relative panel-border overflow-hidden"
        style={{ width: SIZE, height: SIZE }}
        onMouseEnter={() => { hovered.current = true }}
        onMouseLeave={() => { hovered.current = false }}
      >
        <canvas ref={canvasRef} width={SIZE} height={SIZE} className="block" />
        {status !== 'running' && (
          <button
            onClick={start}
            className="absolute inset-0 flex flex-col items-center justify-center gap-2 bg-bg/70 backdrop-blur-[1px] text-txt-bright"
          >
            <span className="tok-fn text-lg">
              {status === 'over' ? 'game over' : '// snake'}
            </span>
            <span className="text-xs text-menu-text">
              {status === 'over' ? `score: ${score} — play again ▸` : 'press ▸ to start'}
            </span>
          </button>
        )}
      </div>

      <div className="flex items-center justify-between w-full text-xs text-menu-text">
        <span>
          <span className="tok-comment">{'// '}</span>
          use <span className="text-txt-bright">arrow keys</span>
        </span>
        <span className="tok-fn">score: {score}</span>
      </div>

      {/* Mobile / touch d-pad */}
      <div className="grid grid-cols-3 gap-1.5 md:hidden select-none">
        <span />
        <DpadBtn onPress={() => { if (status !== 'running') start(); turn('ArrowUp') }}>▲</DpadBtn>
        <span />
        <DpadBtn onPress={() => { if (status !== 'running') start(); turn('ArrowLeft') }}>◀</DpadBtn>
        <DpadBtn onPress={start}>●</DpadBtn>
        <DpadBtn onPress={() => { if (status !== 'running') start(); turn('ArrowRight') }}>▶</DpadBtn>
        <span />
        <DpadBtn onPress={() => { if (status !== 'running') start(); turn('ArrowDown') }}>▼</DpadBtn>
        <span />
      </div>
    </div>
  )
}

function DpadBtn({ children, onPress }) {
  return (
    <button
      onClick={onPress}
      className="w-11 h-11 flex items-center justify-center panel-border text-txt-bright active:bg-panel-2"
    >
      {children}
    </button>
  )
}
