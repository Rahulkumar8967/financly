// eslint-disable-next-line no-unused-vars
import React from "react";

function Loader() {
  return (
    <div
      className="fixed inset-0 flex justify-center items-center bg-white"
      style={{
        animation: "lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite",
      }}
    >
      <div className="relative w-20 h-20">
        <div
          className="absolute border-4 border-blue-500 rounded-full"
          style={{
            animation: "lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite",
          }}
        ></div>
        <div
          className="absolute border-4 border-blue-500 rounded-full"
          style={{
            animation: "lds-ripple 1s cubic-bezier(0, 0.2, 0.8, 1) infinite",
            animationDelay: "-0.5s",
          }}
        ></div>
      </div>
    </div>
  );
}

export default Loader;

const styles = `
@keyframes lds-ripple {
  0% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  4.9% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 0;
  }
  5% {
    top: 36px;
    left: 36px;
    width: 0;
    height: 0;
    opacity: 1;
  }
  100% {
    top: 0px;
    left: 0px;
    width: 72px;
    height: 72px;
    opacity: 0;
  }
}
`;

// Injecting custom keyframes
const styleSheet = document.styleSheets[0];
styleSheet.insertRule(styles, styleSheet.cssRules.length);
