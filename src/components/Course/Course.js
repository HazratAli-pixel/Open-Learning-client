import React from 'react';
import { Outlet, useLoaderData } from 'react-router-dom';
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
                    <Outlet></Outlet>
                </div>
            </div>
        </div>
    );
};

export default Course;