import { motion } from 'framer-motion'
import { Calendar, Clock, Mail, Phone, Upload, User } from 'lucide-react'
import React, { useState } from 'react'
import { Avatar, AvatarFallback, AvatarImage } from './ui/avatar'
import { Button } from './ui/button'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from './ui/card'
import { Input } from './ui/input'
import { Label } from './ui/label'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from './ui/select'

const Profile = () => {
    const initialUserData = {
        fullName: "John Doe",
        email: "john.doe@example.com",
        gender: "Male",
        birthYear: "1990",
        phoneNumber: "+1234567890",
        createdAt: "2023-01-01",
        avatarUrl: "https://github.com/shadcn.png"
      }
      
      
        const [userData, setUserData] = useState(initialUserData)
        const [isEditing, setIsEditing] = useState(false)
      
        const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          const { name, value } = e.target
          setUserData(prev => ({ ...prev, [name]: value }))
        }
      
        const handleSelectChange = (name: string) => (value: string) => {
          setUserData(prev => ({ ...prev, [name]: value }))
        }
      
        const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
          if (e.target.files && e.target.files[0]) {
            const file = e.target.files[0]
            const reader = new FileReader()
            reader.onloadend = () => {
              setUserData(prev => ({ ...prev, avatarUrl: reader.result as string }))
            }
            reader.readAsDataURL(file)
          }
        }

        const handleSubmit = (e: React.FormEvent) => {
            e.preventDefault()
            console.log('Updated user data:', userData)
            setIsEditing(false)
            // Here you would typically send the updated data to your backend
          }
        
  return (
   
    <div className="min-h-screen bg-gradient-to-br from-red-50 to-orange-50 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className="max-w-3xl mx-auto"
      >
        <Card>
          <CardHeader>
            <CardTitle className="text-2xl font-bold text-center text-red-800">User Profile</CardTitle>
            <CardDescription className="text-center">View and manage your profile information</CardDescription>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="flex justify-center">
                <Avatar className="w-32 h-32">
                  <AvatarImage src={userData.avatarUrl} alt={userData.fullName} />
                  <AvatarFallback>{userData.fullName.split(' ').map(n => n[0]).join('')}</AvatarFallback>
                </Avatar>
              </div>
              {isEditing && (
                <div className="flex justify-center">
                  <Label htmlFor="avatar-upload" className="cursor-pointer bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors">
                    <Upload className="inline-block w-4 h-4 mr-2" />
                    Change Avatar
                  </Label>
                  <Input id="avatar-upload" type="file" accept="image/*" className="hidden" onChange={handleAvatarChange} />
                </div>
              )}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="fullName">Full Name</Label>
                  <div className="flex">
                    <User className="w-5 h-5 text-gray-500 mr-2" />
                    <Input
                      id="fullName"
                      name="fullName"
                      value={userData.fullName}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="email">Email</Label>
                  <div className="flex">
                    <Mail className="w-5 h-5 text-gray-500 mr-2" />
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={userData.email}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="gender">Gender</Label>
                  <Select
                    disabled={!isEditing}
                    onValueChange={handleSelectChange('gender')}
                    defaultValue={userData.gender}
                  >
                    <SelectTrigger>
                      <SelectValue children />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Male">Male</SelectItem>
                      <SelectItem value="Female">Female</SelectItem>
                      <SelectItem value="Other">Other</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="birthYear">Birth Year</Label>
                  <div className="flex">
                    <Calendar className="w-5 h-5 text-gray-500 mr-2" />
                    <Input
                      id="birthYear"
                      name="birthYear"
                      type="number"
                      min="1900"
                      max={new Date().getFullYear()}
                      value={userData.birthYear}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="phoneNumber">Phone Number</Label>
                  <div className="flex">
                    <Phone className="w-5 h-5 text-gray-500 mr-2" />
                    <Input
                      id="phoneNumber"
                      name="phoneNumber"
                      type="tel"
                      value={userData.phoneNumber}
                      onChange={handleInputChange}
                      disabled={!isEditing}
                    />
                  </div>
                </div>
                <div>
                  <Label htmlFor="createdAt">Created At</Label>
                  <div className="flex">
                    <Clock className="w-5 h-5 text-gray-500 mr-2" />
                    <Input
                      id="createdAt"
                      name="createdAt"
                      value={userData.createdAt}
                      disabled
                    />
                  </div>
                </div>
              </div>
              <div className="flex justify-end space-x-4">
                {isEditing ? (
                  <>
                    <Button type="submit" className="bg-red-600 text-white hover:bg-red-700">
                      Save Changes
                    </Button>
                    <Button type="button" variant="outline" onClick={() => setIsEditing(false)}>
                      Cancel
                    </Button>
                  </>
                ) : (
                  <Button type="button" onClick={() => setIsEditing(true)}>
                    Edit Profile
                  </Button>
                )}
              </div>
            </form>
          </CardContent>
        </Card>
      </motion.div>
    </div>
  )
}


export default Profile