import {useState, useEffect} from 'react';
import useScroll from '../../Nav/hooks/useScroll';

const useHead = () => {
  const [visible, setVisible] = useState([])
  const scroll = useScroll()

  // update classList of nav on scroll
  useEffect(() => {
    const classList = [];

    if (scroll.y > 150 && scroll.y - scroll.lastY > 0)
      classList.push("nav-bar--hidden");

    setVisible(classList);
  }, [scroll.y, scroll.lastY]);

  return {
    visible,
  }
}

export default useHead