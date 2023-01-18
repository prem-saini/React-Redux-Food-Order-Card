import React from "react"
import "./Header.css"
import whitecart from "../Image/whitecart.png"

function Header() {
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
                        {/* <div className="last " data-bs-toggle="modal" data-bs-target="#exampleModal" >
                            <img src={whitecart} alt="..." />




                            <div class="modal fade position-relative" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                                <div class="modal-dialog position-relative ">
                                    <div class="modal-content">
                                        <div class="modal-header">
                                            <h1 class="modal-title fs-5" id="exampleModalLabel">Your Cart Is Empty</h1>
                                            <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                        </div>

                                    </div>
                                </div>
                            </div>

                        </div> */}
                        {/* <button type="button" class="btn btn-secondary" data-bs-toggle="tooltip" data-bs-placement="bottom" data-bs-title="Tooltip on bottom">
                            <img src={whitecart} alt="..." />

                            <h2>This cart is Empty</h2>
                        </button> */}

                    </div>
                </div>
            </nav>

        </>
    )
}
export default Header