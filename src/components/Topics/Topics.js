import React from 'react';
import { FaCheckCircle } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Topics = ({bundleTopics}) => {
  const {imgUrl,students, _id, title, content, duration, price} = bundleTopics
    return (
    <div className='p-4'>
      <div className="card card-compact bg-base-100 shadow-xl h-full">
        <figure className='bg-white p-2'><img className='w-full rounded-xl ' src={imgUrl} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p className='text-start'><span className='font-extrabold'>Dureation :</span>  {duration} min</p>
          <p className='text-start'><span className='font-extrabold'>Price :</span>  {price} tk</p>
          <p className='text-start'><span className='font-extrabold'>Enroled Sudents :</span>  {students} </p>
          <div>
            <ol className=''>  
              {
                content.map(data => <li className='flex gap-2 items-center text-lg'><FaCheckCircle/>{data}</li>)
              }
            </ol>
          </div>
          <div className="card-actions justify-end">
            <Link to={`bundle/${_id}`} className="btn btn-primary hover:btn-success w-full">Details</Link>
          </div>
        </div>
      </div>
    </div>
    );
};

export default Topics;