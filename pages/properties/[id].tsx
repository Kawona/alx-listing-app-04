// pages/properties/[id].tsx
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import axios from "axios";

export default function PropertyDetail() {
  const router = useRouter();
  const { id } = router.query;

  const [property, setProperty] = useState<any>(null);
  const [reviews, setReviews] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!id) return;

    const fetchData = async () => {
      try {
        const [propertyRes, reviewsRes] = await Promise.all([
          axios.get(`/api/properties/${id}`),
          axios.get(`/api/properties/${id}/reviews`),
        ]);

        setProperty(propertyRes.data);
        setReviews(reviewsRes.data);
      } catch (err) {
        console.error("Error loading property details:", err);
        setError("Failed to load property details.");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [id]);

  if (loading) return <p className="text-center mt-10">Loading property...</p>;
  if (error) return <p className="text-center text-red-500 mt-10">{error}</p>;

  return (
    <div className="container mx-auto p-6">
      <img
        src={property.imageUrl}
        alt={property.title}
        className="w-full h-96 object-cover rounded-lg mb-6"
      />
      <h1 className="text-3xl font-bold mb-2">{property.title}</h1>
      <p className="text-gray-600 mb-4">{property.location}</p>
      <p className="text-green-600 font-semibold mb-8">
        ${property.pricePerNight} / night
      </p>

      <h2 className="text-xl font-semibold mb-4">Reviews</h2>
      {reviews.length > 0 ? (
        <ul className="space-y-2">
          {reviews.map((review) => (
            <li
              key={review.id}
              className="border rounded p-3 bg-gray-50 text-gray-700"
            >
              <p className="font-medium">{review.userName}</p>
              <p>{review.comment}</p>
            </li>
          ))}
        </ul>
      ) : (
        <p>No reviews yet.</p>
      )}
    </div>
  );
}
