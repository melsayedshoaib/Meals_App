import React from 'react'
import error from '../../assets/imgs/error.svg'

export default function NotFound() {
  return (
    <div className='d-flex mt-5 pt-5 align-items-center justify-content-center'>
      <img src={ error} alt='error' className='w-100' />
    </div>
  )
}
