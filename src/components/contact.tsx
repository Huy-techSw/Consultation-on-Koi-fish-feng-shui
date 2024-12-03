import { motion } from 'framer-motion';
import { Clock, Mail, MapPin, Phone, Send } from "lucide-react";
import { useState } from "react";
import { Button } from "../components/ui/button";
import { Input } from "./ui/input";

const Textarea = ({ ...props }) => (
  <textarea
    {...props}
    className="w-full px-3 py-2 border border-gray-300 rounded focus:outline-none focus:ring-2 focus:ring-red-500"
  />
);

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState({
    type: "",
    message: "",
  });
  console.log(status)

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    setStatus({ type: "", message: "" });

    if (!formData.name || !formData.email || !formData.message) {
      setStatus({ type: "error", message: "Please fill in all fields." });
      return;
    }

    // Simulating form submission
    setTimeout(() => {
      setStatus({
        type: "success",
        message:
          "Thank you for contacting us. We will respond as soon as possible.",
      });
      setFormData({ name: "", email: "", message: "" });
    }, 1000);
  };
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-red-50 to-yellow-50">
      <main className="flex-grow container mx-auto px-4 py-8">
      <motion.div 
              className="relative mb-4 md:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
        <h1 className="text-3xl font-bold text-center text-red-800 mb-8">
          Contact Us
        </h1>

        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Send us a message</h2>
            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label
                  htmlFor="name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Full Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-gray-700"
                >
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  rows={4}
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                />
              </div>

              <Button type="submit" className="bg-black w-full text-white">
                <Send className="w-4 h-4 mr-2 inline-block text-white" />
                Send Message
              </Button>
            </form>
          </div>

          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Contact Information</h2>
            <div className="space-y-4">
              <div className="flex items-center">
                <Mail className="w-5 h-5 text-red-600 mr-2" />
                <span>fengshui-koi@gmail.com</span>
              </div>
              <div className="flex items-center">
                <Phone className="w-5 h-5 text-red-600 mr-2" />
                <span>+84 797 090 433</span>
              </div>
              <div className="flex items-center">
                <MapPin className="w-5 h-5 text-red-600 mr-2" />
                <span>
                  12 Dong Khoi Street, District 1, Ho Chi Minh City
                </span>
              </div>
            </div>
            <div className="mt-12">
              <h3 className="text-lg font-semibold mb-2">Business Hours</h3>
              <div className="space-y-3">
                <div className="flex items-center">
                  <Clock className="w-4 h-4 text-red-600 mr-2" />
                  <span>Monday - Friday: 9:00 AM - 6:00 PM</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 text-red-600 mr-2" />
                  <span>Saturday: 9:00 AM - 12:00 PM</span>
                </div>
                <div className="flex items-center">
                  <Clock className="w-4 h-4 text-red-600 mr-2" />
                  <span>Sunday: Closed</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Contact;
