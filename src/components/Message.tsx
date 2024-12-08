import { CheckCheck } from "lucide-react";
import React from "react";

type Props = {
  message: string;
};

const Message = ({ message }: Props) => {
  const currentTime = new Date().toLocaleTimeString();
  return <div className="bg-[#ebdada] w-fit h-[40px] flex items-center rounded-lg rounded-tl-none text-black px-6 gap-5">
    {message}
    <div>
      <CheckCheck size={12} />
    </div>
  </div>;
};

export default Message;
