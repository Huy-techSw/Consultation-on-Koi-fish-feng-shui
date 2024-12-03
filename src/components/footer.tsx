

const Footer = () => {
  return (
    <footer className="w-full py-6 bg-gray-100">
      <div className="container mx-auto px-4 text-center text-sm text-gray-600">
        <p>© 2024 Feng Shui Koi Consulting System. All rights reserved.</p>
        <div className="mt-2">
          <a href="#" className="text-red-600 hover:underline">
            Privacy Policy
          </a>
          {" | "}
          <a href="#" className="text-red-600 hover:underline">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
