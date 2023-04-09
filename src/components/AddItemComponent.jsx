import React from "react";
import { TbPlus } from "react-icons/tb";
import { useDocument } from "react-firebase-hooks/firestore";
import { db } from "../firebase/firebase";
import { collection } from "firebase/firestore";
const AddItemComponent = () => {

  const dataInput = {
    title: "USPS contact local post",
    details: `Thanks for your email.
​<br /><br />
I apologize for the inconvenience caused. 
<br /><br />
When I checked, your order was shipped out on the 18th of February 2023. 
<br /><br />
Please allow 3-7 working days for the delivery. 
<br /><br />
It is expected to be delivered on or before the 1st of March 2023 through your local post.
<br /><br />
Your USPS tracking number is: 9274890313101106940550
<br /><br />
You may also contact your local post office about the delivery status of your order. 
<br /><br />
If you have any further questions, please don't hesitate to contact us again.
`,
  };
    const query = collection(db, "my-notes");

  const [snapshot, loading, error] = useDocument(db, query);

  console.log(snapshot)

  return (
    <div
      // onClick={handleOnClick}
      className={` cursor-pointer px-5 rounded-xl mb-3.5 w-full text-[#dadada]/30 bg-[#101213] hover:bg-[#1a1c1e] h-fit py-6 flex-shrink-0 flex  items-center justify-start gap-3`}
    >
      <TbPlus className="text-2xl " />
      Add new item
    </div>
  );
};

export default AddItemComponent;
