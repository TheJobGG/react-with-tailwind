import { useState, useEffect } from "react";
import unknownUser from "./assets/unknown-user.webp";

export default function InfoMessge({ nameUser, role, srcImg, altImg }) {
  const [importedImage, setImportedImage] = useState(null);
  useEffect(() => {
    (async () => {
      const image = await import(/* @vite-ignore */srcImg);
      setImportedImage(image.default);
    })();
  }, []);

  return (
    <div className="mx-auto max-w-md bg-white flex px-8 py-4 rounded-xl">
      <div className="pr-7">
        <img
          src={importedImage}
          onError={({ currentTarget }) => {
            currentTarget.onerror = null; // prevents looping
            currentTarget.src = unknownUser;
          }}
          alt={altImg}
          className=" w-28 h-28 rounded-full object-cover"
        />
      </div>
      <div className="space-y-0.5">
        <h3 className="text-xl font-medium">{nameUser}</h3>
        <p className="text-lg font-medium text-gray-700">{role}</p>
        <button className="px-4 py-1 text-sm text-purple-600 font-semibold rounded-full border border-purple-200 hover:text-white hover:bg-purple-600 hover:border-transparent focus:outline-none focus:ring-2 focus:ring-purple-600 focus:ring-offset-2">
          Message
        </button>
      </div>
    </div>
  );
}
