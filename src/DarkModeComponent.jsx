import { useState } from "react";

export default function DarkModeComponent() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <div
        className="bg-white py-5 px-10 max-w-lg dark:bg-slate-700 dark:text-white transition-all ease-out duration-250 
        rounded-tr-2xl rounded-bl-2xl rounded-tl-none rounded-br-none
        dark:rounded-tr-none dark:rounded-bl-none dark:rounded-tl-2xl dark:rounded-br-2xl"
      >
        <div className="flex items-center justify-around gap-10">
          <h2 className="text-2xl text-center">Is a dark mode?</h2>
          <span className="underline underline-offset-4">
            {darkMode ? "Yes" : "No"}
          </span>
        </div>
        <h3>Some lorem...</h3>
        <p>
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod,
          incidunt itaque nostrum nemo perferendis animi iure molestias
          excepturi reprehenderit aut!
        </p>
        <button
          onClick={() => setDarkMode(!darkMode)}
          className="bg-gray-500 text-white py-2 px-5 rounded-lg mt-5"
        >
          Toggle mode
        </button>
      </div>
    </div>
  );
}
