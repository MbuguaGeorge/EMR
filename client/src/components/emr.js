import React from 'react';
import doctor from '../icons/doctor.png'
import triage from '../icons/microscope.png'
import chat from '../icons/email.png'
import {Link} from 'react-router-dom'

export default function EMR(){
    return (
        <div className='emr'>
            <div className='emr__nav'>
                <h1>KenyaEMR</h1>
                <h2>Akshar Nursing Home</h2>
            </div>
            <nav>
                <ul>
                    <li className='justifyLeft'>
                        <ol>Home</ol>
                    </li>
                    <li className='justifyRight'>
                        <ol>Logged in as KADRA KADRA</ol>
                        <ol>My Profile</ol>
                        <ol>Log Out</ol>
                        <ol>Help</ol>
                    </li>
                </ul>
            </nav>
            <div className='modules'>
                <ul>
                    <li>
                        <img src={doctor} alt="doctor" />
                    </li>
                    <li>
                        <img src={triage} alt="triage" />
                    </li>
                    <Link to="/">
                        <li>
                            <img src={chat} alt="messaging" />
                        </li>
                    </Link>
                </ul>
            </div>
        </div>
    )
};