import { useParams, Link } from "react-router-dom";

const months = [
  "January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December",
];

const YearPage = () => {
  const { year } = useParams();

  return (
    <main className="min-h-screen bg-[#0b0c10] text-white px-6 py-16">
      <h1 className="text-3xl font-bold text-center mb-6">
        Sermons for {year}
      </h1>

      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 max-w-5xl mx-auto">
        {months.map((month) => (
          <div
            key={month}
            className="bg-white/10 text-white text-lg py-6 px-4 rounded-xl text-center
                       hover:bg-white/20 transition-all duration-300 cursor-pointer"
          >
            {month}
            {/* Optional future link: */}
            {/* <Link to={`/sermons/${year}/${month.toLowerCase()}`}>{month}</Link> */}
          </div>
        ))}
      </div>
    </main>
  );
};

export default YearPage;
