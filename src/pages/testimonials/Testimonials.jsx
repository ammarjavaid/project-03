import { FormatQuote } from '@mui/icons-material'
import React from 'react'
import "./testi.scss"
import { testimonials } from '../../dummyData'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi"


const SampleNextArrow = (props)=>{
    const { onClick } = props
    return(
        <div className='control-btn' onClick={onClick}>
            <button className='next'> <FiChevronRight/></button>
        </div>
    )
}


const SamplePrevArrow = (props)=>{
    const { onClick } = props
    return(
        <div className='control-btn' onClick={onClick}>
            <button className='prev'> <FiChevronLeft/></button>
        </div>
    )
}




export default function Testimonials() {

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
      };

    return (
        <>
            <section className='testimonials hero'>
                <div className='container'>
                <Slider {...settings}>
                    {
                        testimonials.map((val) => (
                            <div className='box'>
                                <i>
                                    <FormatQuote />
                                </i>
                                <p> {val.text} </p>
                                <div className='img'>
                                    <img src={val.image} alt="img" />
                                </div>
                                <h3> {val.name} </h3>
                                <label> {val.post} </label>
                            </div>
                        ))
                    }
                    </Slider>
                </div>
            </section>
        </>
    )
}
