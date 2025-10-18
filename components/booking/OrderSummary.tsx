import React from "react";

type BookingDetails = {
    propertyName: string;
    price: number;
    bookingFee: number;
    totalNights: number;
    startDate: string;
    image?: string;
    reviewScore?: number;
    reviewCount?: number;
};

const currency = (n: number) => `$${n.toLocaleString()}`;

const OrderSummary: React.FC<{ bookingDetails: BookingDetails }> = ({ bookingDetails }) => {
    const { price, bookingFee } = bookingDetails;
    const subtotal = price;
    const grandTotal = subtotal + bookingFee;

    return (
        <div className="bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-xl font-semibold">Review Order Details</h2>

            <div className="flex items-center mt-4">
                <img
                    src={bookingDetails.image}
                    alt={bookingDetails.propertyName}
                    className="w-28 h-20 object-cover rounded-md"
                />
                <div className="ml-4">
                    <h3 className="text-lg font-semibold">{bookingDetails.propertyName}</h3>
                    <p className="text-sm text-gray-500">
                        {bookingDetails.reviewScore ?? 4.8} ({bookingDetails.reviewCount ?? 120} reviews)
                    </p>
                    <p className="text-sm text-gray-500">
                        {bookingDetails.startDate} • {bookingDetails.totalNights} Nights
                    </p>
                </div>
            </div>

            {/* Price Breakdown */}
            <div className="mt-6 space-y-2">
                <div className="flex justify-between text-sm">
                    <p>Booking Fee</p>
                    <p>{currency(bookingFee)}</p>
                </div>
                <div className="flex justify-between text-sm">
                    <p>Subtotal</p>
                    <p>{currency(subtotal)}</p>
                </div>
                <div className="flex justify-between text-base font-semibold pt-2 border-t mt-2">
                    <p>Grand Total</p>
                    <p>{currency(grandTotal)}</p>
                </div>
            </div>
        </div>
    );
};

export default OrderSummary;