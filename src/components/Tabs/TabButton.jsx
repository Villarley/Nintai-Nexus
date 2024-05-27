import React from 'react'

export default function TabButton({ children, isActive, onClick }) {
  return (
          <button
            className={`px-4 py-2 font-semibold text-sm rounded-t-lg ${
              isActive ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-700'
            }`}
            onClick={onClick}
          >
            {children}
          </button>
  )
}
