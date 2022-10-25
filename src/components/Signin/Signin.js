import React from 'react';
import { AiFillGoogleCircle } from 'react-icons/ai';
import { FaFacebook, FaGithub } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const Signin = () => {
    return (
        <div className='flex justify-center flex-col items-center pt-28'>
            <div className='bg-slate-400 rounded-lg p-4 sm:w-full md:w-1/2 lg:w-1/3 drop-shadow-xl '>
                <form >
                    <div className=''>
                        <h1 className='text-3xl text-center text-white font-bold'>Log in</h1>
                        <div className="form-control ">
                            <label className="label">
                                <span className="label-text font-bold">Your Email</span>
                            </label>
                            <label className="form-control">
                                <input type="text" placeholder="abc@mail.com" className="input input-bordered" />
                            </label>
                        </div>
                        <div className="form-control pt-4 ">
                            <label className="font-bold">
                                <span className="label-text">Your Password</span>
                            </label>
                            <label className="form-control">
                                <input type="password" placeholder='*******' className="input input-bordered" />
                            </label>
                        </div>
                        <br />
                        <hr />
                        <br />
                        <button type='submit' className='btn btn-primary w-full'>Log in</button>
                        <p className='py-4 text-white'>Don't have an account? <Link to='/signup'>Sign up</Link></p>
                    </div>
                </form>
            </div>
            <div className='flex flex-col md:flex-row lg:justify-between gap-4 pt-10'>
                    <button type='submit' className='flex gap-1 items-center font-bold btn btn-outline'> <AiFillGoogleCircle className='text-red-700'/>Google</button>
                    <button type='submit' className='flex gap-1 items-center font-bold btn btn-outline'><FaGithub/> Github</button>
                    <button type='submit' className='flex gap-1 items-center font-bold btn btn-outline'><FaFacebook/>Facebook</button>
                </div>
        </div>
    );
};

export default Signin;