export default function EditorWindow({ filename, children, className = '' }) {
  return (
    <div className={`panel-border bg-panel overflow-hidden ${className}`}>
      <div className="flex items-center gap-2 px-4 h-10 border-b border-line">
        <span className="flex gap-2">
          <Dot color="#E99287" />
          <Dot color="#FEA55F" />
          <Dot color="#43D9AD" />
        </span>
        {filename && (
          <span className="ml-3 text-xs text-menu-text">{filename}</span>
        )}
      </div>
      <div className="p-5 text-[13px] leading-relaxed overflow-x-auto">{children}</div>
    </div>
  )
}

function Dot({ color }) {
  return <span className="w-3 h-3 rounded-full" style={{ backgroundColor: color }} />
}
