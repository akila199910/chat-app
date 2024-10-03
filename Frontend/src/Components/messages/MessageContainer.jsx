import { TbMessage2Plus } from "react-icons/tb";
import MessageInput from "./MessageInput";
import Messages from "./Messages";
import useConversation from "../../Zustend/useConversation";
import { useEffect } from "react";

const MessageContainer = () => {
  const { selectedConversation, setSelectedConversation } = useConversation();
  useEffect(() => {
    return () => {
      setSelectedConversation(null);
    };
  }, [setSelectedConversation]);
  return (
    <div className=" md:min-w-[450px] flex flex-col">
      {!selectedConversation ? (
        <NoChatSelected />
      ) : (
        <>
          <div className=" bg-slate-500 px-4 py-2 mb-2">
            <span className=" label-text">To:</span>
            <span className=" text-gray-900 font-bold">{selectedConversation.fullName}</span>
          </div>
          <Messages />
          <MessageInput />
        </>
      )}
    </div>
  );
};

export default MessageContainer;

const NoChatSelected = () => {
  return (
    <div className="flex items-center justify-center w-full h-full">
      <div className="px-4 text-center sm:text-lg md:text-xl text-gray-200 font-semibold flex flex-col items-center gap-2">
        <p>Welcome Akila Umayanga</p>
        <p>Select a chat to start messaging</p>
        <TbMessage2Plus className="text text-3xl md:text-6xl text-center" />
      </div>
    </div>
  );
};
// import MessageInput from "./MessageInput";
// import Messages from "./Messages";

// const MessageContainer = () => {
//   return (
//     <div className=" md:min-w-[450px] flex flex-col">
//       <>
//         <div className=" bg-slate-500 px-4 py-2 mb-2">
//           <span className=" label-text">To:</span>
//           <span className=" text-gray-900 font-bold">Akila Umayanga</span>
//         </div>
//         <Messages/>
//         <MessageInput/>
//       </>
//     </div>
//   );
// };

// export default MessageContainer;
