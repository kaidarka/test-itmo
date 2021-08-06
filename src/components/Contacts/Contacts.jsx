import React from "react";
import mailImg from "../../image/mail.svg";
import contactsBg from "../../image/contactsBg.jpg";

export const Contacts = ({setOpenModal}) => {
    const openModal = () => {
        setOpenModal(true)
    }
    return(
        <div className="contacts" style={{background: `url(${contactsBg}) center no-repeat`, backgroundSize: "cover"}}>
            <div className="contacts-container">
                <div className="contacts__block">
                    <h2>Контакты</h2>
                    <p>г. Санкт-Петербург, Кронверкский пр-т, д.49, ауд. 155 (вход со стороны ул. Сытнинской)</p>
                    <p>Тел: <a href="tel:+79315380170">+7 (931) 538-01-70</a></p>
                    <button className="btn" onClick={openModal}>
                        <img src={mailImg} alt="Написать нам"/>
                        Написать нам
                    </button>
                </div>
            </div>
        </div>
    )
}