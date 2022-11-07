import React from 'react';
import PropTypes from 'prop-types';

import {Div, Group, Panel} from '@vkontakte/vkui';

import './Result.css';
import * as data from '../data/directions'

const DIRECTION = data.Programming
const RECOMMENDATIONS_TOP = data.Programming_res.slice(0, 2) // первые 2 топ
const RECOMMENDATIONS_OTHER = data.Programming_res.slice(2, data.Programming_res.length)

const Result = ({id, go, routes}) => (
    <Panel id={id}>
        <Group className="result_container">
            <h1>Твоё направление - <br/> {DIRECTION.name}</h1>
            <div className="result_icons">💻 🕸 👩‍💻
            </div>
            <Div>
                <div className='direction_text'>{DIRECTION.full}
                </div>
            </Div>
            <Div>
                <div className="result_text statistics">По статистике с данным направлением чаще всего выбирают:</div>
                <div className='cards-container'>
                    {RECOMMENDATIONS_TOP.map((p) => (
                        <div className='card'>
                            <div className="card-header">{p.emoji} &nbsp;{p.name}</div>
                            <div className="card-body">
                                {p.short}
                            </div>
                        </div>
                    ))}
                </div>
            </Div>
            <Div>
                <h3>TUMO</h3>
                <div className="result_text"><span className="organization">TUMO MOSCOW</span> — это международная школа
                    креативных технологий, где подростки 12-18 лет раскрывают свой потенциал и становятся лидерами
                    завтрашнего дня.
                </div>
                <a className='button-link' href="https://tumo.moscow/tryfree" target="_blank" rel="noreferrer">
                    Записаться на бесплатное пробное занятие
                </a>
            </Div>
            <Div>
                <h3>Другие направления</h3>

                <div className='cards-container cards__another'>
                    {RECOMMENDATIONS_OTHER.map((p) => (
                        <div className='card card-another'>
                            <div className="card-header">{p.emoji} &nbsp;{p.name}</div>
                            <div className="card-body">
                                {p.short}
                            </div>
                        </div>
                    ))}
                </div>
                <div className='button-restart' onClick={() => go(routes.HOME)}>
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
    </Panel>
);

Result.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
};

export default Result;
