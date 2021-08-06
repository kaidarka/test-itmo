import React, {useEffect, useState} from "react";
import shapeImg from "../image/shape.svg";
import mailImg from "../image/mail.svg";

export const Modal = ({setOpenModal}) => {
    const closeModal = e => {
        if(e.target.id === 'overlay' || e.target.id === 'shape'){
            setOpenModal(null);
        }
    }

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [nameDirty, setNameDirty] = useState(false);
    const [emailDirty, setEmailDirty] = useState(false);
    const [nameError, setNameError] = useState("Поле фамилия и имя не может быть пустым");
    const [emailError, setEmailError] = useState("Поле e-mail не может быть пустым");
    const [formValid, setFormValid] = useState(false);

    useEffect(() => {
        if(emailError || nameError){
            setFormValid(false)
        } else {
            setFormValid(true)
        }
    }, [emailError, nameError])



    const blurHandler = (e) => {
        switch (e.target.name) {
            case 'email':
                setEmailDirty(true)
                break
            case 'name':
                setNameDirty(true)
                break
        }
    }
    const emailHandler = (e) => {
        setEmail(e.target.value);
        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (!re.test(String(e.target.value).toLowerCase())){
            setEmailError("Некорректный E-mail")
        } else {
            setEmailError("")
        }
    }
    const nameHandler = (e) => {
        setName(e.target.value);
        if(!e.target.value){
                setNameError("Поле фамилия и имя не может быть пустым")
        } else {
            setNameError("")
        }
    }

    return(
        <div id="overlay" onClick={closeModal}>
            <div className="modal">
                <img src={shapeImg} id="shape" alt="Закрыть"/>
                <h1>Напишите нам!</h1>
                <form action="" className="modal-form">
                    <label htmlFor="name">Ваши фамилия и имя <span>*</span></label>
                    <input type="text" id="name" name="name" placeholder="Введите ваше имя"
                           onBlur={e => blurHandler(e)}
                           value={name}
                           onChange={e => nameHandler(e)}
                           onKeyUp="var yratext=/['0-9',':']/; if(yratext.test(this.value)) this.value=''"
                    />
                    <label htmlFor="email">Электронная почта <span>*</span></label>
                    <input type="text" id="email" name="email" placeholder="primer@itmo.ru"
                           onBlur={e => blurHandler(e)}
                           value={email}
                           onChange={e => emailHandler(e)}
                    />
                    <label htmlFor="text">Что непонятно или нужно уточнить</label>
                    <textarea name="text" id="text" placeholder="Введите ваше сообщение" maxlength="300"></textarea>
                    <p>Отправляя данную форму, вы даете согласие на обработку своих <a href="">Персональных данных</a></p>
                    {(nameDirty && nameError) && <div style={{color:'red', marginBottom:'8px', fontWeight:'400', fontSize: '12px'}}>{nameError}</div>}
                    {(emailDirty && emailError) && <div style={{color:'red', marginBottom:'8px', fontWeight:'400', fontSize: '12px'}}>{emailError}</div>}
                    <button className="btn" disabled={!formValid}>
                        <img src={mailImg} alt="Написать нам"/>
                        Отправить
                    </button>
                </form>
            </div>
        </div>
    )
}