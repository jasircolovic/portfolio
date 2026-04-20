import { marqueeItems } from '../data/content'

export default function Marquee() {
  // Double the items for seamless looping
  const items = [...marqueeItems, ...marqueeItems]

  return (
    <div className="border-t border-b border-rule py-6 overflow-hidden whitespace-nowrap bg-paper-warm relative z-[2]">
      <div className="inline-block animate-marquee font-serif italic text-[1.8rem]">
        {items.map((item, i) => (
          <span key={i}>
            <span className="mx-8">{item}</span>
            <span className="text-accent not-italic">✦</span>
          </span>
        ))}
      </div>
    </div>
  )
}
