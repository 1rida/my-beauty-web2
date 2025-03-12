"use client"

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import React, { useState } from 'react';

const PerfumePage = () => {
  const [cart, setCart] = useState<{ id: number, title: string, price: number }[]>([]);

  // Function to handle adding products to the cart
  const addToCart = (product: { id: number, title: string, price: number }) => {
    setCart([...cart, product]);
  };

  // Products details
  const products = [
    { id: 1, title: 'Perfume 1', price: 55, img: '/perfume1.jpg', description: 'A blend of fresh floral notes with a hint of musk to create an elegant, timeless scent.' },
    { id: 2, title: 'Perfume 2', price: 60, img: '/perfume2.jpg', description: 'A refreshing fragrance with hints of citrus, perfect for daily wear and uplifting your mood.' },
    { id: 3, title: 'Perfume 3', price: 70, img: '/perfume3.jpg', description: 'A captivating scent with deep amber undertones for a luxurious, sensual experience.' }
  ];

  return (
    <div className="flex flex-col min-h-screen bg-pink-200">
      {/* Header */}
      <Header />

      {/* Main Content */}
      <main className="container mx-auto p-6 flex-grow">
        <div className="text-center mb-6">
          <h1 className="text-4xl font-bold mt-[4rem] text-gray-800">Perfume Collection</h1>
          <img src="/plogo.jpg" alt="Perfume Logo" className="mx-auto my-4 w-48 rounded-lg shadow-md" />
          <p className="text-gray-700 max-w-2xl mx-auto">
            Discover the allure of our exclusive perfume collection, where each fragrance is meticulously crafted to evoke timeless elegance and sophistication. From fresh floral notes to warm, sensual undertones, our perfumes cater to every mood and occasion. Whether you are seeking a signature scent or a special addition to your fragrance wardrobe, our collection offers a luxurious experience with every spray. Indulge your senses and find the perfect scent that speaks to your unique style.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <div key={product.id} className="bg-white rounded-lg shadow-lg border p-4 hover:shadow-xl transition duration-300">
              <img src={product.img} alt={product.title} className="w-full h-64 object-cover rounded-lg" />
              <h2 className="text-2xl font-semibold text-gray-900 mt-4">{product.title}</h2>
              <p className="text-gray-600 mt-2">{product.description}</p>
              <p className="text-lg font-bold text-gray-800 mt-2">${product.price}</p>
              <button
                onClick={() => addToCart(product)}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <h2 className="text-2xl font-semibold text-gray-800">Promotional Video</h2>
          <video controls className="mx-auto mt-6 w-full max-w-lg rounded-lg shadow-md">
            <source src="/pv1.mp4" type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default PerfumePage;
