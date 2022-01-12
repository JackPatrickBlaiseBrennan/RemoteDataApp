import { useReducer, createContext, useContext, useMemo } from "react";

const initialState: stateType = {
    deals: [],
    currentDealId: null,
  };

type actionType = {
  operation: string,
  input: any,
}
type stateType = {
  deals: any[],
  currentDealId: number | null,
}
const DealsContext = createContext(initialState);
 
// initial reducer
const dealsReducer = (state: any, action: actionType): stateType => {
  switch(action.operation){
    case 'FETCH':
      const deals = action.input;
      return { deals, currentDealId: null};
    case 'SET_CURR_DEAL':
      const currentDealId = action.input;
      console.log({...state, currentDealId})
      return {...state, currentDealId}
    default:
      return {...state};
  }
};


 
export const DealsProvider = (props: any) => {
  const [state, dispatch] = useReducer(dealsReducer, initialState);
  
  // useMemo to optimize the context value
  const value = useMemo(() => ({ state, dispatch }), [state]);

  return <DealsContext.Provider value={value} {...props} />;
};

export const useDealsContext = () => {
  const context: any = useContext(DealsContext);
  const dealsState = context.state
  const dispatch = context.dispatch

  if (!context) {
    throw new Error('useDealsContext must be used inside a DealsProvider');
  }

  const fetchState = (input: any) => {
    dispatch({operation:'FETCH', input:input });
  };
  const setCurrentDealId = (input: any) => {
    dispatch({operation:'SET_CURR_DEAL', input:input})
  };


  return { dealsState, fetchState , setCurrentDealId};
};