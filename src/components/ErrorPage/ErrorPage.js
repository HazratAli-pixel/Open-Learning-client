import React from 'react';
import Header from '../Header/Header';

const ErrorPage = () => {
    return (
        <div>
            <Header></Header>
            <h1 className='h1'>404!!!</h1>
            <h1 className='h1'>URL not found</h1>
        </div>
    );
};

export default ErrorPage;