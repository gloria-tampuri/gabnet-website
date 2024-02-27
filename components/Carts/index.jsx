import React, { useState, useRef } from 'react'
import { useOrderData } from '../../library/jotai-config/order'
import Image from 'next/image';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useRouter } from 'next/router';
import emailjs from '@emailjs/browser';
import SpringModal from '../shared/springModal/SpringModal';
import QuantitySelector from './QuantitySelector';


export default function Carts() {
  const [orderData, setOrderData] = useOrderData();
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter();
  const [isOpen, setIsOpen] = useState(false)
  const [quantity, setQuantity] = useState(0)

  const form = useRef();

  const removeOrderById = (id) => {
    setOrderData(orderData.filter((order) => order.product.sys.id !== id));
  };

  console.log(orderData);
  console.log(quantity)
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
        <section className='' key={order.product.sys.id}>
          <div
            className='flex items-center gap-4 border-b border-spacing-0 border-gray-300 p-4'
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
              <p className="text-gray-500 text-sm font-semibold">{order.product.fields.description}</p>
              <button
                className='text-red-600 text-sm'
                onClick={() => removeOrderById(order.product.sys.id)}
              >
                Delete
              </button>
              <QuantitySelector orderId={order.product.sys.id} />
            </div>
          </div>
        </section>
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
      <section className='min-h-screen w-full'>
        <div className='md:flex gap-4 rounded-md max-w-[1050px] mx-auto mt-1 p-4'>
          <div className='w-full bg-white rounded min-h-20'>
            {orderData.length > 0 && <h2 className="my-2 font-medium p-4 text-xl text-gray-800 border-b border-spacing-0 border-gray-300">Order Summary</h2>}
            {element}
            {orderData.length > 0 && <div className="flex justify-end p-4">
              <button onClick={() => setIsOpen(true)} className='bg-black text-white md:w-fit text-center cursor-pointer font-semibold w-full py-2 px-10 rounded'>Order</button>
            </div>}
          </div>
        </div>
      </section>
      <SpringModal isOpen={isOpen} setIsOpen={setIsOpen}>
        <h2 className="my-2 font-medium text-xl">Contact information</h2>
        <div className='bg-gray-200 my-4 text-gray-700 md:mt-0 w-full rounded p-4 flex items-center justify-center'>
          <form ref={form} onSubmit={sendEmail} className='w-full flex flex-col gap-2 text-gray-900'>
            <div className='flex flex-col'>
              <label className='' htmlFor='firstName'>
                First Name
              </label>
              <input
                aria-disabled={isLoading}
                value={firstName}
                required
                onChange={(e) => setFirstName(e.target.value)}
                className='px-1 py-2 rounded border-1 border-gray-200'
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
                className='px-1 py-2 rounded border-1 border-gray-200'
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
                className='px-1 py-2 rounded border-1 border-gray-200'
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
                className='px-1 py-2 rounded border-1 border-gray-200'
                type='email'
                required
                id='email'
              />
            </div>
            <div className={`rounded text-white font-semibold flex items-center gap-4 justify-between my-2`}>
              <div
                onClick={() => setIsOpen(false)}
                className="bg-red-500 transition-colors text-white text-center cursor-pointer font-semibold w-full py-2 rounded"
              >
                Cancel
              </div>
              <button disabled={isLoading} className={`w-full ${isLoading ? 'cursor-not-allowed' : ''} ${isLoading ? 'bg-gray-600' : 'bg-green-600'} p-2 rounded`}>{isLoading ? 'Submitting...' : 'Submit'}</button>
            </div>
          </form>
        </div>
      </SpringModal>
    </>
  );
}


