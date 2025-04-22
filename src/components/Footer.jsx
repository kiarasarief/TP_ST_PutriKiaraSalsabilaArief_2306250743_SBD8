export default function Footer({ darkMode }) {
  return (
    <footer className={`py-6 ${darkMode ? 'bg-gray-800' : 'bg-sky-700'} text-white`}>
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm md:text-base">
          © {new Date().getFullYear()} Putri Kiara Salsabila Arief
        </p>
        <p className="mt-2 text-xs md:text-sm opacity-80">
          Tugas Pendahuluan Praktikum SBD Modul 8
        </p>
      </div>
    </footer>
  )
}