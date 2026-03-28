//Основной компонент

//Основные стили
import "./style.css";

//Импорт компоентов
import Header from "./components/Header/Header";
import Tags from "./components/Body/Tags/Tags";
import Tag from "./components/Body/Tag/Tag";
import SheduleDesk from "./components/Body/shedule_desk/SheduleDesk";
import AboutLesson from "./components/Body/shedule_desk/Lesson/AboutLesson";
import InfoLesson from "./components/Body/shedule_desk/Lesson/InfoLesson";
import StatusLesson from "./components/Body/shedule_desk/Lesson/StatusLesson";
import NameLesson from "./components/Body/shedule_desk/Lesson/NameLesson";

import { useEffect, useState } from "react";
//Масив времени пар кроме пн
const timeOfLesson = [
  { hour: 8, minute: 30 },
  { hour: 10, minute: 10 },
  { hour: 10, minute: 20 },
  { hour: 12, minute: 0 },
  { hour: 12, minute: 40 },
  { hour: 14, minute: 20 },
  { hour: 14, minute: 30 },
  { hour: 16, minute: 10 },
];
//Масив данных о паре
const dataLesson = [
  {
    nameLesson: "Основы алгоритмизации и программирования",
    numberLesson: 1,
    typeLesson: "Практика",
    classRoom: "0305",
    teacherName: "Абрамова П. А.",
  },
  {
    nameLesson: "ОСИС",
    numberLesson: 2,
    typeLesson: "Практика",
    classRoom: "0104",
    teacherName: "Нехлебаева М. Н.",
  },
];
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
          {/* Создаем количество окон с предметами */}
          {dataLesson.map(
            ({
              nameLesson,
              numberLesson,
              typeLesson,
              classRoom,
              teacherName,
            }) => {
              // перменные для хранения перменных времени
              let startLessonHourse;
              let startLessonMinute;
              let endLessonMinute;
              let endLessonHourse;
              // Подбор времени занятия под номер пары
              switch (numberLesson) {
                case 1:
                  startLessonMinute = timeOfLesson[0].minute;
                  startLessonHourse = timeOfLesson[0].hour;
                  endLessonMinute = timeOfLesson[1].minute;
                  endLessonHourse = timeOfLesson[1].hour;
                  break;
                case 2:
                  startLessonMinute = timeOfLesson[2].minute;
                  startLessonHourse = timeOfLesson[2].hour;
                  endLessonMinute = timeOfLesson[3].minute;
                  endLessonHourse = timeOfLesson[3].hour;
                  break;
                case 3:
                  startLessonMinute = timeOfLesson[4].minute;
                  startLessonHourse = timeOfLesson[4].hour;
                  endLessonMinute = timeOfLesson[5].minute;
                  endLessonHourse = timeOfLesson[5].hour;
                  break;
                case 4:
                  startLessonMinute = timeOfLesson[6].minute;
                  startLessonHourse = timeOfLesson[6].hour;
                  endLessonMinute = timeOfLesson[7].minute;
                  endLessonHourse = timeOfLesson[7].hour;
                  break;
              }
              return (
                // Белый контейнер
                <SheduleDesk>
                  {/* Желтый фон с картинкой - верхняяя панель*/}
                  <AboutLesson>
                    {/* Верхние даные о паре */}
                    <InfoLesson
                      typeLesson={typeLesson}
                      numberLesson={numberLesson}
                      timeOfLesson={timeOfLesson}
                      startLessonHourse={startLessonHourse}
                      startLessonMinute={startLessonMinute}
                      endLessonMinute={endLessonMinute}
                      endLessonHourse={endLessonHourse}
                    />
                  </AboutLesson>
                  <div className="container-botton-info">
                    <StatusLesson
                      startLessonHourse={startLessonHourse}
                      startLessonMinute={startLessonMinute}
                      endLessonMinute={endLessonMinute}
                      endLessonHourse={endLessonHourse}
                    />
                    <NameLesson
                      classRoom={classRoom}
                      teacherName={teacherName}
                      nameLesson={nameLesson}
                    />
                  </div>
                </SheduleDesk>
              );
            },
          )}
        </div>
      </div>
    </>
  );
}

export default App;
