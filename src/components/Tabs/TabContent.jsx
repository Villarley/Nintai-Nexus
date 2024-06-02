import React from 'react'

export default function TabContent({ children, isActive }) {
  return isActive ? <div className="md:p-24">{ children }</div> : null
}
