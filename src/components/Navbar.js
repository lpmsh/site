import React, { useState } from 'react'
import github from './github.png'
import GithubIcon from './GithubIcon';
import InstagramIcon from './InstagramIcon';

function Navbar() {




    return(
        <div>
            <a href='https://www.instagram.com/lpm_visuals' target="_blank">
                <GithubIcon/>
            </a>
            <a href="https://www.github.com/slyguy5646" target="_blank">
                <InstagramIcon/>
            </a>

        </div>
    );
}

export default Navbar