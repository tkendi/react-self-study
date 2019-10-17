import {createStore} from 'redux';

const divToggle = document.querySelector(".toggle");
const counter = document.querySelector("h1");
const btnIncrease = document.querySelector("#id");
const btnDecrease = document.querySelector("#derease");
const store = createStore(reducer);
const render = () => {
    const state = store.getState();    //현재 상태를 불러옴
    //토글 처리
    if(state.toggle) {
        divToggle.classList.add('active');
    } else {
        divToggle.classList.remove('active');
    }

    //카운터 처리
    counter.innerText = state.counter;
};

render();

const TOGGLE_SWITCH = "TOGGLE_SWITCH";
const INCREASE = "INCREASE";
const DECREASE = "DECREASE";

const toggleSwitch = () => ({ type: TOGGLE_SWITCH });
const increase = difference => ({ type: INCREASE, difference });
const decrase = () => ({ type: DECREASE });

const initialState = {
  toggle: false,
  counter: 0
};

//state가 undefined일 때는 initialState를 기본값으로 사용

function reducer(state = initialState, action) {
  //action.type에 따라 다른 작업을 처리함
  switch (action.type) {
    case TOGGLE_SWITCH:
      return {
        ...state, //불변성 유지  ... => spread 연산자
        toggle: !state.toggle
      };
    case INCREASE:
      return {
        ...state,
        counter: state.counter + action.difference
      };
    case DECREASE:
      return {
        ...state,
        coutner: state.counter - 1
      };
    default:
      return state;
  }
}
