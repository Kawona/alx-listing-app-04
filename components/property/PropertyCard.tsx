import Link from "next/link";

interface Property {
    id: number;
    title: string;
    location: string;
    pricePerNight: number;
    imageUrl: string;
}

export default function PropertyCard({ property }: { property: Property }) {
  return (
    <Link href={`/properties/${property.id}`}>
      <div className="border rounded-lg shadow hover:shadow-lg transition overflow-hidden cursor-pointer bg-white">
        <img
          src={property.imageUrl}
          alt={property.title}
          className="w-full h-48 object-cover"
        />
        <div className="p-4">
          <h2 className="text-lg font-semibold">{property.title}</h2>
          <p className="text-gray-600">{property.location}</p>
          <p className="text-green-600 font-bold mt-2">
            ${property.pricePerNight} / night
          </p>
        </div>
      </div>
    </Link>
  );
}