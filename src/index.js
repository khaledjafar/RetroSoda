import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // Or the correct path to your Tailwind CSS file
import { MainCanvas } from './mainCanvas';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <>
        <div style={{ height: "600vh" }}>
            <MainCanvas />
            <div className="heroSection">
                <nav>
                    <ul>
                        <li><a href='#Home'>HOME</a></li>
                        <li><a href='#Home'>ABOUT</a></li>
                        <li className='brandName'><a href='#Home'>Retro<span>Soda</span></a></li>
                        <li><a href='#Home'>SHOP</a></li>
                        <li><a href='#Home'>CONTACT</a></li>
                    </ul>
                </nav>
                <div className='divdrinkSent'>
                    <p className='drinkSent'>
                       A <span className='popup-text'>fresh</span> soda drink <br/>
                       with a <span className='popup-text'>unique</span> flavor <br />
                       try it yourself
                    </p>
                </div>
                <div className='refTextPos'>
                    <p className='center-text'>Refreshing</p>
                </div>
            </div>    

            {/* spacer */}
            <div className='section2Spacer'>
                <img src='/images/spacer1.png' className='Spacer' alt='spacer'/>
            </div>   

            <div className="section2">
                <div className='refTextPos'>
                    <p className='center-text2'>Juicy</p>
                </div>
            </div> 

            {/* spacer */}
            <div className='section2Spacer'>
                <img src='/images/spacer2.png' className='Spacer' alt='spacer'/>
            </div>    
            <div className="section3">
                <div className='refTextPos2'>
                    <p className='center-text'>+ Energy</p>
                </div>
            </div>
        </div>
    </>
);