import { WORKING_TIME } from './config'

export default{
    shoppinglists: [
        {
            id: "groceries",
            title: "Groceries",
            items: [
                { text: "Bananas", checked: true },
                { text: "Apples", checked: false }
            ]
        },
        {
            id: "clothes",
            title: "Clothes",
            items: [
                { text: "black dress", checked: false },
                { text: "all stars", checked: false }
            ]
        }
    ],
    // POMODORO
    started: false,
    paused: false,
    stopped: false,
    isWorking: true,
    counter: WORKING_TIME,
    interval: null
}