import React from 'react';
import { AiOutlineSearch } from 'react-icons/ai';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
        <div className="content">
            <h1>Find the perfect place</h1>
            <p className='search' id='search-p'>Search the largest selection of luxury high-rise apartment, multi-family homes, and luxury homes</p>
            <form className="search">
                <input type="text" placeholder='Enter Keyword..' />
                <div className="radio">
                    <input type="radio" checked />
                    <label>Buy</label>
                    <input type="radio" checked />
                    <label>Rent</label>
                    <button type='submit'><AiOutlineSearch className='icon' /></button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Hero;