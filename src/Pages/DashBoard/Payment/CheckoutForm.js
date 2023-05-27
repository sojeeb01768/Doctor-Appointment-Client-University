import React, { useEffect, useState } from 'react';
import { CardElement, useElements, useStripe } from '@stripe/react-stripe-js';

const CheckoutForm = ({ booking }) => {
    const [cardError, setCardError] = useState('');
    const [success, setSuccess] = useState('');
    const [transactionId, setTransactionId] = useState('');
    const [clientSecret, setClientSecret] = useState("");
    const [processing, setProcessing] = useState(false);

    const stripe = useStripe();
    const elements = useElements();

    const { price, patientName, patientEmail, patientPhone, _id } = booking;


    useEffect(() => {
        // Create PaymentIntent as soon as the page loads
        fetch("http://localhost:5000/create-payment-intent", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                authorization: `bearer ${localStorage.getItem('accessToken')}`
            },
            body: JSON.stringify({ price }),
        })
            .then((res) => res.json())
            .then((data) => setClientSecret(data.clientSecret));
    }, [price]);


    const handleSubmit = async (event) => {
        event.preventDefault();
        if (!stripe || !elements) {
            return;
        }

        const card = elements.getElement(CardElement);

        if (card == null) {
            return;
        }

        // Use your card Element with other Stripe.js APIs
        const { error, paymentMethod } = await stripe.createPaymentMethod({
            type: 'card',
            card,
        });

        if (error) {
            console.log('[error]', error);
            setCardError(error.message);
        } else {
            setCardError('');
            // console.log('[PaymentMethod]', paymentMethod);
        }

        setSuccess('');
        setProcessing(true);

        const { paymentIntent, error: confirmError } = await stripe.confirmCardPayment(
            clientSecret,
            {
                payment_method: {
                    card: card,
                    billing_details: {
                        name: patientName,
                        email: patientEmail,
                        phone: patientPhone
                    },
                },
            }
        );
        console.log("card info", card);

        if (confirmError) {
            setCardError(confirmError.charge.message);
            return;
        }
        if (paymentIntent.status === 'succeeded') {
            setSuccess(" Congratulation!  Payment Successful");
            setTransactionId(paymentIntent.id);
            // store payment info to database
            const payment = {
                patientName,
                patientEmail,
                price,
                transactionId: paymentIntent.id,
                bookingID: _id
            }

            fetch('http://localhost:5000/payments', {
                method: 'POST',
                headers: {
                    "content-type": "application/json",
                    authorization: `bearer ${localStorage.getItem('accessToken')}`
                },
                body: JSON.stringify(payment)
            })
                .then(res => res.json())
                .then(data => {
                    console.log(data);
                    if (data.insertedId) {
                        setSuccess(" Congratulation!  Payment Successful");
                        setTransactionId(paymentIntent.id);
                    }
                })

        }
        setProcessing(false);

    }
    return (
        <>
            <form onSubmit={handleSubmit}>
                <CardElement
                    options={{
                        style: {
                            base: {
                                fontSize: '16px',
                                color: '#424770',
                                '::placeholder': {
                                    color: '#aab7c4',
                                },
                            },
                            invalid: {
                                color: '#9e2146',
                            },
                        },
                    }}
                />
                <button
                    className='btn btn-sm my-5 btn-accent text-white'
                    type="submit"
                    disabled={!stripe || !clientSecret || processing}>
                    Pay
                </button>
            </form>
            <p className="text-red-600">{cardError}</p>
            {
                success && <div>
                    <p className='text-green-500'>{success}</p>
                    <p>Your Transection ID: <strong>{transactionId}</strong></p>
                </div>
            }
        </>
    );
};

export default CheckoutForm;