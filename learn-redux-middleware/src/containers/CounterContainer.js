import React from 'react';
import {connect} from 'react-redux';
<<<<<<< HEAD
import {increaseAsync, decreaseAsync} from '../modules/counter';
import Counter from '../components/Counter';

const CounterContainer = ({number, increaseAsync, decreaseAsync}) => {
    return (
        <Counter
            number = {number}
            onIncrease = {increaseAsync}
            onDecrease = {decreaseAsync}
        />        
=======
import {increaseAsync, decreaseAsync} from '../moduels/counter';
import Counter from './Counter';

const CounterContainer = ({number, increaseAsync, decreaseAsync}) => {
    return (
        <Counter 
            number = {number} 
            onIncrease = {increaseAsync} 
            onDecrease = {decreaseAsync} 
        />
>>>>>>> 3dd7a1be6e4285c5b174b04dff6aadd9803d322c
    );
};

export default connect(
    state => ({
        number: state.counter
    }),
    {
        increaseAsync,
        decreaseAsync
    }
)(CounterContainer);
