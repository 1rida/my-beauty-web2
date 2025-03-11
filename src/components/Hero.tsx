import { Mail, Phone, Facebook, Twitter, Instagram } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-gray-800 text-white py-12">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Company Info */}
        <div>
          <h4 className="text-2xl font-bold mb-4">Sheikh,7</h4>
          <p className="text-gray-400">
            Elevating digital experiences with innovative solutions. Stay connected for more updates.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Get in Touch</h4>
          <ul>
            <li className="flex items-center mb-3">
              <Phone className="w-5 h-5 mr-2 text-pink-500" />
              <a href="https://wa.me/03406098027" className="hover:text-pink-300 transition duration-300">WhatsApp: 03092138872</a>
            </li>
            <li className="flex items-center">
              <Mail className="w-5 h-5 mr-2 text-pink-500" />
              <a href="mailto:raniarasheed@gmail.com" className="hover:text-pink-300 transition duration-300">Email: sheikh7op@gmail.com</a>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Explore</h4>
          <ul className="space-y-3">
            <li><a href="/services" className="hover:text-pink-300 transition duration-300">Our Services</a></li>
            <li><a href="/contact" className="hover:text-pink-300 transition duration-300">Contact Us</a></li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div>
          <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
          <div className="flex space-x-6">
            <a href="https://www.facebook.com/share/19xmU4XjsK/" className="hover:text-pink-500 transition-transform duration-300 transform hover:scale-125">
              <Facebook className="w-6 h-6" />
            </a>
            <a href="https://twitter.com" className="hover:text-pink-500 transition-transform duration-300 transform hover:scale-125">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="https://instagram.com" className="hover:text-pink-500 transition-transform duration-300 transform hover:scale-125">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="mt-12 text-center text-gray-500 border-t border-gray-700 pt-6">
        <p>&copy; 2025 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}
