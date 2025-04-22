import { useState } from 'react'
import SBDLogo from '../assets/SBDLogo.svg'
import DMLogo from '../assets/DMJLogo.svg'
import OSLogo from '../assets/OSLogo.svg'

export default function Navbar({ scrollTo, darkMode, setDarkMode }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  
  const navigation = [
    { name: 'Home', action: scrollTo.home },
    { 
      name: 'SBD', 
      action: scrollTo.sbd,
      icon: <img src={SBDLogo} alt="SBD Logo" className="h-6 mr-2" />
    },
    { 
      name: 'DMJ', 
      action: scrollTo.dmj,
      icon: <img src={DMLogo} alt="DMJ Logo" className="h-6 mr-2" />
    },
    { 
      name: 'OS', 
      action: scrollTo.os,
      icon: <img src={OSLogo} alt="OS Logo" className="h-6 mr-2" />
    }
  ]

  return (
    <nav className={`sticky top-0 z-10 ${darkMode ? 'bg-gray-700' : 'bg-sky-700'} text-white shadow-md`}>
      <div className="container mx-auto px-4">
        {/* Desktop Nav */}
        <div className="hidden md:flex justify-between items-center py-3">
          <div className="flex space-x-6">
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={item.action}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-colors ${
                  darkMode ? 'hover:bg-gray-600' : 'hover:bg-sky-600'
                }`}
              >
                {item.icon && item.icon}
                {item.name}
              </button>
            ))}
          </div>
          
          {/* Dark Mode Toggle */}
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full ${
              darkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-sky-600 hover:bg-sky-500'
            }`}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
        
        {/* Mobile Nav */}
        <div className="md:hidden flex justify-between items-center py-3">
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`p-2 rounded-md ${darkMode ? 'hover:bg-gray-600' : 'hover:bg-sky-600'}`}
          >
            ☰
          </button>
          
          <button
            onClick={() => setDarkMode(!darkMode)}
            className={`p-2 rounded-full ${
              darkMode ? 'bg-gray-600 hover:bg-gray-500' : 'bg-sky-600 hover:bg-sky-500'
            }`}
          >
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
        
        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className={`md:hidden ${darkMode ? 'bg-gray-600' : 'bg-sky-600'} py-2`}>
            {navigation.map((item) => (
              <button
                key={item.name}
                onClick={() => {
                  item.action()
                  setMobileMenuOpen(false)
                }}
                className={`block w-full text-left px-4 py-2 ${
                  darkMode ? 'hover:bg-gray-500' : 'hover:bg-sky-500'
                }`}
              >
                <div className="flex items-center">
                  {item.icon && item.icon}
                  {item.name}
                </div>
              </button>
            ))}
          </div>
        )}
      </div>
    </nav>
  )
}