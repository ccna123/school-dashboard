import React from "react";

type Props = {
  children: React.ReactNode;
  title: string;
};

const GraphContainer: React.FC<Props> = ({ children, title }) => {
  return (
    <section className="w-full h-fit bg-white rounded-lg relative">
      <div className="flex items-center justify-between p-2 rounded-lg">
        <p className="font-bold">{title}</p>
        <img
          src="/images/moreDark.png"
          className="w-6 h-6 cursor-pointer"
          alt=""
        />
      </div>
      <div className="relative w-full h-[256px]">{children}</div>
    </section>
  );
};

export default GraphContainer;
