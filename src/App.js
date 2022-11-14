import React, {useState, useEffect} from 'react';
import bridge from '@vkontakte/vk-bridge';
import {
    View,
    ScreenSpinner,
    AdaptivityProvider,
    AppRoot,
    ConfigProvider,
    SplitLayout,
    SplitCol
} from '@vkontakte/vkui';
import '@vkontakte/vkui/dist/vkui.css';

import Home from './panels/Home';
import Question from "./panels/Question";
import Result from "./panels/Result";

import * as data from './data/questions'

const ROUTES = {
    HOME: 'home',
    QUESTION1: 'question1',
    QUESTION2: 'question2',
    RESULT: 'result',
}

const App = () => {
    const [scheme, setScheme] = useState('bright_light')
    const [activePanel, setActivePanel] = useState(ROUTES.RESULT); // главная стр

    useEffect(() => {
        bridge.subscribe(({detail: {type, data}}) => {
            if (type === 'VKWebAppUpdateConfig') {
                setScheme(data.scheme)
            }
        });
    }, []);

    // const go = e => {
    // 	setActivePanel(e.currentTarget.dataset.to);
    // };
    const go = panel => {
        setActivePanel(panel);
    };

    // логика вопросов
    let [answer1, setAnswer1] = useState(0)
    let [answer2, setAnswer2] = useState(0)

    let [question2, setQuestion2] = useState({})

    useEffect(() => {
        console.log(answer1)
        switch (answer1) {
            case "a":
                setQuestion2(data.Q2.v1)
                break
            case "b":
                setQuestion2(data.Q2.v2)
                break

        }
    }, [answer1]);

    const restart = () => {
        setAnswer1(0)
        setAnswer2(0)
        setQuestion2({})
    }

    return (
        <ConfigProvider scheme={scheme}>
            <AdaptivityProvider>
                <AppRoot>
                    <SplitLayout popout={false}>
                        <SplitCol>
                            <View activePanel={activePanel}>
                                <Home id={ROUTES.HOME} go={go} routes={ROUTES}/>
                                <Question id={ROUTES.QUESTION1} next={ROUTES.QUESTION2} prev={ROUTES.HOME} number={1}
                                          go={go} q={data.Q1} answer={answer1} setAnswer={setAnswer1}/>

                                <Question id={ROUTES.QUESTION2} next={ROUTES.RESULT} prev={ROUTES.QUESTION1} number={2}
                                          go={go} q={question2} answer={answer2} setAnswer={setAnswer2}/>
                                <Result id={ROUTES.RESULT} go={go} routes={ROUTES} restart={restart}/>
                            </View>
                        </SplitCol>
                    </SplitLayout>
                </AppRoot>
            </AdaptivityProvider>
        </ConfigProvider>
    );
}

export default App;
