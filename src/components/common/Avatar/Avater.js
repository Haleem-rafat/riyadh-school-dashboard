import React from "react";

const Avatar = ({ name, className }) => {
  const stringToColor = function (str) {
    let hash = 0;
    for (let i = 0; i < str?.length; i++)
      hash = str.charCodeAt(i) + ((hash << 5) - hash);
    let colour = "#";
    for (let i = 0; i < 3; i++) {
      let value = (hash >> (i * 16)) & 0xffffff;
      colour += value.toString(16).substring(0, 4);
    }
    return colour;
  };
  const backgroundColor = stringToColor(name?.substring(0, 8).toUpperCase());
  var aRgbHex = backgroundColor.match(/.{1,2}/g);
  var cOne = parseInt(aRgbHex[1], 16);
  var cTwo = parseInt(aRgbHex[2], 16);
  var cThree = parseInt(aRgbHex[3], 16);
  var totalColorsBg = `rgba(${cOne},${cTwo}, ${cThree}, 0.2)`;
  var totalColorstx = `rgba(${cOne},${cTwo}, ${cThree})`;

  return (
    <div
      style={{
        backgroundColor: totalColorsBg,
        color: totalColorstx,
      }}
      className={` ${className} rounded-full flex justify-center items-center `}
    >
      {name?.split(" ")[1]?.substring(0, 1).toUpperCase() === undefined
        ? name?.split(" ")[0].substring(0, 1).toUpperCase()
        : name?.split(" ")[0]?.substring(0, 1).toUpperCase() +
          name?.split(" ")[1]?.substring(0, 1).toUpperCase()}
    </div>
  );
};

export default Avatar;
