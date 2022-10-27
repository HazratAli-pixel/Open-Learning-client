import React, { useEffect, useState } from 'react';
import { BsArrowReturnRight } from 'react-icons/bs';
import { NavLink } from 'react-router-dom';

const LeftSideBar = () => {
    // const [categorname, setCategory] = useState([]);
    const [courseName, setCourse] = useState([]);
    const [bundlecourseName, setBundleCourse] = useState([]);
    // useEffect(()=>{
    //     fetch('http://localhost:4000/category')
    //     .then(response => response.json())
    //     .then(category => {
    //         setCategory(category);
    //     })
    // },[])
    useEffect(()=>{
        fetch('http://localhost:4000/course/')
        .then(response => response.json())
        .then(course => {
            setCourse(course);
        })
    },[])
    useEffect(()=>{
        fetch('http://localhost:4000/bundle/')
        .then(response => response.json())
        .then(bundlecourse => {
            setBundleCourse(bundlecourse);
        })
    },[])
    return (
        <div className='p-2 sticky top-0'>
            <h1 className='text-2xl font-bold'>Course Name</h1>
            {
                courseName.map(info => <div className='pl-3 pt-2'><NavLink className={({ isActive }) =>
                isActive ? 'bg-black text-white p-1 flex items-center' : 'flex items-center'} to={`/courses/${info._id}`} key={info._id}><BsArrowReturnRight className='pr-1'/>{info.title}</NavLink></div>)
            }

            <h1 className='text-2xl font-bold'>Bundle Course Name</h1>
            {
                bundlecourseName.map(binfo => <div className='pl-3 pt-2'><NavLink 
                className={({ isActive }) =>
                isActive ? 'bg-black text-white p-1 flex items-center' : 'flex items-center'} 
                to={`/courses/bundle/${binfo._id}`} 
                key={binfo._id}><BsArrowReturnRight className='pr-1'/>{binfo.title}
                </NavLink></div>)
            }

            {/* <h1 className='text-2xl font-bold'>Course Category</h1>
            {
                categorname.map(info => <div className='pl-3 pt-2'><Link to={`/category/${info._id}`} key={info._id} className='hover:underline'>{info.category_name}</Link></div>)
            } */}
        </div>
    );
};

export default LeftSideBar;