// направления
export const Programming = {
    name: "Программирование",
    full: "Этот курс для тех, кто хочет научиться программировать с нуля, прокачать\n" +
        "свои аналитические способности и познакомиться с миром IT. Ты освоишь язык JavaScript, который\n" +
        "широко используется в веб-разработке. А в конце курса откроешь для себя новые возможности в других\n" +
        "креативных индустриях.",
    short: "Этот курс для тех, кто хочет научиться программировать с нуля, прокачать свои аналитические способности и " +
        "познакомиться с миром IT. Ты освоишь язык JavaScript, который широко используется в веб-разработке.",
    link: "https://tumo.moscow/programming",
    emoji: "👩‍💻"
}
export const D3 = {
    name: "3D-моделирование",
    full: "",
    short: "На этом курсе ты можешь почувствовать себя скульптором или архитектором. Ты освоишь одну из\n" +
        "главных технологий будущего – 3D-моделирование. Инструменты 3D уже сегодня используются в\n" +
        "кино, видеоиграх, строительстве, медицине и производственном дизайне.",
    link: "https://tumo.moscow/3d",
    emoji: "🧊"
}
export const Animation = {
    name: "Анимация",
    full: "",
    short: "Этот курс для тех, кто любит рисовать, но хочет чего-то большего. Ты станешь режиссером и\n" +
        "сценаристом своего анимационного фильма. Куратор откроет тебе законы жанра и секретные\n" +
        "приемы лучших художников-аниматоров. И, конечно, ты получишь богатый опыт работы с\n" +
        "профессиональной программой Toon Boom.",
    link: "https://tumo.moscow/animation",
    emoji: "🧩"
}
export const Movie = {
    name: "Кинопроизводство",
    full: "",
    short: "Этот курс для тех, кто мечтает сделать свое видео и с первых же секунд захватить зрителя. В\n" +
        "мастерских TUMO ты пройдешь все этапы кинопроизводства, подружишься с профессиональной\n" +
        "техникой и поймешь, почему так важно уметь работать в команде.",
    link: "https://tumo.moscow/movie",
    emoji: "🎬"
}
export const Design = {
    name: "Графический дизайн",
    full: "",
    short: "Этот курс для тех, кто хочет научиться выражать свои идеи визуальными средствами. На\n" +
        "занятиях ты откроешь для себя дизайн-мышление, познакомишься с профессиональными программами\n" +
        "и попробуешь свои силы в разных видах графического дизайна.",
    link: "https://tumo.moscow/graphicdesign",
    emoji: "🎨"
}
export const Gamedev = {
    name: "Разработка игр",
    full: "",
    short: "Многие любят играть в компьютерные игры, но еще интереснее – их\n" +
        "создавать. На этом курсе ты построишь собственный игровой мир! Это будет твоя история, ты\n" +
        "нарисуешь и выпустишь в жизнь персонажей.",
    link: "https://tumo.moscow/gamedesign",
    emoji: "🎮"
}
export const Robots = {
    name: "Робототехника",
    full: "Этот курс для тех, кто хочет разобраться: как устроены умные машины и на что они способны.\n" +
        "Ты построишь робота из Lego Mindstorms, заставишь его выполнять команды, а потом еще и\n" +
        "научишь общаться с другими устройствами.",
    short: "Этот курс для тех, кто хочет разобраться: как устроены умные машины и на что они способны.\n" +
        "Ты построишь робота из Lego Mindstorms, заставишь его выполнять команды, а потом еще и\n" +
        "научишь общаться с другими устройствами.",
    link: "https://tumo.moscow/robotics",
    emoji: "🤖"
}
export const Music = {
    name: "Создание музыки",
    full: "",
    short: "Этот курс для тех, кто хочет смело экспериментировать и создавать музыку с нуля: от\n" +
        "сочинения мелодии и ритма до сведения финального трека. Ты будешь изучать структуру\n" +
        "музыкальной композиции, саунд-дизайн и синтез звука.",
    link: "https://tumo.moscow/music",
    emoji: "🎵"
}


// паки рекомендаций для направлений
export const Programming_res = [Gamedev, Music, D3, Robots, Design, Movie, Animation]
export const D3_res = [Music, Gamedev, Design, Animation, Programming, Movie, Robots]
export const Animation_res = [Design, Music, D3, Gamedev, Movie, Programming, Robots]
export const Movie_res = [Music, Design, Gamedev, Animation, D3, Programming, Robots]
export const Design_res = [Music, D3, Animation, Gamedev, Movie, Programming, Robots]
export const Gamedev_res = [Music, D3, Programming, Design, Animation, Movie, Robots]
export const Robots_res = [Gamedev, Programming, D3, Music, Design, Movie, Animation]
export const Music_res = [Gamedev, Design, D3, Animation, Movie, Programming, Robots]
