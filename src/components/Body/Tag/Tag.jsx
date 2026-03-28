//Настраиваемый компонетнт тэга
import { useState } from "react";
import "./tag.css";

export default function Tag({ text, type }) {
  const [animate, setAnimate] = useState(false);
  const [animateX, setAnimateX] = useState(false);
  return (
    <>
      <div
        className="container-tag"
        onMouseEnter={() => setAnimate(true)}
        onMouseLeave={() => setAnimate(false)}
      >
        {/* Будет ограничение в какое то количечтво тегов, у каждого свой тип, который не должен
        повторяться, что бы у каждого была своя анимация при наведении */}
        <span className={`tag-one ${animate ? `animate-${type}` : null}`}>
          {" "}
          {text}
        </span>
        <img
          className={`close-tag ${animateX ? "animateX" : null}`}
          src="shedule/main-app/tags/X.svg"
          alt="tag"
          onMouseEnter={() => setAnimateX(true)}
          onMouseLeave={() => setAnimateX(false)}
        />
      </div>
    </>
  );
}
