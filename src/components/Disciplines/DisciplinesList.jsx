import React, {useState} from "react";
import arrow from "../../image/arrow-down.svg";

export const DisciplinesList = ({item, index}) => {
    const [discItem, setDiscItem] = useState(false);
    const changeDistItem = () => {
        setDiscItem(!discItem)
    }
    return(
        <div className="disciplines-list" onClick={changeDistItem} key={index}>
            <div className="disciplines-list__item">
                <div className="disciplines-list__item-top">
                    <h4>{item.name}</h4>
                    <div className={discItem ? "disciplines-list__item-svg active" : "disciplines-list__item-svg"}>
                        <svg width="16" height="10" viewBox="0 0 16 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path fill-rule="evenodd" clip-rule="evenodd" d="M1.86667 3.23433e-05L-3.49691e-07 1.8667L8 9.8667L16 1.8667L14.1333 3.18071e-05L8 6.13337L1.86667 3.23433e-05Z" fill="#3951E7"/>
                        </svg>
                    </div>
                </div>
                {discItem && (<div className="disciplines-list__item-text">{item.text}</div>)}
            </div>
        </div>
    )
}