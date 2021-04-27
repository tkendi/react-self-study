import React, { useEffect } from "react";

// User has switched back to the tab
const onFocus = () => {
  console.log("Tab is in focus");
};

// User has switched away from the tab (AKA tab is hidden)
const onBlur = () => {
  console.log("Tab is blurred");
};

const scrollToRef = (ref: any) => window.scrollTo(0, ref.current.offsetTop);

const WindowFocusHandler = () => {
  //   useEffect(() => {
  //     window.addEventListener('focus', onFocus);
  //     window.addEventListener('blur', onBlur);
  //     // Specify how to clean up after this effect:
  //     return () => {
  //       window.removeEventListener('focus', onFocus);
  //       window.removeEventListener('blur', onBlur);
  //     };
  //   });

  const myRef = React.useRef(null);
  const executeScroll = () => scrollToRef(myRef);

  const handleScroll = (e: any) => {
    // const scrollTop = ("scroll", e.srcElement.scrollingElement.scrollTop);
    // console.log(scrollTop);
    console.log(e);
  };

  React.useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    window.removeEventListener("scroll", handleScroll);
    return () => {
      window.addEventListener("scroll", handleScroll);
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div
      style={{ height: 300, width: 300, overflow: "scroll" }}
      onScroll={handleScroll}
    >
      <div ref={myRef}>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </div>
      <button onClick={executeScroll}> Click to scroll </button>
    </div>
  );
};

export default WindowFocusHandler;
