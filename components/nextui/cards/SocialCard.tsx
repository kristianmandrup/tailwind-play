import React from "react";

import domRepProperty from "../../resources/images/domrep.png";

var bgStyle = {
  background: "url(" + { domRepProperty } + ") center; background-size: cover;",
};

type CardWithBackgroundProps = {
  title: string;
  subtitle: string;
  date: string;
  name: string;
  badgeLabel: string;
  thumbsUp: number;
};

export const CardWithBackground: React.FC<CardWithBackgroundProps> = ({
  title,
  subtitle,
  date,
  badgeLabel,
  name,
  thumbsUp,
}) => {
  return (
    <>
      <div className="mb-3">
        <h1 className="text-3xl font-bold">{date}</h1>
        <p className="text-sm text-gray-500 uppercase font-bold">{title}</p>
      </div>
      <div className="mb-5">
        <a
          href="#"
          className="block rounded-lg relative p-5 transform transition-all duration-300 scale-100 hover:scale-95"
          style={bgStyle}
        >
          <div className="absolute top-0 right-0 -mt-3 mr-3">
            <div className="rounded-full bg-indigo-500 text-white text-xs py-1 pl-2 pr-3 leading-none">
              <i className="mdi mdi-fire text-base align-middle"></i>{" "}
              <span className="align-middle">{badgeLabel}</span>
            </div>
          </div>
          <div className="h-48"></div>
          <h2 className="text-white text-2xl font-bold leading-tight mb-3 pr-5">
            {subtitle}
          </h2>
          <div className="flex w-full items-center text-sm text-gray-300 font-medium">
            <div className="flex-1 flex items-center">
              <div className="rounded-full w-8 h-8 mr-3" style={bgStyle}></div>
              <div>{name}</div>
            </div>
            <div>
              <i className="mdi mdi-thumb-up"></i> {thumbsUp}
            </div>
          </div>
        </a>
      </div>
    </>
  );
};
