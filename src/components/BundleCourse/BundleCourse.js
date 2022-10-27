import React, { useEffect, useState } from 'react';
import Topics from '../Topics/Topics';
const BundleCourse = () => {
    const [topics, setTopics] = useState([])
    useEffect( ()=>{
        fetch('https://assignment10-server-sable.vercel.app/bundle/')
        .then(response => response.json())
        .then(data => {
            setTopics(data);
        })
    },[])
    return (
        <div className='container mx-auto '>
            <div className='p-2'>
                    <div className='p-2'>
                    <h1 className='text-4xl font-bold text-center'>Bundle Course</h1>
                    <p className='font-bold text-center'>Courses arranged according to your choice</p>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3  gap-4'>
            {
                topics.map(data => <Topics key={data._id} bundleTopics={data}></Topics>)
            }
            </div>
        </div>
    );
};

export default BundleCourse;