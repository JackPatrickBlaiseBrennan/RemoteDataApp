import ChooseView from '../views/ChooseView';
import { useDealsContext } from "../models/dealsContext";
import { useEffect } from 'react';

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
        <>
            {displayDeals 
            ? <ChooseView
                items={dealsState.deals} 
                isDataFetched={dealsState.deals.length > 0} 
                pressEvent={setCurrentDealIdAndFetchDetails}
                perfromSearch={performSearch}
              />
            : <ChooseView
                items={dealsState.searchDeals} 
                isDataFetched={dealsState.deals.length > 0} 
                pressEvent={setCurrentDealIdAndFetchDetails}
                perfromSearch={performSearch}
              />
            }
        </>  
    )
}

const apiHost = 'https://bakesaleforgood.com';

async function fetchInitalDeals(){
    try{
        let response = await fetch(apiHost + '/api/deals');
        let responseJSON = await response.json();
        return responseJSON
    }
    catch(error){
        console.log(error);
    }
}

async function fetchSearchedDeals(searchTerm: string){
  try{
      let response = await fetch(apiHost + '/api/deals?searchTerm=' + searchTerm);
      let responseJSON = await response.json();
      return responseJSON;
  }
  catch(error){
      console.log(error);
  }
}