import React from "react";

type Props = {
  children: React.ReactNode;
};

const ModalContainer: React.FC<Props> = ({ children }) => {
  return (
    <div className="absolute w-screen h-screen bg-black bg-opacity-55 z-50 top-0 left-0 flex items-center justify-center">
      <div className="bg-white p-5 rounded-lg w-[50%]">{children}</div>
    </div>
  );
};

export default ModalContainer;
