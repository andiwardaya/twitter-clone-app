import { SparklesIcon } from "@heroicons/react/solid";
import { collection, onSnapshot, orderBy, query } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { db } from "../firebase";
import Input from "./Input";
import Post from "./Post";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  // MESSY
  // useEffect(() => {
  //   const unsubscribe = onSnapshot(
  //     query(collection(db, "posts"), orderBy("timestamp", "desc")),
  //     (snapshot) => {
  //       setPosts(snapshot.docs);
  //     }
  //   );

  //   return () => {
  //     unsubscribe();
  //   };
  // }, [db]);

  // CLEAN
  useEffect(
    () =>
      onSnapshot(
        query(collection(db, "posts"), orderBy("timestamp", "desc")),
        (snapshot) => {
          setPosts(snapshot.docs);
        }
      ),
    [db]
  );

  return (
    <div className="text-white flex-grow border-l border-r border-gray-700 max-w-2xl sm:ml-[73px] xl:ml-[350px]">
      {/* FEED HEADER */}
      <div className="flex items-center sm:justify-between border-b border-gray-700 text-[#d9d9d9] px-2 py-3 sticky top-0 z-50 bg-black">
        <h4 className="text-lg sm:text-xl font-bold">Home</h4>
        <div className="hoverAnimation flex items-center justify-center w-9 h-9 xl:px-0 ml-auto">
          <SparklesIcon className="h-5 text-white" />
        </div>
      </div>

      {/* FEED INPUT */}
      <Input />

      {/* FEED POST */}
      <div className="pb-72">
        {posts.map((post) => (
          <Post key={post.id} id={post.id} post={post.data()} />
        ))}
      </div>
    </div>
  );
};

export default Feed;
