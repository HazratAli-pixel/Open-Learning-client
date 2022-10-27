import React, { useEffect, useState } from 'react';

const LeftSideBar = () => {
    const [categorname, setCategory] = useState([]);
    useEffect(()=>{
        fetch('http://localhost:4000/category')
        .then(response => response.json())
        .then(data => {
            setCategory(data);
        })
    },[])
    return (
        <div className='p-2 sticky top-0'>
            <h1 className='text-2xl'>Course Category</h1>
            {
                categorname.map(info => <h1>{info.category_name}</h1>)
            }
        </div>
    );
};

export default LeftSideBar;