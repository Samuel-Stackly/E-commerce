import { useEffect, useState } from 'react'

function getTimeLeft(target) {
  const diff = Math.max(0, target - Date.now())
  const days = Math.floor(diff / (1000 * 60 * 60 * 24))
  const hours = Math.floor((diff / (1000 * 60 * 60)) % 24)
  const minutes = Math.floor((diff / (1000 * 60)) % 60)
  const seconds = Math.floor((diff / 1000) % 60)
  return { days, hours, minutes, seconds }
}

export default function CountdownTimer() {
  const [target] = useState(() => Date.now() + (162 * 86400 + 9 * 3600 + 2 * 60 + 3) * 1000)
  const [time, setTime] = useState(() => getTimeLeft(target))

  useEffect(() => {
    const id = setInterval(() => setTime(getTimeLeft(target)), 1000)
    return () => clearInterval(id)
  }, [target])

  const units = [
    { label: 'd', value: time.days },
    { label: 'h', value: time.hours },
    { label: 'm', value: time.minutes },
    { label: 's', value: time.seconds },
  ]

  return (
    <div className="flex items-center gap-2">
      {units.map((u) => (
        <div key={u.label} className="flex flex-col items-center">
          <div className="bg-gray-900 text-white text-xs font-bold rounded px-2.5 py-1.5 min-w-[38px] text-center">
            -{String(u.value).padStart(2, '0')}
          </div>
          <span className="text-[10px] text-gray-400 mt-0.5">{u.label}</span>
        </div>
      ))}
    </div>
  )
}
