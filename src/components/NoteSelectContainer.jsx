import React from "react";
import Scrollbar from "smooth-scrollbar";

const NoteSelectContainer = ({ children,deps }) => {
  const ref = React.useRef(null);
  const option={
    damping:0.02,
    renderByPizels:true
  }
  React.useEffect(() => {
    if (ref.current && !deps) {
      Scrollbar.init(ref.current,option);
      Scrollbar.detachStyle()
    }
  }, [ref.current,deps]);
  return (
    <div
      ref={ref}
      className=" pb-2 pt-0  h-screen w-full  flex flex-col items-center justify-start  px-3 "
    >
      {children}
    </div>
  );
};

export default NoteSelectContainer;
