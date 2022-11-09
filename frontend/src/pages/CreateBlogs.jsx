import Navbar from "../components/Navbar";
import axios from "axios";
import { useState } from "react";
export default function Example(props) {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [topics, setTopics] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(title, topics, content);
    axios
      .post("http://localhost:9090/blog/create-post", {
        topics,
        title,
        content,
      })
      .then((res) => alert("Post Created."))
      .catch((error) => alert("Post not created."));
  };

  return (
    <>
      <Navbar />
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
            <h2 className="mb-4 text-2xl lg:text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Create Blog
            </h2>
            <form onSubmit={handleSubmit}>
              <div className="mt-10">
                <h2 className="ml-32 flex mb-4 text-2xl lg:text-3xl tracking-tight font-semibold text-gray-900 dark:text-white">
                  Title -{" "}
                  <input
                    className="ml-6 relative block w-64 appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-base"
                    type="text"
                    onChange={(e) => setTitle(e.target.value)}
                    value={title}
                  />
                </h2>
                <h2 className="ml-20 flex mb-4 text-2xl lg:text-3xl tracking-tight font-semibold text-gray-900 dark:text-white">
                  Topic(s) -{" "}
                  <input
                    className="ml-6 relative block w-64 appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-base"
                    // className="ml-6 relative block w-64 appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-base"
                    type="text"
                    onChange={(e) => setTopics(e.target.value)}
                    value={topics}
                  />
                </h2>

                <h2 className="ml-20 flex text-2xl lg:text-3xl tracking-tight font-semibold text-gray-900 dark:text-white">
                  Content -{" "}
                  <input
                    className="ml-6 relative block w-64 appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-base"
                    // className="ml-6 relative block w-64 appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-base"
                    type="text"
                    onChange={(e) => setContent(e.target.value)}
                    value={content}
                  />
                  {/* <input
                    // className="h-32 ml-6 relative block w-64 appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-base"
                    className="h-32 ml-6 w-64 rounded-t-md border border-gray-300 px-3  text-gray-900 placeholder-gray-500   focus:ring-indigo-500 sm:text-base"
                    type="text"
                  /> */}
                </h2>
              </div>
              <button
                className="mt-10 ml-60 appearance-none rounded-none rounded-t-md border-8 border-red-1000 px-3 py-2 ml-40 flex mb-4 text-2xl lg:text-3xl tracking-tight font-semibold text-gray-900 dark:text-white"
                type="submit"
              >
                Create Post
              </button>
            </form>

            {/* <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
              All of my blog posts, which are mostly about programing.
            </p> */}
          </div>
          <div className="grid gap-8 lg:grid-cols-2"></div>
        </div>
      </section>
    </>
  );
}
