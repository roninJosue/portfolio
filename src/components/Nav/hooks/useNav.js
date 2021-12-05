import { useEffect, useState } from "react";

const useNav = () => {
  const [buttonPressed, setButtonPressed] = useState(false);

  useEffect(() => {
    return () => {
      const body = document.getElementsByTagName("body");
      body[0].classList.remove("body-aside");
    }
  }, [])

  const handleClick = () => {
    setButtonPressed(!buttonPressed);
    const body = document.getElementsByTagName("body");

    if (buttonPressed) {
      body[0].classList.remove("body-aside");

    } else {
      body[0].classList.add("body-aside");
    }
  };

  return {
    buttonPressed,
    handleClick
  };
};

export default useNav;