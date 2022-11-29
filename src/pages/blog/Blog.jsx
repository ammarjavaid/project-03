import React from 'react'
import Heading from '../../components/common/Heading'
import { blog } from '../../dummyData'
import "./blog.scss"

export default function Blog() {
  return (
    <>
        <section className='blog'>
            <div className='container'>
                <Heading title="Blog"/>
                <div className='content grid3'>
                    {
                        blog.map((item)=> {
                            return(
                                <>
                                    <div className='box'>
                                        <div className='img'>
                                            <img src={item.cover} alt="img" />
                                        </div>
                                        <div className='text'>
                                            <h3> {item.title} </h3>
                                            <label>
                                                By {item.author} {item.data}
                                            </label>
                                            <p> {item.desc} </p>
                                        </div>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </section>
    </>
  )
}

