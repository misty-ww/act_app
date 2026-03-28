import "./infoLesson.css";

export default function InfoLesson({
  typeLesson,
  numberLesson,
  startLessonMinute,
  startLessonHourse,
  endLessonMinute,
  endLessonHourse,
}) {
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
            {startLessonHourse}:
            {startLessonMinute === 0 ? "00" : startLessonMinute} -{" "}
            {endLessonHourse}:{endLessonMinute === 0 ? "00" : endLessonMinute}
          </p>
        </div>
      </div>
    </>
  );
}
