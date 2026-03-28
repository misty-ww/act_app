import "./infoLesson.css";

export default function InfoLesson({ typeLesson, numberLesson, timeOfLesson }) {
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
    <>
      <div className="container-info">
        <div className="info-text">
          <p>{numberLesson}-я пара</p>
        </div>
        <div className="info-text">
          <p>{typeLesson}</p>
        </div>
        <div className="info-text">
          <p>
            {startLessonHourse}:{startLessonMinute} - {endLessonHourse}:
            {endLessonMinute}
          </p>
        </div>
      </div>
    </>
  );
}
