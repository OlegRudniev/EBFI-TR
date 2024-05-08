import React from 'react';
import Slider from 'react-slick';
import {Link} from "react-router-dom";
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const MainCarousel = ({ images }) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
    };

    return (
        <Slider {...settings}>
            {images.map((item, index) => (

                <div key={index}>
                    <img src={item.src} alt={`Slide ${index}`} />
                    <Link to={item.route}>{item.name}</Link>
                </div>
            ))}
        </Slider>
    );
};

export default MainCarousel;
