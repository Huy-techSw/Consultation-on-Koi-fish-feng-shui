import { motion } from 'framer-motion';
import { ArrowRight, Droplet, Flame, Leaf, Mountain, Wind } from 'lucide-react';

const SectionTitle = ({ children }:any) => (
    <h2 className="text-3xl font-semibold text-red-800 mb-4">{children}</h2>
  );
  
  const Paragraph = ({ children }:any) => (
    <p className="text-gray-700 mb-4">{children}</p>
  );
  
  const FengShuiElement = ({ icon: Icon, element, color }:any) => (
    <div className="flex flex-col items-center">
      <Icon className={`w-16 h-16 ${color} mb-2`} />
      <span className="text-lg font-semibold">{element}</span>
    </div>
  );

const LearnMore = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-red-50 to-yellow-50">
        <main className="container mx-auto px-4 py-12">
        <motion.h1 
            className="text-5xl font-bold text-center text-red-800 mb-8"
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
        <h1 className="text-5xl font-bold text-center text-red-800 mb-8">Understanding Feng Shui</h1>
        <p className="text-xl text-center text-gray-600 mb-12">
          Explore the ancient art of harmonizing individuals with their surrounding environment
        </p>
        </motion.h1>

        <motion.div 
              className="relative mb-4 md:mb-0"
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
        <article className="bg-white rounded-lg shadow-lg p-8 mb-16">
          <section className="mb-12">
            <SectionTitle>What is Feng Shui?</SectionTitle>
            <Paragraph>
              Feng Shui, which translates to "wind and water" in English, is an ancient Chinese practice that aims to harmonize individuals with their surrounding environment. It is based on the idea that the arrangement of objects in a space can affect the flow of chi or qi (life force energy), which in turn influences various aspects of a person's life, including health, wealth, and relationships.
            </Paragraph>
            <Paragraph>
              Originating over 3,000 years ago, Feng Shui was initially used to orient buildings and spiritually significant structures in relation to celestial objects and landforms. Today, it is widely applied in interior design, architecture, and even urban planning to create balanced and harmonious living spaces.
            </Paragraph>
          </section>

          <section className="mb-12">
            <SectionTitle>Core Principles of Feng Shui</SectionTitle>
            <Paragraph>
              Feng Shui is built upon several fundamental principles that guide its practice:
            </Paragraph>
            <ul className="list-disc list-inside mb-4 text-gray-700">
              <li className="mb-2">Chi: The vital life force energy that flows through all things</li>
              <li className="mb-2">Yin and Yang: The balance of opposing forces in nature</li>
              <li className="mb-2">Five Elements: Wood, Fire, Earth, Metal, and Water</li>
              <li className="mb-2">Bagua: An energy map used to analyze spaces</li>
              <li className="mb-2">Commanding Position: The ideal placement of important objects in a room</li>
            </ul>
            <Paragraph>
              By understanding and applying these principles, practitioners aim to create environments that support and enhance the well-being of those who inhabit them.
            </Paragraph>
          </section>

          <section className="mb-12">
            <SectionTitle>The Five Elements of Feng Shui</SectionTitle>
            <Paragraph>
              The Five Elements theory is a cornerstone of Feng Shui practice. Each element represents different aspects of nature and life, and they interact with each other in specific ways:
            </Paragraph>
            <div className="grid grid-cols-2 md:grid-cols-5 gap-4 mb-4">
              <FengShuiElement element="Wood" icon={Leaf} color="text-green-500" />
              <FengShuiElement element="Fire" icon={Flame} color="text-red-500" />
              <FengShuiElement element="Earth" icon={Mountain} color="text-yellow-600" />
              <FengShuiElement element="Metal" icon={Wind} color="text-gray-500" />
              <FengShuiElement element="Water" icon={Droplet} color="text-blue-500" />
            </div>
            <Paragraph>
              These elements are used to balance and harmonize spaces. For example, if a room feels too "fiery" (perhaps due to bright lighting or red colors), introducing water elements (like a small fountain or blue decor) can help create balance.
            </Paragraph>
          </section>

          <section className="mb-12">
            <SectionTitle>Applying Feng Shui in Modern Spaces</SectionTitle>
            <Paragraph>
              While Feng Shui has ancient roots, its principles can be readily applied to modern living spaces:
            </Paragraph>
            <ul className="list-disc list-inside mb-4 text-gray-700">
              <li className="mb-2">Declutter regularly to allow chi to flow freely</li>
              <li className="mb-2">Use the Bagua map to optimize the energy in different areas of your home</li>
              <li className="mb-2">Position your bed, desk, and stove in commanding positions</li>
              <li className="mb-2">Incorporate natural elements and materials in your decor</li>
              <li className="mb-2">Use colors intentionally to activate different energies in your space</li>
            </ul>
            <Paragraph>
              Remember, the goal of Feng Shui is to create a space that feels balanced, harmonious, and supportive of your goals and well-being.
            </Paragraph>
          </section>

          <section>
            <SectionTitle>The Role of Koi in Feng Shui</SectionTitle>
            <Paragraph>
              Koi fish hold a special place in Feng Shui practices. These colorful carp are believed to bring good fortune, abundance, and positive energy to their surroundings. In Feng Shui, water represents wealth and prosperity, and koi swimming in a pond or depicted in artwork are thought to activate and enhance these energies.
            </Paragraph>
            <Paragraph>
              Different colors of koi are associated with various types of luck:
            </Paragraph>
            <ul className="list-disc list-inside mb-4 text-gray-700">
              <li className="mb-2">Black: Protection against negative energy</li>
              <li className="mb-2">Red: Love and relationships</li>
              <li className="mb-2">Gold: Wealth and prosperity</li>
              <li className="mb-2">Blue: Tranquility and calmness</li>
            </ul>
            <Paragraph>
              Incorporating koi elements in your space, whether through a live pond, artwork, or symbolic representations, can be a powerful way to enhance the Feng Shui of your environment.
            </Paragraph>
          </section>
        </article>
        </motion.div>

        <section className="text-center">
          <h2 className="text-3xl font-semibold text-red-800 mb-6">Start Your Feng Shui Journey</h2>
          <p className="text-xl text-gray-700 mb-8">
            Discover how Feng Shui can improve your life through professional consultation
          </p>
          <a
            href="/consulting"
            className="inline-flex items-center bg-red-600 text-white py-3 px-8 rounded-full text-lg font-semibold hover:bg-red-700 transition-colors"
          >
            Book a Consultation <ArrowRight className="ml-2 h-5 w-5" />
          </a>
        </section>
      </main>
     </div>
  )
}

export default LearnMore