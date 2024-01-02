import React from "react";
import Angular from "./Image/angular.png";
import Bootstrap from "./Image/bs.png";
import CC from "./Image/cc.jpg";
import Komple from "./Image/komple.jpg";

const courseMap = {
  Angular: Angular,
  Bootstrap: Bootstrap,
  CC: CC,
  KompleWeb: Komple,
};

function Course({ courseName }) {
  // console.log(Angular);
  // console.log(courseName);
  console.log(courseMap[courseName]);
  return (
    <div>
      <img className="image-style" src={courseMap[courseName]} alt="" />
    </div>
  );
}

export default Course;
