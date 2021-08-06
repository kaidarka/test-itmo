import React, {useState} from "react";
import arrowPrev from "../../image/arrow-prev.svg";
import arrowNext from "../../image/arrow-next.svg";
import bannerBG from "../../image/bannerBG.png";
import {BannerData} from "./BannerData.jsx";



export const Banner = () => {
    const [current, setCurrent] = useState(0);
    const length = BannerData.length;
    const prevBanner = () => {
        setCurrent(current === 0 ? length-1 : current-1)
    }
    const nextBanner = () => {
        setCurrent(current === length-1 ? 0 : current+1)
    }
    if(!Array.isArray(BannerData) || BannerData.length <= 0){
        return null;
    }

    return(
        <div className="banner" style={{background: `url(${bannerBG}) center no-repeat`, backgroundSize: "cover"}}>
            <div className="arrow prev-arrow" onClick={prevBanner}>
                <img src={arrowPrev} alt="Предыдущий слайд"/>
            </div>
            {BannerData.map((banner, index) => {
                return(
                    <div className={index === current ? "banner-item active" : "banner-item"} key={index}>
                        {index === current &&(
                            <>
                                <h1 className="banner-item__title">{banner.title}</h1>
                                <p className="banner-item__text">{banner.text}</p>
                                <button className="banner-item__btn btn">Подробнее</button>
                            </>
                            )}
                    </div>
                )
            })}
            <div className="arrow next-arrow" onClick={nextBanner}>
                <img src={arrowNext} alt="Следующий слайд"/>
            </div>
        </div>
    )
}