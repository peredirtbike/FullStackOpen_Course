import React from "react";

const Course = ({ course }) => (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
      <Total parts={course.parts} />
    </>
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

  const Content = ({parts}) => {
    return(
      <div>
        <Part part={parts[0].name} exercises={parts[0].exercises} />
        <Part part={parts[1].name} exercises={parts[1].exercises} />
        <Part part={parts[2].name} exercises={parts[2].exercises} />
      </div>
    )
  }

  const Total = ({parts}) => {
    return(
      <p>Number of exercises {parts[0].exercises + parts[1].exercises + parts[2].exercises}</p>
    )
  }

export default Course;