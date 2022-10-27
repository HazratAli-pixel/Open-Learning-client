import React, { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';

const LeftSideBar = () => {
    const [categorname, setCategory] = useState([]);
    const [courseName, setCourse] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:4000/category')
        .then(response => response.json())
        .then(category => {
            setCategory(category);
        })
    },[])
    useEffect(()=>{
        fetch('http://localhost:4000/course/')
        .then(response => response.json())
        .then(course => {
            setCourse(course);
        })
    },[])
    return (
        <div className='p-2 sticky top-0'>
            <h1 className='text-2xl'>Course Name</h1>
            {
                courseName.map(info => <div><NavLink className={({ isActive }) =>
                isActive ? 'bg-green-400 text-black' : undefined} to={`/courses/${info._id}`} key={info._id}>{info.title}</NavLink></div>)
            }
            <h1 className='text-2xl'>Course Category</h1>
            {
                categorname.map(info => <div><Link to={`/category/${info._id}`} key={info._id} className='hover:underline'>{info.category_name}</Link></div>)
            }
        </div>
    );
};

export default LeftSideBar;