import "./style.css";

import Header from "./components/Header/Header";
import { useEffect, useState } from "react";
const weekDays = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четерг",
  "Пятница",
  "Суббота",
  "Воскресение",
];
let hoursText = new Date().getHours();
let minuteText = new Date().getMinutes();
let today = new Date().getDay();
let nameDayText = weekDays[today - 1];
let timer;
function App() {
  const [minute, setMinute] = useState(minuteText);
  const [hourse, setHourse] = useState(hoursText);
  const [nameDay, setNameDay] = useState(nameDayText);
  useEffect(() => {
    timer = setInterval(() => {
      hoursText = new Date().getHours();
      setHourse(hoursText);
      minuteText = new Date().getMinutes();
      setMinute(minuteText);
      today = new Date().getDay();
      nameDayText = weekDays[today - 1];
      setNameDay(nameDayText);
    }, 1000);

    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <>
      {/* Контейнер для всего экрана */}
      <div className="contaner-main">
        <div className="container-border">
          <Header />
          <div className="data-time">
            <p>
              {nameDay}, {hourse}:{minute < 10 ? "0" + minute : minute}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
