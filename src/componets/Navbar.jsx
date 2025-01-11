import React from 'react'

const Navbar = () => {
    return (
        <div>
            <nav className="navbar navbar-expand-lg px-5" id='navbar'>
                <div className="container-fluid">
                    <i className="bi bi-cloud-sun fs-2 text-white"></i>
                    {/* <a className="navbar-brand" href="#">Weather</a> */}
                    <a className="navbar-brand ms-auto fst-italic text-white" href="#">WeatherN</a>
                </div>
            </nav>

        </div>
    )
}

export default Navbar