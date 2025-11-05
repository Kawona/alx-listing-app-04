// components/BookingForm.tsx
import { useState } from "react";
import axios from "axios";

export default function BookingForm({ propertyId }: { propertyId: number }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    checkIn: "",
    checkOut: "",
  });
  const [message, setMessage] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      await axios.post("/api/bookings", { ...formData, propertyId });
      setMessage("Booking successful!");
    } catch (err) {
      setMessage("Failed to submit booking.");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input
        type="text"
        placeholder="Your Name"
        value={formData.name}
        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
        className="border p-2 w-full rounded"
        required
      />
      <input
        type="email"
        placeholder="Email"
        value={formData.email}
        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
        className="border p-2 w-full rounded"
        required
      />
      <input
        type="date"
        value={formData.checkIn}
        onChange={(e) => setFormData({ ...formData, checkIn: e.target.value })}
        className="border p-2 w-full rounded"
        required
      />
      <input
        type="date"
        value={formData.checkOut}
        onChange={(e) => setFormData({ ...formData, checkOut: e.target.value })}
        className="border p-2 w-full rounded"
        required
      />
      <button
        type="submit"
        className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
      >
        Book Now
      </button>
      {message && <p className="mt-2 text-center text-sm">{message}</p>}
    </form>
  );
}
