import React from 'react';
import PropTypes from 'prop-types';

import {Group, Panel, PanelHeader, PanelHeaderBack, Radio, RadioGroup} from '@vkontakte/vkui';

import './Question.css';


const Question = ({id, next, number, go, q, answer, setAnswer, clearAnswer}) => (
    <Panel id={id}>
        <PanelHeader separator={false}
                     left={<PanelHeaderBack onClick={() => {window.history.back(); clearAnswer(number)}} data-to="home"/>}
        >
            Вопрос {number} из 7
        </PanelHeader>
        <Group className="test-group">
            <h2>
                {q.question}
            </h2>
            <div className='variants'>
                <RadioGroup>
                    {q.answers.map((p) => (
                        <Radio onClick={() => setAnswer(p.value)} name="answer"
                               value={p.value} key={p.value} defaultChecked={answer === p.value}>
                            <span className="variant">{p.text}</span>
                        </Radio>
                    ))}
                </RadioGroup>
                {answer ? <div className='button-next active' onClick={() => go(next)}>
                    Далее
                </div>: <div className='button-next disable'>
                    Далее
                </div>
                }

            </div>
        </Group>
    </Panel>
);

Question.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
};

export default Question;
