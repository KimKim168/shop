"use client";
import { useRouter } from "next/router";
import React, { useEffect, useState } from "react";

export default function PostDetailPage() {
  const router = useRouter();
  const { id } = router.query; // Extract `id` from the route
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (id) {
      const fetchPost = async () => {
        try {
          const res = await fetch(
            `https://bunjun.brolong.pro/api/products/${id}`
          );
          const data = await res.json();
          setPost(data.data); // Assuming `data.data` contains the post details
        } catch (error) {
          console.error("Error fetching post:", error);
        } finally {
          setLoading(false);
        }
      };

      fetchPost();
    }
  }, [id]);

  if (loading) {
    return <p>Loading...</p>;
  }

  if (!post) {
    return <p>Post not found.</p>;
  }

  return (
    <div className="max-w-2xl mx-auto p-6">
      <div className="p-6 bg-white border border-gray-300 rounded-lg shadow-md">
        <img
          src={`https://bunjun.brolong.pro/assets/images/products/${post.image}`}
          alt={post.name}
          className="w-full h-64 object-cover rounded-t-lg mb-4"
        />
        <h1 className="text-2xl font-bold text-gray-900 mb-4">{post.name}</h1>
        <p className="text-lg text-gray-700 mb-2">Price: {post.price}</p>
        <p className="text-gray-600">{post.description}</p>
      </div>
    </div>
  );
}
