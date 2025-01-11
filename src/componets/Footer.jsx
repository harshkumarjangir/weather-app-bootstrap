import React from 'react';

const Footer = () => {
    return (
        <footer className="text-light fixed-bottom" id='footer'>
            <div className="container">
                <div className="row py-1">

                    {/* Weather App Info */}
                    <div className="col-md-12">
                        <p className='text-center'>
                            Get real-time weather. | &copy; 2025 Weather App. All rights reserved.
                        </p>
                    </div>

                </div>
            </div>
        </footer>
    );
};

export default Footer;
