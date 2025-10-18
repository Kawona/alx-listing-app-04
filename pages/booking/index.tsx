import BookingForm from "@/components/booking/BookingForm";
import OrderSummary from "@/components/booking/OrderSummary";
import CancellationPolicy from "@/components/booking/CancellationPolicy";

export default function BookingPage() {
  const bookingDetails = {
    propertyName: "Villa Arrecife Beach House",
    price: 7500, // price = subtotal (in currency unit)
    bookingFee: 65,
    totalNights: 3,
    startDate: "24 August 2024",
    image: "https://images.unsplash.com/photo-1496412705862-e0088f16f791?w=1200&q=80",
    reviewScore: 4.76,
    reviewCount: 345,
  };

  return (
    <div className="container mx-auto p-6">
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
        <BookingForm />
        <OrderSummary bookingDetails={bookingDetails} />
      </div>

      {/* Cancellation & rules shown below the main grid */}
      <div className="mt-6 md:mt-10">
        <CancellationPolicy />
      </div>
    </div>
  );
}
