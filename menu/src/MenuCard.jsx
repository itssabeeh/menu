import React from 'react'

const MenuCard = ({title,category,price,img,desc}) => {
    return (
        <div className="card-container">
            <section className="image-container" >
                <img className="image" src={img} alt=""/>
            </section>
            <section className="card-desc">
                <article className="card-title"><h4>{title}</h4> 
                <div className="price">${price}</div>
                </article>
                <div style={{border:"none",borderTop: "1px dotted",}}></div>
                <p>{desc}</p>
            </section>
        </div>
    )
}

export default MenuCard
