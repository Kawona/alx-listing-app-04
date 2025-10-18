export default function Footer() {
    return (
        <footer className="bg-gray-100 text-center p-6 mt-8">
            <p className="text-sm text-gray-500">
                © {new Date().getFullYear()} ALX Property Listings. All rights reserved.
            </p>
        </footer>
    );
}