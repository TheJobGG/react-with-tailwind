export default function BouncingButton() {
  return (
    <div className="animate-bounce border border-gray-500 rounded-full p-3 ">
      <svg
      className="w-6 h-6 text-violet-500"
      fill="none"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
      viewBox="0 0 24 24"
      stroke="currentColor"
    >
      <path d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
    </svg>
    </div>
  );
}
