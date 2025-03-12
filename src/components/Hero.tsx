import React from "react";
import { CheckCircle } from "lucide-react"; // Import icon from lucide-react
import Link from "next/link";

const Hero = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[50vh] md:h-[70vh] flex items-center justify-center pt-16">
  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="https://media.istockphoto.com/id/1546442230/photo/front-view-skin-care-products-on-wooden-decorative-piece.jpg?s=612x612&w=0&k=20&c=4qEsfqeNNAcrlzZOwMjs9mZzPBUf1ey22v0gSjt7NcY="
      alt="Beauty Products"
      className="object-cover w-full h-full"
    />
    {/* Overlay */}
    <div className="absolute inset-0 bg-black bg-opacity-50"></div>
  </div>

  {/* Text Overlay */}
  <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
    <h1 className="text-4xl font-bold md:text-6xl">
      Embrace Your Beauty Naturally
    </h1>
    <p className="mt-4 text-lg md:text-2xl">
      Discover our premium beauty products, formulated with high-quality,
      skin-loving ingredients to bring out the best in you.
    </p>
    <Link href="/beauty">
    <button className="mt-8 px-6 py-3 bg-white text-black font-semibold rounded-full shadow-lg hover:bg-gray-200 transition duration-300 animate-bounce">
      Shop Now
    </button>
    </Link>
  </div>
</section>


      {/* Beauty Products Information Section */}
      <section className="py-12 bg-pink-200">
        
        <div className="container mx-auto px-4">

          
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Why Choose Our Beauty Products?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            {/* Feature 1 */}
            <div className="p-6 bg-gray-100 rounded-xl shadow-md">
              <CheckCircle className="mx-auto text-green-500 text-4xl mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Natural Ingredients</h3>
              <p className="text-gray-600">
                We use only the finest natural ingredients, ensuring your skin
                stays nourished and radiant.
              </p>
            </div>
            {/* Feature 2 */}
            <div className="p-6 bg-gray-100 rounded-xl shadow-md">
              <CheckCircle className="mx-auto text-green-500 text-4xl mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Cruelty-Free</h3>
              <p className="text-gray-600">
  This powerful serum deeply hydrates and revitalizes your skin, reducing the appearance of fine lines and promoting a youthful glow.
</p>

            </div>
            {/* Feature 3 */}
            <div className="p-6 bg-gray-100 rounded-xl shadow-md">
              <CheckCircle className="mx-auto text-green-500 text-4xl mb-4" />
              <h3 className="text-2xl font-semibold mb-2">Eco-Friendly</h3>
              <p className="text-gray-600">
                We care for the environment, and our packaging is designed to be
                sustainable and eco-friendly.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Product Showcase Section */}
      <section className="py-12 bg-pink-200">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
            Our Bestselling Beauty Products
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Product 1 */}
            <div className="p-6 bg-white rounded-xl shadow-md">
              <img
                src="p1.jpg"
                alt="Product 1"
                className="w-full h-65 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">Rejuvenating Serum</h3>
              <p className="text-gray-600">
                Our Rejuvenating Serum is enriched with vitamins and minerals
                that leave your skin feeling soft and glowing.
              </p>
              <button className="mt-4 px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300">
                Buy Now
              </button>
            </div>
            {/* Product 2 */}
            <div className="p-6 bg-white rounded-xl shadow-md">
              <img
                src="p8.jpg"
                alt="Product 2"
                className="w-full h-[27rem] object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">Hydrating Moisturizer</h3>
              <p className="text-gray-600">
                Our lightweight Hydrating Moisturizer keeps your skin hydrated
                all day long without feeling heavy.
              </p>
              <button className="mt-4 px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300">
                Buy Now
              </button>
            </div>
            {/* Product 3 */}
            <div className="p-6 bg-white rounded-xl shadow-md">
              <img
                src="1.jpg"
                alt="Product 3"
                className="w-full h-65 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">Night Cream</h3>
              <p className="text-gray-600">
                Our Brightening Face night cream revitalizes your skin and helps you
                achieve a brighter complexion.
              </p>
              <button className="mt-4 px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300">
                Buy Now
              </button>
            </div>

            {/* Product 4 */}

            <div className="p-6 bg-white rounded-xl shadow-md">
              <img
                src="m9.jpg"
                alt="Product 1"
                className="w-full h-68 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">Day Cream</h3>
              <p className="text-gray-600">
                Our Rejuvenating Serum is enriched with vitamins and minerals
                that leave your skin feeling soft and glowing.
              </p>
              <button className="mt-4 px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300">
                Buy Now
              </button>
            </div> <div className="p-6 bg-white rounded-xl shadow-md">
              <img
                src="facewash.jpg"
                alt="Product 1"
                className="w-full h-65 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">Rejuvenating Serum</h3>
              <p className="text-gray-600">
                Our Rejuvenating Serum is enriched with vitamins and minerals
                that leave your skin feeling soft and glowing.
              </p>
              <Link href={"/contact"}>
              <button className="mt-4 px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300">
                Buy Now
              </button>
              </Link>
            </div> <div className="p-6 bg-white rounded-xl shadow-md">
              <img
                src="p7.jpg"
                alt="Product 1"
                className="w-full h-65 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">Fair & White Cream</h3>
              <p className="text-gray-600">
                Our Rejuvenating Serum is enriched with vitamins and minerals
                that leave your skin feeling soft and glowing.
              </p>
              <Link href={"/contact"}>
              <button className="mt-4 px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300">
                Buy Now
              </button>
              </Link>
            </div>
            <div className="p-6 bg-white rounded-xl shadow-md">
              <img
                src="facesoap.jpg"
                alt="Product 3"
                className="w-full h-67 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">Face Soap</h3>
              <p className="text-gray-600">
              "Discover the gentle, deep cleansing power of our face soap, formulated to nourish and refresh your skin. Experience a radiant, healthy complexion with every wash!"


              </p>
              <Link href={"/contact"}>
              <button className="mt-4 px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300">
                Buy Now
              </button>
              </Link>
            </div> <div className="p-6 bg-white rounded-xl shadow-md">
              <img
                src="handfeetwash.jpg"
                alt="Product 3"
                className="w-full h-65 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-semibold mb-2">Hand & Feet Wash</h3>
              <p className="text-gray-600">
              "Pamper your hands and feet with our gentle hydrating wash, designed to cleanse and moisturize, leaving your skin feeling soft, nourished, and refreshed after every use."
              </p>
              <Link href={"/contact"}>
              <button className="mt-4 px-4 py-2 bg-green-500 text-white font-semibold rounded-lg shadow-md hover:bg-green-600 transition duration-300">
                Buy Now
              </button>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
