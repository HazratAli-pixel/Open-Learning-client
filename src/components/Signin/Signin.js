import React from 'react';

const Signin = () => {
    return (
        <div className='flex justify-center items-center'>
            <div className='bg-slate-400 rounded-lg'>
                <h1 className='text-3xl text-white'>Login</h1>
                <div>
                    <label htmlFor="Email"></label>
                    <input type="text" id='Email' placeholder='Email'  />
                </div>
            </div>
        </div>
    );
};

export default Signin;