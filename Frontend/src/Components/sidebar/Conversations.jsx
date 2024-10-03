import useGetConversations from "../../hook/useGetConversations";
import { getRandomEmoji } from "../../utils/emojis";
import Conversation from "./Conversation";

const Conversations = () => {
  const { loading, conversation } = useGetConversations();

  return (
    <div className=" py-2 flex flex-col overflow-auto">
      {loading ? (
        <div className="loading loading-spinner"></div>
      ) : (
        conversation.map((conversation, index) => (
          <Conversation
            key={conversation._id}
            conversation={conversation}
            emoji={getRandomEmoji()}
            lastindex={index === conversation.length - 1}
          />
        ))
      )}
    </div>
  );
};

export default Conversations;

// import Conversation from "./Conversation";

// const Conversations = () => {
//   return (
//     <div className=" py-2 flex flex-col overflow-auto">
//       <Conversation />
//       <Conversation />
//       <Conversation />
//       <Conversation />
//       <Conversation />
//     </div>
//   );
// };

// export default Conversations;
