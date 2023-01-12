import React, {useState, useEffect} from 'react';
import bridge from '@vkontakte/vk-bridge';
import {
    View,
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
import * as dir from "./data/directions";

const ROUTES = {
    HOME: 'home',
    QUESTION1: 'question1',
    QUESTION2: 'question2',
    QUESTION3: 'question3',
    QUESTION4: 'question4',
    QUESTION5: 'question5',
    QUESTION6: 'question6',
    QUESTION7: 'question7',
    RESULT: 'result',
}

const App = () => {
    const [scheme, setScheme] = useState('bright_light')
    const [activePanel, setActivePanel] = useState(ROUTES.HOME); // главная стр
    const [history, setHistory] = useState(['home']) // Заносим начальную панель в массив историй.

    const goBack = () => {
        if( history.length === 1 ) {  // Если в массиве одно значение:
            bridge.send("VKWebAppClose", {"status": "success"}); // Отправляем bridge на закрытие сервиса.
        } else if( history.length > 1 ) { // Если в массиве больше одного значения:
            history.pop() // удаляем последний элемент в массиве.
            setActivePanel( history[history.length - 1] ) // Изменяем массив с иcторией и меняем активную панель.
        }
    }



    useEffect(() => {
        window.addEventListener('popstate', () => goBack());
        bridge.subscribe(({detail: {type, data}}) => {
            if (type === 'VKWebAppUpdateConfig') {
                setScheme(data.scheme)
            }
        });
    }, []);

    // const go = e => {
    // 	setActivePanel(e.currentTarget.dataset.to);
    // };

    const go = name => { // В качестве аргумента принимаем id панели для перехода
        window.history.pushState( {panel: name}, name ); // Создаём новую запись в истории браузера
        setActivePanel(name); // Меняем активную панель
        history.push( name ); // Добавляем панель в историю
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
    let [question5, setQuestion5] = useState({})
    let [question6, setQuestion6] = useState({})
    let [question7, setQuestion7] = useState({})

    let [weigths1, setWeigths1] = useState({G: 0, Mu: 0, D3: 0, R: 0, De: 0, Mo: 0, A: 0, P: 0})
    let [weigths2, setWeigths2] = useState({G: 0, Mu: 0, D3: 0, R: 0, De: 0, Mo: 0, A: 0, P: 0})
    let [weigths3, setWeigths3] = useState({G: 0, Mu: 0, D3: 0, R: 0, De: 0, Mo: 0, A: 0, P: 0})
    let [weigths4, setWeigths4] = useState({G: 0, Mu: 0, D3: 0, R: 0, De: 0, Mo: 0, A: 0, P: 0})
    let [weigths5, setWeigths5] = useState({G: 0, Mu: 0, D3: 0, R: 0, De: 0, Mo: 0, A: 0, P: 0})
    let [weigths6, setWeigths6] = useState({G: 0, Mu: 0, D3: 0, R: 0, De: 0, Mo: 0, A: 0, P: 0})

    let [directionMain, setDirectionMain] = useState({})
    let [directionRes, setDirectionRes] = useState({})


    useEffect(() => {
        // console.log("answer1", answer1)
        switch (answer1) {
            case "a":
                setQuestion2(data.Q2.v1)
                setWeigths1({G: 1, Mu: 0, D3: 1, R: 0, De: 0, Mo: 0, A: 0, P: 1})
                break
            case "b":
                setQuestion2(data.Q2.v2)
                setWeigths1({G: 0, Mu: 2, D3: 0, R: 0, De: 0, Mo: 1, A: 0, P: 0})
                break
            case "c":
                setQuestion2(data.Q2.v3)
                setWeigths1({G: 0, Mu: 0, D3: 0, R: 1, De: 1, Mo: 0, A: 0, P: 0})
                break
            case "d":
                setQuestion2(data.Q2.v4)
                setWeigths1({G: 0, Mu: 1, D3: 0, R: 0, De: 0, Mo: 1, A: 1, P: 0})
        }
    }, [answer1]);

    useEffect(() => {
        // console.log("weigths1", weigths1)
        // console.log("answer2", answer2)
        switch (answer2) {
            // если второй вопрос V1
            case "v1_a":
                setQuestion3(data.Q3.v1)
                setWeigths2({G: 0, Mu: 1, D3: 0, R: 0, De: 1, Mo: 0, A: 0, P: 0})
                break
            case "v1_b":
                setQuestion3(data.Q3.v2)
                setWeigths2({G: 0, Mu: 2, D3: 0, R: 0, De: 0, Mo: 2, A: 1, P: 0})
                break
            case "v1_c":
                setQuestion3(data.Q3.v3)
                setWeigths2({G: 2, Mu: 0, D3: 0, R: 0, De: 0, Mo: 0, A: 0, P: 1})
                break
            case "v1_d":
                setQuestion3(data.Q3.v4)
                setWeigths2({G: 0, Mu: 0, D3: 2, R: 0, De: 2, Mo: 0, A: 0, P: 0})
                break

            // если второй вопрос V2
            case "v2_a":
                setQuestion3(data.Q3.v5)
                setWeigths2({G: 0, Mu: 0, D3: 0, R: 0, De: 0, Mo: 3, A: 0, P: 0})
                break
            case "v2_b":
                setQuestion3(data.Q3.v6)
                setWeigths2({G: 0, Mu: 3, D3: 0, R: 0, De: 0, Mo: 0, A: 0, P: 0})
                break
            case "v2_c":
                setQuestion3(data.Q3.v6)
                setWeigths2({G: 0, Mu: 0, D3: 0, R: 0, De: 3, Mo: 0, A: 0, P: 0})
                break

            // если второй вопрос V3
            case "v3_a":
                setQuestion3(data.Q3.v6)
                setWeigths2({G: 0, Mu: 0, D3: 2, R: 3, De: 0, Mo: 0, A: 0, P: 0})
                break
            case "v3_b":
                setQuestion3(data.Q3.v6)
                setWeigths2({G: 0, Mu: 0, D3: 0, R: 0, De: 0, Mo: 3, A: 0, P: 0})
                break
            case "v3_c":
                setQuestion3(data.Q3.v6)
                setWeigths2({G: 0, Mu: 0, D3: 0, R: 0, De: 2, Mo: 0, A: 2, P: 0})
                break

            // если второй вопрос V4
            case "v4_a":
                setQuestion3(data.Q3.v6)
                setWeigths2({G: 0, Mu: 0, D3: 0, R: 0, De: 0, Mo: 1, A: 2, P: 0})
                break
            case "v4_b":
                setQuestion3(data.Q3.v6)
                setWeigths2({G: 0, Mu: 2, D3: 1, R: 0, De: 1, Mo: 0, A: 0, P: 0})
        }
    }, [answer2]);

    useEffect(() => {
        // console.log("weigths2", weigths2)
        // console.log("answer3", answer3)
        switch (answer3) {
            case "v1_a":
                setWeigths3({G: 0, Mu: 2, D3: 0, R: 0, De: 0, Mo: 1, A: 0, P: 0})
                break
            case "v1_b":
                setWeigths3({G: 0, Mu: 0, D3: 0, R: 0, De: 1, Mo: 1, A: 0, P: 0})
                break
            case "v1_c":
                setWeigths3({G: 2, Mu: 0, D3: 1, R: 0, De: 0, Mo: 0, A: 0, P: 1})
                break
            case "v2_a":
                setWeigths3({G: 0, Mu: 0, D3: 0, R: 0, De: 0, Mo: 1, A: 1, P: 0})
                break
            case "v2_b":
                setWeigths3({G: 0, Mu: 0, D3: 0, R: 0, De: 0, Mo: 2, A: 0, P: 0})
                break
            case "v2_c":
                setWeigths3({G: 0, Mu: 0, D3: 0, R: 0, De: 0, Mo: 0, A: 2, P: 0})
                break
            case "v3_a":
                setWeigths3({G: 2, Mu: 0, D3: 2, R: 0, De: 0, Mo: 1, A: 0, P: 0})
                break
            case "v3_b":
                setWeigths3({G: 0, Mu: 0, D3: 0, R: 0, De: 0, Mo: 0, A: 0, P: 2})
                break
            case "v3_c":
                setWeigths3({G: 0, Mu: 1, D3: 0, R: 1, De: 0, Mo: 0, A: 0, P: 0})
                break
            case "v4_a":
                setWeigths3({G: 2, Mu: 0, D3: 0, R: 0, De: 0, Mo: 0, A: 2, P: 0})
                break
            case "v4_b":
                setWeigths3({G: 0, Mu: 0, D3: 2, R: 1, De: 1, Mo: 0, A: 0, P: 0})
                break
            case "v5_a":
                setWeigths3({G: 0, Mu: 0, D3: 0, R: 0, De: 0, Mo: 1, A: 2, P: 0})
                break
            case "v5_b":
                setWeigths3({G: 0, Mu: 2, D3: 1, R: 0, De: 1, Mo: 0, A: 0, P: 0})
                break
            case "v6_a":
                setWeigths3({G: -3, Mu: 0, D3: 0, R: 0, De: 0, Mo: 0, A: 0, P: -2})
                break
            case "v6_b":
                setWeigths3({G: -2, Mu: 0, D3: 0, R: 0, De: 0, Mo: 0, A: 0, P: -1})
                break
            case "v6_c":
                setWeigths3({G: 2, Mu: 0, D3: 0, R: 0, De: 0, Mo: 0, A: 0, P: 0})
        }
        setQuestion4(data.Q4.v1)
    }, [answer3]);

    useEffect(() => {
        // console.log("weigths3", weigths3)
        // console.log("answer4", answer4)
        switch (answer4) {
            case "v1_a":
                setWeigths4({G: 2, Mu: 2, D3: 2, R: 0, De: 1, Mo: 0, A: 0, P: 0})
                break
            case "v1_b":
                setWeigths4({G: 0, Mu: 0, D3: 0, R: 0, De: 0, Mo: 1, A: 1, P: 0})
                break
            case "v1_c":
                setWeigths4({G: 0, Mu: 0, D3: 0, R: 2, De: 0, Mo: 0, A: 0, P: 1})
        }
        setQuestion5(data.Q5.v1)
    }, [answer4]);

    useEffect(() => {
        // console.log("weigths4", weigths4)
        // console.log("answer5", answer5)
        switch (answer5) {
            case "v1_a":
                setWeigths5({G: 0, Mu: 1, D3: 1, R: 0, De: 2, Mo: 0, A: 1, P: 0})
                break
            case "v1_b":
                setWeigths5({G: 2, Mu: 0, D3: 0, R: 1, De: 0, Mo: 1, A: 0, P: 2})
        }
        setQuestion6(data.Q6.v1)
    }, [answer5]);

    useEffect(() => {
        // console.log("weigths5", weigths5)
        // console.log("answer6", answer6)
        switch (answer6) {
            case "v1_a":
                setWeigths6({G: 2, Mu: 1, D3: 0, R: 1, De: 0, Mo: 3, A: 0, P: 0})
                break
            case "v1_b":
                setWeigths6({G: 0, Mu: 0, D3: 1, R: 0, De: 2, Mo: 0, A: 1, P: 2})
        }
        setQuestion7(data.Q7.v1)
    }, [answer6]);

    useEffect(() => {
        // console.log("weigths6", weigths6)
        // console.log("answer7", answer7)
        let weigths7
        switch (answer7) {
            case "v1_a":
                weigths7 = {G: 0, Mu: 0, D3: 1, R: 0, De: 2, Mo: 0, A: 0, P: 0}
                break
            case "v1_b":
                weigths7 = {G: 0, Mu: 0, D3: 0, R: 1, De: 0, Mo: 0, A: 0, P: 2}
                break
            case "v1_c":
                weigths7 = {G: 3, Mu: 1, D3: 0, R: 0, De: 0, Mo: 2, A: 3, P: 0}
        }

        // подсчёт баллов
        let weights = {A: 0, D3: 0, De: 0, G: 0, Mo: 0, Mu: 0, P: 0, R: 0}

        for (let i = 0, arrays = [weigths1, weigths2, weigths3, weigths4, weigths5, weigths6, weigths7]; i < arrays.length; i++) {
            for (let key in arrays[i]) {
                weights[key] = parseFloat(weights[key]) + parseFloat(arrays[i][key]);
            }
        }
        console.log(weights);

        // сортировка
        let keysSorted = Object.keys(weights).sort(function (a, b) {
            return weights[b] - weights[a]
        })
        // console.log(keysSorted);
        // console.log(keysSorted[0]);

        switch (keysSorted[0]) {
            case "A":
                setDirectionMain(dir.Animation)
                setDirectionRes(dir.Animation_res)
                break
            case "D3":
                setDirectionMain(dir.D3)
                setDirectionRes(dir.D3_res)
                break
            case "De":
                setDirectionMain(dir.Design)
                setDirectionRes(dir.Design_res)
                break
            case "P":
                setDirectionMain(dir.Programming)
                setDirectionRes(dir.Programming_res)
                break
            case "Mo":
                setDirectionMain(dir.Movie)
                setDirectionRes(dir.Movie_res)
                break
            case "G":
                setDirectionMain(dir.Gamedev)
                setDirectionRes(dir.Gamedev_res)
                break
            case "R":
                setDirectionMain(dir.Robots)
                setDirectionRes(dir.Robots_res)
                break
            case "Mu":
                setDirectionMain(dir.Music)
                setDirectionRes(dir.Music_res)
        }

    }, [answer7]);

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
        setQuestion5({})
        setQuestion6({})
        setQuestion7({})
    }

    const clearAnswer = (number) => {
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
        <ConfigProvider isWebView={true} scheme={scheme}>
            <AdaptivityProvider>
                <AppRoot>
                    <SplitLayout popout={false}>
                        <SplitCol>
                            <View activePanel={activePanel} // Активная панель равная стейту
                                  history={history} // Ставим историю из массива панелей
                                  onSwipeBack={goBack} // При свайпе выполняется данная функция
                                >
                                <Home id={ROUTES.HOME} go={go} routes={ROUTES}/>
                                <Question id={ROUTES.QUESTION1} next={ROUTES.QUESTION2} number={1}
                                          go={go} q={data.Q1} answer={answer1} setAnswer={setAnswer1}
                                          clearAnswer={clearAnswer}/>
                                <Question id={ROUTES.QUESTION2} next={ROUTES.QUESTION3}                                          number={2}
                                          go={go} q={question2} answer={answer2} setAnswer={setAnswer2}
                                          clearAnswer={clearAnswer}/>
                                <Question id={ROUTES.QUESTION3} next={ROUTES.QUESTION4}                                          number={3}
                                          go={go} q={question3} answer={answer3} setAnswer={setAnswer3}
                                          clearAnswer={clearAnswer}/>
                                <Question id={ROUTES.QUESTION4} next={ROUTES.QUESTION5}                                          number={4}
                                          go={go} q={question4} answer={answer4} setAnswer={setAnswer4}
                                          clearAnswer={clearAnswer}/>
                                <Question id={ROUTES.QUESTION5} next={ROUTES.QUESTION6}                                          number={5}
                                          go={go} q={question5} answer={answer5} setAnswer={setAnswer5}
                                          clearAnswer={clearAnswer}/>
                                <Question id={ROUTES.QUESTION6} next={ROUTES.QUESTION7}                                          number={6}
                                          go={go} q={question6} answer={answer6} setAnswer={setAnswer6}
                                          clearAnswer={clearAnswer}/>
                                <Question id={ROUTES.QUESTION7} next={ROUTES.RESULT} number={7}
                                          go={go} q={question7} answer={answer7} setAnswer={setAnswer7}
                                          clearAnswer={clearAnswer}/>
                                <Result id={ROUTES.RESULT} go={go} routes={ROUTES} restart={restart}
                                        direction={directionMain} directionRes={directionRes}/>
                            </View>
                        </SplitCol>
                    </SplitLayout>
                </AppRoot>
            </AdaptivityProvider>
        </ConfigProvider>
    );
}

export default App;
