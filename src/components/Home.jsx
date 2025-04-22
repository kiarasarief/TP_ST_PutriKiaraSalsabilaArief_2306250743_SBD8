export default function Home({ darkMode }) {
  return (
    <section className={`py-12 ${darkMode ? 'bg-gray-800' : 'bg-sky-50'}`}>
      <div className="container mx-auto px-4">
        <div className={`max-w-4xl mx-auto p-8 rounded-lg shadow-lg ${darkMode ? 'bg-gray-700 text-gray-100' : 'bg-white text-gray-800'}`}>
          <div className="text-center mb-8">
            <h2 className={`text-3xl md:text-4xl font-bold ${darkMode ? 'text-sky-400' : 'text-sky-700'}`}>
              Selamat Datang di NETLAB
            </h2>
            <div className={`w-24 h-1 mx-auto mt-4 ${darkMode ? 'bg-sky-500' : 'bg-sky-600'}`}></div>
          </div>
          
          <div className="space-y-6 text-lg leading-relaxed">
            <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
              Laboratorium yang menyediakan fasilitas praktikum untuk mata kuliah
              <span className={`font-semibold ${darkMode ? 'text-sky-400' : 'text-sky-600'}`}>
                {" "}Sistem Basis Data (SBD), Desain Manajemen Jaringan (DMJ), dan Sistem Operasi (OS).
              </span>
            </p>
            
            <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
              Disini mahasiswa Teknik Komputer akan mempelajari konsep-konsep fundamental dan mendapatkan pengalaman 
              dalam mengelola sistem data dan jaringan komputer modern.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}