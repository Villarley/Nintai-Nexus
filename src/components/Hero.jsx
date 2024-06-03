import React from 'react'
import "../styles/styles.css"

export default function Hero({ children }) {
    return (
        <div id="hero" className="hero h-screen w-full relative overflow-hidden">
            <div className="content h-screen p-0 md:p-8">
                {children}
            </div>
        </div>
    )
}
