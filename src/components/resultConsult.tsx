import { Clock, Compass, DollarSign, Droplet, Flame, Leaf, Mountain, Ruler, Wind } from "lucide-react";
import { useEffect, useState } from "react";
import { KoiFish } from "../interfaces/KoiFish/fishResponse";
import koiFishApi from "../services/koiFishApi";

const mockResults = {
    fullname: "Nguyễn Văn A",
    email: "nguyenvana@example.com",
    gender: "Male",
    yearOfBirth: "1985",
    lifeFate: "Water Dragon",
    recommendedKoi: [
      {
        fishName: "Kohaku",
        breeds: "Japanese Koi",
        fishElement: "Fire",
        color: "Red and White",
        size: "60-70 cm",
        priceRange: "$1000 - $5000",
        lifespan: "25-35 years",
        link: "https://cdn0497.cdn4s.com/media/n026%20(2).png"
      },
      {
        fishName: "Showa",
        breeds: "Japanese Koi",
        fishElement: "Earth",
        color: "Black, Red, and White",
        size: "65-75 cm",
        priceRange: "$1500 - $7000",
        lifespan: "30-40 years",
        link: "https://cdn0497.cdn4s.com/media/sankee%20nh%E1%BA%ADn%20bi%E1%BA%BFt.jpg"
      }
    ],
    pondDesign: {
      shape: "Curved",
      position: "Southeast corner of the garden",
      direction: "Facing North",
      element: "Water",
      size: "Medium (10-15 feet)",
      pondMaterial: "Concrete with natural stone lining",
      waterSource: "Natural spring",
      filterType: "Biological and mechanical",
      compatibleFish: "Koi, Goldfish, Butterfly Koi",
      maintenanceLevel: "Moderate",
      material: "Natural stone and wood accents",
      link: "https://media.istockphoto.com/id/1196211289/vi/anh/c%E1%BA%ADn-c%E1%BA%A3nh-thi%E1%BA%BFt-k%E1%BA%BF-c%E1%BA%A3nh-quan-khu-v%C6%B0%E1%BB%9Dn-nh%C3%A0-c%E1%BA%A3nh-quan-tuy%E1%BB%87t-%C4%91%E1%BA%B9p-v%E1%BB%9Bi-ao-nh%E1%BB%8F-v%C3%A0-th%C3%A1c-n%C6%B0%E1%BB%9Bc.jpg?s=1024x1024&w=is&k=20&c=mNQQb4ihn8KkULwcVWWmlwZqip3F6Lf4lfHrZIZR6QY="
    }
  };
  
  const ElementIcon = ({ element }: { element: string }) => {
    const icons = {
      Water: Droplet,
      Metal: Wind,
      Earth: Mountain,
      Fire: Flame,
      Wood: Leaf,
    };
    const Icon = icons[element as keyof typeof icons] || Leaf;
    return <Icon className="w-6 h-6 mr-2" />;
  };
  
  const InfoCard = ({ title, children, className = "" }:any) => (
    <div className={`bg-white rounded-lg shadow-lg p-6 ${className}`}>
      <h2 className="text-2xl font-semibold mb-4 text-red-800">{title}</h2>
      {children}
    </div>
  )
  console.log(InfoCard)


const ResultConsult = () => {
    const [isModalOpen, setModalOpen] = useState(false);
    const [fishes, setFishes] = useState<KoiFish[]>([]);

    const openModal = () => {
      setModalOpen(true);
    };
  
    const closeModal = () => {
      setModalOpen(false);
    };

    const fetchKoiFish = async () => {
      const response = (await koiFishApi.getAllFish());
      console.log("fish ne", response);
      setFishes(response.data);
    };
  
    useEffect(() => {
      fetchKoiFish();
    }, []);

  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-yellow-50">
        <main className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold text-center text-red-800 mb-12">Your Feng Shui Koi Consultation Results</h1>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Personal Information</h2>
          <div className="grid grid-cols-2 gap-4">
            <p><strong>Name:</strong> {mockResults.fullname}</p>
            <p><strong>Email:</strong> {mockResults.email}</p>
            <p><strong>Gender:</strong> {mockResults.gender}</p>
            <p><strong>Year of Birth:</strong> {mockResults.yearOfBirth}</p>
            <p><strong>Life Fate:</strong> {mockResults.lifeFate}</p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8 mb-8">
          <h2 className="text-2xl font-semibold mb-4">Recommended Koi</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {mockResults.recommendedKoi.map((koi, index) => (
              <div key={index} className="border border-gray-200 rounded-lg p-4">
                <h3 className="text-xl font-semibold mb-2">{koi.fishName}</h3>
                <div className="space-y-2">
                  <p><strong>Breed:</strong> {koi.breeds}</p>
                  <p><strong>Element:</strong> <ElementIcon element={koi.fishElement} />{koi.fishElement}</p>
                  <p><strong>Color:</strong> {koi.color}</p>
                  <p><strong>Size:</strong> <Ruler className="inline w-4 h-4 mr-1" />{koi.size}</p>
                  <p><strong>Price:</strong> <DollarSign className="inline w-4 h-4 mr-1" />{koi.priceRange}</p>
                  <p><strong>Lifespan:</strong> <Clock className="inline w-4 h-4 mr-1" />{koi.lifespan}</p>
                </div>
                <img 
                  src={koi.link} 
                  alt={koi.fishName} 
                  className="mt-4 w-full h-40 object-cover rounded"
                />
              </div>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto bg-white rounded-lg shadow-lg p-8">
          <h2 className="text-2xl font-semibold mb-4">Recommended Pond Design</h2>
          <div className="grid grid-cols-2 gap-4 mb-4">
            <p><strong>Shape:</strong> {mockResults.pondDesign.shape}</p>
            <p><strong>Position:</strong> {mockResults.pondDesign.position}</p>
            <p><strong>Direction:</strong> <Compass className="inline w-4 h-4 mr-1" />{mockResults.pondDesign.direction}</p>
            <p><strong>Element:</strong> <ElementIcon element={mockResults.pondDesign.element} />{mockResults.pondDesign.element}</p>
            <p><strong>Size:</strong> {mockResults.pondDesign.size}</p>
            <p><strong>Water Source:</strong> {mockResults.pondDesign.waterSource}</p>
            <p><strong>Filter Type:</strong> {mockResults.pondDesign.filterType}</p>
            <p><strong>Compatible Fish:</strong> {mockResults.pondDesign.compatibleFish}</p>
            <p><strong>Maintenance Level:</strong> {mockResults.pondDesign.maintenanceLevel}</p>
            <p><strong>Material:</strong> {mockResults.pondDesign.material}</p>
          </div>
          <div className="mt-6">
            <img
              src={mockResults.pondDesign.link}
              alt="Recommended Pond Design"
              className="w-full h-64 object-cover rounded cursor-pointer"
              onClick={openModal} // Open modal on click
            />
          </div>
          </div>
          
          {isModalOpen && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
            <div className="bg-white p-4 rounded-lg max-w-lg mx-auto relative">
              <button onClick={closeModal} className="absolute top-2 right-2 text-black text-xl">&times;</button>
              <img
                src={mockResults.pondDesign.link}
                alt="Pond Design Enlarged"
                className="w-full h-auto rounded"
              />
            </div>
          </div>
        )}
        
      </main>

    </div>
  )
  }

export default ResultConsult






