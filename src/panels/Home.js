import React from 'react';
import PropTypes from 'prop-types';

import {Panel, Group, Div} from '@vkontakte/vkui';
import './Home.css';
import Animation_logo from "../img/Анимация.svg"
import Gamedev_logo from "../img/Геймдев.svg"
import Design_logo from "../img/Дизайн.svg"
import Movie_logo from "../img/Кино.svg"
import Music_logo from "../img/Музыка.svg"
import Prog_logo from "../img/Программирование.svg"
import Robo_logo from "../img/Робототехника.svg"
import D3_logo from "../img/3D.svg"


// import poster from "../img/14169919.jpg"


const Home = ({id, go, routes}) => (
    <Panel id={id}>
        {/*<PanelHeader separator={false}></PanelHeader>*/}
        <Group>
            <div className='poster'></div>
            {/*<img src={poster} height='400'/>*/}
            <h1>Узнайте, какая креативная профессия подходит вашему ребенку</h1>
            <div className="directions_icons">
                <img alt="Animation_logo" src={Animation_logo}/>
                <img alt="Gamedev_logo" src={Gamedev_logo}/>
                <img alt="Design_logo" src={Design_logo}/>
                <img alt="Movie_logo" src={Movie_logo}/>
                <img alt="Music_logo" src={Music_logo}/>
                <img alt="Prog_logo" src={Prog_logo}/>
                <img alt="Robo_logo" src={Robo_logo}/>
                <img alt="D3_logo" src={D3_logo}/>
            </div>
            <Div>
                <div className='directions_text'>
                    Бесплатный тест для родителей подростков, который подскажет, какое увлечение ребенка может перерасти
                    в полезные навыки для его будущего
                </div>
            </Div>
            <Div>
                <div className='button-start' onClick={() => go(routes.QUESTION1)}>
                    Начать тест
                </div>
            </Div>
        </Group>
    </Panel>
);

Home.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
};

export default Home;
