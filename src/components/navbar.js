import React from "react"
import { Link } from "react-router-dom";


const Navbar = () => {
    // function Home()
    // {

    // }
    return (


        <nav className="navbar">
            <div className="navbar-container">
                <h1 className="navbar-logo">Mind Maze 1.0</h1>
                <div className="navbar-button">
                    <Link to="/"><button>HOME</button></Link>

                </div>
            </div>
        </nav>

    );
}

export default Navbar;