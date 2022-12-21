import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import {Div, Group, Panel} from '@vkontakte/vkui';

import './Result.css';

let pageWidth = document.documentElement.scrollWidth
console.log(pageWidth)

const settings = {
    className: "center",
    centerMode: true,
    infinite: true,
    centerPadding: (pageWidth > 620) ? "35px" : "12px",
    slidesToShow: (pageWidth > 590) ? 2 : 1,
    speed: 800,
    focusOnSelect: true,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnHover: true,
    dots: (pageWidth < 590),
};


const Result = ({id, go, routes, restart, direction, directionRes}) => {
    const DIRECTION = direction
    const RECOMMENDATIONS_TOP = directionRes.slice(0, 2) // первые 2 топ
    const RECOMMENDATIONS_OTHER = directionRes.slice(2, directionRes.length)

    let poster
    if (pageWidth > 590) {
        poster = {backgroundImage: `url(${DIRECTION.poster_main})`}
    // } else if (pageWidth > 390) {
    } else if (pageWidth > 415) {
        poster = {backgroundImage: `url(${DIRECTION.poster_midi})`}
    } else if (pageWidth > 330) {
        poster = {backgroundImage: `url(${DIRECTION.poster_midi2})`}
    } else {
        poster = {backgroundImage: `url(${DIRECTION.poster_mini})`}
    }


    return (<Panel id={id}>
        <Group className="result_container">
            <a href={DIRECTION.link} target="_blank" rel="noreferrer">
                <div className="result_poster" style={poster}></div>
            </a>
            <Div>
                <div className='direction_text'>{DIRECTION.full}
                </div>

                <a className='button-link' href="https://vk.com/app6013442_-195122400?form_id=36#form_id=36" target="_blank"
                   rel="noreferrer">
                    {(pageWidth > 590) ? "Получить бесплатный пробный урок в подарок" : "Бесплатный урок в подарок"}
                </a>
            </Div>
            <Div>
                <div className="result_text statistics">По статистике с данным направлением чаще всего выбирают:</div>
                <div className='cards-container'>
                    {RECOMMENDATIONS_TOP.map((p) => (
                        <div key={p.name}>
                            <a href={p.link} key={p.name} target="_blank" rel="noreferrer">
                                <img className="rec-poster" src={p.rec_poster_top} alt="постер направления TUMO"/>
                            </a>
                        </div>
                    ))}
                </div>
            </Div>
            <Div>
                <h3>TUMO MOSCOW</h3>
                <div className="result_text">
                    <p><a href="https://tumo.moscow/?utm_source=vk&utm_medium=mini_app" target="_blank" rel="noreferrer"
                          className="organization">TUMO</a> — международный бренд
                        центров креативных индустрий для школьников. Первый открылся в Ереване в 2011 году,
                        но уже в 2016 оказался на первом месте рейтинга инновационных школ мира, составленного
                        французским журналом «We demain».</p>

                    <p>На сегодняшний день 17 школ TUMO, помимо нескольких городов Армении, уже работают во Франции,
                        Швейцарии, Германии, Албании, Ливане и скоро откроются в Южной Корее и США.</p>

                </div>

            </Div>
            <Div>
                <div className="result_text statistics">Другие направления</div>
                <br/>
                <Slider {...settings}>
                    {RECOMMENDATIONS_OTHER.map((p) => (
                        <a href={p.link} key={p.name} target="_blank" rel="noreferrer">
                            <img className="school-photo" src={p.rec_poster_other} alt="фото других направлений TUMO"/>
                        </a>
                    ))}
                </Slider>
                <div className='button-restart' onClick={() => {
                    restart();
                    go(routes.HOME)
                }}>
                    Пройти тест ещё раз
                </div>
            </Div>

        </Group>
        <footer>
            <div className="footer_column footer__text">
                <a className="footer_link" target="_blank" rel="noreferrer" href="tel: +7(495)646-02-73">+7 (495)
                    646-02-73</a><br/>
                <a className="footer_link" target="_blank" rel="noreferrer"
                   href="https://tumo.moscow/?utm_source=vk&utm_medium=mini_app">tumo.moscow</a>
            </div>
            <div className="footer_column footer__logo">
                <a className="footer_link" target="_blank" rel="noreferrer"
                   href="https://tumo.moscow/?utm_source=vk&utm_medium=mini_app">
                    <img alt="Лого TUMO"
                         src="https://thumb.tildacdn.com/tild6664-6331-4334-a161-366530316463/-/cover/320x40/center/center/-/format/webp/11799789611339936983.png"/>
                </a>
            </div>
            <div className="footer_column footer__text">
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
