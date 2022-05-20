import React from 'react';
import './header.css';

export default function Header() {
    return(
        <div className='header'>
            <div className='headerTitles'>
                <span className='headerTitleSm'>Node & React</span>
                <span className='headerTitleLg'>Blog</span>
            </div>
            <img 
                className='headerImg' 
                src='https://images.pexels.com/photos/2662116/pexels-photo-2662116.jpeg?cs=srgb&dl=pexels-jaime-reimer-2662116.jpg&fm=jpg' 
                alt='header' 
                width='100%'
                height='450px'
            />
        </div>
    );
}