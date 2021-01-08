import React from 'react';
import vickyCake from '../../vicky-cake.png'

export default function AboutWidget() {
    return (
        <div className="about-widget">
            <div className="about-widget-row">
                <div className="about-widget-col">
                    <h1>About Vicky's Pastries</h1>
                    <p>We are a small baking team based out of Long Beach, California. 
                        Inspired to bake at an early age, Vicky Jimenez-Cabrillo pursued her passion and 
                        now provides celebration and happiness in the form of delicious treats.    
                    </p>
                </div>
                <div className="about-widget-col">
                    <img className="about-widget-image" src={vickyCake} ald="vickys cake"/>
                </div>
            </div>
        </div>
    )
}
