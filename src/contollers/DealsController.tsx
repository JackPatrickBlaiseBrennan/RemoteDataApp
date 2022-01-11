import { useEffect } from 'react';
import { useDealsContext } from '../models/dealsContext';
import ItemList from '../views/ItemList';
import DealsList from '../views/ItemList';

export default function DealsController() {
  const {dealsState, updateState} = useDealsContext();
  useEffect(() => {
      const initDeals = async () => (updateState(await fetchInitalDeals()));
      initDeals();
    }, [])
    return (
      <>
        <ItemList items={dealsState.deals} isDataFetched={dealsState.deals.length > 0}/>
      </>
    );
  }

const apiHost = 'https://bakesaleforgood.com'

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