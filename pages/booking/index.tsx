import axios from "axios";
import { useState } from "react";

export default function BookingForm() {
  // State to store the form information input by the user
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    cardNumber: "",
    expirationDate: "",
    cvv: "",
    billingAddress: "",
  });

  // Loading state to show when form is submitting
  const [loading, setLoading] = useState(false);

  // Error state to display an error message when needed
  const [error, setError] = useState(null);

  // Handles the form submission
  const handleSubmit = async (e) => {
    e.preventDefault(); // Stops form from refreshing the page
    setLoading(true);   // Show loading state
    setError(null);     // Clear previous errors if any

    try {
      // Send booking form data to backend API
      const response = await axios.post("/api/bookings", formData);

      // Alert the user that their booking is successful
      alert("Booking confirmed!");
    } catch (error) {
      // Display error message if request fails
      setError("Failed to submit booking.");
    } finally {
      // Remove loading state whether request succeeded or failed
      setLoading(false);
    }
  };

  // Handle input changes in the form fields
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <form onSubmit={handleSubmit}>
      <input name="firstName" placeholder="First Name" onChange={handleChange} />
      <input name="lastName" placeholder="Last Name" onChange={handleChange} />
      <input name="email" placeholder="Email" onChange={handleChange} />
      <input name="phoneNumber" placeholder="Phone Number" onChange={handleChange} />
      <input name="cardNumber" placeholder="Card Number" onChange={handleChange} />
      <input name="expirationDate" placeholder="Expiration Date" onChange={handleChange} />
      <input name="cvv" placeholder="CVV" onChange={handleChange} />
      <input name="billingAddress" placeholder="Billing Address" onChange={handleChange} />

      <button type="submit" disabled={loading}>
        {loading ? "Processing..." : "Confirm & Pay"}
      </button>

      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
}
