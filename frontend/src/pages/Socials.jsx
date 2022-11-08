import Navbar from "../components/Navbar";
export default function Example(props) {
  return (
    <>
      <Navbar />
      <section className="bg-white dark:bg-gray-900">
        <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
          <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
            <h2 className="mb-4 text-2xl lg:text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Socials
            </h2>
            <div className="mt-10">
              <h2 className="ml-40 flex mb-4 text-2xl lg:text-3xl tracking-tight font-semibold text-gray-900 dark:text-white">
                Email -{" "}
                <p className="font-light">&nbsp; p.prahas[dot]protonmail.com</p>
              </h2>
              <a
                href="https://github.com/pprahas"
                target="_blank"
                className="mt-10 ml-36 flex mb-4 text-2xl lg:text-3xl tracking-tight font-semibold text-gray-900 dark:text-white"
              >
                GitHub - <p className="font-light">&nbsp; pprahas</p>
              </a>
              <a
                href="https://www.linkedin.com/in/pprahas/"
                target="_blank"
                className="mt-10 ml-32 flex mb-4 text-2xl lg:text-3xl tracking-tight font-semibold text-gray-900 dark:text-white"
              >
                LinkedIn -{" "}
                <p className="font-light">&nbsp; p.prahas@protonmail.com</p>
              </a>
              <a
                href="https://www.linkedin.com/in/pprahas/"
                target="_blank"
                className="mt-10 ml-32 flex mb-4 text-2xl lg:text-3xl tracking-tight font-semibold text-gray-900 dark:text-white"
              >
                Discord - <p className="font-light">&nbsp; prado#1046</p>
              </a>
            </div>

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
