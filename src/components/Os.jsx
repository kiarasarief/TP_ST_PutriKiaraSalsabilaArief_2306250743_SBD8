import OSLogo from "../assets/OSLogo.svg";

export default function Os({ darkMode }) {
  return (
    <section className={`py-12 ${darkMode ? "bg-gray-800" : "bg-sky-50"}`}>
      <div className="container mx-auto px-4">
        <div
          className={`max-w-4xl mx-auto p-8 rounded-lg shadow-lg ${
            darkMode ? "bg-gray-700 text-gray-100" : "bg-white text-gray-800"
          }`}
        >
          <div className="flex items-center mb-6">
            <img src={OSLogo} alt="OS Logo" className="h-12 mr-4" />
            <h2
              className={`text-2xl font-bold ${
                darkMode ? "text-sky-400" : "text-sky-700"
              }`}
            >
              Praktikum Sistem Operasi
            </h2>
          </div>

          <div className="space-y-4">
            <p className={darkMode ? "text-gray-300" : "text-gray-700"}>
              Praktikum Sistem Operasi (OS) dirancang untuk memberikan
              pengalaman dalam mengelola sistem operasi modern termasuk
              manajemen proses, memori, dan file system.
            </p>
            <p className={darkMode ? "text-gray-300" : "text-gray-700"}>
              Fokus praktikum meliputi sistem operasi berbasis Unix/Linux dengan hands-on experience menggunakan command line
              interface dan shell scripting.
            </p>

            <div
              className={`mt-6 p-4 rounded-md ${
                darkMode ? "bg-gray-600" : "bg-sky-100"
              }`}
            >
              <h3
                className={`font-semibold ${
                  darkMode ? "text-sky-400" : "text-sky-700"
                } mb-2`}
              >
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <h4
                    className={`font-medium ${
                      darkMode ? "text-sky-300" : "text-sky-700"
                    }`}
                  >
                    Materi Praktikum OS:
                  </h4>
                  <ul className="list-disc pl-5 space-y-1 mt-1">
                    {[
                      "Manajemen User & Permission",
                      "Shell Scripting",
                      "Proses dan Service Management",
                    ].map((item) => (
                      <li
                        key={item}
                        className={darkMode ? "text-gray-300" : "text-gray-700"}
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            <div
              className={`mt-4 p-4 rounded-md ${
                darkMode ? "bg-gray-600" : "bg-sky-100"
              }`}
            >
              <h3
                className={`font-semibold ${
                  darkMode ? "text-sky-400" : "text-sky-700"
                } mb-2`}
              >
                Tools yang Digunakan:
              </h3>
              <div className="flex flex-wrap gap-2">
                {[
                  "VirtualBox",
                  "Ubuntu Server",
                  "Docker",
                ].map((tool) => (
                  <span
                    key={tool}
                    className={`px-3 py-1 rounded-full text-sm ${
                      darkMode
                        ? "bg-gray-500 text-gray-200"
                        : "bg-sky-200 text-sky-800"
                    }`}
                  >
                    {tool}
                  </span>
                ))}
              </div>
            </div>

            <a
              href="https://learn.netlabdte.com/docs/category/OS"
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-block mt-4 px-6 py-2 rounded-md font-medium ${
                darkMode
                  ? "bg-sky-600 hover:bg-sky-500 text-white"
                  : "bg-sky-700 hover:bg-sky-600 text-white"
              }`}
            >
              Learn More
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
