import React from 'react';
import MainCarousel from "./MainCarusel";
import HistoryPhoto from    './Pictures/History_new.jpeg';
import ExperiancePhoto  from    './Pictures/Experience_new.jpeg';
import PreshipmentPhoto from    './Pictures/Preshipment_new.jpg';
import QualityContrPhoto    from    './Pictures/- Quality_control_new.jpg';

const Main = () => {
    const images = [
        {src:HistoryPhoto,route:"/history", name:"History"},
        {src:ExperiancePhoto, rote:"/experiance", name:"Experiance"}


        
    ];

    return (
        <div className="app">
            <h1>Carousel Example</h1>
            <MainCarousel images={images} />
        </div>
    );
};

export default Main;
