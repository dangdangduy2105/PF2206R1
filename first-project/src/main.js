import { createApp } from 'vue'
import { createStore } from 'vuex'
import App from './App.vue'

const store = createStore ({
    state: {
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
    },
    getters: {
        shoppinglists: state => state.shoppinglists
    },
    mutations: {
    },
    actions: {
    }
})

createApp(App).use(store).mount('#app')