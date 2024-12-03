import { motion } from "framer-motion"; // Importing motion for animation
import { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Label } from "../ui/label";

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    gender: '',
    birthYear: '',
    phoneNumber: '',
  });
  const [avatar, setAvatar] = useState<File | null>(null);
  const [avatarName, setAvatarName] = useState<string>('No file selected'); 

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSelectChange = (value: string) => {
    setFormData((prev) => ({ ...prev, gender: value }));
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setAvatar(e.target.files[0]);
      setAvatarName(e.target.files[0].name); 
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    console.log('Avatar:', avatar);
    // Here you would typically send the form data to your backend
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 flex items-center justify-center p-4">
      <motion.div
        className="bg-white rounded-lg shadow-xl p-8 max-w-md w-full"
        initial={{ opacity: 0, y: 20 }} // Initial state for animation
        animate={{ opacity: 1, y: 0 }}  // Final state for animation
        transition={{ duration: 0.6 }}   // Duration of the animation
      >
        <h1 className="text-3xl font-bold text-center text-red-800 mb-6">Register</h1>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <Label htmlFor="fullName">Full Name</Label>
            <Input
              id="fullName"
              name="fullName"
              value={formData.fullName}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="email">Email</Label>
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
            <Label htmlFor="gender">Gender</Label>
            <select
              id="gender"
              name="gender"
              value={formData.gender}
              onChange={(e) => handleSelectChange(e.target.value)}
              className="block w-full border border-gray-300 rounded-md p-2"
              required
            >
              <option value="" disabled>
                Select gender
              </option>
              <option value="male">Male</option>
              <option value="female">Female</option>
              <option value="other">Other</option>
            </select>
          </div>

          <div>
            <Label htmlFor="birthYear">Birth Year</Label>
            <Input
              id="birthYear"
              name="birthYear"
              type="number"
              min="1900"
              max={new Date().getFullYear()}
              value={formData.birthYear}
              onChange={handleInputChange}
              required
            />
          </div>
          <div>
            <Label htmlFor="phoneNumber">Phone Number</Label>
            <Input
              id="phoneNumber"
              name="phoneNumber"
              type="tel"
              value={formData.phoneNumber}
              onChange={handleInputChange}
              required
            />
          </div>

          <div>
            <Label htmlFor="avatar">Avatar</Label>
            <div className="flex items-center gap-2">
              {/* Hidden File Input */}
              <input
                id="avatar"
                name="avatar"
                type="file"
                accept="image/*"
                onChange={handleAvatarChange}
                className="hidden"
              />
              {/* Wrap the Button in a label */}
              <label
                htmlFor="avatar"
                className="text-red-600 border border-red-600 hover:bg-red-600 hover:text-white px-4 py-2 rounded cursor-pointer"
              >
                Choose file
              </label>
              {/* Display selected file name */}
              <span>{avatarName}</span>
            </div>
          </div>

          <Button type="submit" className="w-full bg-red-600 hover:bg-red-700 text-white">
            Register
          </Button>
        </form>
      </motion.div>
    </div>
  );
};

export default RegisterForm;
