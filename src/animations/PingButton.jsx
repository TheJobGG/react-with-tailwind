export default function PingButton() {
  return (
    <div className="relative">
      <button
        className="
      text-sky-400 
      bg-gray-700 
      py-3 px-5 
      transition-all
      rounded-lg border border-transparent 
      hover:bg-black 
      hover:border hover:border-white"
      >
        New Message
      </button>
      <div className="absolute -top-2 right-[-6px]">
        <span className="flex h-3 w-3 relative">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
          <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
        </span>
      </div>
    </div>
  );
}
