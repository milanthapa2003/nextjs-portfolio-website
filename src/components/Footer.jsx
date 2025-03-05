import { FaGithub, FaLinkedin, FaTwitter, FaInstagram } from 'react-icons/fa';

export default function Footer() {
  return (
  

    <footer className="bg-gray-800 text-white py-12">
      <div className="max-w-screen-xl mx-auto px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {/* About Section */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">About</h3>
            <p className="text-gray-400 text-sm">
              Passionate web developer with a focus on creating clean, modern, and responsive websites.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li><a href="/" className="text-gray-400 hover:text-blue-400">Home</a></li>
              <li><a href="#portfolio" className="text-gray-400 hover:text-blue-400">Portfolio</a></li>
              <li><a href="#about" className="text-gray-400 hover:text-blue-400">About</a></li>
              <li><a href="#contact" className="text-gray-400 hover:text-blue-400">Contact</a></li>
            </ul>
          </div>

          {/* Social Media */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Connect with me</h3>
            <div className="flex space-x-4">
              <a href="https://github.com/yourusername" target="_blank" className="text-gray-400 hover:text-white">
                <FaGithub size={24} />
              </a>
              <a href="https://www.linkedin.com/in/yourusername" target="_blank" className="text-gray-400 hover:text-white">
                <FaLinkedin size={24} />
              </a>
              <a href="https://twitter.com/yourusername" target="_blank" className="text-gray-400 hover:text-white">
                <FaTwitter size={24} />
              </a>
              <a href="https://www.instagram.com/yourusername" target="_blank" className="text-gray-400 hover:text-white">
                <FaInstagram size={24} />
              </a>
            </div>
          </div>

          {/* Contact Information */}
          <div>
            <h3 className="text-2xl font-semibold mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="text-gray-400">Email: <a href="mailto:thapamilan9762@gmail.com" className="hover:text-blue-400">thapamilan9762@gmail.com</a></li>
              <li className="text-gray-400">Phone: <a href="phone:9762415657" className="hover:text-blue-400">9762415657</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-12 border-t border-gray-700 pt-6 text-center">
          <p className="text-gray-400 text-sm">
            &copy; {new Date().getFullYear()} Milan Thapa. All rights reserved.
          </p>
        </div>
      </div>
    </footer>

    
  );
}
