import axios from "axios";
import { useState } from "react";
import Navbar from "../components/Navbar";
export default function Example(props) {
  const [id, setId] = useState("000");
  const [modify, setModify] = useState("");

  if (props.data == null) {
    return <h1>loading</h1>;
  }
  const deletePost = async (e) => {
    // e.preventDefault();
    console.log("howdy2");
    console.log(id);
    axios
      .post("http://localhost:9090/blog/delete-post", {
        id: e,
      })
      .then((res) => {
        alert("Post deleted.");
        window.location.reload();
      })
      .catch((error) => alert("Post not deleted."));
  };

  const modifyPost = async (e) => {
    // e.preventDefault();
    console.log("howdy2");
    console.log(id);
    axios
      .post("http://localhost:9090/blog/modify-post", {
        id: e,
        content: modify,
      })
      .then((res) => {
        alert("Post Modified.");
        window.location.reload();
      })
      .catch((error) => {
        console.log(error);
        alert("Post not modified.");
      });
  };

  const eachPost = props.data.map((d) => {
    const id_in = Object.values(d)[0];
    const topics = Object.values(d)[1];
    const date = Object.values(d)[2];
    const title = Object.values(d)[3];
    const content = Object.values(d)[4];
    return (
      <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700 mb-32">
        <div className="flex justify-between items-center mb-5 text-gray-500">
          <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
            {/* <svg
                    className="mr-1 w-3 h-3"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg" 
                  >
                    <path
                      fillRule="evenodd"
                      d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z"
                      clipRule="evenodd"
                    />
                    <path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z" />
                  </svg> */}
            {topics}
          </span>
          <span className="text-sm">{date.slice(0, 10)}</span>
        </div>
        <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          <a href="#">{title}</a>
        </h2>
        <p className="mb-5 font-light text-gray-500 dark:text-gray-400">
          {content}
        </p>

        <div className="flex justify-between items-center">
          <div className="flex items-center space-x-4">
            {/* <img
              className="w-7 h-7 rounded-full"
              src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/avatars/jese-leos.png"
              alt="Jese Leos avatar"
            /> */}
            <button
              // onClick={() => {
              //   deletePost;
              //   setId(id_in);
              // }}
              onClick={() => {
                // console.log(id_in);
                // setId(id_in);
                deletePost(id_in);
              }}
              className="font-medium dark:text-white"
            >
              Delete
            </button>
            <div className="flex">
              <button
                // onClick={() => {
                //   deletePost;
                //   setId(id_in);
                // }}
                onClick={() => {
                  // console.log(id_in);
                  // setId(id_in);
                  modifyPost(id_in);
                }}
                className="font-medium dark:text-white"
              >
                Modify -
              </button>
              <input
                className="ml-2 appearance-none rounded-none rounded-t-md border-8 border-red-1000 flex tracking-tight font-semibold text-gray-900 dark:text-white"
                type="text"
                onChange={(e) => setModify(e.target.value)}
                value={modify}
              />
            </div>
          </div>
          {/* <a
            href="#"
            className="inline-flex items-center font-medium text-primary-600 dark:text-primary-500 hover:underline"
          >
            Read more
            <svg
              className="ml-2 w-4 h-4"
              fill="currentColor"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </a> */}
        </div>
      </article>
    );
  });

  return (
    <>
      <Navbar />
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
            <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Blog Posts
            </h2>
            <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">
              All of my blog posts, which are mostly about programming.
            </p>
          </div>
          {eachPost}
          <div className="grid gap-8 lg:grid-cols-2"></div>
        </div>
      </section>
    </>
  );
}
