export default function Footer() {
  return (
    <>
      <footer className="bg-black text-gray-400 py-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 px-4 sm:px-6 lg:px-8">
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">About Us</h2>
            <p className="pb-4">
              Music School is a premier institution dedicated to teacher the art
              and science of music. We nurture talent from the ground up,
              fostering a vibrant community of musicians.
            </p>
          </div>
          <div>
            <h2 className="text-whie text-lg font-semibold mb-4">
              Quick Links
            </h2>
            <ul>
              <li>
                <a
                  href="#"
                  className="HOver:text-white transition-colors duration-300"
                >
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="HOver:text-white transition-colors duration-300"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="HOver:text-white transition-colors duration-300"
                >
                  Courses
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="Hover:text-white transition-colors duration-300"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">Follow Us</h2>
            <div className="flex space-x-4">
              <a
                href="#"
                className="Hover:text-white transition-colors duration-300"
              >
                Facebook
              </a>
              <a
                href="#"
                className="Hover:text-white transition-colors duration-300"
              >
                Instagram
              </a>
              <a
                href="#"
                className="Hover:text-white transition-colors duration-300"
              >
                Twitter
              </a>
            </div>
          </div>
          <div>
            <h2 className="text-white text-lg font-semibold mb-4">
              Contact Us
            </h2>
            <p>Dhaka, Bangladesh</p>
            <p>Dhaka 1216</p>
            <p>Email: info@musicschool.com</p>
            <p>Phone: (+880) 1234-567890</p>
          </div>
        </div>
        <p className="text-center text-xs pt-8">
          © 2025 Music School.All rights reserved.
        </p>
      </footer>
    </>
  );
}
