import React, { useState, useEffect } from "react"

import { useSelector } from "react-redux";
import Item from "../Item"
import Delete from "../Image/delete.png"
import { useParams } from "react-router-dom";


function NewItem() {
    const [data, setData] = useState([])
    console.log(data)

    const { id } = useParams();
    // console.log(id)

    const getdata = useSelector((state) => state.cartreducer.carts);
    // console.log(getdata);

    const compare = () => {
        let result = getdata.filter((e) => {
            return e.id === id
        })
        setData(result)
    }

    useEffect(() => {
        compare();
    }, [id])
    return (
        <>
            <div className="NewItem mt-5">
                <h1>Items Deatils Page</h1>
                <div className="Newitem d-flex justify-content-center mt-5">
                    {
                        data.map((ele) => {
                            return (
                                <>
                                    <div class="card mb-3 " style={{ maxWidth: "740px", height: '250px' }}>
                                        <div class="row g-0">
                                            <div class="col-md-4">
                                                <img src={ele.imgdata} class="img-fluid rounded-start mt-3 mx-2" alt="..." style={{ height: '100%' }} />
                                            </div>
                                            <div class="col-md-4">
                                                <div class="card-body mx-2 mt-3">
                                                    <p class="card-title "><b>Restaurant</b> : {ele.rname}</p>
                                                    <p class="card-text"><b>Price</b> : ₹{ele.price}</p>
                                                    <p class="card-text"><b>Dishes</b> : {ele.address}</p>
                                                </div>
                                            </div>
                                            <div className="col-md-4  mt-4">
                                                <p className="card-title"><b>Rating</b> : {ele.rating}</p>
                                                <p class="card-text"><b>Order-Review</b> : {ele.somedata}</p>
                                                <p class="card-text"><b>Remove</b> :<img src={Delete} alt="..." /></p>
                                            </div>
                                        </div>
                                    </div>

                                </>
                            )
                        })
                    }

                </div>

            </div>
        </>
    )
}

export default NewItem