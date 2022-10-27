import React from 'react';
import { FaFileDownload } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";

const ref = React.createRef();


const CourseDetails = () => {
    // const  = course
    const {imgUrl,students, _id, title,description, duration, price} = useLoaderData();
    // console.log(course);

    return (
        <div className='col-span-9 bg-slate-200'>
            <div className='p-4'>
            <h1 className='text-3xl text-center'>{title}
            <Pdf targetRef={ref} filename={title}>
                {({ toPdf }) => <button className='pl-2' onClick={toPdf}><FaFileDownload/></button>}
            </Pdf></h1>
                <div className="card card-compact bg-base-100 shadow-xl h-full" ref={ref}>
                    <figure className='bg-white p-2'><img className='w-full rounded-xl h-80' src={imgUrl} alt="Shoes" /></figure>
                    <div className="card-body">
                    <h2 className="card-title">{title}</h2>
                    <h2 className="">{description}</h2>
                    <p className='text-start'><span className='font-extrabold'>Dureation :</span>  {duration} min</p>
                    <p className='text-start'><span className='font-extrabold'>Price :</span>  {price} tk</p>
                    <p className='text-start'><span className='font-extrabold'>Enroled Sudents :</span>  {students} </p>
                    <div className="card-actions justify-end">
                        <Link to={`../checkout/${_id}`} className="btn btn-primary hover:btn-success w-full">Get Premium Access</Link>
                    </div>
                    </div>
                </div>
            </div>
        </div>


    );
};

export default CourseDetails;