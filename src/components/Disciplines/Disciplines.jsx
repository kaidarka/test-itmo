import React, {useState} from "react";
import {DisciplinesList} from "./DisciplinesList.jsx";
import {DisciplinesData} from "./DisciplinesData.jsx";

export const Disciplines = () => {
    return(
        <div className="disciplines">
            <h2 className="disciplines__title">Дисциплины</h2>
            {DisciplinesData.map((item, index) => (
                    <DisciplinesList item={item} index={index}/>
            ))}
        </div>
    )
}