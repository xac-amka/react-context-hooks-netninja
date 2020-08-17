import react, { createContext, useState, useReducer } from 'react';

const AgeContext = createContext();

const ageReducer = (state, action) => {
    switch(action.type) {
        case 'ADD_ONE':
            return state + 1;
        case 'ADD_FIVE':
            return state + 5;
        case 'ADD_NUM':
            return state + action.num;
        default:
            return state;
    }
}

dispatch({ type: 'ADD_ONE' });
dispatch({ type: 'ADD_FIVE' });
dispatch({ type: 'ADD_NUM', num: 7 });

const AgeContextProvider = (props) => {
    // OLD CODE
    // const [age, setAge] = useState(20);
    // const addOneToAge = () => setAge(age + 1);
    // const addFiveToAge = () => setAge(age + 5);
    // const addNumToAge = (num) => setAge(age + num);
    // return <AgeContext.Provider value={{addFiveToAge, addOneToAge, addNumToAge}}>{props.children}</AgeContext.Provider>
    
    // NEW CODE using Reducer
    const [age, dispatch] = useReducer(ageReducer, 20);
    return (
        <AgeContext.Provider value={age, dispatch}>
            {props.children}
        </AgeContext.Provider>
    )
}

export default AgeContextProvider;