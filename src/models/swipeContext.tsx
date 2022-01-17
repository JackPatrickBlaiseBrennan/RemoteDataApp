import { useReducer, createContext, useContext, useMemo } from "react";

const initialState: stateType = {
    index: 0
  };

type actionType = {
  operation: string,
  input: any,
}
type stateType = {
  index: number
}
const SwipeContext = createContext(initialState);
 
// initial reducer
const dealsReducer = (state: any, action: actionType): stateType => {
  switch(action.operation){
    case 'INCREMENT_INDEX':
      if (state.index < 2){
        state.index = state.index + 1;
      }
      else state.index = 0;
      return {...state};
    case 'DECREMENT_INDEX':
      if (state.index > 0){
        state.index = state.index - 1;
      }
      else state.index = 2;
      return {...state};
    default:
      return {...state};
  }
};
 
export const SwipeProvider = (props: any) => {
  const [state, dispatch] = useReducer(dealsReducer, initialState);
  
  // useMemo to optimize the context value
  const value = useMemo(() => ({ state, dispatch }), [state]);

  return <SwipeContext.Provider value={value} {...props} />;
};

export const useSwipeContext = () => {
  const context: any = useContext(SwipeContext);
  const swipeState = context.state
  const dispatch = context.dispatch

  if (!context) {
    throw new Error('useSwipeContext must be used inside a SwipeProvider');
  }

  const incrementIndex = () => {
    dispatch({operation:'INCREMENT_INDEX'});
  };
  const decrementIndex = () => {
    dispatch({operation:'DECREMENT_INDEX'});
  };



  return { swipeState, incrementIndex, decrementIndex};
};