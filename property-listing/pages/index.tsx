import Link from "next/link";
import Header from "../components/layout/Header";

export default function HomePage() {
  return (
    <div>
      {/* Hero Section */}
      <section
        className="h-[70vh] flex flex-col justify-center items-center text-center text-white bg-cover bg-center"
        style={{
          backgroundImage: `url('https://images.unsplash.com/photo-1507525428034-b723cf961d3e?w=1200&q=80')`,
        }}
      >
        <div className="bg-lack bg-opacity-50 p-8 rounded-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">
            Find Your Perfect Stay
          </h1>
          <p className="text-lg mb-6">
            Explore beautiful villas, resorts, and apartments across the world.
          </p>
          
          <Link
            href="/booking"
            className="bg-green-600 text-white px-6 py-3 rounded-lg hover:bg-green-700 transition"
          >
            Book a Villa Now
          </Link>
        </div>
      </section>

      {/* Info Section */}
      <section className="p-10 text-center max-w-3xl mx-auto">
        <h2 className="text-2xl font-semibold mb-4">Why Choose Us?</h2>
        <p className="text-gray-600">
          We make it easy to find and book your dream getaway with transparent prices, flexible booking options, and 2/7 customer support. Discover
          the best properties for your vaction - from beachfront villas to city apartments.
        </p>
      </section>
    </div>
  );
}