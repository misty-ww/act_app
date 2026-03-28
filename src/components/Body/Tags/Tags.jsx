import "./tags.css";
import ReversMenuTag from "../Tag/ReversMenuTag";
export default function Tags({ children }) {
  return (
    <div className="container-tags">
      <ReversMenuTag />
      {children}
    </div>
  );
}
