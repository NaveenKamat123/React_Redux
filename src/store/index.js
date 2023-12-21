import { createStore } from 'redux';
const INITITAL_VALUE={
    counter:5,
    privacy:false
}

const CounterReducer=(store=INITITAL_VALUE,action) => {
    let newStore=store;
    if(action.type==='INCREMENT')
    {
        
        newStore={...store,counter:store.counter+1};
        return newStore;
    }
    else if(action.type==='DECREMENT')
    {
        newStore={...store,counter:store.counter-1};
        return newStore;
    }
    else if(action.type==='ADDITION')
    {
        newStore={...store,counter:store.counter+Number(action.payload.num)};
        return newStore;
    }
    else if(action.type==='SUBTRACTION')
    {
        newStore={...store,counter:store.counter-action.payload.num};
        return newStore;
    }
    else if(action.type==='PRIVACY_TOGGLE')
    {
        newStore={...store,privacy:!store.privacy};
        return newStore;
    }

    return store;
}

const CounterStore=createStore(CounterReducer);

export default CounterStore;





