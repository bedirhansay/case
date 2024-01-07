import React from "react";

export const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white p-4">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-lg font-semibold">Etheration</p>
            <p className="text-gray-400">
              Providing quality products since 20XX
            </p>
          </div>
          <div>
            <p className="text-lg font-semibold">Contact Us</p>
            <p className="text-gray-400">info@example.com</p>
          </div>
        </div>

        <div className="mt-4 border-t border-gray-600 pt-4 flex justify-between items-center">
          <p>&copy; 2024 Your Brand. All rights reserved.</p>
          <div className="flex space-x-4">
            <a href="#" className="text-gray-400 hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};
