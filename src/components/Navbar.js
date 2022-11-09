import React, { useState } from 'react'
import github from './github.png'
import GithubIcon from './GithubIcon';
import InstagramIcon from './InstagramIcon';

function Navbar() {




    return(
        <div className='iconbardiv'>
            <a href="https://www.instagram.com/lpm_visuals" target="_blank" className='instagramlink'>
                <InstagramIcon/>
            </a>
            <a href='https://www.github.com/slyguy5646' target="_blank" className='githublink'>
                <GithubIcon/>
            </a>
        </div>
    );
}

export default Navbar