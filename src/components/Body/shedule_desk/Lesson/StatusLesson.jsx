import { useEffect, useState } from "react";
import "./statusLesson.css";

export default function StatusLesson({ totalStart, totalEnd }) {
  const [status, setStatus] = useState(null);
  let text;
  function checkStatus() {
    const nowHourse = new Date().getHours();
    const nowMinute = new Date().getMinutes();
    const now = nowMinute + nowHourse * 60;
    if (now >= totalStart && now <= totalEnd) {
      setStatus("inProgress");
    } else if (now < totalStart) {
      setStatus("none");
    } else {
      setStatus("ended");
    }
  }
  useEffect(() => {
    checkStatus();
    const timer = setInterval(checkStatus, 100000);

    return () => {
      clearInterval(timer);
    };
  }, [totalStart, totalEnd]);
  switch (status) {
    case "none":
      text = "Занятие не началось";
      break;
    case "inProgress":
      text = "Занятие идет";
      break;
    case "ended":
      text = "Занятие закончилось";
      break;
    default:
      text = "Загрузка";
  }
  return (
    <>
      <div className="container-status">
        <div className={`point ${status}-point`}></div>
        <div className={`text ${status}-text`}>{text}</div>
      </div>
    </>
  );
}
