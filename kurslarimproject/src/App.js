import { useEffect, useState } from "react";
import "./App.css";
import axios from "axios";
import Courses from "./Courses";
import Loading from "./Loading";
function App() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(true);
  const fetchCourses = async () => {
    setLoading(true);
    try {
      //
      const response = await axios.get("http://localhost:3004/courses");
      setCourses(response.data);
      // 5 data çekimi bitince false
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }

    debugger;
  };

  const deleteCourse = (id) => {
    const afterDeleteCourse = courses.filter((course) => course.id !== id);
    setCourses(afterDeleteCourse);
  };
  useEffect(() => {
    fetchCourses();
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Loading />
      ) : (
        <>
          {courses.length === 0 ? (
            <div className="refreshDiv">
              <h2>Kurslarin hepsini sildin!</h2>
              <button
                className="cardDeleteBtn"
                onClick={() => {
                  fetchCourses();
                }}
              >
                Yenile
              </button>
            </div>
          ) : (
            <Courses courses={courses} removeCourse={deleteCourse} />
          )}
        </>
      )}
    </div>
  );
}

export default App;
