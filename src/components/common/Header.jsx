import React, {useState} from 'react'
import { Link } from 'react-router-dom'
import { navlink } from '../../dummyData'
import logo from "../images/logo.png"
import "./header.scss"
import { HiBars4 } from 'react-icons/hi2'
import { VscClose } from "react-icons/vsc";

export default function Header() {

const [open, setOpen] = useState(false)

const toggle = ()=>{
    setOpen(!open)
}

  return (
    <>
        <header>
            <div className='container flexsb'>
                <div className='logo'>
                    <img src={logo} alt="img" />
                </div>

                <ul className={ open ? 'nav hideMenu' : "nav" }>
                    {/* { */}
                        {/* navlink.map((links, i)=> { */}
                            {/* return( */}
                                {/* <> */}
                                 <li onClick={toggle}><Link to="/"> Home </Link></li>
                                 <li onClick={toggle}><Link to="/about"> About </Link></li>
                                 <li onClick={toggle}><Link to="/services"> Services </Link></li>
                                 <li onClick={toggle}><Link to="/portfolio"> Portfolio </Link></li>
                                 <li onClick={toggle}><Link to="/testimonials"> Testimonials </Link></li>
                                 <li onClick={toggle}><Link to="/blog"> Blog </Link></li>
                                 <li onClick={toggle}><Link to="/contact"> Contact </Link></li>
                                {/* </> */}
                            {/* ) */}
                        {/* }) */}
                    {/* } */}
                </ul>
                <button className='toggle' onClick={()=> setOpen(!open)}>
                    { open ? <VscClose /> : <HiBars4 /> }
                </button>
            </div>
        </header>
    </>
  )
}
