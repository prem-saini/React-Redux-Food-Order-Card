import React, { useState, useEffect } from "react"
import "./Header.css"
import whitecart from "../Image/whitecart.png"
import { useDispatch, useSelector } from "react-redux"
import { Table } from "react-bootstrap";
import Delete from "../Image/delete.png"
import { Link, useNavigate } from "react-router-dom";
import { DLT } from "../actions/action";


function Header() {
    const navigate = useNavigate()
    const [price, setPrice] = useState(0)
    // console.log(price)

    const dispatch = useDispatch()


    const getdata = useSelector((state) => state.cartreducer.carts);
    // console.log(getdata, "getdata");

    const dlt = (id) => {
        dispatch(DLT(id))
    }

    const total = () => {
        let price = 0;
        getdata.map((ele, k) => {
            price = ele.price * ele.qnty + price
        })
        setPrice(price)
    };

    useEffect(() => {
        total();
    }, [total])

    const hello = () => {
        navigate('/newitem')
    }

    return (
        <>
            <nav class="navbar navbar-expand-lg bg-dark">
                <div class="container-fluid">
                    <a class="navbar-brand" style={{ color: 'white' }} href="/" >Add To Cart</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarScroll" aria-controls="navbarScroll" aria-expanded="false" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="collapse navbar-collapse" id="navbarScroll">
                        <ul class="navbar-nav me-auto my-2 my-lg-0 navbar-nav-scroll">
                            <li class="nav-item">
                                <a class="nav-link active" aria-current="page" href="/" style={{ color: 'white' }}>Home</a>
                            </li>
                        </ul>
                        <div className="last " data-bs-toggle="modal" data-bs-target="#exampleModal" >
                            <img src={whitecart} alt="..." />
                            <p className="Item">{getdata.length}</p>
                        </div>

                        <div class="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            {getdata.length ?
                                <div class="modal-dialog">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h5 class="modal-title" id="exampleModalLabel">Add Item</h5>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>


                                        <Table>

                                            <thead>
                                                <tr>
                                                    <th style={{ color: 'black' }}>Photo</th>
                                                    <th style={{ color: 'black' }}>Restaurant</th>
                                                </tr>
                                            </thead>

                                            <tbody>
                                                {
                                                    getdata.map((e) => {
                                                        return (
                                                            <>
                                                                <tr>
                                                                    <td data-bs-dismiss="modal">
                                                                        <Link to="/newitem" state={e}> <img src={e.imgdata} alt="..." style={{ width: "10rem", height: "10rem" }} /></Link></td>
                                                                    <td>
                                                                        <p>{e.rname}</p>
                                                                        <p>Price : ₹{e.price * e.qnty}</p>
                                                                        <p>quantity : {e.qnty}</p>



                                                                    </td>

                                                                    <td>
                                                                        <img src={Delete} alt="..." onClick={() => dlt(e.id)} />
                                                                    </td>
                                                                </tr>




                                                            </>
                                                        )
                                                    })
                                                }
                                                <p className="text-center">Total : ₹{price}</p>

                                            </tbody>
                                        </Table>
                                    </div>
                                </div>
                                : <div className="modal-dialog ">
                                    <div className="modal-content">
                                        <div className="modal-header">
                                            <h1 className="modal-title fs-5" id="exampleModalLabel">Your Cart Is Empty</h1>
                                            <img src={whitecart} alt="..." />
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>

                                    </div>
                                </div>}
                        </div>






                    </div>
                </div>
            </nav>

        </>
    )
}
export default Header