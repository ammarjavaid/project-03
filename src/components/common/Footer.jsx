import React from 'react'
import { social } from '../../dummyData'
import "./footer.scss"

export default function Footer() {
  return (
    <>
        <footer>
            {
                social.map((item)=> (
                    <>
                        <i> {item.icon} </i>
                    </>
                ))
            }
            <p> All Rights are Reserved 2022 </p> 
        </footer>
    </>
  )
}
