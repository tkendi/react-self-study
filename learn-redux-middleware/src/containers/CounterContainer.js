import React from 'react';
import {connect} from 'react-redux';
import {increaseAsync, decreaseAsync} from '../moduels/counter';
import Counter from './Counter';

const CounterContainer = ({number, increase, decrease}) => {
    return (
        <Counter 
            number = {number} 
            onIncrease = {increaseAsync} 
            onDecrease = {decreaseAsync} 
        />
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
