import React from "react";

const WindowFocusHandler = () => {
  const [cur, setCur] = React.useState(false);
  const [array, setArray] = React.useState<any>(1000);

  React.useEffect(() => {
    // console.log(cur);
  }, [cur]);

  React.useEffect(() => {
    console.log(array);
  }, [array]);

  document.addEventListener("selectionchange", () => {
    let cur: any = window.getSelection()?.focusOffset;
    //focusOffset
    if (cur < array) {
      setArray(cur);
    } else if (array < cur) {
      setArray(array);
    }

    //text check null

    if (document.getSelection()?.toString() === "") {
      setCur(false);
    } else {
      setCur(true);
    }
  });

  return (
    <article>
      <section
        onMouseUp={() => {
          console.log("mouse up");
          setCur(false);
        }}
      >
        <div>
          <p style={{ width: 800 }}>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </p>
        </div>
      </section>
    </article>
  );
};

export default WindowFocusHandler;
