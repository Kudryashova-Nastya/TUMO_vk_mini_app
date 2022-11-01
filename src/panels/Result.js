import React from 'react';
import PropTypes from 'prop-types';

import {Div, Group, Panel} from '@vkontakte/vkui';

import './Result.css';

const Result = ({id, go, routes}) => (
    <Panel id={id}>
        <Group className="result_container">
            <h1>Твоё направление - <br/> ПРОГРАММИРОВАНИЕ</h1>
            <div className="result_icons">💻 🕸 👩‍💻
            </div>
            <Div>
                <div className='direction_text'>Этот курс для тех, кто хочет научиться программировать с нуля, прокачать
                    свои аналитические способности и познакомиться с миром IT. Ты освоишь язык JavaScript, который
                    широко используется в веб-разработке. А в конце курса откроешь для себя новые возможности в других
                    креативных индустриях.
                </div>
            </Div>
            <Div>
                <div className="result_text statistics">По статистике с данным направлением чаще всего выбирают:</div>
                <div className='cards-container'>
                    <div className='card'>
                        <div className="card-header">🎮 &nbsp;Разработка игр</div>
                        <div className="card-body">
                            Многие любят играть в компьютерные игры, но еще интереснее – их
                            создавать. На этом курсе ты построишь собственный игровой мир! Это будет твоя история, ты
                            нарисуешь и выпустишь в жизнь персонажей.
                        </div>
                    </div>
                    <div className='card'>
                        <div className="card-header">🎵 &nbsp;Создание музыки</div>
                        <div className="card-body">
                            Этот курс для тех, кто хочет смело экспериментировать и создавать музыку с нуля: от
                            сочинения мелодии и ритма до сведения финального трека. Ты будешь изучать структуру
                            музыкальной композиции, саунд-дизайн и синтез звука.
                        </div>
                    </div>
                    <div className='card card__center'>
                        <div className="card-header">🧊 &nbsp;3D-моделирование</div>
                        <div className="card-body">
                            На этом курсе ты можешь почувствовать себя скульптором или архитектором. Ты освоишь одну из
                            главных технологий будущего – 3D-моделирование. Инструменты 3D уже сегодня используются в
                            кино, видеоиграх, строительстве, медицине и производственном дизайне.
                        </div>
                    </div>
                </div>
            </Div>
            <Div>
                <h3>TUMO</h3>
                <div className="result_text"><span className="organization">TUMO MOSCOW</span> — это международная школа
                    креативных технологий, где подростки
                    12-18 лет раскрывают свой потенциал и становятся лидерами завтрашнего дня.
                </div>
                <a className='button-link' href="https://tumo.moscow/programming">
                    Записаться на пробное занятие
                </a>
            </Div>
            <Div>
                <h3>Другие направления</h3>
                <div className='cards-container cards__another'>
                    <div className='card'>
                        <div className="card-header">🤖 &nbsp;Робототехника</div>
                        <div className="card-body">
                            Этот курс для тех, кто хочет разобраться: как устроены умные машины и на что они способны.
                            Ты построишь робота из Lego Mindstorms, заставишь его выполнять команды, а потом еще и
                            научишь общаться с другими устройствами.
                        </div>
                    </div>
                    <div className='card'>
                        <div className="card-header">🎨 &nbsp;Графический дизайн</div>
                        <div className="card-body">
                            Этот курс для тех, кто хочет научиться выражать свои идеи визуальными средствами. На
                            занятиях ты откроешь для себя дизайн-мышление, познакомишься с профессиональными программами
                            и попробуешь свои силы в разных видах графического дизайна.
                        </div>
                    </div>
                    <div className='card'>
                        <div className="card-header">🎬 &nbsp;Кинопроизводство</div>
                        <div className="card-body">
                            Этот курс для тех, кто мечтает сделать свое видео и с первых же секунд захватить зрителя. В
                            мастерских TUMO ты пройдешь все этапы кинопроизводства, подружишься с профессиональной
                            техникой и поймешь, почему так важно уметь работать в команде.
                        </div>
                    </div>
                    <div className='card'>
                        <div className="card-header">🧩 &nbsp;Анимация</div>
                        <div className="card-body">
                            Этот курс для тех, кто любит рисовать, но хочет чего-то большего. Ты станешь режиссером и
                            сценаристом своего анимационного фильма. Куратор откроет тебе законы жанра и секретные
                            приемы лучших художников-аниматоров. И, конечно, ты получишь богатый опыт работы с
                            профессиональной программой Toon Boom.
                        </div>
                    </div>
                </div>
                <div className='button-restart' onClick={() => go(routes.HOME)}>
                    Пройти тест ещё раз
                </div>
            </Div>

        </Group>
        <footer>
        <div className="footer_column">+7 (495) 646-02-73<br/>
            info@tumo.moscow
        </div>
        <div className="footer_column"><img alt="Лого TUMO" src="https://thumb.tildacdn.com/tild6664-6331-4334-a161-366530316463/-/cover/320x40/center/center/-/format/webp/11799789611339936983.png"/>
        </div>
        <div className="footer_column">123100, Россия, Москва,<br/>
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
