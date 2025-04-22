import Logo from '../assets/Logo.svg'

export default function Header({ darkMode }) {
  return (
    <header className={`py-4 ${darkMode ? 'bg-gray-800' : 'bg-sky-800'} text-white shadow-lg`}>
      <div className="container mx-auto px-4 flex items-center">
        <img src={Logo} alt="NETLAB Logo" className="h-12 mr-4" />
        
    
        <div className="flex-grow text-center">
          <h1 className="text-2xl md:text-3xl font-bold">Network Laboratory</h1>
          <p className="mt-1 text-sm md:text-lg">
            Praktikum Sistem Basis Data, Desain Manajemen Jaringan, dan Sistem Operasi
          </p>
        </div>
        
        <div className="w-12"></div>
      </div>
    </header>
  )
}