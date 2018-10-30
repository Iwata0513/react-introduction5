import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import {createStore} from 'redux';


const initialState = {
    tasks : []
};

const store = createStore(tasksReducer);

function handleChange(){
    console.log(store.getState());
    console.log("テスト");
    // {
    //     tasks: ['Storeを学ぶ']
    // }
}

const unsubscribe = store.subscribe(handleChange)
//unsubscribe() を実行すると解除される


function tasksReducer(state = initialState, action){
    switch(action.type){
        case 'ADD_TASK':
         return{
             ...state,
             tasks: state.tasks.concat([action.payload.task])
         };
         default:
           return state;
    }
}


const addTask = (task) => ({
    type: 'ADD_TASK',
    payload:{
        task
    }
});

console.log(store.getState())
store.dispatch(addTask('Storeを学ぶ'));
console.log(store.getState())




// store.dispacth(addTask('Storeを学ぶ'));
// console.log(store.getState())

// {
//     tasks:['Storeを学ぶ']
// }


ReactDOM.render(<App />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();









// const myfanc = (x,y,z) => [x,y,z];
// const args = [1,2,3];
// console.log("テストします");
// const array = [1,2,3]
// console.log("追加前");
// console.log(array);
// const test = array.concat([4,5])
// console.log("追加後");
// console.log(test);

// console.log(...args);
