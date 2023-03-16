import React from 'react'
import './NavbarCSS.css'
import {TbSearch , TbLanguage } from 'react-icons/tb';
import {IoPersonSharp} from "react-icons/io5"


const Navbar = () => {
    return(
           <div className='Container'>
                <div className='Left'>
                    <img className='Logo' src={require('./Logo.png')} alt='Qapp'></img>
                </div>
                <div className='Middle'>
                    <div className='SearchBar'>
                        <input className='Search-Bar-Input' placeholder='Search...'></input>
                        <TbSearch className='Search-Icon'></TbSearch>
                    </div>
                </div>
                <div className='Right'>
                    
                    <IoPersonSharp className='Account-Icon'/>
                    <button className='ContactUs-Button'>Contact Us</button>
                    <div className='Languages'>
                      <TbLanguage className='Language-Icon'/>
                      <select className='Select'>
                        <option className='Options' selected>EN</option>
                        <option className='Options'>TR</option>
                        <option className='Options'>RU</option>
                      </select>
                    </div>
                </div>
           </div>
    );
}

export default Navbar; 