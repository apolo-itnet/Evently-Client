import React from "react";
import { Link } from "react-router";

const NotFoundPage = () => {
  return (
    <div className="h-screen mx-auto">
      <section className="flex items-center h-full p-16 bg-gray-900 dark:bg-gray-50 text-gray-100 dark:text-gray-800">
        <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
          <div className="max-w-md text-center">
            <h2 className="mb-8 font-extrabold text-9xl text-gray-600 dark:text-gray-400">
              <span className="sr-only">Error</span>404
            </h2>
            <p className="text-2xl font-semibold md:text-3xl">
              Sorry, we couldn't find this page.
            </p>
            <p className="mt-4 mb-8 text-gray-400 dark:text-gray-600">
              But dont worry, you can find plenty of other things on our
              homepage.
            </p>
            <Link
              to={"/"}
              className="py-6 px-6 inline-flex justify-center items-center gap-x-2 text-base font-medium rounded-lg btn-secondary btn text-white"
            >
              Back to homepage
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default NotFoundPage;
