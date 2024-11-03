import React from "react";
import { useSpring, animated } from "react-spring";
import "../css/ImageHover.css";

const trans = (x, y, s) =>
  `perspective(600px) rotateX(${x}deg) rotateY(${y}deg) scale(${s})`;

const calc = (x, y) => {
  const BUFFER = 50;
  return [-(y / 50), x / 50, 1];
};

export default function Hover({ imageUrl }) {
  const [props, set] = useSpring(() => ({
    xys: [0, 0, 1],
    config: { mass: 5, tension: 350, friction: 40 }
  }));

  return (
    <div className="Apps mt-5 max-md:hidden ">
      <animated.div
        className="card"
        onMouseMove={e => {
          const { clientX: x, clientY: y } = e;
          return set({ xys: calc(x, y) });
        }}
        onMouseLeave={() => set({ xys: [0, 0, 1] })}
        style={{
          transform: props.xys.interpolate(trans),
          backgroundImage: `url(${imageUrl})`
        }}
      />
    </div>
  );
}
