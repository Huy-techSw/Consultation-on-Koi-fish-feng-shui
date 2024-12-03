import { ArrowRight, Calendar, Search, User } from "lucide-react";
import { useState } from "react";
import { Button } from "./ui/button";
import { Input } from "./ui/input";

const BlogPost = ({
  title,
  excerpt,
  author,
  date,
  imageUrl,
  readTime,
}: any) => (
  <div className="bg-white rounded-lg shadow-md overflow-hidden">
    <img src={imageUrl} alt={title} className="w-full h-48 object-cover" />
    <div className="p-6">
      <h2 className="text-xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600 mb-4">{excerpt}</p>
      <div className="flex items-center text-sm text-gray-500 mb-4">
        <User className="w-4 h-4 mr-1" />
        <span className="mr-4">{author}</span>
        <Calendar className="w-4 h-4 mr-1" />
        <span className="mr-4">{date}</span>
        <span>{readTime} min read</span>
      </div>
      <Button className="flex items-center bg-black text-white">
        Read More
        <ArrowRight className="w-4 h-4 ml-2" />
      </Button>
    </div>
  </div>
);

const Blog = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const blogPosts = [
    {
      id: 1,
      title: "The Harmony of Koi and Feng Shui",
      excerpt:
        "Discover how Koi fish can enhance the energy flow in your home and garden according to Feng Shui principles. Learn about the ancient wisdom behind this practice.",
      author: "Li Wei",
      date: "June 15, 2023",
      imageUrl:
        "https://images.pexels.com/photos/2131828/pexels-photo-2131828.jpeg",
      readTime: 5,
      categories: ["Feng Shui", "Koi Care"],
    },
    {
      id: 2,
      title: "Choosing the Right Koi for Your Pond",
      excerpt:
        "Learn about different Koi varieties and how to select the best fish for your Feng Shui-inspired pond. Explore the symbolism behind various Koi colors and patterns.",
      author: "Akira Tanaka",
      date: "July 2, 2023",
      imageUrl:
        "https://images.pexels.com/photos/13093376/pexels-photo-13093376.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      readTime: 7,
      categories: ["Koi Selection", "Pond Design"],
    },
    {
      id: 3,
      title: "Balancing the Five Elements's Koi",
      excerpt:
        "Explore how to incorporate Koi into your Feng Shui practice to balance the five elements: Wood, Fire, Earth, Metal, and Water. Create harmony in your living space.",
      author: "Sarah Chen",
      date: "July 20, 2023",
      imageUrl:
        "https://images.pexels.com/photos/7565647/pexels-photo-7565647.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      readTime: 6,
      categories: ["Feng Shui", "Five Elements"],
    },
    {
      id: 4,
      title: "The Symbolism of Koi Colors in Feng Shui",
      excerpt:
        "Uncover the meanings behind different Koi colors and their significance in Feng Shui practices. Learn how to choose the right color combination for your goals.",
      author: "John Smith",
      date: "August 5, 2023",
      imageUrl:
        "https://images.pexels.com/photos/7677996/pexels-photo-7677996.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      readTime: 8,
      categories: ["Koi Colors", "Symbolism"],
    },
    {
      id: 5,
      title: "Designing a Feng Shui Koi Pond",
      excerpt:
        "Step-by-step guide to creating a Feng Shui-compliant Koi pond. Learn about ideal shapes, sizes, and locations to maximize positive energy in your outdoor space.",
      author: "Maria Rodriguez",
      date: "August 18, 2023",
      imageUrl:
        "https://images.pexels.com/photos/7906950/pexels-photo-7906950.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      readTime: 10,
      categories: ["Pond Design", "Feng Shui"],
    },
    {
      id: 6,
      title: "Koi Feeding Rituals for Prosperity",
      excerpt:
        "Discover the traditional Feng Shui rituals associated with feeding Koi and how they can attract wealth and prosperity to your life. Learn about the best feeding practices.",
      author: "Yuki Yamamoto",
      date: "September 1, 2023",
      imageUrl:
        "https://images.pexels.com/photos/3608394/pexels-photo-3608394.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1",
      readTime: 5,
      categories: ["Koi Care", "Prosperity"],
    },
  ];

  const filteredPosts = blogPosts.filter(
    (post) =>
      post.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.excerpt.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      post.categories.some((category) =>
        category.toLowerCase().includes(searchTerm.toLowerCase())
      )
  );
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-b from-red-50 to-yellow-50">
      <main className="flex-grow container mx-auto px-4 py-8">
        {/* <h1 className="text-3xl font-bold text-center text-red-800 mb-8">
          Feng Shui Koi Blog
        </h1> */}

        <div className="mb-8 relative">
          <Input
            type="text"
            placeholder="Search blog posts..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="pl-10"
          />
          <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
        </div>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {filteredPosts.map((post) => (
            <BlogPost key={post.id} {...post} />
          ))}
        </div>

        {filteredPosts.length === 0 && (
          <p className="text-center text-gray-600 mt-8">
            No blog posts found matching your search.
          </p>
        )}

        {filteredPosts.length > 0 &&
          filteredPosts.length < blogPosts.length && (
            <p className="text-center text-gray-600 mt-8">
              Showing {filteredPosts.length} of {blogPosts.length} blog posts.
            </p>
          )}

        <div className="mt-12 text-center bg-black text-white">
          <Button className="w-auto">Load More Posts</Button>
        </div>
      </main>
    </div>
  );
};

export default Blog;
