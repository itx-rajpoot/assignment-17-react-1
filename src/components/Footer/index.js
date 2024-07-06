import React from 'react'

export default function Footer() {
    const year = new Date().getFullYear();
    return (
        <footer>
            <div className='bg-primary text-white fs-6 text-center'>
                <p>&copy; All right reserved {year} </p>
            </div>
        </footer>
    )
}
