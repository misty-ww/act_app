//Компонент кнопок сверху
import { useEffect, useState } from "react";
import "./header.css";
import "./timeAndName.css";

export default function Header({ children, phrase }) {
  const [animate, setAnimate] = useState(false);
  function startAnimate() {
    setAnimate(true);
    const timout = setTimeout(() => {
      setAnimate(false);
    }, 2500);

    return () => {
      clearTimeout(timout);
    };
  }
  useEffect(() => {
    startAnimate();
  }, []);
  return (
    <>
      <div className="container-header">
        <div className="header-menu">
          {/* Кнопка меню слева */}
          <div className="header-menu-bg">
            <img
              className="header-menu-img"
              src="shedule/header/header-menu.svg"
              alt="img"
            />
          </div>
          {/* Контейнер с кнопками справа */}
          <div className="container-right-menu">
            {/* Кнопка Уведомлений */}
            <div
              className="header-notice-bg"
              onMouseEnter={() => startAnimate()}
            >
              <div className={`notice-count ${animate ? "animate" : null}`}>
                <span>2</span>
              </div>
              <img
                className="header-notice-img"
                src="shedule/header/notice-header.svg"
                alt="img"
              />
            </div>
            {/* Кнопка Профиля */}
            <div className="ava-bg-gradient">
              <div className="header-ava-bg">
                <img
                  className="header-ava-img"
                  src="shedule/header/example_ava.svg"
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
        {/* Рендер времени и дня недели */}
        <div className="data-time">
          <p className="time">{children}</p>
          <p className="name"></p>
        </div>
        {/* Рендер имени пользователя и фразы */}
        <div className="name-container">
          <p className="name">User, {phrase}</p>
        </div>
      </div>
    </>
  );
}
