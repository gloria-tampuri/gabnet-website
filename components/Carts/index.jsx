import React, { useState } from 'react'
import { useOrderData } from '../../library/jotai-config/order'
import Image from 'next/image';
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/router';

export default function Carts() {
  const [orderData, setOrderData] = useOrderData();
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [email, setEmail] = useState('')
  const [isLoading, setIsLoading] = useState(false)
  const router = useRouter();

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

    const orders = orderData.map((order) => order.product.fields.title)
    const data = {
      name,
      contact,
      email,
      orders
    }
    console.log('SENDING DATA');
    console.log(data);
    console.log('SENDING DATA');
    toast.success("Order has been placed, we will contact you shortly", {
      position: "top-center",
      autoClose: 2000,
      hideProgressBar: false,
      closeOnClick: true,
    });
    // Clear fields
    setName('');
    setContact('')
    setEmail('')
    setIsLoading(false)
    clearOrder();
    return router.push('/')
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
    <section className='min-h-screen'>
      <div className=' flex gap-4 rounded-md max-w-[1200px] mx-auto m-4 p-4'>
        <div className='w-full bg-white rounded min-h-20'>{element}</div>
        {orderData.length > 0 && (
          <div className='bg-gray-300 w-1/3 max-h-[300px] rounded p-4 flex items-center justify-center'>
            <form onSubmit={sendEmail} className='w-full flex flex-col gap-2'>
              <div className='flex flex-col'>
                <label className='' htmlFor='name'>
                  Name
                </label>
                <input
                  aria-disabled={isLoading}
                  value={name}
                  required
                  onChange={(e) => setName(e.target.value)}
                  className='px-1 py-2 rounded outline-1 outline-neutral-500'
                  type='text'
                  id='name'
                />
              </div>
              <div className='flex flex-col'>
                <label className='' htmlFor='contact'>
                  Contact Number
                </label>
                <input
                  value={contact}
                  aria-disabled={isLoading}
                  required
                  onChange={(e) => setContact(e.target.value)}
                  className='px-1 py-2 rounded outline-1 outline-neutral-500'
                  type='text'
                  id='contact'
                />
              </div>
              <div className='flex flex-col'>
                <label className='' htmlFor='email'>
                  Email
                </label>
                <input
                  value={email}
                  aria-disabled={isLoading}
                  onChange={(e) => setEmail(e.target.value)}
                  className='px-1 py-2 rounded outline-1 outline-neutral-500'
                  type='email'
                  required
                  id='email'
                />
              </div>
              <div className='w-full bg-green-700 rounded text-white font-semibold flex items-center justify-center my-2 p-2'>
                <button className='w-full'>Send Order</button>
              </div>
            </form>
          </div>
        )}
      </div>
      <ToastContainer />
    </section>
  );
}
