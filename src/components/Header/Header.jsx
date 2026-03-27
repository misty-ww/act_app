import "./header.css";

export default function Header() {
  return (
    <>
      <div className="container-header">
        <div className="header-menu">
          <div className="header-menu-bg">
            <img
              className="header-menu-img"
              src="shedule/header/header-menu.svg"
              alt="img"
            />
          </div>
          <div className="container-right-menu">
            <div className="header-notice-bg">
              <div className="notice-count">
                <span>2</span>
              </div>
              <img
                className="header-notice-img"
                src="shedule/header/notice-header.svg"
                alt="img"
              />
            </div>
            <div className="ava-bg-gradient">
              <div className="header-ava-bg">
                <img
                  className="header-ava-img"
                  src="shedule/header/example_ava.svg"
                  alt="img"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
