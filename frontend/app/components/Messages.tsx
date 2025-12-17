import { useVoice } from "@humeai/voice-react";

export default function Messages() {
  const { messages } = useVoice();

  return (
    <div>
      {messages.map((msg:any, index:number) => {
        if (msg.type === "user_message" || msg.type === "assistant_message") {
          return null;
        }

        return (
          <div key={msg.type + index}>
            <div>{msg.message.role}</div>
            <div>{msg.message.content}</div>
          </div>
        );
      })}
    </div>
  );
}
