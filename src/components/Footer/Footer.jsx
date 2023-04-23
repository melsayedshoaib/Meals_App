import React from 'react'
import styles from './Footer.module.scss'
export default function Footer() {
  return (
    <div className={`${styles.footer} bg-light text-dark py-2`}>
      <p className='mb-0'>Made With <i className="fa-solid fa-heart text-danger"></i> By Muhammad Shoaib <i className="fa-solid fa-copyright text-light"></i> 2023</p>
    </div>
  )
}
