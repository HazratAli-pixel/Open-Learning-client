import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

const BundleDetails = () => {
    const loaderData = useLoaderData();
  
    const {imgUrl,students, _id, title,description, content, duration, price} = loaderData

    return (
        <div className="card card-compact bg-base-100 shadow-xl h-full">
            <figure className='bg-white p-2'><img className='w-full rounded-xl ' src={imgUrl} alt="Shoes" /></figure>
            <div className="card-body">
                <h2 className="card-title">{title}</h2>
                <h2 className="">{description}</h2>
                <p className='text-start'><span className='font-extrabold'>Dureation :</span>  {duration} min</p>
                <p className='text-start'><span className='font-extrabold'>Price :</span>  {price} tk</p>
                <p className='text-start'><span className='font-extrabold'>Enroled Sudents :</span>  {students} </p>
                <div>
                    <ol className=''>  
                    {
                        content.map(data => <li key={data} className='flex gap-2 items-center text-lg'><FaCheckCircle/>{data}</li>)
                    }
                    </ol>
                </div>
                <div className="card-actions justify-end">
                    <Link to={`bundle/${_id}`} className="btn btn-primary hover:btn-success w-full">Buy this</Link>
                </div>
            </div>
        </div>
    );
};

export default BundleDetails;