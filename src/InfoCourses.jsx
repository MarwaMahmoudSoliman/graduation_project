
import React from 'react';
import './Infocourses.css';
import { Card } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const InfoCourses = () => {
  const { id } = useParams();
  const { courses } = useSelector((state) => state.courses);
  console.log(courses);

  return (
    <>
      {/* <div className='courses-page'>
        <header className='height-75'>
          <div className='container h-100 d-flex flex-column align-items-center justify-content-center text-light'>
            <h1 className='text-center fw-semibold'>Our Courses</h1>
            <p className='text-center w-75 mb-5'>You can find any courses you want!</p>
          </div>
        </header>
      </div> */}
  
    <div>
      {courses.map((course) =>
        id == course.id ? (
          "True" ? (
            <div className="ind__course container d-flex flex-column ">
               
              <img className="ind__course__img" src={course.img}  />
              <span className="course__by" style={{fontFamily:"fantasy"}}> {course.title}</span>
              <div>
                <p className="course__desc">
                  Description: {course.description}
                </p>
                
              </div>
             
              <button style={{backgroundColor:"blueviolet", width:"120px" ,margin:"auto" ,marginBottom:"10px"}}>Buy Now!</button>
            </div>
          ) : (
            ""
          )
        ) : (
          ""
        )
      )}
    </div>

      
  </>
  );
}

export default InfoCourses;