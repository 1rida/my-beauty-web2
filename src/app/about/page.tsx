import React from 'react';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

const AboutUs = () => {
  return (
    <section className="min-h-screen py-16 bg-pink-100">
         <Header />

      <div className="container mx-auto px-4 md:px-8">
       
       {/* Our Story Section */}
{/* Our Story Section */}
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-7 mb-12">
<div className="flex justify-center">
  <div className="relative">
    <img
      src="logo.jpg"
      alt="Our Story"
      className="rounded-full shadow-lg w-64 h-64 object-cover md:w-80 md:h-80 border-8 border-pink-400"
    />
  </div>
</div>

  <div className="flex items-center">
    <div>
      <h1 className="text-4xl font-bold text-pink-600 mb-4">Our Story</h1>
      <p className="text-gray-700 text-lg mb-6">
        Welcome to Sheikh 7 products, a world where beauty meets luxury. Our journey began with
        a passion for creating premium beauty products and enchanting perfumes. We are dedicated
        to providing you with high-quality products that enhance your natural beauty and boost your
        confidence.
      </p>
      <p className="text-gray-700 text-lg">
        Our commitment to quality and sustainability drives us to carefully select the finest
        ingredients and craft our products with the utmost care. Whether you are indulging in our
        skincare line or selecting a signature fragrance, we ensure each product embodies elegance
        and sophistication.
      </p>
    </div>
  </div>
</div>



        {/* Our Mission Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
        <div className="flex justify-center">
  <div className="relative">
    <img
      src="perfume1.jpg"
      alt="Our Story"
      className="rounded-full shadow-lg w-64 h-64 object-cover md:w-80 md:h-80 border-8 border-pink-400"
    />
  </div>
</div>


          
          <div className="flex items-center">
            <div>
              <h2 className="text-4xl font-bold text-pink-600 mb-4">Our Mission</h2>
              <p className="text-gray-700 text-lg mb-6">
                At Sheikh 7 products, our mission is to offer premium beauty and perfume products that make
                every individual feel empowered and beautiful. We believe in the power of self care and the
                impact that high quality beauty products can have on one,s confidence and well being.
              </p>
              <p className="text-gray-700 text-lg">
                Our products are designed to deliver results while providing a luxurious experience, ensuring
                that your beauty routine is something to look forward to each day.
              </p>
            </div>
          </div>
        </div>

        {/* Product Categories Section */}
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-pink-600 mb-8">What We Offer</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <img
                src="https://www.skincenterofsouthmiami.com/wp-content/uploads/2018/06/Skin-Center-of-South-Miami-Facials-and-Skin-Care.jpg"
                alt="Skincare Products"
                className="rounded-lg mb-6"
              />
              <h3 className="text-2xl font-semibold text-pink-600 mb-2">Skincare Essentials</h3>
              <p className="text-gray-600 text-lg">
                Nourishing moisturizers, serums, and cleansers that bring out the best in your skin.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6">
              <img
                src="https://www.beautician.com.pk/assets/images/8516c-hand-and-foot-care.png"
                className="rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold text-pink-600 mb-2">Hand & Foot Care</h3>
              <p className="text-gray-600 text-lg">
                High-quality cream for a flawless look.
              </p>
            </div>

            <div className="bg-white shadow-lg rounded-lg p-6">
              <img
                src="https://do84cgvgcm805.cloudfront.net/article/585/1200/e2517ddf9da9da6c759704f24162a0fbbe5145e792fd61ee7278902dfb173338.jpg"
                alt="Perfumes"
                className="rounded-lg mb-6"
              />
              <h3 className="text-2xl font-semibold text-pink-600 mb-2">Perfumes</h3>
              <p className="text-gray-600 text-lg">
                Enchanting fragrances designed to leave a lasting impression.
              </p>
            </div>
          </div>
        </div>

        {/* Why Choose Us Section */}
        <div className="bg-white p-8 rounded-lg shadow-lg">
          <h2 className="text-4xl font-bold text-pink-600 text-center mb-8">Why Choose Us?</h2>
          <p className="text-gray-700 text-lg text-center mb-8">
            Our dedication to quality, sustainability, and customer satisfaction sets us apart in the beauty industry.
            We take pride in offering:
          </p>
          <ul className="text-gray-700 text-lg list-disc list-inside space-y-4">
            <li>Premium ingredients that are responsibly sourced and effective.</li>
            <li>Cruelty-free products because we believe in ethical beauty.</li>
            <li>Exquisite fragrances crafted by expert perfumers.</li>
            <li>Affordable luxury, making our products accessible to everyone.</li>
          </ul>
        </div>

        {/* Call to Action */}
        <div className="mt-16 text-center pb-6">
          <p className="text-2xl font-semibold text-pink-600">
            Experience the best in beauty. Explore our products today!
          </p>
          <a
            href="/perfume"
            className="mt-4 inline-block px-6 py-3 bg-pink-600 text-white font-semibold  rounded-full shadow-lg hover:bg-pink-500 transition duration-300 animate-bounce"
          >
            Shop Our Collection
          </a>
        </div>
      </div>
        <Footer />
    </section>
  );
};

export default AboutUs;
