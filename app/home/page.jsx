import React from 'react'
import homestyle from '@/app/style/homepage.module.css'
import Link from 'next/link'
import Header from '@/app/component/Header'
import Footer from '@/app/component/Footer'

export const HomePage = () => {
  return (
    <div >
      <Header/>
      HomePage

        <h1 className={`${homestyle.title}`}>
            This is Home Page
        </h1>
        <Link href="/blog">view Blog Page</Link>
        <div className={homestyle.container}>


        </div>
        <Footer/>
    </div>
  )
}
