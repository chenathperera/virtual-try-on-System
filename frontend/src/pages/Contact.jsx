import React from 'react';
import Title from '../components/Title'; 

const Contact = () => {
  return (
    <div className='max-w-[1200px] mx-auto py-10 sm:py-20 px-4'>
      
      {/* Header Section */}
      <section className='text-center mb-16'>
        <Title text1={"GET IN"} text2={"TOUCH"} />
        <h1 className='text-5xl sm:text-6xl font-light tracking-wider my-4 text-[#333] font-serif'>
          We'd Love to Hear From You.
        </h1>
        <p className='max-w-2xl mx-auto text-lg text-gray-600 font-serif mt-4'>
          Whether you have a question about our collections, need styling advice, or require support, our team is here to help.
        </p>
      </section>

      {/* Main Content Split: Information vs. Form */}
      <div className='grid grid-cols-1 lg:grid-cols-2 gap-16'>
        
        {/* Left Column: Contact Information */}
        <div className='space-y-10'>
          <h2 className='text-3xl font-semibold border-b-2 border-gray-200 pb-2 inline-block font-serif text-[#333]'>
            Contact Details
          </h2>
          
          <div className='space-y-6'>
            
            {/* Address */}
            <div>
              <h3 className='text-lg font-medium text-[#333] uppercase tracking-widest'>Our Flagship</h3>
              <p className='text-gray-700 font-serif'>
                123 Fashion Avenue, Suite 400<br/>
                London, UK SW1A 0AA
              </p>
            </div>

            {/* Phone */}
            <div>
              <h3 className='text-lg font-medium text-[#333] uppercase tracking-widest'>Phone Support</h3>
              <p className='text-gray-700 font-serif'>
                General Inquiries: +44 20 1234 5678<br/>
                Customer Service: +44 20 9876 5432
              </p>
            </div>

            {/* Email */}
            <div>
              <h3 className='text-lg font-medium text-[#333] uppercase tracking-widest'>Email Us</h3>
              <p className='text-gray-700 font-serif'>
                Sales & Orders: <a href="mailto:orders@nitofashion.com" className='text-black hover:underline'>orders@nitofashion.com</a><br/>
                Press Inquiries: <a href="mailto:press@nitofashion.com" className='text-black hover:underline'>press@nitofashion.com</a>
              </p>
            </div>
          </div>
        </div>

        {/* Right Column: Contact Form */}
        <div>
          <h2 className='text-3xl font-semibold border-b-2 border-gray-200 pb-2 inline-block font-serif text-[#333] mb-8'>
            Send Us a Message
          </h2>
          
          <form className='space-y-6'>
            {/* Name Input */}
            <div>
              <input 
                type="text" 
                placeholder="Your Name" 
                className='w-full border-b border-gray-300 py-3 focus:border-black focus:outline-none placeholder-gray-500 font-serif'
                required 
              />
            </div>

            {/* Email Input */}
            <div>
              <input 
                type="email" 
                placeholder="Email Address" 
                className='w-full border-b border-gray-300 py-3 focus:border-black focus:outline-none placeholder-gray-500 font-serif'
                required 
              />
            </div>
            
            {/* Subject Input */}
            <div>
              <input 
                type="text" 
                placeholder="Subject" 
                className='w-full border-b border-gray-300 py-3 focus:border-black focus:outline-none placeholder-gray-500 font-serif'
                required 
              />
            </div>

            {/* Message Textarea */}
            <div>
              <textarea
                placeholder="Your Message..."
                rows="4"
                className='w-full border border-gray-300 p-3 focus:border-black focus:outline-none placeholder-gray-500 font-serif resize-none'
                required
              ></textarea>
            </div>

            {/* Submit Button (Reusing the elegant button style) */}
            <button 
              type="submit"
              className='mt-4 px-8 py-3 border border-black text-black text-sm uppercase tracking-widest hover:bg-black hover:text-white transition duration-300 w-full lg:w-auto'
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;