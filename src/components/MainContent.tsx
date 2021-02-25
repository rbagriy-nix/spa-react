import React from "react";
import data from '../data'

export default function MainContent() {
    const listItems = data.map(item => {
        return (
            <div className="rCard" key={item.id}>
                <div className="card_img">
                    <img src={item.thumb} />
                </div>
                <div className="card_header">
                    <h2>{item.name}</h2>
                    <p>{item.description}</p>
                    <p className="price">{item.price}<span>{item.currency}</span></p>
                    <div className="rBtn">Add to cart</div>
                </div>
            </div>
        )
    })
    return (
        <div className="main_content">
            <h3>Phones</h3>
            {listItems}
        </div>
    )
}