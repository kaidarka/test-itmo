import React from "react";
import Moment from 'moment';
import vkImage from '../../image/vkImage.svg';
import {useState} from "react";

export const NewsItems = ({ itemList }) => {
    Moment.locale('ru');
    const[isLoading, setIsLoading] = useState(true);
    const changeOnLoad = () => {
        setIsLoading(false);
    }
    return(
        <>
            {itemList.map((item, index) => (
                <a href={item.url} key={index} className="col-lg-4 col-sm-6 col-12">
                    <div className="news-item">
                        {isLoading && <div className="newsLoading"/>}
                        <img className="news-item__img" src={item.image_small} alt={item.title} onLoad={changeOnLoad}/>
                        <div className="news-item__block">
                            <span>{Moment(item.date).format("D MMMM YYYY")}</span>
                            <img src={vkImage} alt="Источник"/>
                        </div>
                        <div className="news-item__text" dangerouslySetInnerHTML={{__html: item.lead}}/>
                    </div>

                </a>
            ))}
        </>
    )
}