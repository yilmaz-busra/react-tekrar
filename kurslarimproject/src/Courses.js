import React from "react";
import Course from "./Course";
function Courses({ courses, removeCourse }) {
  return (
    <div className="courseMainDiv">
      <div>
        <h2>Kurslarım</h2>
      </div>

      <div className="cardDiv">
        {courses.map((course, i) => {
          return <Course {...course} removeOneCourse={removeCourse} />;
          // objenin icindeki tüm proprtlere erisim spread operatoru
          //tum objeyi bir alt componente gecerilebilir
          //  ile saglanabilir yazimi <Course {...course} />

          //kalsik yazim =>  <Course  course={course} key={i} />
        })}
      </div>
    </div>
  );
}

export default Courses;
