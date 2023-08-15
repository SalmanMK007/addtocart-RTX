import React from 'react'
import Container from 'react-bootstrap/Container';
import Navbar from 'react-bootstrap/Navbar';
// import { NavLink } from 'react-router-dom';

const Headers = () => {
    return (
        <>
            <Navbar style={{ height: "60px", background: "black", color: "white" }}>
                <Container>
                    {/* <NavLink className="text-decoration-none text-light mx-2"> */}
                        <h3 className='text-light'>Ecommerce</h3>
                    {/* </NavLink> */}
                    {/* <NavLink className="text-decoration-none text-light mx-2"> */}
                        <div id='ex4'>
                            <span className='p1 fa-stack fa-2x has-badge' data-count={1}>
                                <i class="fa-solid fa-cart-shopping"></i>
                            </span>
                        </div>
                    {/* </NavLink> */}

                </Container>
            </Navbar>

        </>
    )
}

export default Headers