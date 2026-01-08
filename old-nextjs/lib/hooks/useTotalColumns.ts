import { useEffect, useState } from 'react'

const useTotalColumns = () => {
  const [totalColumns, setTotalColumns] = useState<number>(2)

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth
      setTotalColumns(width < 600 ? 1 : 2)
    }

    handleResize()
    window.addEventListener('resize', handleResize)

    return () => {
      window.removeEventListener('resize', handleResize)
    }
  }, [])

  return totalColumns
}

export default useTotalColumns
