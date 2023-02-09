import "./App.css";
import { Navbar } from "./Components/Navbar";
import { Card } from "./Components/Card";
import { useState } from "react";
import { data } from "./assets";
import { Particle } from "./Components/Particle";
export const fadeIn = (direction, delay, duration, opac) => ({
  hidden: {
    x: direction === "left" ? 100 : direction === "right" ? -100 : 0,
    y: direction === "up" ? 100 : direction === "down" ? -100 : 0,
    opacity: opac || 0,
  },
  show: {
    x: 0,
    y: 0,
    opacity: 1,
    transition: {
      delay,
      duration,
      ease: "easeOut",
    },
  },
});

function App() {
  const [current, setCurrent] = useState(0);
  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  const handleMouse = (e) => {
    const mouseX = e.clientX / 2 - e.clientX;
    const mouseY = e.clientY / 2 - e.clientY;
    const rotateX = 0.05 * mouseX;
    const rotateY = 0.05 * mouseY;
    setMouse({ x: rotateX, y: rotateY });
  };
  const handleScroll = (e) => setCurrent((prev) => prev + 1);

  return (
    <div
      className="App"
      onMouseMove={handleMouse}
      onWheelCapture={handleScroll}
    >
      <Particle />
      <Navbar />
      <div className="container">
        <div className="carousel">
          {data.map((el, i) => (
            <div
              style={{
                display: i === current % data.length ? "block" : "none",
              }}
            >
              <Card
                data={el}
                s={`perspective(1000px) translateX(${mouse.x}px) translateY(${mouse.y}px)`}
                s2={`perspective(1000px) translateX(${
                  mouse.x + 10
                }px) translateY(${mouse.y - 10}px)`}
              />
            </div>
          ))}
        </div>
      </div>
      <div className="scrollbe">
        <div>
          <span>
            <svg
              width="14"
              height="7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              class="circle_indicator__arrow"
              data-v-d5c3af2e=""
            >
              <path
                d="M12.766 1.383L8.919 5.229 5.816 5.2 2 1.383"
                stroke="#fff"
                stroke-width="3"
              ></path>
            </svg>
          </span>
        </div>
        <div>Scroll to explore the collections</div>
      </div>
      <div className="footer">
        {data.map((el, i) => (
          <div key={el.name}>
            {i === current % data.length ? (
              <div className="footerName">
                <div></div>
                <div>{el.name}</div>
              </div>
            ) : (
              <div className="footerBlank"> </div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default App;
