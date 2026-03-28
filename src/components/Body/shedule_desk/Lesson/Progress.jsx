import { useEffect } from "react";
import "./progress.css";
import { useState } from "react";

export default function Progress({ totalStart, totalEnd }) {
  const [progressNow, setProgressNow] = useState(0);
  const [end, setEnd] = useState(false);

  const total = totalEnd - totalStart;

  function updateProgress() {
    const nowHouers = new Date().getHours();
    const nowMinutes = new Date().getMinutes();
    const totalNow = nowHouers * 60 + nowMinutes;

    // Проверка на деление на ноль
    if (total === 0) return;

    if (totalNow < totalStart) {
      setProgressNow(0);
      setEnd(false);
    } else if (totalNow > totalEnd) {
      setProgressNow(100);
      setTimeout(() => setEnd(true), 500000);
    } else {
      const elapsed = totalNow - totalStart;
      const percent = (elapsed * 100) / total;
      setProgressNow(percent);
    }
  }
  useEffect(() => {
    updateProgress();
    const timer = setInterval(updateProgress, 60000);

    return () => {
      clearInterval(timer);
    };
  }, [totalStart, totalEnd, total]);

  return (
    <>
      {!end && (
        <div className="container-progress">
          <progress
            value={progressNow}
            max={100}
            className="progress-bar"
          ></progress>
          <div className="container-progress-text">
            <span className="progress-text">Начало</span>
            <span className="progress-text">Перерыв</span>
            <span className="progress-text">Конец</span>
          </div>
        </div>
      )}
    </>
  );
}
