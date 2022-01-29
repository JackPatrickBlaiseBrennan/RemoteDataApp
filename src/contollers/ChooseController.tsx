import ChooseView from '../views/ChooseView';
import { useDealsContext } from "../models/dealsContext";
import { useEffect } from 'react';
import FetchView from '../views/FetchView';
import ErrorView from '../views/ErrorView';

export default function DetailController() {
    const {dealsState, setInitalState, setCurrentDealId, setSearchDeals} = useDealsContext();
    const displayDeals = dealsState.searchDeals === null; 
    useEffect(() => {
        const initDeals = async () => {
            setInitalState(await fetchInitalDeals());
        };
        initDeals();
      }, [])

    async function setCurrentDealIdAndFetchDetails(dataKey:string){
        setCurrentDealId(dataKey)
    }

    async function performSearch (searchTerm: string){
        if (searchTerm === '') setSearchDeals(null);
        else setSearchDeals(await fetchSearchedDeals(searchTerm));
    }
    return (
        <>{dealsState.deals == "Error"  ? 
        <ErrorView/>
            :  dealsState.deals.length > 0
                ? <ChooseView
                    items={displayDeals ? dealsState.deals : dealsState.searchDeals} 
                    pressEvent={setCurrentDealIdAndFetchDetails}
                    perfromSearch={performSearch}
                /> 
                : <FetchView/>
            }
        </>  
    )
}

const apiHost = 'https://bakesaleforgood.com';

async function fetchInitalDeals(){
    try{
        let response = await fetch(apiHost + '/api/deals');
        var responseJSON;
    //   have to check for error for App
        if (response.ok) responseJSON = await response.json();
        else responseJSON = "Error";
        return responseJSON
    }
    catch(error){
        console.log(error);
        return "Error";
    }
}

async function fetchSearchedDeals(searchTerm: string){
  try{
      let response = await fetch(apiHost + '/api/deals?searchTerm=' + searchTerm);
      var responseJSON;
    //   have to check for error for App
      if (response.ok) responseJSON = await response.json();
      else responseJSON = "Error";
      return responseJSON;
  }
  catch(error){
      console.log(error);
      return "Error";
  }
}