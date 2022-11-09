import React from 'react';
import PropTypes from 'prop-types';

import {Group, Panel, PanelHeader, PanelHeaderBack, Radio, RadioGroup} from '@vkontakte/vkui';

import './Question.css';
import * as data from '../data/questions'

const Question1 = ({id, go, routes}) => (
    <Panel id={id} >
        <PanelHeader separator={false}
            left={<PanelHeaderBack onClick={() => go(routes.HOME)} data-to="home"/>}
        >
            Вопрос 1 из 10
        </PanelHeader>
        <Group className="test-group">
            <h2>
                {data.Q1.question}
            </h2>
            <div className='variants'>
                <RadioGroup>
                    {data.Q1.answers.map((p) => (
                        <Radio  name="q1" value={p.value}>
                            <span className="variant">{p.text}</span>
                        </Radio>
                    ))}
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
