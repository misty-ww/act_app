import "./tag.css";

export default function Tag({ text }) {
  return (
    <div className="container-tag">
      <span>{text}</span>
      <img src="shedule/main-app/tags/X.svg" alt="#" />
    </div>
  );
}
