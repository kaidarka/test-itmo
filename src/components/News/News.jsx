import React from "react";
import {newsData} from "./NewsData.jsx";
import {NewsItems} from "./NewsItems.jsx";

export const News = () => {
    return(
        <div className="news">
            <h2 className="news__title">Новости и события</h2>
            <div className="row">
                <NewsItems itemList={newsData.news}/>
            </div>

        </div>
    )
}