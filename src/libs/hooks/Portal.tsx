import { useRef, useEffect, useState } from 'react'
import { createPortal } from 'react-dom'

const Portal = ({
  children,
  selector,
}: {
  children: React.ReactNode
  selector: string
}): React.ReactPortal | null => {
  const ref = useRef()
  const [mounted, setMounted] = useState(false)

  useEffect(() => {
    ref.current = document.querySelector(selector)
    setMounted(true)
  }, [selector])

  return mounted ? createPortal(children, ref.current) : null
}

export default Portal
