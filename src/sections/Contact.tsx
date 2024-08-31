"use client";

import { useState } from "react";
import { CopyToClipboard } from "react-copy-to-clipboard";
import { Toaster, toast } from "react-hot-toast";
import Arrow from "@/assets/icons/arrow-up-right.svg";
import grain from "@/assets/images/grain.jpg";

export const ContactSection = () => {
  const [copied, setCopied] = useState(false);
  const email = "amanuelabebawfr@gmail.com";

  const handleCopy = () => {
    setCopied(true);
    toast("Email copied!", {
      icon: "🎉",
    });
  };

  return (
    <div id="contact" className="py-16 pt-12 lg:py-24 lg:pt-20">
      <Toaster position="top-center" />
      <div className="container">
        <div className="bg-gradient-to-r from-emerald-300 to-sky-400 text-gray-900 py-8 px-10 rounded-3xl text-center md:text-left relative overflow-hidden z-0">
          <div
            className="absolute inset-0 opacity-5 -z-10"
            style={{
              backgroundImage: `url(${grain.src})`,
            }}
          ></div>
          <div className="flex flex-col items-center md:flex-row gap-8 md:gap-16">
            <div>
              <h2 className="font-serif text-2xl md:text-3xl">
                Let's create something amazing together
              </h2>
              <p className="text-sm mt-2 md:text-base">
                Ready to bring your next project to life? Let's connect and
                discuss how I can help oyu achieve your goals
              </p>
            </div>
            <div>
              <CopyToClipboard text={email} onCopy={handleCopy}>
                <button className="text-white bg-gray-900 inline-flex items-center px-6 h-12 rounded-xl gap-2 w-max border border-gray-900 cursor-pointer">
                  <span className="font-semibold">
                    {copied ? "Copied!" : "Copy Email"}
                  </span>
                  <Arrow className="size-4" />
                </button>
              </CopyToClipboard>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
