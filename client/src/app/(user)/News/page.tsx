"use client";

import { useState, useEffect } from "react";
import axios from "axios";
import toast, { Toaster } from "react-hot-toast";
import Link from "next/link";

interface News {
  _id: string;
  title: string;
  description: string;
  author: string;
  image: string;
}

const AddNewsPage = () => {
  const [newsList, setNewsList] = useState<News[]>([]);

  useEffect(() => {
    fetchNews();
  }, []);

  const fetchNews = async () => {
    try {
      const res = await axios.get("http://localhost:5000/api/news");
      setNewsList(res.data);
    } catch (err) {
      console.error("Fetch news error", err);
      toast.error("Could not load news");
    }
  };

  const handle = (id: string) => {
    console.log("Learn more clicked for ID:", id);
    // You can replace this with navigation like: router.push(`/news/${id}`)
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-b ">
      <Toaster position="top-center" />

      <main className="max-w-5xl mx-auto px-4 py-10 flex-grow">
        <h2 className="text-4xl font-bold mb-10 text-center">
          📢 Health Tips & News
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 mt-5">
          {newsList.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
            >
              <img
                src={`http://localhost:5000${item.image}`}
                alt={item.title}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <h3 className="text-xl font-bold">{item.title}</h3>
                <p className="text-sm text-gray-600 mb-2">By {item.author}</p>
                <p className="text-sm text-gray-700 line-clamp-3">
                  {item.description}
                </p>
                <div className="flex justify-end mt-4">
                  <Link
                    href={`/news/${item._id}`}
                    className="bg-blue-600 hover:bg-blue-700 text-decoration-none text-white text-sm px-4 py-2 rounded-lg font-semibold"
                  >
                    Learn More
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
};

export default AddNewsPage;
