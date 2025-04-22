import SBDLogo from '../assets/SBDLogo.svg'

export default function Sbd({ darkMode }) {
  return (
    <section className={`py-12 ${darkMode ? 'bg-gray-800' : 'bg-sky-50'}`}>
      <div className="container mx-auto px-4">
        <div className={`max-w-4xl mx-auto p-8 rounded-lg shadow-lg ${darkMode ? 'bg-gray-700 text-gray-100' : 'bg-white text-gray-800'}`}>
          <div className="flex items-center mb-6">
            <img src={SBDLogo} alt="SBD Logo" className="h-12 mr-4" />
            <h2 className={`text-2xl font-bold ${darkMode ? 'text-sky-400' : 'text-sky-700'}`}>
              Praktikum Sistem Basis Data
            </h2>
          </div>
          
          <div className="space-y-4">
            <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
              Praktikum Sistem Basis Data (SBD) memberikan pemahaman mendalam tentang perancangan, implementasi, 
              dan pengelolaan database. Disini mahasiswa akan mempelajari konsep normalisasi, SQL, dan manajemen database.
            </p>
            <p className={darkMode ? 'text-gray-300' : 'text-gray-700'}>
              Dalam praktikum ini, akan mempelajari langsung berbagai sistem manajemen database dan tools pengembangan
              untuk membangun solusi basis data yang efisien dan scalable.
            </p>
            
            <div className={`mt-6 p-4 rounded-md ${darkMode ? 'bg-gray-600' : 'bg-sky-100'}`}>
              <h3 className={`font-semibold ${darkMode ? 'text-sky-400' : 'text-sky-700'} mb-2`}>
                Materi:
              </h3>
              <ul className="list-disc pl-5 space-y-1">
                <li className={darkMode ? 'text-gray-300' : 'text-gray-700'}>Konsep Dasar Basis Data</li>
                <li className={darkMode ? 'text-gray-300' : 'text-gray-700'}>Perancangan ERD</li>
                <li className={darkMode ? 'text-gray-300' : 'text-gray-700'}>Structured Query Language (SQL)</li>
                <li className={darkMode ? 'text-gray-300' : 'text-gray-700'}>Normalisasi Database</li>
              </ul>
            </div>

            <div className={`mt-4 p-4 rounded-md ${darkMode ? 'bg-gray-600' : 'bg-sky-100'}`}>
              <h3 className={`font-semibold ${darkMode ? 'text-sky-400' : 'text-sky-700'} mb-2`}>
                Tools yang Digunakan:
              </h3>
              <div className="flex flex-wrap gap-2">
                {['MySQL', 'PostgreSQL', 'MongoDB', 'VS Code'].map(tool => (
                  <span 
                    key={tool}
                    className={`px-3 py-1 rounded-full text-sm ${darkMode ? 'bg-gray-500 text-gray-200' : 'bg-sky-200 text-sky-800'}`}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            
            <a 
              href="https://learn.netlabdte.com/docs/category/SBD" 
              target="_blank" 
              rel="noopener noreferrer"
              className={`inline-block mt-4 px-6 py-2 rounded-md font-medium ${darkMode ? 
                'bg-sky-600 hover:bg-sky-500 text-white' : 
                'bg-sky-700 hover:bg-sky-600 text-white'}`}
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}