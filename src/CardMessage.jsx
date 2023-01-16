import ChitChat from "./assets/ChitChat.svg";

export default function CardMessage() {
  return (
    <div className="w-[80vw] mx-auto bg-white rounded-xl flex items-center max-w-md my-2">
      <div className="p-5">
        <img src={ChitChat} alt="ChitChat logo" className="w-14" />
      </div>
      <div>
        <h3 className="text-xl font-medium">ChitChat</h3>
        <p className="text-gray-600">You have a new message</p>
      </div>
    </div>
  );
}
