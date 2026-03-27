//Основной компонент
import "./style.css";

import Header from "./components/Header/Header";
import TimeAndName from "./components/Body/TimeAndName/TimeAndName";

import { useEffect, useState } from "react";

//Масив дней недели
const weekDays = [
  "Понедельник",
  "Вторник",
  "Среда",
  "Четерг",
  "Пятница",
  "Суббота",
  "Воскресение",
];

//Создание дат и дня недели с первым рендером страницы
let hoursText = new Date().getHours();
let minuteText = new Date().getMinutes();
let today = new Date().getDay();
let nameDayText = weekDays[today - 1];
let timer;

function App() {
  {
    /* Стейты для обновления времени */
  }
  const [minute, setMinute] = useState(minuteText);
  const [hourse, setHourse] = useState(hoursText);
  const [nameDay, setNameDay] = useState(nameDayText);

  {
    /* Функция таймера для обновления времени каждую секунду*/
  }
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
          {/* Рендер времени и дня недели */}
          <TimeAndName>
            {nameDay}, {hourse}:{minute < 10 ? "0" + minute : minute}
          </TimeAndName>
        </div>
      </div>
    </>
  );
}

export default App;
