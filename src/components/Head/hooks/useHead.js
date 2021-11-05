import {useState, useEffect} from 'react';
import {debounce} from '../../../util/helpers';

const getThemeFromLocalStorage = localStorage.getItem('theme')

const useHead = () => {
  const [theme, setTheme] = useState(getThemeFromLocalStorage || 'light')
  const [visible, setVisible] = useState(true)
  const [prevScrollPos, setPrevScrollPos] = useState(0)

  const handleScroll = debounce(() => {
    const currentScrollPos = window.pageYOffset
    const isVisible = ((prevScrollPos > currentScrollPos && prevScrollPos - currentScrollPos > 70) || currentScrollPos < 10)
    setVisible(isVisible)
    setPrevScrollPos(currentScrollPos)
  }, 100)

  useEffect(() => {
    window.addEventListener('scroll', handleScroll)

    return () => window.removeEventListener('scroll', handleScroll)
  }, [visible])

  const handleChange = () => {
    setTheme(!theme);
    if (theme) {
      document.documentElement.setAttribute('data-theme', 'light');
    } else {
      document.documentElement.setAttribute('data-theme', 'dark');
    }
  };

  return {
    theme,
    visible,
    handleChange
  }
}

export default useHead