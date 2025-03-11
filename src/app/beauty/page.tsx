"use client";

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Image from 'next/image';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import { useState } from 'react';

const BeautyPage: React.FC = () => {
  // Define image details with description and price
  const images = [
    { src: '/b1.jpg', title: 'Beauty Serum ', description: 'A premium beauty product for daily use.', price: '$35' },
    { src: '/b2.jpg', title: 'Day Cream', description: 'Nourishing and effective hair care product.', price: '$40' },
    { src: '/b3.jpg', title: 'Night Cream', description: 'Rejuvenating skin serum with natural ingredients.', price: '$50' },
    { src: '/b4.jpg', title: 'Fair & White Beauty Cream', description: 'All-in-one skin hydration solution.', price: '$60' },
    { src: '/b5.jpg', title: 'Hair Oil', description: 'Advanced night cream for glowing skin.', price: '$45' },
    { src: '/b6.jpg', title: 'Hand & and Foot Wash', description: 'Daily sunscreen for UV protection.', price: '$25' },
    { src: '/b7.jpg', title: 'Face Wash', description: 'Luxurious body lotion with long-lasting fragrance.', price: '$35' }
  ];

  // Define video details with description
  const videos = [
    { src: '/bv1.mp4', description: 'How to use Beauty Product 1 for best results.' },
    { src: '/bv2.mp4', description: 'Tutorial on applying Beauty Product 2.' },
    { src: '/bv3.mp4', description: 'Step-by-step guide for using Beauty Product 3.' },
    { src: '/bv4.mp4', description: 'Benefits and application of Beauty Product 4.' },
    { src: '/bv5.mp4', description: 'Instructions on applying Beauty Product 5.' },
    { src: '/bv6.mp4', description: 'How Beauty Product 6 improves your skin overnight.' },
    { src: '/bv7.mp4', description: 'Tutorial on the daily application of Beauty Product 7.' }
  ];

  const [selectedVideo, setSelectedVideo] = useState(videos[0]);

  return (
    <div className='bg-pink-200 min-h-screen'>
      {/* Header */}
      <Header />

      <div className="container mx-auto p-6">
        {/* Title and description */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-extrabold text-pink-600 tracking-wide mb-4 mt-16">Sheikh 7 Beauty Products</h1>
          <p className="text-lg text-gray-600">Explore the finest range of beauty products designed for skincare, hair care, and much more. Enhance your daily routine with high-quality solutions.</p>
        </div>

        {/* Images Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-12">
          {images.map((item, index) => (
            <div key={index} className="relative bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <Image
                src={item.src}
                alt={item.title}
                width={300}
                height={200}
                className="rounded-xl mb-4"
              />
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{item.description}</p>
              <p className="text-xl font-bold">{item.price}</p>
              <button className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors">
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* Video Section */}
        <div className="text-center mb-8">
          <h2 className="text-4xl font-bold text-pink-600 mb-4">Beauty Videos</h2>
          <p className="text-lg text-gray-600 mb-6">Watch these videos to learn how to get the most out of our beauty products. From skincare to hair care, find helpful tutorials and tips!</p>
        </div>

        {/* Swiper Video Slideshow */}
        <div className="relative">
          <Swiper
            modules={[Navigation]}
            spaceBetween={20}
            slidesPerView={1}
            navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }} // Custom navigation buttons
            loop={false} // Removed autoplay
          >
            {videos.map((video, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center mb-6">
                  <video className="w-full md:w-1/2 lg:w-1/3 rounded-lg shadow-md" controls>
                    <source src={video.src} type="video/mp4" />
                    Your browser does not support the video tag.
                  </video>
                </div>
                <p className="text-center text-lg mb-6">{video.description}</p>
              </SwiperSlide>
            ))}

            {/* Custom navigation buttons */}
            <div className="swiper-button-prev text-pink-600 text-4xl font-bold cursor-pointer absolute left-0 top-1/2 transform -translate-y-1/2">‹</div>
            <div className="swiper-button-next text-pink-600 text-4xl font-bold cursor-pointer absolute right-0 top-1/2 transform -translate-y-1/2">›</div>
          </Swiper>

          {/* Thumbnails Section */}
          <div className="flex gap-4 overflow-x-auto pb-4 justify-center mt-4">
            {videos.map((video, index) => (
              <button
                key={index}
                onClick={() => setSelectedVideo(video)}
                className={`focus:outline-none transition-all ${
                  selectedVideo.src === video.src ? 'ring-2 ring-blue-500' : ''
                }`}
              >
                <video width="100" className="rounded-md shadow-sm hover:ring-2 hover:ring-blue-500 transition-all">
                  <source src={video.src} type="video/mp4" />
                </video>
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default BeautyPage;
