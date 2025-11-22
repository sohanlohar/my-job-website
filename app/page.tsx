
"use client";
import { useEffect, useState } from "react";
import { db } from "./firebaseConfig";
import { collection, getDocs } from "firebase/firestore";
import type { Post } from "./models/post";


export default function Home() {
  const [posts, setPosts] = useState<Post[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        if (!db) {
          console.error("Firestore 'db' is not initialized. Check firebaseConfig and env vars.");
          setLoading(false);
          return;
        }
        const querySnapshot = await getDocs(collection(db, "posts"));
        const postsData: Post[] = querySnapshot.docs.map(doc => doc.data() as Post);
        setPosts(postsData);
      } catch (err) {
        console.error("Error fetching posts:", err);
      } finally {
        setLoading(false);
      }
    };
    fetchPosts();
  }, []);

  return (
    <div className="min-h-screen bg-zinc-50 font-sans dark:bg-black py-8">
      <div className="max-w-3xl mx-auto px-4">
        <h1 className="text-3xl font-bold mb-8 text-center">Job Posts</h1>
        {loading ? (
          <p className="text-center">Loading...</p>
        ) : posts.length === 0 ? (
          <p className="text-center">No posts found.</p>
        ) : (
          <div className="space-y-6">
            {posts.map((post, idx) => (
              <div key={idx} className="bg-white dark:bg-zinc-900 rounded-lg shadow p-6">
                <h2 className="text-xl font-semibold mb-2">{post.title}</h2>
                <p className="text-sm text-gray-500 mb-1">Experience: {post.experience}</p>
                <p className="mb-2">{post.description}</p>
                <div className="mb-2">
                  <span className="font-medium">Required Skills:</span>
                  <ul className="list-disc list-inside ml-4">
                    {post.requiredSkills?.map((skill, i) => (
                      <li key={i}>{skill}</li>
                    ))}
                  </ul>
                </div>
                <a
                  href={post.applyUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block mt-2 px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 transition"
                >
                  Apply Now
                </a>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
