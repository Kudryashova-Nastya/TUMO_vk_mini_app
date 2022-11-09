import React from 'react';
import PropTypes from 'prop-types';

import {Group, Panel, PanelHeader, PanelHeaderBack, Radio, RadioGroup} from '@vkontakte/vkui';

import './Question.css';

const Question1 = ({id, go, routes}) => (
    <Panel id={id} >
        <PanelHeader separator={false}
            left={<PanelHeaderBack onClick={() => go(routes.HOME)} data-to="home"/>}
        >
            Вопрос 1 из 10
        </PanelHeader>
        <Group className="test-group">
            <h2>
                Если сегодня можно делать всё, что угодно, то чем займется ваш ребенок?
            </h2>
            <div className='variants'>
                <RadioGroup>
                    <Radio  name="q1" value="a">
                        <span className="variant">Включит компьютер и не выключит ближайшие сутки</span>
                    </Radio>
                    <Radio name="q1" value="b">
                        <span className="variant">Пойдёт гулять на целый день</span>
                    </Radio>
                    <Radio name="q1" value="c">
                        <span className="variant">Сделает что-то руками: соберёт, смоделирует или нарисует</span>
                    </Radio>
                    <Radio name="q1" value="d">
                        <span className="variant">Будет читать книги — художественные и не только</span>
                    </Radio>
                </RadioGroup>
                <div className='button-next' onClick={() => go(routes.RESULT)}>
                    Далее
                </div>
            </div>
        </Group>
    </Panel>
);

Question1.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
};

export default Question1;
