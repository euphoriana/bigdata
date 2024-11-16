// store.js  
import { createStore } from 'vuex';  

export default createStore({  
    state() {  
        return {  
            isCollapse: false, // 确保有这个状态  
        };  
    },  
    mutations: {  
        toggleCollapse(state) {  
            state.isCollapse = !state.isCollapse;  
        },  
    },  
});