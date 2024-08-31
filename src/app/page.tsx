"use client";

import Link from "next/link";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Toaster, toast } from "react-hot-toast";

export default function Welcome() {
  const text1 = "aman_z445";
  const text2 = "amanz445";

  const handleCopy = () => {
    toast.success("username copied!");
  };

  return (
    <div className="h-screen w-[100vw] flex items-center justify-center bg-gray-900 text-white">
      <div className="container font-sans">
        <Toaster position="top-center" />
        <div className="text-center">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold mb-6">
            Welcome 👋
          </h1>
          <div className="text-gray-200 tracking-wider font-sans text-base md:text-lg mb-6">
            Just wanted to tell you that you can find me on all social media
            using
            <div className="flex items-center gap-2 justify-center mt-2">
              👉
              <div>
                <CopyToClipboard text={text1} onCopy={handleCopy}>
                  <button className="text-white tracking-tight font-bold hover:underline transition-all">
                    aman_z445
                  </button>
                </CopyToClipboard>
              </div>
              👈 and 👉
              <div>
                <CopyToClipboard text={text2} onCopy={handleCopy}>
                  <button className="text-white tracking-tight font-bold hover:underline transition-all">
                    amanz445
                  </button>
                </CopyToClipboard>
              </div>
              👈
            </div>
          </div>
          <Link
            className="cursor-pointer transition-all bg-white text-gray-900 font-medium px-6 py-2 rounded-lg
border-gray-400
border-b-[4px] hover:brightness-110 hover:-translate-y-[1px] hover:border-b-[6px]
active:border-b-[2px] active:brightness-90 active:translate-y-[2px] mt-4"
            href="/home"
          >
            Go to Portfolio
          </Link>
          <p className="text-gray-400 tracking-normal font-sans text-sm md:text-base mt-5">
            Hint: You can click the usernames to copy them.👆
          </p>
        </div>
      </div>
    </div>
  );
}
