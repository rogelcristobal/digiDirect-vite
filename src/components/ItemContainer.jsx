import React from "react";
import Item from "./Item";
import Scrollbar from "smooth-scrollbar";
import OverscrollPlugin from "smooth-scrollbar/plugins/overscroll";
import Searchbar from "./Searchbar";
const ItemContainer = ({ state }) => {
  const ref = React.useRef(null);
  
  const [sample, setSample] = React.useState(0);
  React.useEffect(() => {
    if (ref.current) {
      const scrollbar = Scrollbar.init(ref.current, {
        // thumbMinSize:0,
        damping: 0.04,
      });

      Scrollbar.detachStyle();

      //   scrollbar.attachStyle(myStyles);
    }
    // return () => {
    //   if (ref.current) {
    //     Scrollbar.detachStyle();
    //   }
    // };
  }, [ref]);
const text = `Hi Kelly,\n
Thank you for your email.\n
Would you be kind to tell us the reason why do you want to return the product?\n
This is for documentation purposes.\n
We look forward to your reply.\n
If you have any further questions, please don't hesitate to contact us again.`;

  return (
    <div
      // ref={ref}
      className="flex flex-col font-inter  h-[100%] w-full  items-start justify-start  py-2 "
    >
      {/* <Searchbar></Searchbar> */}
      <div
        ref={ref}
        className="flex flex-col mt-3 pt-6 items-start h-[100%] justify-start "
      >
        {/* <div className=" h-full my-2.5 w-[35rem]">
          <p className="text-liberationMono mb-6 text-[0.9rem] font-semibold">RETURN PRODUCT - ASK REASON</p>
          <div className="bg-[#f5f5f5] h-fit py-4 px-4 text-gray-400 w-full">
            <p className="font-liberationRegular tracking-tight text-[0.8rem] " dangerouslySetInnerHTML={{ __html: text.replace(/\n/g, '<br>') }}>
              
            </p>
          </div>
          
        </div> */}
      

        
      </div>
    </div>
  );
};

export default ItemContainer;
