import { Link } from "react-router-dom";

const currentYear = new Date().getFullYear();
const availableYears = Array.from({ length: 5 }, (_, i) => currentYear - i);

const SermonArchiveHome = () => {
  return (
    <main className="min-h-screen text-white flex flex-col items-center justify-center px-6 py-16">
      <h1 className="text-4xl md:text-5xl font-bold text-center mb-4">
        Welcome to the Sermon Archive
      </h1>

      <p className="text-lg md:text-xl text-white/80 mb-12 text-center max-w-2xl">
        Dive into the Spirit-filled teachings of Reverend Michaelight Anjorin.<br />
        Choose a year to explore the sermons delivered then.
      </p>

      <div className="grid gap-6 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5">
        {availableYears.map((year) => (
          <Link
            to={`/sermons/${year}`}
            key={year}
            className="bg-gradient-to-br from-white/10 to-white/5 hover:from-white/20 hover:to-white/10
              text-white text-xl font-semibold py-5 px-8 rounded-2xl shadow-lg 
              hover:scale-105 transition-all duration-300 text-center border border-white/10"
          >
            {year}
          </Link>
        ))}
      </div>
    </main>
  );
};

export default SermonArchiveHome;
