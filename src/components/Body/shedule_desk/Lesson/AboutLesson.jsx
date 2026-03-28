import "./aboutLesson.css";

export default function AboutLesson({ children }) {
  return (
    <div className="container-about-lesson">
      <div className="picture">
        <img
          src="shedule/main-app/shedule-desk/shedule_picture.svg"
          alt="img"
        />
      </div>
      <div className="info-blocks">{children}</div>
    </div>
  );
}
