import React from 'react';
import closeIcon from '../icons/close.png'

const InfoBar = ({room}) => (
    <div>
        <div className='infoBar'>
            <div className='leftContainer'>
                <h3>{room}</h3>
            </div>
            <div className='rightContainer'>
                <a href='/emr'><img src={closeIcon} alt="close" /></a>
            </div>
        </div>
        <div className='container'></div>
    </div>

)

export default InfoBar;