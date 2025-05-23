import React, { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import Breadcrumbs from "../../components/pageProps/Breadcrumbs";

const journalEntries = [
  {
    id: 1,
    title: "Behind the Scenes at ROBI Store",
    date: "May 12, 2025",
    summary:
      "Discover how ROBI Store curates its exclusive collections, from sourcing to shelf. Dive into the design process and meet the creative team.",
    image: "/images/journal1.jpg",
  },
  {
    id: 2,
    title: "Top 10 Customer Favorites of the Month",
    date: "May 5, 2025",
    summary:
      "Explore this month’s most loved items by our shoppers. From best-selling gadgets to trending fashion picks, check out what’s hot!",
    image: "/images/journal2.jpg",
  },
  {
    id: 3,
    title: "Sustainability at ROBI Store",
    date: "April 28, 2025",
    summary:
      "Learn about our commitment to eco-friendly packaging, ethical sourcing, and the steps we're taking to reduce our carbon footprint.",
    image: "/images/journal3.jpg",
  },
];

const Journal = () => {
  const location = useLocation();
  const [prevLocation, setPrevLocation] = useState("");

  useEffect(() => {
    setPrevLocation(location.state?.data || "Home");
  }, [location]);

  return (
    <div className="max-w-container mx-auto px-3">
      <Breadcrumbs title="Journals" prevLocation={prevLocation} />

      <div className="py-10">
        <h1 className="text-3xl font-bold text-center mb-4 text-primeColor">
          Insights & Stories from ROBI Store
        </h1>
        <p className="text-center text-base text-gray-600 max-w-2xl mx-auto mb-10">
          Stay updated with exclusive behind-the-scenes content, shopping trends,
          and customer favorites from ROBI Store. We're more than a store — we're
          a lifestyle.
        </p>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {journalEntries.map((entry) => (
            <div
              key={entry.id}
              className="bg-white shadow-md hover:shadow-lg rounded-lg overflow-hidden transition duration-300"
            >
              <img
                src={entry.image}
                alt={entry.title}
                className="w-full h-52 object-cover"
              />
              <div className="p-5">
                <p className="text-xs text-gray-400 mb-1">{entry.date}</p>
                <h2 className="text-lg font-semibold text-black mb-2 hover:text-primeColor duration-200">
                  {entry.title}
                </h2>
                <p className="text-sm text-gray-600 mb-4">{entry.summary}</p>
                <button className="text-primeColor hover:underline text-sm">
                  Read More →
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link to="/shop">
            <button className="bg-primeColor text-white px-8 py-2 rounded-md text-base hover:bg-black duration-300">
              Back to Shop
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Journal;
