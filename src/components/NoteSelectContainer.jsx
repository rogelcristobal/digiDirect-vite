import React from "react";
import Scrollbar from "smooth-scrollbar";
import AddItemComponent from "./AddItemComponent";
import Item from "./Item";
const NoteSelectContainer = ({ data, loading }) => {
  const ref = React.useRef(null);
  const option = {
    damping: 0.02,
    renderByPizels: true,
  };
  React.useEffect(() => {
    if (ref.current) {
      Scrollbar.init(ref.current, option);
      Scrollbar.detachStyle();
    }
  }, [ref.current]);
  return (
    <div
      ref={ref}
      className=" pb-2 pt-4  h-screen w-full  flex flex-col items-center justify-start  px-3 "
    >
      <AddItemComponent />
      {!loading && data.map((item, id) => (
        <Item
          key={id}
          id={id}
          title={item.title}
          details={item.details}
          loading={loading}
        ></Item>
      ))}
    </div>
  );
};
{
  /* <Item
  key={id}
  id={id}
  title={item.title}
  details={item.details}
  loading={loading}
></Item> */
}

export default NoteSelectContainer;
