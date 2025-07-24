import { Link } from "react-router-dom";

const NotFoundPage = () => {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center bg-gray-900 text-white px-4 text-center">
      <h1 className="text-7xl font-extrabold text-amber-400 mb-4">404</h1>
      <h2 className="text-2xl font-semibold mb-2 text-white/90">
        Divine Detour
      </h2>
      <p className="text-white/70 max-w-md mb-6">
        “The steps of a good man are ordered by the Lord...” — Psalm 37:23
        <br />
        <br />
        This page might not have been ordained to exist. But don’t worry —
        the message lives on. Let's guide you back to purpose and presence.
      </p>
      <Link
        to="/"
        className="inline-block bg-amber-500 text-black px-6 py-3 rounded-xl hover:bg-amber-600 transition"
      >
        Take Me Home
      </Link>
    </div>
  );
};

export default NotFoundPage;
