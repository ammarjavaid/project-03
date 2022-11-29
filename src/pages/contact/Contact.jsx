import React from 'react'
import Heading from '../../components/common/Heading'
import { contact } from '../../dummyData'
import "./contact.scss"

export default function Contact() {
  return (
    <>
        <section className='contact'>
            <div className='container'>
                <Heading title="Keep In Touch"/>
                <div className='content flexsb'>
                    <div className='right'>
                        <form>
                            <div className='flex'>
                                <input type="text" placeholder='Name' />
                                <input type="email" placeholder='Email' />
                            </div>
                            <input type="text" placeholder='Subject' />
                            <textarea name="" id="" cols="30" rows="10"></textarea>
                            <button> Submit </button>
                        </form>
                    </div>
                    <div className='left'>
                        {
                            contact.map((item)=> (
                                <div className='box'>
                                    <i> {item.icon} </i>
                                    <p> {item.text1} </p>
                                    <p> {item.text2} </p>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    </>
  )
}

