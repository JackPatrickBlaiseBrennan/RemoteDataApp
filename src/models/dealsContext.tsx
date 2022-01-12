import { useReducer, createContext, useContext, useMemo } from "react";

const initialState: stateType = {
    deals: [],
    currentDealId: null,
    detailedDeal: null,
  };

type actionType = {
  operation: string,
  input: any,
}
type stateType = {
  deals: any[],
  currentDealId: number | null,
  detailedDeal: any
}
const DealsContext = createContext(initialState);
 
// initial reducer
const dealsReducer = (state: any, action: actionType): stateType => {
  switch(action.operation){
    case 'SET_INIT':
      const deals = action.input;
      return { deals, currentDealId: null, detailedDeal: null};
    case 'SET_CURR_DEAL':
      const currentDealId = action.input;
      return {...state, currentDealId}
    case 'SET_DETAIL_DEAL':
      const detailedDeal = action.input;
      return {...state, detailedDeal}
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

  const setInitalState = (input: any) => {
    dispatch({operation:'SET_INIT', input:input });
  };
  const setCurrentDealId = (input: any) => {
    dispatch({operation:'SET_CURR_DEAL', input:input})
  };
  const setDetailDeal = (input: any) => {
    dispatch({operation:'SET_DETAIL_DEAL', input:input})
  };


  return { dealsState, setInitalState , setCurrentDealId, setDetailDeal};
};