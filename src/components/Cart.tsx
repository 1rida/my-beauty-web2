"use client";

import Footer from '@/components/Footer';
import Header from '@/components/Header';
import Image from 'next/image';
import { useState } from 'react';

// Define the Product type
interface Product {
  id: number;
  src: string;
  title: string;
  description: string;
  price: number;
  quantity?: number; // Optional for products, required in the cart
}

const BeautyPage: React.FC = () => {
  // Define image details with description and price
  const products: Product[] = [
    { id: 1, src: '/b1.jpg', title: 'Beauty Serum', description: 'A premium beauty product for daily use.', price: 35 },
    { id: 2, src: '/b2.jpg', title: 'Day Cream', description: 'Nourishing and effective hair care product.', price: 40 },
    { id: 3, src: '/b3.jpg', title: 'BNight Cream', description: 'Rejuvenating skin serum with natural ingredients.', price: 50 },
    { id: 4, src: '/b4.jpg', title: 'Fair & White Beauty Cream', description: 'All-in-one skin hydration solution.', price: 60 },
    { id: 5, src: '/b5.jpg', title: 'Hair Oil', description: 'Advanced night cream for glowing skin.', price: 45 },
    { id: 6, src: '/b6.jpg', title: 'Hand & and Foot Wash', description: 'Daily sunscreen for UV protection.', price: 25 },
    { id: 7, src: '/b7.jpg', title: 'Face Wash', description: 'Luxurious body lotion with long-lasting fragrance.', price: 35 }
  ];

  // Cart state to store the added products
  const [cart, setCart] = useState<Product[]>([]);

  // Add product to the cart
  const addToCart = (product: Product) => {
    const existingProduct = cart.find(item => item.id === product.id);

    if (existingProduct) {
      // If product already exists in the cart, just increase the quantity
      setCart(cart.map(item =>
        item.id === product.id ? { ...item, quantity: (item.quantity || 0) + 1 } : item
      ));
    } else {
      // If it's a new product, add it to the cart
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  // Remove product from the cart
  const removeFromCart = (id: number) => {
    const updatedCart = cart.filter(item => item.id !== id);
    setCart(updatedCart);
  };

  // Handle checkout (reset the cart)
  const handleCheckout = () => {
    alert(`Your total is $${cart.reduce((total, item) => total + item.price * (item.quantity || 1), 0).toFixed(2)}. Thank you for your purchase!`);
    setCart([]);
  };

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

        {/* Products Section */}
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 mb-12">
          {products.map((item) => (
            <div key={item.id} className="relative bg-white p-4 rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <Image
                src={item.src}
                alt={item.title}
                width={300}
                height={200}
                className="rounded-xl mb-4"
              />
              <h3 className="text-lg font-semibold">{item.title}</h3>
              <p className="text-sm text-gray-600 mb-2">{item.description}</p>
              <p className="text-xl font-bold">${item.price}</p>
              <button
                onClick={() => addToCart(item)}
                className="mt-4 bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600 transition-colors"
              >
                Add to Cart
              </button>
            </div>
          ))}
        </div>

        {/* Cart Section */}
        <div className="bg-white p-6 rounded-xl shadow-lg">
          <h2 className="text-3xl font-bold mb-4">Cart</h2>

          {cart.length === 0 ? (
            <p className="text-lg text-gray-500">Your cart is empty.</p>
          ) : (
            <div>
              {cart.map((item) => (
                <div key={item.id} className="flex items-center justify-between mb-4">
                  <div className="flex items-center">
                    <Image
                      src={item.src}
                      alt={item.title}
                      width={80}
                      height={80}
                      className="rounded-lg"
                    />
                    <div className="ml-4">
                      <h3 className="text-lg font-semibold">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                      <p className="text-lg font-bold">${item.price}</p>
                      <p className="text-sm text-gray-600">Quantity: {item.quantity}</p>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="mt-2 text-red-500 hover:underline"
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                  <p className="text-lg font-bold">${(item.price * (item.quantity || 1)).toFixed(2)}</p>
                </div>
              ))}

              {/* Cart Total */}
              <div className="mt-6 text-xl font-bold">
                Total: $
                {cart.reduce((total, item) => total + item.price * (item.quantity || 1), 0).toFixed(2)}
              </div>

              {/* Checkout Button */}
              <button
                onClick={handleCheckout}
                className="mt-6 bg-green-500 text-white px-6 py-2 rounded-md hover:bg-green-600 transition-colors"
              >
                Checkout
              </button>
            </div>
          )}
        </div>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default BeautyPage;
