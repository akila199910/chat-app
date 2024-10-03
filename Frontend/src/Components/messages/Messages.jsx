import useGetMessages from "../../hook/useGetMessages";
import MessageSkeleton from "../skeleton/messageSkeleton";
import Message from "./Message";

const Messages = () => {
  const {messages, loading}= useGetMessages();
  return (
    <div className=" px-4 flex-1 overflow-auto">
          {!loading && messages.length > 0 && messages.map((message) => <Message key={message._id} message={message} />) }
      {loading && [...Array(3)].map((_, index) => <MessageSkeleton key={index} />)}
      {!loading && messages.length === 0 && (
        <p className="text-center">Send a message to start the conversation</p>
      )}
    </div>
  );
};

export default Messages;
