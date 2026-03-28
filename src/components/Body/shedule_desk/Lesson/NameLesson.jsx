import "./nameLesson.css";

export default function NameLesson({ classRoom, teacherName, nameLesson }) {
  return (
    <div className="container-name-lesson">
      <div className="name-lesson">
        <span>{nameLesson}</span>
      </div>
      <div className="container-classroom-teacher">
        <span className="classroom">{classRoom} каб.</span>
        <span className="teacher">{teacherName}</span>
      </div>
    </div>
  );
}
