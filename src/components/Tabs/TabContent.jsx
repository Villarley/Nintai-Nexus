import React from 'react'

export default function TabContent({ children, isActive }) {
  return isActive ? <div className="p-6 md:p-24">{ children }</div> : null
}
