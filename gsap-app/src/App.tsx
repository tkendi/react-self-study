import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "./App.css";

function Box({ children }: any) {
  return <div className="box">{children}</div>;
}

function Container({ children }: any) {
  return (
    <div>
      <Box>Nested Box</Box>
    </div>
  );
}

const App = () => {
  // const el = useRef() as any;
  // const q = gsap.utils.selector(el);

  useEffect(() => {
    gsap.to(q(".box"), {
      x: 100,
      stagger: 0.33,
      repeat: -1,
      repeatDelay: 1,
      yoyo: true,
    });
  });

  return (
    <div className="app">
      <Box>Box</Box>
      <Container />
      <Box>Box</Box>
    </div>
  );
};

export default App;
