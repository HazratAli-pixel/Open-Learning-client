import React from 'react';

const Course = () => {
    return (
        <div className=''>
            <div className='grid grid-cols-12 gap-3'>
                <div className='col-span-3 bg-slate-500'>
                    <h1>this is left side</h1>
                </div>
                <div className='col-span-9 bg-orange-300'>
                    <h1>this details part</h1>
                </div>
            </div>
        </div>
    );
};

export default Course;