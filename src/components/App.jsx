import React, {useState} from 'react';
import {Header} from "./Header.jsx";
import {NavBar} from "./Nav/NavBar.jsx";
import {Banner} from "./Banner/Banner.jsx";
import {News} from "./News/News.jsx";
import {Disciplines} from "./Disciplines/Disciplines.jsx";
import {Contacts} from "./Contacts/Contacts.jsx";
import {Footer} from "./Footer.jsx";
import {FooterPol} from "./FooterPol.jsx";
import {Modal} from "./Modal.jsx";

function App() {
    const [openModal, setOpenModal] = useState(false);
    console.log(openModal)
    return (
        <>
            <header>
                <Header/>
                <NavBar/>
                <Banner/>
            </header>
            <main>
                <News/>
                <Disciplines/>
                <Contacts setOpenModal={setOpenModal}/>
            </main>
            <footer>
                <Footer/>
                <FooterPol/>
            </footer>
            {openModal && <Modal setOpenModal={setOpenModal}/>}
        </>
    )
}

export default App;