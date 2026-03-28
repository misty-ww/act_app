//Tag с меню
import { useState } from "react";

import "./tag.css";

export default function ReversMenuTag() {
  const [rotate, setRotate] = useState(false);
  return (
    <div
      className="container-tag container-tag-reverse"
      onMouseEnter={() => setRotate(true)}
      onMouseLeave={() => setRotate(false)}
    >
      <img
        className={`reverseMenu ${rotate ? "rotate" : null}`}
        src="shedule/main-app/tags/reversMenu.svg"
        alt="menu"
      />
    </div>
  );
}
