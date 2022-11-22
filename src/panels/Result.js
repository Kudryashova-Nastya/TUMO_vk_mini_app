import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {Div, Group, Panel} from '@vkontakte/vkui';

import './Result.css';
import * as data from '../data/directions'

const DIRECTION = data.Programming
const RECOMMENDATIONS_TOP = data.Programming_res.slice(0, 2) // первые 2 топ
const RECOMMENDATIONS_OTHER = data.Programming_res.slice(2, data.Programming_res.length)
let pageWidth = document.documentElement.scrollWidth
console.log(pageWidth)

const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: (pageWidth > 620) ? "45px" : "18px",
    slidesToShow: (pageWidth > 590) ? 2 : 1,
    speed: 600,
    focusOnSelect: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true
};

let poster
if (pageWidth > 590) {
    poster = {backgroundImage: `url(${DIRECTION.poster_main})`}
} else if (pageWidth > 375) {
    poster = {backgroundImage: `url(${DIRECTION.poster_midi})`}
} else if (pageWidth > 330) {
    poster = {backgroundImage: `url(${DIRECTION.poster_midi2})`}
} else {
    poster = {backgroundImage: `url(${DIRECTION.poster_mini})`}
}

import photo1 from "../img/school/Главная.jpg"
import photo2 from '../img/school/2.jpg'
import photo3 from "../img/school/3.jpg"
import photo4 from "../img/school/4.jpg"
import photo5 from "../img/school/5.jpg"
import photo6 from "../img/school/6.jpg"
import photo7 from "../img/school/7.jpg"


const Result = ({id, go, routes, restart}) => {

    return (<Panel id={id}>
        <Group className="result_container">
            <div className="result_poster" style={poster}></div>
            <Div>
                <div className='direction_text'>{DIRECTION.full}
                </div>
            </Div>
            <Div>
                <div className="result_text statistics">По статистике с данным направлением чаще всего выбирают:</div>
                <div className='cards-container'>
                    {RECOMMENDATIONS_TOP.map((p) => (
                        <div className='card' key={p.name}>
                            <div className="card-header">{p.emoji} &nbsp;{p.name}</div>
                            <div className="card-body">
                                {p.short}
                            </div>
                        </div>
                    ))}
                </div>
            </Div>
            <Div>
                <h3>TUMO MOSCOW</h3>
                <div className="result_text">
                    <p><span className="organization">TUMO</span> — международный бренд
                        центров креативных индустрий для школьников. Первый открылся в Ереване в 2011 году,
                        но уже в 2016 оказался на первом месте рейтинга инновационных школ мира, составленного
                        французским
                        журналом «We demain».</p>

                    <p>На сегодняшний день 17 школ TUMO, помимо нескольких городов Армении, уже работают во Франции,
                        Швейцарии, Германии, Албании, Ливане и скоро откроются в Южной Корее и США.</p>

                </div>
                <Slider {...settings}>
                    <div>
                        <img className="school-photo" src={photo1} alt="фото школы TUMO"/>
                    </div>
                    <div>
                        <img className="school-photo" src={photo2} alt="фото школы TUMO"/>
                    </div>
                    <div>
                        <img className="school-photo" src={photo3} alt="фото школы TUMO"/>
                    </div>
                    <div>
                        <img className="school-photo" src={photo4} alt="фото школы TUMO"/>
                    </div>
                    <div>
                        <img className="school-photo" src={photo5} alt="фото школы TUMO"/>
                    </div>
                    <div>
                        <img className="school-photo" src={photo6} alt="фото школы TUMO"/>
                    </div>
                    <div>
                        <img className="school-photo" src={photo7} alt="фото школы TUMO"/>
                    </div>
                </Slider>
                <a className='button-link' href="https://tumo.moscow/tryfree" target="_blank" rel="noreferrer">
                    {(pageWidth > 590) ? "Записаться на бесплатное пробное занятие" : "Бесплатное пробное занятие"}
                </a>
            </Div>
            <Div>
                <h3>Другие направления</h3>

                <div className='cards-container cards__another'>
                    {RECOMMENDATIONS_OTHER.map((p) => (
                        <div className='card card-another' key={p.name}>
                            <div className="card-header">{p.emoji} &nbsp;{p.name}</div>
                            <div className="card-body">
                                {p.short}
                            </div>
                        </div>
                    ))}
                </div>
                <div className='button-restart' onClick={() => {
                    restart();
                    go(routes.HOME)
                }}>
                    Пройти тест ещё раз
                </div>
            </Div>

        </Group>
        <footer>
            <div className="footer_column">
                <a className="footer_link" target="_blank" rel="noreferrer" href="tel: +7(495)646-02-73">+7 (495)
                    646-02-73</a><br/>
                <a className="footer_link" target="_blank" rel="noreferrer"
                   href="mailto: info@tumo.moscow">info@tumo.moscow</a>
            </div>
            <div className="footer_column">
                <a className="footer_link" target="_blank" rel="noreferrer" href="https://tumo.moscow/">
                    <img alt="Лого TUMO"
                         src="https://thumb.tildacdn.com/tild6664-6331-4334-a161-366530316463/-/cover/320x40/center/center/-/format/webp/11799789611339936983.png"/>
                </a>
            </div>
            <div className="footer_column">
                123100, Россия, Москва,<br/>
                ул. Мантулинская, 7 стр. 3
            </div>
        </footer>
    </Panel>);
};

Result.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
}
export default Result;
