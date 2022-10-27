import React, { useEffect, useState } from 'react';
import SingleCourse from './SingleCourse';

const CourseCart = () => {
    const [course, setCourse] = useState([])
    useEffect( ()=>{
        fetch('http://localhost:4000/course/')
        .then(response => response.json())
        .then(data => {
            setCourse(data);
        })
    },[])
    return (
        <div className='grid grid-cols-3 gap-2'>
            {
                course.map(data=> <SingleCourse key={data._id} data={data}></SingleCourse>)
            }
    </div>
    );
};

export default CourseCart;