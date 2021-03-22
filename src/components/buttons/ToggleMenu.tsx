import React from "react";

interface ToggleMenuProps {
  isOpenMenu: boolean;
  handlerClick: () => void;
}

const ToggleMenu = (props: ToggleMenuProps) => {
  const { isOpenMenu, handlerClick } = props;

  let toggleClass = "toggle-menu-button";
  if (isOpenMenu) {
    toggleClass += " toggle-menu-button_isOpen";
  }
  return (
    <>
      <button className={toggleClass} type="button" onClick={handlerClick}>
        {isOpenMenu ? "закрыть меню" : "открыть меню"}
      </button>
    </>
  );
};
export default ToggleMenu;
