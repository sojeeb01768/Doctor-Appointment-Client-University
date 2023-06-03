import React, { useContext } from 'react';
import { AuthContext } from '../../../contexts/AuthProvider';

const PaymentInfo = ({ transactionId }) => {
    const { user } = useContext(AuthContext)
    console.log(transactionId);

    return (
        <div>
            <h2 className='text-4xl text-white text-center my-10'>Payment Info</h2>

            <div className='bg-slate-200'>
                <p className=' text-center'>User Name: {user?.displayName}</p>
                <p className=' text-center'>User Email: {user?.email}</p>
                <h2 className=' text-center'>Transection ID: {transactionId} </h2>

            </div>
        </div>
    );
};

export default PaymentInfo;