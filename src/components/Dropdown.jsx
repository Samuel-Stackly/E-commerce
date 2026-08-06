import { useEffect, useRef, useState } from 'react'

let idCounter = 0

/**
 * Generic dropdown wrapper.
 * trigger -> renders the trigger (receives open state)
 * children -> renders dropdown content (receives close function)
 */
export default function Dropdown({
  trigger,
  children,
  align = 'left',
  panelClassName = '',
  noButton = false,
}) {
  const [open, setOpen] = useState(false)
  const ref = useRef(null)
  const id = useRef(++idCounter).current

  useEffect(() => {
    function handleDocClick(e) {
      if (ref.current && !ref.current.contains(e.target)) {
        setOpen(false)
      }
    }

    function handleCloseOthers(e) {
      if (e.detail !== id) {
        setOpen(false)
      }
    }

    document.addEventListener('click', handleDocClick)
    window.addEventListener('dropdown:open', handleCloseOthers)

    return () => {
      document.removeEventListener('click', handleDocClick)
      window.removeEventListener('dropdown:open', handleCloseOthers)
    }
  }, [id])

  function toggle(e) {
    e.stopPropagation()

    setOpen((prev) => {
      const next = !prev

      if (next) {
        window.dispatchEvent(
          new CustomEvent('dropdown:open', {
            detail: id,
          })
        )
      }

      return next
    })
  }

  return (
    <div className="relative" ref={ref}>
      {noButton ? (
        <div
          onClick={toggle}
          className="flex cursor-pointer items-center"
        >
          {trigger(open)}
        </div>
      ) : (
        <button
          type="button"
          onClick={toggle}
          className="flex items-center gap-1"
        >
          {trigger(open)}
        </button>
      )}

      {open && (
        <div
          className={`absolute top-full z-20 mt-2 overflow-hidden rounded-md border border-gray-100 bg-white py-1 text-sm shadow-lg ${
            align === 'right' ? 'right-0' : 'left-0'
          } ${panelClassName}`}
        >
          {typeof children === 'function'
            ? children(() => setOpen(false))
            : children}
        </div>
      )}
    </div>
  )
}