//Основной компонент

//Основные стили
import "./style.css";

//Импорт компоентов
import Header from "./components/Header/Header";
import Tags from "./components/Body/Tags/Tags";
import Tag from "./components/Body/Tag/Tag";

import { useEffect, useState } from "react";

//Масив фраз на входе
const phrases = [
  "Прогулял, значит выжил.",
  "Долг, как кредит - бесконечный.",
  "Чужой конспект - мой успех.",
  "Экзамен - лотерея без выигрыша.",
  "Студент всегда найдет выход.",
  "Взятка — тоже искусство.",
  "Списать — не украсть.",
  "Между первой и второй...",
  "Сессия всех помирит.",
  "Учу ночью днем сплю.",
];
const naumPhrase = Math.floor(Math.random() * 10);
const phrase = phrases[naumPhrase];
//Масив тегов
const dataTags = [
  { text: "ИСПВ-42", type: "group" },
  { text: "Расписание", type: "shedule" },
];
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
          <Header phrase={phrase}>
            {nameDay}, {hourse}:{minute < 10 ? "0" + minute : minute}
          </Header>
          {/* Тэги */}
          <Tags>
            {dataTags.map(({ text, type }) => {
              return <Tag text={text} type={type} key={type}></Tag>;
            })}
            {/* <Tag text="ИСПВ-42" type="group"></Tag> */}
          </Tags>
        </div>
      </div>
    </>
  );
}

export default App;
