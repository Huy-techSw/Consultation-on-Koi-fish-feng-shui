import { motion } from 'framer-motion';
import { Droplet, Flame, Leaf, Mountain, Send, Wind } from "lucide-react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Input = ({ label, ...props }: any) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <input
      {...props}
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
    />
  </div>
);

const Select = ({ label, options, ...props }: any) => (
  <div className="mb-4">
    <label className="block text-sm font-medium text-gray-700 mb-1">
      {label}
    </label>
    <select
      {...props}
      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-red-500"
    >
      {options.map((option: any) => (
        <option key={option.value} value={option.value}>
          {option.label}
        </option>
      ))}
    </select>
  </div>
);

const Consulting = () => {
  const navigate = useNavigate();
  

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    gender: "",
    yearOfBirth: "",
    lifeFate: "",
  });

  const handleInputChange = (e: any) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Here you would typically send the data to a server

    navigate("/consulting/result");
  };

  const currentYear = new Date().getFullYear();
  const years = Array.from({ length: 100 }, (_, i) => currentYear - i);

  const elements = [
    {
      icon: Droplet,
      name: "Water",
      color: "text-blue-500",
      bgColor: "bg-blue-100",
    },
    {
      icon: Wind,
      name: "Metal",
      color: "text-gray-500",
      bgColor: "bg-gray-100",
    },
    {
      icon: Mountain,
      name: "Earth",
      color: "text-yellow-600",
      bgColor: "bg-yellow-100",
    },
    { icon: Flame, name: "Fire", color: "text-red-500", bgColor: "bg-red-100" },
    {
      icon: Leaf,
      name: "Wood",
      color: "text-green-500",
      bgColor: "bg-green-100",
    },
  ];

  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-red-50 to-yellow-50">
      <main className="container mx-auto px-4 py-12">
      <motion.div 
              className="relative mb-4 md:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >

        <h1 className="text-4xl font-bold text-center text-red-800 mb-12">
        <motion.h1 
            className="text-5xl font-bold text-center text-red-800 mb-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
          Feng Shui Koi Consultation
          </motion.h1>
        </h1>

        <div className="max-w-4xl mx-auto">
          <div className="bg-white rounded-lg shadow-lg p-8 mb-12">
            <h2 className="text-2xl font-semibold text-center mb-2">
              Five Elements of Feng Shui
            </h2>
            <p className="text-center text-gray-600 mb-6">
              Discover the balance in your life
            </p>
            <div className="flex justify-between">
              {elements.map((element) => (
                <div
                  key={element.name}
                  className={`flex flex-col items-center p-4 rounded-full ${element.bgColor}`}
                >
                  <element.icon className={`h-12 w-12 ${element.color}`} />
                  <span className="mt-2 text-sm font-medium">
                    {element.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-lg shadow-lg p-8">
            <h2 className="text-2xl font-semibold mb-2">
              Personal Consultation Form
            </h2>
            <p className="text-gray-600 mb-6">
              Fill out this form to receive your personalized Feng Shui Koi
              advice
            </p>
            <form onSubmit={handleSubmit} className="space-y-6">
              <Input
                label="Full Name"
                type="text"
                name="fullname"
                value={formData.fullname}
                onChange={handleInputChange}
                required
              />
              <Input
                label="Email"
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
              />
              <Select
                label="Gender"
                name="gender"
                value={formData.gender}
                onChange={handleInputChange}  
                options={[
                  { value: "", label: "Select gender" },
                  { value: "male", label: "Male" },
                  { value: "female", label: "Female" },
                  { value: "other", label: "Other" },
                ]}
                required
              />
              <Select
                label="Year of Birth"
                name="yearOfBirth"
                value={formData.yearOfBirth}
                onChange={handleInputChange}
                options={[
                  { value: "", label: "Select year" },
                  ...years.map((year) => ({
                    value: year.toString(),
                    label: year.toString(),
                  })),
                ]}
                required
              />
              
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-2 px-4 rounded-md hover:bg-red-700 transition-colors flex items-center justify-center"
              >
                <Send className="mr-2 h-4 w-4" /> Request Consultation
              </button>
            </form>
          </div>
        </div>

        <div className="mt-16 text-center">
          <h2 className="text-3xl font-bold text-red-800 mb-6">
            Why Choose Feng Shui Koi?
          </h2>
          <p className="text-lg text-gray-700 mb-8 max-w-2xl mx-auto">
            Our expert consultants combine ancient Feng Shui wisdom with modern
            Koi breeding techniques to bring harmony and prosperity to your life
            and living spaces.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
            {[
              "Personalized Advice",
              "Holistic Approach",
              "Expert Guidance",
            ].map((title, index) => (
              <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                <h3 className="text-xl font-semibold mb-2">{title}</h3>
                <p className="text-gray-600">
                  {index === 0 &&
                    "Tailored Feng Shui and Koi recommendations based on your unique life fate and circumstances."}
                  {index === 1 &&
                    "We consider all aspects of your environment to create a balanced and harmonious living space."}
                  {index === 2 &&
                    "Our consultants are trained in both traditional Feng Shui practices and modern Koi care techniques."}
                </p>
              </div>
            ))}
          </div>
        </div>
        </motion.div>
      </main>
    </div>
  );
};

export default Consulting;
