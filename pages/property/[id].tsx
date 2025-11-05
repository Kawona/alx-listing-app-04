import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";
import PropertyDetail from "@/components/property/PropertyDetail";

export default function PropertyDetail() {
  const router = useRouter();
  const { id } = router.query;

  const [property, setProperty] = useState(null);
  const [reviews, setReviews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {

    if (!id) return;

    
      try {
        const response = await axios.get(`/api/properties/{id}`);
        setProperty(response.data);
        
      } catch (error) {
        console.error("Error loading property details:", error);
       
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) {return <p className="text-center mt-10">Loading property...</p>;} 
  if (!property) { return <p className="text-center text-red-500 mt-10">Prpoerty not found</p>; } 
  
  return <PropertyDetail property={property} />;

}
