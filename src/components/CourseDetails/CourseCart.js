import React from 'react';
import { Link } from 'react-router-dom';

const CourseCart = ({data}) => {
    console.log(data);
    return (
        <div className='p-4'>
        <div className="card card-compact bg-base-100 shadow-xl h-full">
            <figure className='bg-white p-2'><img className='w-full rounded-xl ' src='https://hazratinfo.com/assingment10/course/1.jpeg' alt="Shoes" /></figure>
            <div className="card-body">
            <h2 className="card-title">{data.title}</h2>
            <h2 className="">{data.description.slice(0,150)}...</h2>
            <p className='text-start'><span className='font-extrabold'>Dureation :</span>  {data.duration} min</p>
            <p className='text-start'><span className='font-extrabold'>Price :</span>  {data.price} tk</p>
            <p className='text-start'><span className='font-extrabold'>Enroled Sudents :</span>  {data.students} </p>
            <div className="card-actions justify-end">
                <Link to={`bundle/${data._id}`} className="btn btn-primary hover:btn-success w-full">Details</Link>
            </div>
            </div>
        </div>
    </div>
    );
};

export default CourseCart;