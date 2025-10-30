interface StatProps {
  value: string
  label: string
}

export function Stat({ value, label }: StatProps) {
  return (
    <div className="text-center">
      <div className="text-4xl sm:text-5xl font-display text-brand-red mb-2">{value}</div>
      <div className="text-sm sm:text-base text-brand-ink/70">{label}</div>
    </div>
  )
}

