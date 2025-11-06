import ReviewSection from "@/components/booking/ReviewSection";

interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
}

interface PropertyDetailProps {
  property: Property;
}

export default function PropertyDetail({ property }: PropertyDetailProps) {
  return (
    <div>
      <h1>{property.title}</h1>
      <p>{property.description}</p>
      <p>${property.price}</p>
    </div>
  );
}