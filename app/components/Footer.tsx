export default function Footer() {
  return (
    <footer className="bg-slate-950 text-white py-10">
      <div className="max-w-6xl mx-auto px-6 text-center">

        <h3 className="text-2xl font-bold mb-2">
          Rumah Akbar Guest House
        </h3>

        <p className="text-gray-400 mb-4">
          Villa Privat Dekat Pantai Balad Taliwang
        </p>

        <div className="space-y-2 text-gray-300">
          <p>📱 0877-8478-6101</p>
          <p>📍 Pantai Balad, Taliwang, Sumbawa Barat</p>
        </div>

        <div className="mt-6 flex justify-center gap-6">
          <a
            href="https://www.airbnb.co.id/rooms/1638853659702945196"
            target="_blank"
            rel="noopener noreferrer"
          >
            Airbnb
          </a>

          <a
            href="https://www.booking.com/hotel/id/rumah-akbar-villa-taliwang.id.html"
            target="_blank"
            rel="noopener noreferrer"
          >
            Booking.com
          </a>

          <a
            href="https://wa.me/6287784786101"
            target="_blank"
            rel="noopener noreferrer"
          >
            WhatsApp
          </a>
        </div>

        <div className="mt-8 text-sm text-gray-500">
          © 2026 Rumah Akbar Guest House
        </div>

      </div>
    </footer>
  )
}
