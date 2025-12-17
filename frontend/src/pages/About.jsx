import React from 'react';
import Title from '../components/Title'; 
import { assets } from '../assets/assets'; 

const About = () => {
    // Placeholder images for Founders. You will need to add these to your assets/ folder.
    // I'm using hero_img as a generic placeholder for now.
    const founderImage1 = assets.hero_img; 
    const founderImage2 = assets.hero_img; 

    return (
        <div className='max-w-[1200px] mx-auto py-10 sm:py-20'>
            
            {/* 1. About Hero Section: Clean, Centered, Elegant */}
            <section className='text-center mb-20 px-4'>
                <Title text1={"OUR"} text2={"STORY"} /> 
                <h1 className='text-5xl sm:text-7xl font-light tracking-wider my-4 text-[#333] font-serif'>
                    The Art of Modern Elegance.
                </h1>
                <p className='max-w-3xl mx-auto text-lg text-gray-600 font-serif mt-6 leading-relaxed'>
                    Nito Fashion was founded on the principle that modern elegance should be accessible and effortless. 
                    We believe fashion is a form of self-expression, and our collections are curated to inspire confidence in every wear.
                </p>
            </section>

            {/* 2. Mission & Founders Section: Image/Text Split */}
            <section className='grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 px-4'>
                
                {/* Left Column: Text Content */}
                <div className='order-1 space-y-8'>
                    <h2 className='text-3xl font-semibold border-b-2 border-gray-200 pb-2 inline-block font-serif text-[#333]'>
                        Our Core Mission
                    </h2>
                    <p className='text-gray-700 leading-loose'>
                        We strive to bridge the gap between high-end design and everyday functionality. 
                        Each piece in our collection is meticulously chosen for its quality, timeless appeal, and contemporary fit. 
                        We are committed to **sustainable sourcing** and **ethical production**, ensuring that looking good also does good for the planet and its people.
                    </p>
                    <p className='text-gray-700 leading-loose italic border-l-4 border-[#c5a484] pl-4'>
                        "Fashion is the armor to survive the reality of everyday life. Our mission is to create that perfect armor."
                    </p>
                    <button className='mt-4 px-6 py-2 border border-black text-black text-sm uppercase tracking-widest hover:bg-black hover:text-white transition duration-300'>
                        Explore Collections
                    </button>
                </div>

                {/* Right Column: Image */}
                <div className='order-2'>
                    <img 
                        src={assets.hero_img} 
                        alt="Founders and Team" 
                        className='w-full h-auto object-cover aspect-[4/3] shadow-xl'
                    />
                </div>
            </section>

            <hr className='border-gray-100 my-16 mx-4' />

            {/* ⭐️ NEW SECTION 4: Founders/Leadership Spotlight */}
            <section className='text-center mb-20 px-4'>
                <Title text1={"MEET"} text2={"THE TEAM"} /> 
                <h2 className='text-4xl font-light tracking-wider my-4 text-[#333] font-serif'>
                    Visionaries of Nito
                </h2>
                
                <div className='grid grid-cols-1 md:grid-cols-2 gap-12 mt-12'>
                    {/* Founder 1 */}
                    <div className='flex flex-col items-center'>
                        <img 
                            src={assets.d1} // Replace with specific founder image
                            alt="Co-Founder Alice Smith" 
                            className='w-60 h-60 object-cover rounded-full mb-6 border-4 border-gray-100'
                        />
                        <h3 className='text-2xl font-serif text-[#333]'>Kim Sooya</h3>
                        <p className='text-sm text-gray-500 uppercase tracking-wider mb-3'>Co-Founder & CEO</p>
                        <p className='text-gray-700 max-w-sm'>
                            Alice brings a background in Parisian haute couture, focusing on fabric integrity and design innovation.
                        </p>
                    </div>

                    {/* Founder 2 */}
                    <div className='flex flex-col items-center'>
                        <img 
                            src={assets.d2} // Replace with specific founder image
                            alt="Co-Founder John Doe" 
                            className='w-60 h-60 object-cover rounded-full mb-6 border-4 border-gray-100'
                        />
                        <h3 className='text-2xl font-serif text-[#333]'>Kim Jisoo</h3>
                        <p className='text-sm text-gray-500 uppercase tracking-wider mb-3'>Co-Founder & Creative Director</p>
                        <p className='text-gray-700 max-w-sm'>
                            John drives our brand aesthetic, ensuring every collection reflects modern trends while maintaining timeless quality.
                        </p>
                    </div>
                </div>
            </section>
            
            <hr className='border-gray-100 my-16 mx-4' />

            {/* ⭐️ NEW SECTION 5: Brand History/Timeline */}
            <section className='text-center mb-20 px-4'>
                <Title text1={"OUR"} text2={"MILESTONES"} /> 
                <h2 className='text-4xl font-light tracking-wider my-4 text-[#333] font-serif'>
                    A Journey of Style
                </h2>

                <div className='relative max-w-3xl mx-auto pt-10 text-left'>
                    {/* Timeline Line */}
                    <div className='absolute left-1/2 transform -translate-x-1/2 w-0.5 bg-gray-200 h-full hidden sm:block'></div>
                    
                    {/* Timeline Items */}
                    <div className='space-y-12'>
                        {/* Item 1 */}
                        <div className='relative sm:w-1/2 sm:pr-8 sm:text-right'>
                            <div className='absolute right-[-4px] top-1 sm:block hidden h-2.5 w-2.5 bg-[#c5a484] rounded-full z-10'></div>
                            <h3 className='text-lg font-semibold text-[#333]'>2018: The Genesis</h3>
                            <p className='text-sm text-gray-600'>Nito Fashion is officially launched in London, focusing on small-batch luxury dresses.</p>
                        </div>
                        
                        {/* Item 2 */}
                        <div className='relative sm:w-1/2 sm:ml-auto sm:pl-8 sm:text-left'>
                            <div className='absolute left-[-4px] top-1 sm:block hidden h-2.5 w-2.5 bg-[#c5a484] rounded-full z-10'></div>
                            <h3 className='text-lg font-semibold text-[#333]'>2020: Sustainable Commitment</h3>
                            <p className='text-sm text-gray-600'>We transition 80% of our supply chain to use certified organic and recycled fabrics.</p>
                        </div>

                        {/* Item 3 */}
                        <div className='relative sm:w-1/2 sm:pr-8 sm:text-right'>
                            <div className='absolute right-[-4px] top-1 sm:block hidden h-2.5 w-2.5 bg-[#c5a484] rounded-full z-10'></div>
                            <h3 className='text-lg font-semibold text-[#333]'>2023: Global Expansion</h3>
                            <p className='text-sm text-gray-600'>Our first international flagship store opens, bringing Nito designs to a worldwide audience.</p>
                        </div>

                        {/* Item 4 */}
                        <div className='relative sm:w-1/2 sm:ml-auto sm:pl-8 sm:text-left'>
                            <div className='absolute left-[-4px] top-1 sm:block hidden h-2.5 w-2.5 bg-[#c5a484] rounded-full z-10'></div>
                            <h3 className='text-lg font-semibold text-[#333]'>Present: Looking Ahead</h3>
                            <p className='text-sm text-gray-600'>Launching our new 'Timeless Capsule' collection, dedicated to zero-waste principles.</p>
                        </div>
                    </div>
                </div>
            </section>


            {/* 3. Company Values: Simple, Icon-driven blocks (Original Section) */}
            <section className='text-center px-4'>
                <Title text1={"OUR"} text2={"COMMITMENT"} /> 
                <h2 className='text-4xl font-light tracking-wider my-4 text-[#333] font-serif'>
                    Principles That Guide Us
                </h2>

                <div className='grid grid-cols-1 sm:grid-cols-3 gap-8 mt-10'>
                    
                    {/* Value 1: Quality */}
                    <div className='flex flex-col items-center p-6 bg-white transition duration-300 hover:shadow-2xl'>
                        <img src={assets.quality_icon} alt="Quality" className='h-12 w-12 mb-4'/>
                        <h3 className='text-xl font-semibold mb-2 text-[#333]'>Uncompromising Quality</h3>
                        <p className='text-sm text-gray-600 leading-relaxed'>
                            We source only the finest fabrics and work with master ateliers to ensure every seam is flawless and lasting.
                        </p>
                    </div>

                    {/* Value 2: Sustainability */}
                    <div className='flex flex-col items-center p-6 bg-white transition duration-300 hover:shadow-2xl'>
                        <img src={assets.exchange_icon} alt="Sustainability" className='h-12 w-12 mb-4'/>
                        <h3 className='text-xl font-semibold mb-2 text-[#333]'>Conscious Design</h3>
                        <p className='text-sm text-gray-600 leading-relaxed'>
                            Our commitment to the environment drives us to minimize waste and choose eco-friendly production cycles.
                        </p>
                    </div>

                    {/* Value 3: Customer Support */}
                    <div className='flex flex-col items-center p-6 bg-white transition duration-300 hover:shadow-2xl'>
                        <img src={assets.support_icon} alt="Support" className='h-12 w-12 mb-4'/>
                        <h3 className='text-xl font-semibold mb-2 text-[#333]'>Dedicated Support</h3>
                        <p className='text-sm text-gray-600 leading-relaxed'>
                            From styling advice to hassle-free returns, our team is dedicated to providing an exceptional shopping experience.
                        </p>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default About;