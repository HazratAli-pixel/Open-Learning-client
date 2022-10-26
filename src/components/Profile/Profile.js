
import React, { useContext } from 'react';
import { AuthContext } from '../UserContext/UserContext';



const Profile = () => {
    const {user} = useContext(AuthContext)
    return (
        <div className='p-1'>
            <div className='w-full mt-3 rounded-lg bg-slate-50 border-2 border-slate-400'>
            <div className='flex py-3'>
                <div className='px-2'>
                    <img src={user.photoURL} alt="" />
                </div>
                <div className=''>
                    <h5 className='p-0 m-0 text-start font-bold'>Mr. Hazrat Ali</h5>
                    <p className='p-0 m-0 text-start font-bold'> Mohammdpur, Dhaka</p>
                </div>
            </div>
            </div>
        </div>
    );
};

export default Profile;