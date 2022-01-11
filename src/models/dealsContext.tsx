import { useReducer, createContext, useContext, useMemo } from "react";

const initialState: any = {
    deals: [],
  };

const DealsContext = createContext(initialState);
 
// initial reducer
const dealsReducer = (state: any, action: any) => {
    const deals = [action.input]
    return {...state, deals};
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

  const updateState = (input: any) => {
    dispatch({ input: { input } });
  };


  return { dealsState, updateState };
};