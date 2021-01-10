import React from 'react'

export default function BottomNav() {
    return (
        <div className="bottom-nav">
            <div className="bottom-nav-row" >
                <ul>
                <div className="bottom-nav-col">
                <li><a>Order</a></li>
                <li><a href="/Menu">Menu</a></li>
                <li><a href="/About">About</a></li>
                </div>
                <div className="bottom-nav-col">
                <li><a href="/Category/Holidays">Holidays</a></li>
                <li><a href="/Category/Wedding">Wedding</a></li>
                <li><a>Contact</a></li>
                </div>
                <div className="bottom-nav-col">
                <li><a>Events</a></li>
                <li><a>Feedback</a></li>
                <li><a href="/login">Employee Site</a></li>
                </div>
                <div className="bottom-nav-col">
                    <a href="/">
                    <img className="bottom-nav-logo" src="https://cdn2.iconfinder.com/data/icons/baking-outline/60/Cake_Piping-baked-cooking-baking-512.png"/>
                    </a>
                </div>
                </ul>
                
            </div> 
        </div>
    )
}
