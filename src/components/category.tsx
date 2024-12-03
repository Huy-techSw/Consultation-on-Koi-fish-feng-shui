import { AnimatePresence, motion } from 'framer-motion';
import { ChevronDown, ChevronUp, Info, Search } from 'lucide-react';
import { useState } from 'react';

  const ShowcaseNavbar = () => {
      // Assume ShowcaseNavbar is defined in another file
      return <nav>...</nav>;
    };
    
    const KoiCard = ({ name, type, color, image, description }:any) => {
      const [isExpanded, setIsExpanded] = useState(false);
    
      return (
        <motion.div
          layout
          className="bg-white rounded-lg shadow-lg overflow-hidden transform transition-all duration-300 hover:scale-105"
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5 }}
        >
          <div className="relative">
          <img
            src={image}
            alt={name}
            className="h-48 w-full object-contain object-center"
          />

            <div className="absolute top-0 left-0 bg-red-600 text-white px-2 py-1 text-sm font-semibold">
              {type}
            </div>
          </div>
          <div className="p-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{name}</h3>
            <AnimatePresence>
              {isExpanded && (
                <motion.div
                  initial={{ opacity: 0, height: 0 }}
                  animate={{ opacity: 1, height: 'auto' }}
                  exit={{ opacity: 0, height: 0 }}
                  transition={{ duration: 0.3 }}
                >
                  <p className="text-sm text-gray-600 mb-1">Color: {color}</p>
                  <p className="text-sm text-gray-600 mb-2">{description}</p>
                </motion.div>
              )}
            </AnimatePresence>
            <motion.button
              className="mt-2 text-red-600 flex items-center justify-center w-full bg-red-100 py-2 rounded-md"
              onClick={() => setIsExpanded(!isExpanded)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              {isExpanded ? (
                <>
                  <ChevronUp className="mr-1" /> Less info
                </>
              ) : (
                <>
                  <ChevronDown className="mr-1" /> More info
                </>
              )}
            </motion.button>
          </div>
        </motion.div>
      );
    };
    
    const FilterButton = ({ children, isActive, onClick }:any) => (
      <motion.button
        className={`px-4 py-2 rounded-full ${
          isActive ? 'bg-red-600 text-white' : 'bg-gray-200 text-gray-800'
        }`}
        onClick={onClick}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        {children}
      </motion.button>
    );
    
  const Category = () => {
      
    const [searchTerm, setSearchTerm] = useState('');
    const [activeFilter, setActiveFilter] = useState('All');
    const [showInfo, setShowInfo] = useState(false);

    const koiList = [
      {
        "name": "Asagi",
        "type": "Popular",
        "color": "Blue and Red",
        "image": "https://www.kodamakoifarm.com/wp-content/uploads/2019/02/asagi-koi-135x200-v1.jpg",
        "description": "The Asagi has a light blue body with red markings on the sides."
      },
      {
        "name": "Bekko",
        "type": "Popular",
        "color": "White, Red, or Yellow with Black Markings",
        "image": "https://www.kodamakoifarm.com/wp-content/uploads/2018/03/Bekko.jpg",
        "description": "Bekko koi have a solid body color with black sumi markings."
      },
      {
        "name": "Doitsu",
        "type": "Rare",
        "color": "Varies",
        "image": "https://www.kodamakoifarm.com/wp-content/uploads/2018/03/Doitsu.jpg",
        "description": "Doitsu koi are scaleless, often with a smooth, sleek appearance."
      },
      {
        "name": "Ginrin",
        "type": "Rare",
        "color": "Metallic, Sparkling Scales",
        "image": "https://www.kodamakoifarm.com/wp-content/uploads/2018/03/Ginrin-1.jpg",
        "description": "Ginrin koi have scales that sparkle in the light, creating a beautiful glitter effect."
      },
      {
        "name": "Goshiki",
        "type": "Very Rare",
        "color": "White with Black, Red, and Blue",
        "image": "https://www.kodamakoifarm.com/wp-content/uploads/2018/03/Goshiki.jpg",
        "description": "Goshiki koi have five colors on their body: white, black, red, blue, and gray."
      },
      {
        "name": "Hirenaga (Butterfly)",
        "type": "Popular",
        "color": "Various",
        "image": "https://www.kodamakoifarm.com/wp-content/uploads/2018/03/Hirenaga.jpg",
        "description": "Hirenaga koi are known for their long, flowing fins and tails."
      },
      {
        "name": "Kawarimono",
        "type": "Rare",
        "color": "Varies",
        "image": "https://www.kodamakoifarm.com/wp-content/uploads/2018/03/Kawarimono.jpg",
        "description": "Kawarimono is a category for koi with unique or unusual patterns."
      },
      {
        "name": "Kikokuryu",
        "type": "Very Rare",
        "color": "Black and White",
        "image": "https://www.kodamakoifarm.com/wp-content/uploads/2018/03/Hirenaga-koi.jpg",
        "description": "Kikokuryu are metallic koi with contrasting black and white colors."
      },
      {
        "name": "Ogon",
        "type": "Very Rare",
        "color": "Metallic Gold or Platinum",
        "image": "https://www.kodamakoifarm.com/wp-content/uploads/2019/02/ogon-koi-135x200-v1.jpg",
        "description": "Ogon koi have a solid metallic color, typically gold or platinum."
      },
      {
        "name": "Platinum",
        "type": "Popular",
        "color": "Pure White, Metallic",
        "image": "https://www.kodamakoifarm.com/wp-content/uploads/2019/02/platinum-koi-135x200-v1.jpg",
        "description": "Platinum koi have a shiny white color with a metallic finish."
      },
      {
        "name": "Tancho",
        "type": "Very Rare",
        "color": "White with a Red Spot on the Head",
        "image": "https://www.kodamakoifarm.com/wp-content/uploads/2019/02/tancho-koi-135x200-v1.jpg",
        "description": "Tancho koi are known for their white body and a single red mark on the head."
      },
      {
        "name": "Utsurimono",
        "type": "Rare",
        "color": "Black with Red, White, or Yellow",
        "image": "https://www.kodamakoifarm.com/wp-content/uploads/2018/03/Utsurimono.jpg",
        "description": "Utsurimono koi have a black body with white, red, or yellow markings."
      },
      {
        "name": "Kohaku",
        "type": "Popular",
        "color": "White body with red patterns",
        "image": "https://www.kodamakoifarm.com/wp-content/uploads/2018/03/Kohaku.jpg",
        "description": "Kohaku koi have a pure white body with large red markings, often seen as the foundation of all koi varieties."
      },
      {
        "name": "Koromo",
        "type": "Rare",
        "color": "White with red patterns overlaid with black or blue reticulation",
        "image": "https://www.kodamakoifarm.com/wp-content/uploads/2018/03/Koromo.jpg",
        "description": "Koromo koi display a net-like pattern over their red patches, often giving them a distinctive look."
      },
      {
        "name": "Showa",
        "type": "Very Rare",
        "color": "Black with red and white markings",
        "image": "https://www.kodamakoifarm.com/wp-content/uploads/2018/03/Showa.jpg",
        "description": "Showa koi have a black base with striking red and white patterns, creating a balanced tri-color look."
      },
      {
        "name": "Shusui",
        "type": "Rare",
        "color": "Light blue with red sides and a line of scales along the dorsal",
        "image": "https://www.kodamakoifarm.com/wp-content/uploads/2019/02/shusui-koi-135x200-v1.jpg",
        "description": "Shusui koi are scaleless with a beautiful, distinctive line of scales on their backs, resembling the Asagi pattern."
      },
      {
        "name": "Taisho Sanke",
        "type": "Very Rare",
        "color": "White body with red and black markings",
        "image": "https://www.kodamakoifarm.com/wp-content/uploads/2018/03/Taisho-Sanke.jpg",
        "description": "Taisho Sanke koi, also known as Sanke, are similar to Kohaku but include black sumi markings, adding depth to their look."
      }
    ];

    const filteredKoi = koiList.filter(koi => 
      (activeFilter === 'All' || koi.type === activeFilter) &&
      koi.name.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
      <div className="bg-gradient-to-br from-red-50 to-orange-50 min-h-screen">
        <ShowcaseNavbar />

        <main className="container mx-auto px-4 py-8">
          <motion.h1 
            className="text-5xl font-bold text-center text-red-800 mb-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            Koi Categories
          </motion.h1>

          <motion.p
            className="text-center text-gray-600 mb-8 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            Discover the beauty and elegance of various Koi types. Each Koi brings its unique charm and symbolism to your pond, enhancing the Feng Shui of your space.
          </motion.p>

          <div className="flex flex-col md:flex-row justify-between items-center mb-8">
            <motion.div 
              className="relative mb-4 md:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <input
                type="text"
                placeholder="Search Koi..."
                className="bg-white text-gray-800 rounded-full py-2 px-4 pl-10 focus:outline-none focus:ring-2 focus:ring-red-500 w-full md:w-64 shadow-md"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <Search className="h-5 w-5 text-gray-500 absolute left-3 top-1/2 transform -translate-y-1/2" />
            </motion.div>

            <motion.div 
              className="flex space-x-2 overflow-x-auto pb-2 md:pb-0"
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              <FilterButton isActive={activeFilter === 'All'} onClick={() => setActiveFilter('All')}>
                All
              </FilterButton>
              <FilterButton isActive={activeFilter === 'Popular'} onClick={() => setActiveFilter('Popular')}>
              Popular
              </FilterButton>
              <FilterButton isActive={activeFilter === 'Rare'} onClick={() => setActiveFilter('Rare')}>
              Rare
              </FilterButton>
              <FilterButton isActive={activeFilter === 'Very Rare'} onClick={() => setActiveFilter('Very Rare')}>
              Very Rare
              </FilterButton>
            </motion.div>
          </div>

          <motion.div 
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.6 }}
          >
            {filteredKoi.map((koi, index) => (
              <KoiCard key={index} {...koi} />
            ))}
          </motion.div>

          {filteredKoi.length === 0 && (
            <motion.p 
              className="text-center text-gray-600 mt-8 text-lg"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              No Koi found matching your search criteria. Try adjusting your filters or search term.
            </motion.p>
          )}

          <motion.div
            className="fixed bottom-4 right-4"
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
          >
            <button
              className="bg-red-600 text-white p-3 rounded-full shadow-lg"
              onClick={() => setShowInfo(!showInfo)}
            >
              <Info size={24} />
            </button>
          </motion.div>

          <AnimatePresence>
            {showInfo && (
              <motion.div
                className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
              >
                <motion.div
                  className="bg-white rounded-lg p-6 max-w-md"
                  initial={{ scale: 0.9, y: 50 }}
                  animate={{ scale: 1, y: 0 }}
                  exit={{ scale: 0.9, y: 50 }}
                >
                  <h2 className="text-2xl font-bold text-red-800 mb-4">About Koi Categories</h2>
                  <p className="text-gray-600 mb-4">
                    Koi fish are categorized based on their color patterns and scales. The main categories include:
                  </p>
                  <ul className="list-disc list-inside text-gray-600 mb-4">
                    <li>Gosanke: The "Big Three" (Kohaku, Showa, Sanke)</li>
                    <li>Kawarimono: "Changing" or non-Gosanke varieties</li>
                    <li>Hikarimoyo: Metallic koi with patterns</li>
                  </ul>
                  <p className="text-gray-600 mb-4">
                    Each type of Koi has its own unique characteristics and symbolism in Feng Shui.
                  </p>
                  <button
                    className="bg-red-600 text-white px-4 py-2 rounded-md"
                    onClick={() => setShowInfo(false)}
                  >
                    Close
                  </button>
                </motion.div>
              </motion.div>
            )}
          </AnimatePresence>
        </main>
      </div>
    );
  }

  export default Category