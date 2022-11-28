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
    QUESTION3: 'question3',
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
    let [answer3, setAnswer3] = useState(0)
    let [answer4, setAnswer4] = useState(0)
    let [answer5, setAnswer5] = useState(0)
    let [answer6, setAnswer6] = useState(0)
    let [answer7, setAnswer7] = useState(0)

    let [question2, setQuestion2] = useState({})
    let [question3, setQuestion3] = useState({})
    let [question4, setQuestion4] = useState({})

    useEffect(() => {
        console.log("answer1", answer1)
        switch (answer1) {
            case "a":
                setQuestion2(data.Q2.v1)
                break
            case "b":
                setQuestion2(data.Q2.v2)
                break
            case "c":
                setQuestion2(data.Q2.v3)
                break
            case "d":
                setQuestion2(data.Q2.v4)
        }
    }, [answer1]);

    useEffect(() => {
        console.log("answer2", answer2)
        switch (answer2) {
            // если второй вопрос V1
            case "v1_a":
                setQuestion3(data.Q3.v1)
                break
            case "v1_b":
                setQuestion3(data.Q3.v2)
                break
            case "v1_c":
                setQuestion3(data.Q3.v3)
                break
            case "v1_d":
                setQuestion3(data.Q3.v4)
                break

            // если второй вопрос V2
            case "v2_a":
                setQuestion3(data.Q3.v5)
                break
            case "v2_b":
                setQuestion3(data.Q3.v6)
                break
            case "v2_c":
                setQuestion3(data.Q3.v6)
                break

            // если второй вопрос V3
            case "v3_a":
                setQuestion3(data.Q3.v7)
                break
            case "v3_b":
                setQuestion3(data.Q3.v3)
                break
            case "v3_c":
                setQuestion3(data.Q3.v3)
                break

            // если второй вопрос V4
            case "v4_a":
                setQuestion3(data.Q3.v6)
                break
            case "v4_b":
                setQuestion3(data.Q3.v6)
        }
    }, [answer2]);

    const restart = () => {
        setAnswer1(0)
        setAnswer2(0)
        setAnswer3(0)
        setAnswer4(0)
        setAnswer5(0)
        setAnswer6(0)
        setAnswer7(0)
        setQuestion2({})
        setQuestion3({})
        setQuestion4({})
    }

    const  clearAnswer = (number) => {
        switch (number) {
            case 1:
                setAnswer1(0)
                break
            case 2:
                setAnswer2(0)
                break
            case 3:
                setAnswer3(0)
                break
            case 4:
                setAnswer4(0)
                break
            case 5:
                setAnswer5(0)
                break
            case 6:
                setAnswer6(0)
                break
            case 7:
                setAnswer7(0)
        }
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
                                          go={go} q={data.Q1} answer={answer1} setAnswer={setAnswer1} clearAnswer={clearAnswer}/>

                                <Question id={ROUTES.QUESTION2} next={ROUTES.QUESTION3} prev={ROUTES.QUESTION1} number={2}
                                          go={go} q={question2} answer={answer2} setAnswer={setAnswer2} clearAnswer={clearAnswer}/>
                                <Question id={ROUTES.QUESTION3} next={ROUTES.RESULT} prev={ROUTES.QUESTION2} number={3}
                                          go={go} q={question3} answer={answer3} setAnswer={setAnswer3} clearAnswer={clearAnswer}/>
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
