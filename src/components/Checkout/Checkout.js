import React from 'react';
import { FaFileDownload } from 'react-icons/fa';
import { useLoaderData } from 'react-router-dom';
import Pdf from "react-to-pdf";
import RightSideBar from '../RightSideBar/RightSideBar';

const ref = React.createRef();

const Checkout = () => {
    const data = useLoaderData()
    console.log(data);
    return (
        <div className=''>
            <div className='grid grid-cols-12'>
                <div className='col-span-12 sm:col-span-12 md:col-span-8 p-2 lg:col-span-9 bg-slate-200'>
                    
                    <div className='p-4'>
                    <h1 className='text-3xl text-center'>{data.title}
                   </h1>
                        <div className="card card-compact bg-base-100 shadow-xl h-full" ref={ref}>
                            
                            <figure className='bg-white p-2'><img className='w-full rounded-xl h-80' src={data.imgUrl} alt="Shoes" /></figure>
                            <div className="card-body">
                            <h2 className="card-title">{data.title}</h2>
                            <h2 className="">{data?.description}</h2>
                            <p className='text-start'><span className='font-extrabold'>Dureation :</span>  {data.duration} min</p>
                            <p className='text-start'><span className='font-extrabold'>Price :</span>  {data.price} tk</p>
                            </div>
                        </div>
                    </div>
                    <div className='flex justify-center'>
                        <Pdf targetRef={ref} filename={data.title}>
                            {({ toPdf }) => <button className='pl-2 btn btn-primary' onClick={toPdf}><FaFileDownload className=''/> Download and Print</button>}
                        </Pdf>
                    </div>
                </div>
                <div className='col-span-12 sm:col-span-12 md:col-span-4 lg:col-span-3 p-2 bg-emerald-200 '>
                    <RightSideBar></RightSideBar>
                </div>
            </div>
        </div>
    );
};

export default Checkout;