import React from 'react';

const Footer = () => {
    return (
      <>
       <h1 className='text-center mt-4 text-4xl text-white font-bold'>Gadget Heaven</h1>
       <p  className='text-center mt-4 text-gray-500'>Leading the way in cutting-edge technology and innovation.</p><br />


        <footer className="footer bg-neutral text-neutral-content p-10">

         



<nav>
  <h6 className="footer-title">Services</h6>
  <a className="link link-hover">Branding</a>
  <a className="link link-hover">Design</a>
  <a className="link link-hover">Marketing</a>
  <a className="link link-hover">Advertisement</a>
</nav>
<nav>
  <h6 className="footer-title">Company</h6>
  <a className="link link-hover">About us</a>
  <a className="link link-hover">Contact</a>
  <a className="link link-hover">Jobs</a>
  <a className="link link-hover">Press kit</a>
</nav>
<nav>
  <h6 className="footer-title">Legal</h6>
  <a className="link link-hover">Terms of use</a>
  <a className="link link-hover">Privacy policy</a>
  <a className="link link-hover">Cookie policy</a>
</nav>
</footer></>
    );
};

export default Footer;