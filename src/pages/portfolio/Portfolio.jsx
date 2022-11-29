import { Visibility } from '@mui/icons-material'
import React, { useState } from 'react'
import Heading from '../../components/common/Heading'
import { portfolio } from '../../dummyData'
import "./portfolio.scss"

const allCategory = ["all", ...new Set(portfolio.map((item)=> item.category))]

export default function Portfolio() {

    const [list, setList] = useState(portfolio)
    const [category, setCategory] = useState(allCategory)

    const filterItems = (category) =>{
        const newItems = portfolio.filter((item)=> item.category === category)
        setList(newItems)

        if(category === "all"){
            setList(portfolio)
        }
    }

    return (
        <>
            <article>
                <div className='container'>
                    <Heading title="Portfolio"/>
                    <div className='catButton'>
                        {
                            category.map((category) => (
                                <button className='primaryBtn' onClick={()=> filterItems(category)}>
                                    {category}
                                </button>
                            ))
                        }
                    </div>
                    
                    {/* <p> Menu </p>  */}

                    <div className='content grid3'>
                        {
                            list.map((item, i) => (
                                <div className='box'>
                                    <div className='img'>
                                        <img src={item.cover} alt="img" />
                                    </div>
                                    <div className='overlay'>
                                        <h3> {item.title} </h3>
                                        <span> {item.name} </span>
                                        <Visibility />
                                    </div>
                                </div>
                            ))
                        }
                    </div>
                </div>
            </article>
        </>
    )
}

