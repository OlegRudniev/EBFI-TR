import React from 'react';
import { useTranslation } from 'react-i18next';

import MainCarousel from "./MainCarusel";
import HistoryPhoto from    './Pictures/History_new.jpeg';
import ExperiancePhoto  from    './Pictures/Experience_new.jpeg';
import PreshipmentPhoto from    './Pictures/Preshipment_new.jpg';
import QualityContrPhoto    from    './Pictures/- Quality_control_new.jpg';

const Main = () => {
    const { t } = useTranslation();


    const images = [
        {src:HistoryPhoto,route:"/history", name:t("p2")},
        {src:ExperiancePhoto, route:"/experiance", name:t("p3")}


        
    ];

    return (
        <div className="app">
            <h1>{t("p")}</h1>
            <MainCarousel images={images} />
        </div>
    );
};

export default Main;
