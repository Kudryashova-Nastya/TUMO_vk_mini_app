import React from 'react';
import PropTypes from 'prop-types';

import { Panel, PanelHeader, PanelHeaderBack } from '@vkontakte/vkui';

import './Question.css';

const Question1 = ({id, go, routes}) => (
	<Panel id={id}>
		<PanelHeader
			left={<PanelHeaderBack onClick={() => go(routes.HOME)} data-to="home"/>}
		>
			Вопрос 1
		</PanelHeader>
	</Panel>
);

Question1.propTypes = {
	id: PropTypes.string.isRequired,
	go: PropTypes.func.isRequired,
};

export default Question1;
