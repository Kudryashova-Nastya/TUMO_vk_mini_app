import React from 'react';
import PropTypes from 'prop-types';

import {Panel, Group, Div} from '@vkontakte/vkui';
import './Home.css';
import Directions from "../img/directions.svg"
import poster from "../img/14169919.jpg"


const Home = ({id, go, routes}) => (
    <Panel id={id}>
        {/*<PanelHeader separator={false}></PanelHeader>*/}
        <Group>
            <div className='poster'></div>
            {/*<img src={poster} height='400'/>*/}
            <h1>Подберём направление для тебя</h1>
            <div className="directions_icons"><img alt="directions" src={Directions}/></div>
            <Div>
                <div className='directions_text'>Lorem ipsom asdf feqq. Lorem ipsom asdf feqq. Lorem ipsom asdf feqq.
                    Lorem ipsom asdf feqq.Lorem ipsom asdf feqq. Lorem ipsom asdf feqq. Lorem ipsom asdf feqq. Lorem
                    ipsom asdf feqq. Lorem ipsom asdf feqq. Lorem ipsom asdf feqq.Lorem ipsom asdf feqq. Lorem ipsom
                    asdf feqq.
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
    fetchedUser: PropTypes.shape({
        photo_200: PropTypes.string,
        first_name: PropTypes.string,
        last_name: PropTypes.string,
        city: PropTypes.shape({
            title: PropTypes.string,
        }),
    }),
};

export default Home;
