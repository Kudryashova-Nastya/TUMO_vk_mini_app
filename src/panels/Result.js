import React from 'react';
import PropTypes from 'prop-types';

import {Div, Group, Panel} from '@vkontakte/vkui';

import './Result.css';

const Result = ({id, go, routes}) => (
    <Panel id={id} >
        <Group className="result_container">
            <h1>Твоё направление - <br/> ПРОГРАММИРОВАНИЕ</h1>
            <div className="result_icons">💻 🕸 ⌨</div>
            <Div>
                <div className='direction_text'>Lorem ipsom asdf feqq. Lorem ipsom asdf feqq. Lorem ipsom asdf feqq.
                    Lorem ipsom asdf feqq.Lorem ipsom asdf feqq. Lorem ipsom asdf feqq. Lorem ipsom asdf feqq. Lorem
                    ipsom asdf feqq. Lorem ipsom asdf feqq. Lorem ipsom asdf feqq.Lorem ipsom asdf feqq. Lorem ipsom
                    asdf feqq.
                </div>
            </Div>
            <Div>
                <div className="statistics">По статистике с данным направлением чаще всего выбирают:</div>
            </Div>
            <Div>
                <a className='button-link' href="https://tumo.moscow/programming">
                    Записаться на пробное занятие
                </a>
            </Div>
        </Group>
    </Panel>
);

Result.propTypes = {
    id: PropTypes.string.isRequired,
    go: PropTypes.func.isRequired,
};

export default Result;
