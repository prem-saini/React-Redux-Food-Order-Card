import React, { useState } from "react"
import Data from "../Data"
import "./Section.css"
function Section() {
    const [card, setCard] = useState(Data)
    console.log(card)
    return (
        <>
            <div className="section mt-4">
                <h2 style={{ fontWeight: '800' }}>Add to Cart Projects</h2>
            </div>
            <div className="container ">
                {
                    card.map((element) => {
                        return (
                            <>

                                <div class="card mx-2 mt-5" style={{ width: "22rem" }}>
                                    <img src={element.imgdata} class="card-img-top" alt="..." style={{ height: '40vh' }} />
                                    <div class="card-body">
                                        <h5 class="card-title">{element.rname}</h5>
                                        <p class="card-text">price- ₹{element.price}</p>
                                        <a href="/" class="btn btn-primary">ADD To Cart</a>
                                    </div>
                                </div>

                            </>
                        )
                    })
                }

            </div>

        </>
    )
}

export default Section 