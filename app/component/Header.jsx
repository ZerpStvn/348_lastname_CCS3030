import Link from 'next/link'
import React from 'react'
const Header = () => {
  return (
    <div>

        <ul>
          <Link href="/contact">View Contact</Link>
          <Link href='/blog'>Blogs</Link>
          <Link href="/home">Home</Link>
        </ul>
    </div>
  )
}

export default Header