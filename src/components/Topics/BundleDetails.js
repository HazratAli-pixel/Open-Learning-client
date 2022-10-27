import React from 'react';
import { FaCheckCircle, FaFileDownload } from 'react-icons/fa';
import { Link, useLoaderData } from 'react-router-dom';

import Pdf from "react-to-pdf";

const ref = React.createRef();



const BundleDetails = () => {
    const loaderData = useLoaderData();
  
    const {imgUrl,students, _id, title,description, content, duration, price} = loaderData

    return (
        
        <div className="card card-compact bg-base-100 shadow-xl h-full">
            <h1 className='text-3xl text-center p-3'>{title}
            <Pdf targetRef={ref} filename={title}>
                {({ toPdf }) => <button className='pl-2' onClick={toPdf}><FaFileDownload/></button>}
            </Pdf>
            </h1>
            <div ref={ref}>
            <figure className='bg-white p-2'><img className='w-full rounded-xl h-80' src={imgUrl} alt="Shoes" /></figure>
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
                    <Link to={`../checkout/${_id}`} className="btn btn-primary hover:btn-success w-full">Get Premium Access</Link>
                </div>
            </div>
            </div>
        </div>
    );
};

export default BundleDetails;