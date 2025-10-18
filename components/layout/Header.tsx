export default function Header() {
  return (
    <header className="flex justify-etween items-center p-6 bg-white shadow">
      {/* Logo */}
      <div className="text-xl font-bold mx-2"> ALX Listings</div>

      {/* Logo */}
      <nav className="hidden md:flex gap-6">
        <a href="#" className="hover:text-blue-500">Rooms</a>
        <a href="#" className="hover:text-blue-500">Mansions</a>
        <a href="#" className="hover:text-blue-500">Countryside</a>
      </nav>

      {/* search + Auth */}
      <div className="flex items-center gap-3">
        <input
          type="text"
          placeholder="search..."
          className="border rounded px-2 py-1 text-sm mx-3"
        />
        <button className="px-3 py-1 text-sm bg-blue-500 text-white rounded">Sign In</button>
        <button className="px-3 py-1 text-sm bg-gray-100 rounded">Sign Up</button>
      </div>
    </header>
  );
}