import React from 'react';
import { useLoaderData } from 'react-router-dom';
import CourseCart from '../CourseDetails/CourseCart';
import LeftSideBar from '../LeftSideBar/LeftSideBar';

const Course = () => {
    const course = useLoaderData()
    console.log(course);
    return (
        <div className=''>
            <div className='grid grid-cols-12'>
                <div className='col-span-3 bg-emerald-200 '>
                    <LeftSideBar></LeftSideBar>
                </div>
                <div className='col-span-9 bg-slate-200'>
                    <div className='grid grid-cols-3 gap-2'>
                    {
                        course.map(data => <CourseCart key={data._id} data={data}></CourseCart>)
                    }
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Course;