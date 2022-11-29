import React from 'react'
import Heading from '../../components/common/Heading'
import { about } from '../../dummyData'
import "./about.scss"

export default function About() {
  return (
    <>
        <section className='about'>
            <div className='container flex'>
                {
                    about.map((val, i)=>(
                        <>
                            <div className='left'>
                                <img src={val.cover} alt="img" />
                            </div>
                            <div className='right'>
                                <Heading title="About me"/>
                                <p> {val.desc} </p>
                                <p> {val.desc1} </p> 
                                <button> Download CV </button>
                                <button className='primaryBtn'> Download CV </button>
                            </div>
                        </>
                    ))
                }
            </div>
        </section>
    </>
  )
}
