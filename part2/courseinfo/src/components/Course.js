import React from "react";

const Course = ({ courses }) => (
    <div> 
      {courses.map(course => 
        <div key={course.id}>
          <Header course={course.name} />
          <Content parts={course.parts} />
          <Total parts={course.parts} />
        </div>
        )}
    </div>
  );
  
  const Header = ({course}) => {
    return(
      <h1>{course}</h1>
    )
  }

  const Part = ({part, exercises}) => {
    return(
      <p>
        {part} {exercises}
      </p>
    )
  }

  const Content = ({parts}) =>
  <div>
    {parts.map((part, i) =>
      <Part key={i} part={part.name} exercises={part.exercises} />
    )}
  </div>


  const Total = ({parts}) => {
    const total = parts.reduce((sum, part) => sum + part.exercises, 0)
    return (
      <p> Number of exercises {total}</p>
    )

  }
  
export default Course;