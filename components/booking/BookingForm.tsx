import { useState } from "react";

type FormState = {
    firstName: string;
    lastName: string;
    email: string;
    phone: string;
    cardNumber: string;
    expiry: string;
    cvv: string;
    street: string;
    apt?: string;
    city: string;
    state: string;
    zip: string;
    country: string;
};

const initialState: FormState = {
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    cardNumber: "",
    expiry: "",
    cvv: "",
    street: "",
    apt: "",
    city: "",
    state: "",
    zip: "",
    country: "",
};

const BookingForm = () => {
    const [form, setForm] = useState<FormState>(initialState);
    const [submitting, setSubmitting] = useState(false);
    const [error, setError] = useState<string | null>(null);

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        setForm((s) => ({ ...s, [e.target.name]: e.target.value }));
    }

    function validate() {
        // very basic validation just for demo
        if (!form.firstName || !form.lastName) return "Please enter your full name.";
        if (!form.email.includes("@")) return "Please enter a valid email";
        if (form.cardNumber.replace(/\s+/g, "").length < 12) return "Enter a valid card number.";
        if (!form.cvv || form.cvv.length < 3) return "Enter CVV.";
        return null;
    }

    async function handleSubmit(e: React.FormEvent) {
        e.preventDefault();
        setError(null);
        const validationError = validate();
        if (validationError) {
            setError(validationError);
            return;
        }

        setSubmitting(true);

        // simulate payment processing delay
        await new Promise((res) => setTimeout(res, 1200));

        // simulate success
        setSubmitting(false);
        alert("Payment successful! Booking confirmed (simulation).");
        // optionally reset form or navigate to confirmation page
        setForm(initialState);
    }

        return (
        <div className="bg-white p-6 shadow-md rounded-lg">
            <h2 className="text-xl font-semibold mb-4">Contact Details</h2>

            <form onSubmit={handleSubmit} className="space-y-4">
                {/* Name */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                        <label className="block text-sm font-medium">First Name</label>
                        <input
                            name="firstName"
                            value={form.firstName}
                            onChange={handleChange}
                            type="text"
                            className="mt-2 border p-2 w-full rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Last Name</label>
                        <input
                            name="lastName"
                            value={form.lastName}
                            onChange={handleChange}
                            type="text"
                            className="mt-2 border p-2 w-full rounded"
                        />
                    </div>
                </div>

                {/* Contact */}
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                        <label className="block text-sm font-medium">Email</label>
                        <input
                            name="email"
                            value={form.email}
                            onChange={handleChange}
                            type="email"
                            className="mt-2 border p-2 w-full rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Phone Number</label>
                        <input
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            type="tel"
                            className="mt-2 border p-2 w-full rounded"
                        />
                    </div>
                </div>

                {/* Payment */}
                <h3 className="text-lg font-medium mt-4">Pay with</h3>
                <div>
                    <label className="block text-sm font-medium">Card Number</label>
                    <input
                        name="cardNumber"
                        value={form.cardNumber}
                        onChange={handleChange}
                        type="text"
                        inputMode="numeric"
                        placeholder="1234 5678 9012 3456"
                        className="mt-2 border p-2 w-full rounded"
                    />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                    <div>
                        <label className="block text-sm font-medium">Expiration Date</label>
                        <input
                            name="expiry"
                            value={form.expiry}
                            onChange={handleChange}
                            type="text"
                            placeholder="MM/YY"
                            className="mt-2 border p-2 w-full rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">CVV</label>
                        <input
                            name="cvv"
                            value={form.cvv}
                            onChange={handleChange}
                            type="password"
                            inputMode="numeric"
                            className="mt-2 border p-2 w-full rounded"
                        />
                    </div>
                </div>

                {/* Billing Address */}
                <h3 className="text-lg font-medium mt-4">Billing Address</h3>
                <div>
                    <label className="block text-sm font-medium">Street Address</label>
                    <input
                        name="street"
                        value={form.street}
                        onChange={handleChange}
                        type="text"
                        className="mt-2 border p-2 w-full rounded"
                    />
                </div>

                <div>
                    <label className="block text-sm font-medium">Apt / Suite (optional)</label>
                    <input
                        name="apt"
                        value={form.apt}
                        onChange={handleChange}
                        type="text"
                        className="mt-2 border p-2 w-full rounded"
                    />
                </div>

                <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
                    <div>
                        <label className="block text-sm font-medium">City</label>
                        <input
                            name="city"
                            value={form.city}
                            onChange={handleChange}
                            type="text"
                            className="mt-2 border p-2 w-full rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">State</label>
                        <input
                            name="state"
                            value={form.state}
                            onChange={handleChange}
                            type="text"
                            className="mt-2 border p-2 w-full rounded"
                        />
                    </div>
                    <div>
                        <label className="block text-sm font-medium">Zip Code</label>
                        <input
                            name="zip"
                            value={form.zip}
                            onChange={handleChange}
                            type="text"
                            className="mt-2 border p-2 w-full rounded"
                        />
                    </div>
                </div>

                <div>
                    <label className="block text-sm font-medium">Country</label>
                    <input
                        name="country"
                        value={form.country}
                        onChange={handleChange}
                        type="text"
                        className="mt-2 border p-2 w-full rounded"
                    />
                </div>

                {error && <p className="text-sm text-red-600">{error}</p>}

                <button
                    type="submit"
                    disabled={submitting}
                    className="mt-2 bg-green-500 disabled:opacity-60 text-white py-2 px-4 rounded-md w-full"
                >
                    {submitting ? "Processing..." : "Confirm & Pay"}
                </button>
            </form>
        </div>
    );
};

export default BookingForm;