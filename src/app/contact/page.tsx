import React from 'react';
import { Mail, Phone } from 'lucide-react'; // Icons
import Link from 'next/link';
import Header from '@/components/Header';

const Contact = () => {
  return (
    <section className="min-h-screen py-16 bg-pink-200">
         <Header /> 
      <div className="container mx-auto px-4 md:px-8">
     
        {/* Header Section */}
        <div className="text-center mb-12">
          <h1 className="text-4xl pt-7 font-bold text-pink-600 md:text-5xl">
            Get in Touch with Us
          </h1>
          <p className="mt-4 text-gray-600 text-lg md:text-xl">
            We would love to hear from you! Reach out to us for any queries or information about our beauty products.
          </p>
        </div>

        {/* Contact Information */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
  {/* Phone */}
  <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-2xl transition-shadow duration-300">
    <Phone className="mx-auto text-pink-500 w-12 h-12 mb-4" />
    <h2 className="text-2xl font-semibold text-pink-600 mb-2">Phone</h2>
    <p className="text-gray-600 text-lg">
      <Link href="tel:+923092138872" className="hover:text-pink-500">
        0309 2138872
      </Link>
    </p>
  </div>

  {/* Email */}
  <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-2xl transition-shadow duration-300">
    <Mail className="mx-auto text-pink-500 w-12 h-12 mb-4" />
    <h2 className="text-2xl font-semibold text-pink-600 mb-2">Email</h2>
    <p className="text-gray-600 text-lg">
      <Link href="mailto:sheikh7op@gmail.com" className="hover:text-pink-500">
        sheikh7op@gmail.com
      </Link>
    </p>
  </div>

  {/* WhatsApp */}
  <div className="bg-white shadow-lg rounded-2xl p-6 text-center hover:shadow-2xl transition-shadow duration-300">
    <svg
      className="mx-auto text-pink-500 w-12 h-12 mb-4"
      fill="currentColor"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M17.472 14.382c-.29-.145-1.706-.84-1.97-.936-.265-.096-.458-.145-.651.146-.192.29-.744.937-.912 1.13-.168.192-.336.192-.625.048-.29-.145-1.226-.451-2.338-1.432-.864-.768-1.44-1.714-1.609-2.003-.168-.29-.018-.447.127-.593.13-.13.29-.336.435-.504.146-.168.193-.29.29-.48.097-.192.048-.337-.025-.481-.072-.145-.651-1.57-.891-2.148-.236-.567-.475-.491-.651-.491h-.554c-.192 0-.48.048-.732.337-.265.29-1.005.981-1.005 2.384 0 1.404 1.03 2.763 1.174 2.952.145.192 2.03 3.104 4.914 4.345.687.297 1.223.474 1.64.605.688.22 1.31.19 1.8.115.548-.08 1.706-.7 1.947-1.378.24-.678.24-1.259.168-1.378-.073-.115-.266-.192-.555-.336z"
      />
      <path
        d="M12.004 2.004c-5.522 0-10 4.477-10 9.999 0 1.77.467 3.496 1.358 5.017l-1.419 5.188a.75.75 0 0 0 .919.92l5.19-1.418a9.975 9.975 0 0 0 4.951 1.293h.001c5.523 0 10-4.477 10-9.999 0-5.522-4.477-9.999-10-9.999zm0 18c-1.615 0-3.206-.418-4.604-1.209a.747.747 0 0 0-.545-.077l-3.594.982 1.006-3.674a.75.75 0 0 0-.077-.546c-.856-1.397-1.309-3.002-1.309-4.576 0-4.689 3.814-8.499 8.5-8.499 4.686 0 8.5 3.811 8.5 8.499 0 4.688-3.814 8.5-8.5 8.5z"
      />
    </svg>
    <h2 className="text-2xl font-semibold text-pink-600 mb-2">WhatsApp</h2>
    <p className="text-gray-600 text-lg">
      <Link href="https://wa.me/923092138872" className="hover:text-pink-500" target="_blank">
        WhatsApp Us
      </Link>
    </p>
  </div>
</div>


        {/* Contact Form */}
        <div className="mt-16 bg-white p-8 rounded-2xl shadow-lg max-w-2xl mx-auto">
          <h3 className="text-3xl font-bold text-center text-pink-600 mb-8">Send Us a Message</h3>
          <form action="#" method="POST" className="space-y-6">
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Name</label>
              <input
                type="text"
                className="w-full border-gray-300 rounded-lg p-3 focus:ring-pink-500 focus:border-pink-500"
                placeholder="Your Name"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Email</label>
              <input
                type="email"
                className="w-full border-gray-300 rounded-lg p-3 focus:ring-pink-500 focus:border-pink-500"
                placeholder="Your Email"
                required
              />
            </div>
            <div>
              <label className="block text-gray-700 font-semibold mb-2">Message</label>
              <textarea
                className="w-full border-gray-300 rounded-lg p-3 focus:ring-pink-500 focus:border-pink-500"
                rows={5}
                placeholder="Your Message"
                required
              ></textarea>
            </div>
            <div className="text-center">
              <button className="px-6 py-3 bg-pink-600 text-white font-semibold rounded-full shadow-lg hover:bg-pink-500 transition duration-300">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
