import React from "react"
import "./Header.css"
import whitecart from "../Image/whitecart.png"
import { useSelector } from "react-redux"
import { Table } from "react-bootstrap";
import Delete from "../Image/delete.png"
import { Link } from "react-router-dom";

function Header() {

    const getdata = useSelector((state) => state.cartreducer.carts);
    console.log(getdata);



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




                            <div class="modal fade" id="exampleModal" tabIndex="1" aria-labelledby="exampleModalLabel" aria-hidden="false">
                                {
                                    getdata.length ?

                                        <div className="modal-dialog" style={{ width: '24rem', padding: '10px', backgroundColor: 'white' }}>
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
                                                                        <td>
                                                                            <Link to={`/newitem/${e.id}`} > <img src={e.imgdata} alt="..." style={{ width: "10rem", height: "10rem" }} /></Link></td>
                                                                        <td>
                                                                            <p>{e.rname}</p>
                                                                            <p>Price : ₹{e.price}</p>
                                                                            <p>quantity : {e.qnty}</p>


                                                                            {/* <img src={Delete} alt="..." className="smalltrash" /> */}
                                                                        </td>
                                                                        <td>
                                                                            <img src={Delete} alt="..." />
                                                                        </td>
                                                                    </tr>




                                                                </>
                                                            )
                                                        })
                                                    }
                                                    <p className="text-center">Total : ₹300</p>

                                                </tbody>
                                            </Table>
                                        </div> : <div className="modal-dialog ">
                                            <div className="modal-content">
                                                <div className="modal-header">
                                                    <h1 className="modal-title fs-5" id="exampleModalLabel">Your Cart Is Empty</h1>
                                                    <img src={whitecart} alt="..." />
                                                    {/* <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button> */}
                                                </div>

                                            </div>
                                        </div>
                                }

                            </div>

                        </div>


                    </div>
                </div>
            </nav>

        </>
    )
}
export default Header