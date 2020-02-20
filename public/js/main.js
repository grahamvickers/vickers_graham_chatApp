import chatPage from "./modules/chatPage.js";
import splashPage from "./modules/splashPage.js";
import loginPage from "./modules/loginPage.js";
import ErrorPage from "./modules/ErrorPage.js";

const router = new VueRouter({
    routes: [
        { path: '/app', name: "chatPage", component: chatPage},
        { path: '/home', name: "home", component: splashPage },
        { path: '/login', name: "login", component: loginPage },
        { path: '*', name: "error", component: ErrorPage}
    ]
})

const vm = new Vue ({
    data: {

    },

    created: function() {
        console.log('app is up and running')
    },

    methods: {

    },

    router // shorthand for router:router
}).$mount("#app");