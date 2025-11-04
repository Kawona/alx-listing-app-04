import axios from "axios"
import { useEffect, useState } from "react";
import Link from "next/link";
import Header from "../components/layout/Header";
import PropertyCard from "@/components/property/PropertyCard";



export default function HomePage() {

  const [properties, setProperties] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

useEffect(() => {
  const fetchProperties = async () => {
    try {
      const response = await axios.get("/api/properties");
      setProperties(response.data);
    } catch (error) {
      console.error("Error fetching properties:", error);
      setError("Failed to load properties. please try again later.")
    } finally {
      setLoading(false);
    }
  };

  fetchProperties();
}, []);
  
  
  if (loading) return <p className="text-center mt-10">Loading properties...</p>;
  if (error) return <p className="text-center text-red-500 mt-10">{error}</p>
  
  return (
    <div className="grid grid-cols-3 gap-4">
      {properties.map((property) => (
        <PropertyCard key={property.id} property={property} />
      ))}
    </div>
  );
}