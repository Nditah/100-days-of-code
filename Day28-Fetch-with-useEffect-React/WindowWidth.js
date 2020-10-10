import React, { useState, useEffect } from 'react'

function WindowWidth() {
    const [windowWidth, setWindowWidth] = useState(window.innerWidth)

    const handleResize = () => {
        setWindowWidth(window.innerWidth)
    }

    useEffect(() => {
        window.addEventListener('resize', handleResize)

        return () => {
            window.removeEventListener('resize', handleResize)
        }

    }, [])

    return (
        <div className="section">
            <h3>Window Width:</h3>
            {windowWidth}
        </div>
    )
}

export default WindowWidth
