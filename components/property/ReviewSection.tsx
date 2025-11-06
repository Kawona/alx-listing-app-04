import axios from "axios";
import { useState, useEffect } from "react";

type Review = {
  id: string;
  comment: string;
  rating?: number;
  user?: string;
};

interface ReviewSectionProps {
  propertyId: string;
}


export default function ReviewSection({ propertyId }: ReviewSectionProps) {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!propertyId) return;

    const fetchReviews = async () => {
      try {
        const response = await axios.get(`/api/properties/${propertyId}/reviews`);
        setReviews(response.data);
      } catch (error) {
        console.error("Error fetching reviews:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchReviews();
  }, [propertyId]);

  if (loading) return <p>Loading reviews...</p>;

  if (reviews.length === 0) return <p>No reviews yet.</p>;

  return (
    <div className="space-y-3">
      {reviews.map((review) => (
        <div key={review.id} className="border p-3 rounded">
          <p>{review.comment}</p>
        </div>
      ))}
    </div>
  );
}
