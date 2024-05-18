import React from 'react'
import "../styles/styles.css"

export default function Hero ({ children }) {
    return (
        <div className={"hero h-screen w-full"}>
            {children}
        </div>
    )
}
