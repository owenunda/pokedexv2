import React, { useState } from 'react';
import { useDispatch } from 'react-redux';
import { nameUSer } from '../store/slices/userName.slice';
import { useNavigate } from 'react-router-dom';








const Home = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate()

    // ========= nombre de usuario  ========= //
    const [ inputName, setImputName] = useState()
    const renameUser = () =>{
        dispatch(nameUSer(inputName))
        navigatePokedex()
    }
    // ========= nos cambiamos a la ruta de "/pokedex"  =================== //
    const navigatePokedex = () =>{
        navigate("/pokedex")
    }
    



    return (
        <div className='home__cotainer'>
            <nav className='container__img'>
            <img className='img__home--pokedex' src="./src/assets/imgs/image11.png" alt="pokedexImg" />
            </nav>
            <section className='section__home'>
                <img className='section__img--grupFriends' src="./src/assets/imgs/pngwing.com.png" alt="" />
                <p> <strong> Hello trainer!! </strong>  give me your name to start. </p>
            </section >
            <form onSubmit={renameUser} className='container__form'>
            <input type="text" onChange={(e) => setImputName(e.target.value)} placeholder="name" />
            <button > 
                <img src="./src/assets/imgs/clipart1298638.png" alt="" />
            </button>
            </form>
            <footer className='footer__color--red'>
                <div className='footer__color--back'></div>
            </footer>
        </div>
    );
};

export default Home;