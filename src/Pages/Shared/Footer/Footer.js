import React from 'react';

const Footer = () => {

    const date = new Date();
    const year = date.getFullYear()
    return (
        <footer className='text-center mt-5 text-white bg-dark py-3'>
            <p><small>Copyright-{year}</small></p>
        </footer>
    );
};

export default Footer;