import React, { useState, useRef } from 'react'
import { useOrderData } from '../../library/jotai-config/order'
import Image from 'next/image';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import emailjs from '@emailjs/browser';


export default function Carts() {
  const [orderData, setOrderData] = useOrderData();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter();

  const form = useRef();

  const removeOrderById = (id) => {
    setOrderData(orderData.filter((order) => order.product.sys.id !== id));
  };

  // Function to clear the order from localStorage
  const clearOrder = () => {
    setOrderData([]);
  };

  // Function to send the data to the email
  const sendEmail = (e) => {
    e.preventDefault();
    setIsLoading(true)

    const orders = orderData.map((order) => order.product.fields.title);
    const orderMessage = orders.map((order) => `${order}`);

    const templateParams = {
      firstName,
      lastName,
      phone: contact,
      email,
      message: `Orders: [${orderMessage.join(', ')}]`,
    }

    emailjs.send(process.env.NEXT_PUBLIC_SERVICE_ID, process.env.NEXT_PUBLIC_TEMPLATE_ID, templateParams, process.env.NEXT_PUBLIC_PUBLIC_KEY)
      .then(function (response) {
        console.log('SUCCESS!', response.status, response.text);
        toast.success("Order has been placed, we will contact you shortly", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
        });
        // Clear fields
        setFirstName('');
        setContact('')
        setEmail('')
        setIsLoading(false)
        clearOrder();
        return router.push('/')
      }, function (error) {
        console.log('FAILED...', error);
        setIsLoading(false)
        return toast.error("Something went wrong", {
          position: "top-center",
          autoClose: 2000,
          hideProgressBar: false,
          closeOnClick: true,
        })
      });
  }

  let element;

  if (orderData.length > 0) {
    element = orderData.map((order) => {
      return (
        <div
          className='flex items-center gap-4 border-b border-spacing-0 border-gray-300 p-4'
          key={order.product.sys.id}
        >
          <Image
            height='100'
            width='100'
            src={'https:' + order.product.fields.image.fields.file.url}
            alt={order.product.fields.title}
          />
          <div>
            <h3 className='text-xl font-medium text-gray-600'>
              {order.product.fields.title}
            </h3>
            <button
              className='text-red-600 text-sm'
              onClick={() => removeOrderById(order.product.sys.id)}
            >
              Delete
            </button>
          </div>
        </div>
      );
    });
  } else {
    element = (
      <h2 className='text-center text-2xl font-bold'>Your Cart is Empty</h2>
    );
  }
  return (

    <>
      <ToastContainer />
      <section className='min-h-screen'>
        <div className='md:flex gap-4 rounded-md max-w-[1200px] mx-auto mt-1 p-4'>
          <div className='w-full bg-white rounded min-h-20'>{element}</div>
          {orderData.length > 0 && (
            <div className='bg-gray-300 mt-4 md:mt-0 w-full md:w-1/3  rounded p-4 flex items-center justify-center'>
              <form ref={form} onSubmit={sendEmail} className='w-full flex flex-col gap-2'>
                <div className='flex flex-col'>
                  <label className='' htmlFor='firstName'>
                    First Name
                  </label>
                  <input
                    aria-disabled={isLoading}
                    value={firstName}
                    required
                    onChange={(e) => setFirstName(e.target.value)}
                    className='px-1 py-2 rounded outline-1 outline-neutral-500'
                    type='text'
                    id='firstName'
                  />
                </div>
                <div className='flex flex-col'>
                  <label className='' htmlFor='lastName'>
                    Last Name
                  </label>
                  <input
                    aria-disabled={isLoading}
                    value={lastName}
                    required
                    onChange={(e) => setLastName(e.target.value)}
                    className='px-1 py-2 rounded outline-1 outline-neutral-500'
                    type='text'
                    id='lastName'
                  />
                </div>
                <div className='flex flex-col'>
                  <label className='' htmlFor='phone'>
                    Contact Number
                  </label>
                  <input
                    value={contact}
                    name='phone'
                    aria-disabled={isLoading}
                    required
                    onChange={(e) => setContact(e.target.value)}
                    className='px-1 py-2 rounded outline-1 outline-neutral-500'
                    type='text'
                    id='phone'
                  />
                </div>
                <div className='flex flex-col'>
                  <label className='' htmlFor='email'>
                    Email
                  </label>
                  <input
                    value={email}
                    name='mail'
                    aria-disabled={isLoading}
                    onChange={(e) => setEmail(e.target.value)}
                    className='px-1 py-2 rounded outline-1 outline-neutral-500'
                    type='email'
                    required
                    id='email'
                  />
                </div>
                <div className={`w-full ${isLoading ? 'cursor-not-allowed' : ''} ${isLoading ? 'bg-gray-600' : 'bg-green-600'} rounded text-white font-semibold flex items-center justify-center my-2 p-2`}>
                  <button disabled={isLoading} className='w-full'>{isLoading ? 'Submitting...' : 'Submit'}</button>
                </div>
              </form>
            </div>
          )}
        </div>
      </section>
    </>

  );
}
