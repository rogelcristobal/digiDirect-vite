import React from "react";
import Item from "./Item";
import Scrollbar from "smooth-scrollbar";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";

const ItemContainer = ({ state }) => {
  const ref = React.useRef(null);
  const [sample, setSample] = React.useState(0);
  React.useEffect(() => {
    if (ref.current) {
      const scrollbar = Scrollbar.init(ref.current, {
        // thumbMinSize:0,
        damping: 0.04,
      });
      const myStyles = `
       .scrollbar-track {
            background-color: red;
        }
      `;
      Scrollbar.detachStyle();

      //   scrollbar.attachStyle(myStyles);
    }
    // return () => {
    //   if (ref.current) {
    //     Scrollbar.detachStyle();
    //   }
    // };
  }, [ref]);
  return (
    <div
      ref={ref}
      className="flex flex-col font-plus  h-[80%] w-fit pr-6 mt-2 items-start justify-start  py-2 "
    >
      {state.sections.map((item, id) => (
        <Item key={id} item={item}></Item>
      ))}
      {/* <Item item={state.sections[0]}></Item>
      <Item item={state.sections[1]}></Item>
      <Item item={state.sections[2]}></Item> */}
    </div>
  );
};

export default ItemContainer;
