import React from 'react';
import { Link } from 'react-router-dom';

const CourseDetails = ({course}) => {
    const {imgUrl,students, _id, title,description, duration, price} = course
    // console.log(course);
    return (
        <div className='p-4'>
            <div className="card card-compact bg-base-100 shadow-xl h-full">
                <figure className='bg-white p-2'><img className='w-full rounded-xl ' src={imgUrl} alt="Shoes" /></figure>
                <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <p className='text-start'><span className='font-extrabold'>Dureation :</span>  {duration} min</p>
                <p className='text-start'><span className='font-extrabold'>Price :</span>  {price} tk</p>
                <p className='text-start'><span className='font-extrabold'>Enroled Sudents :</span>  {students} </p>
                <div className="card-actions justify-end">
                    <Link to={`bundle/${_id}`} className="btn btn-primary hover:btn-success w-full">Details</Link>
                </div>
                </div>
            </div>
        </div>
    );
};

export default CourseDetails;