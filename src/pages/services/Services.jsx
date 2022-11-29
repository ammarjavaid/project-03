import React from 'react'
import Heading from '../../components/common/Heading'
import { services } from '../../dummyData'
import "./services.scss"

export default function Services() {
  return (
    <>
        <section className='services'>
            <div className='container'>
                <Heading title="Services"/>
                <div className='content grid3'>
                {
                    services.map((item, i) =>(
                        <div className='box'>
                            <i> {item.icon} </i>
                            <h3> {item.title} </h3>
                            <p> {item.desc} </p>
                        </div>
                    ))
                }
                </div>
            </div>
        </section>
    </>
  )
}

