import React from "react";
import Course from "./Course";
import { useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

function Courses({ courses, removeCourse }) {
  const [index, setIndex] = useState(0);
  const { content, title, price } = courses[index];
  console.log(index);
  const checkIndex = (index) => {
    debugger;
    if (index < 0) {
      return courses.length - 1;
    }
    // ilk elemana gecis icin
    if (index > courses.length - 1) {
      return 0;
    }
    return index;
  };

  const getRandomCourse = () => {
    //0 ile 5(courses) arasında değer döndürür tabana yuvarlamak(Math.floor) için hepsi parantez
    let randomNumber = Math.floor(Math.random() * courses.length);
    if (randomNumber === index) {
      randomNumber = index + 1;
    }
    //ayni eleman gelmemesi icin
    setIndex(checkIndex(randomNumber));
  };
  const prevCourse = () => {
    setIndex((index) => {
      let newIndex = index - 1;
      return checkIndex(newIndex);
    });
  };
  const nextCourse = () => {
    setIndex((index) => {
      let newIndex = index + 1;
      return checkIndex(newIndex);
    });
  };
  return (
    <div className="courseMainDiv">
      <div className="courseTitleAndBtn">
        <h2>Kurslarım</h2>
        <button className="cardDeleteBtn" onClick={getRandomCourse}>
          Rastgele Kurs Ata
        </button>
      </div>

      <div className="cardDiv">
        <button className="prevNextBtn" onClick={prevCourse}>
          <FaChevronLeft />
        </button>
        <div className="card">
          <div className="cardTitlePrice">
            <h2 className="cardTitle">{title}</h2>
            <h4 className="cardPrice">{price}TL</h4>
          </div>
          <p
            className="
 "
          >
            {content}
          </p>
        </div>
        <button className="prevNextBtn" onClick={nextCourse}>
          <FaChevronRight />
        </button>
        {/* {courses.map((course, i) => {
          return <Course {...course} removeOneCourse={removeCourse} />;
          // objenin icindeki tüm proprtlere erisim spread operatoru
          //tum objeyi bir alt componente gecerilebilir
          //  ile saglanabilir yazimi <Course {...course} />

          //kalsik yazim =>  <Course  course={course} key={i} />
        })} */}
      </div>
    </div>
  );
}

export default Courses;
