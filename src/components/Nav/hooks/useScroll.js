import { useEffect, useState } from 'react';
import { debounce } from '../../../util/helpers';

const useScroll = () => {
  const [coords, setCoords] = useState({
    x: 0,
    y: 0,
    lastX: 0,
    lastY: 0
  })

  useEffect(() => {
    const handleScroll = debounce(() => {
      setCoords(last=>{
        return {
          x: window.scrollX,
          y: window.scrollY,
          lastX: last.x,
          lastY: last.y
        }
      })
    })

    handleScroll()

    window.addEventListener('scroll', handleScroll)

    return () => {
      window.removeEventListener('scroll', handleScroll)
    }
  }, [])

  return coords
}

export default useScroll
