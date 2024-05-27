import React from 'react'

export default function TabContent({ children, isActive }) {
  return isActive ? <div>{ children }</div> : null
}
