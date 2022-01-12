import { useEffect } from 'react';
import { useDealsContext } from '../models/dealsContext';
import ItemList from '../views/ItemList';
import DetailedView from '../views/DetailedView';

export default function DealsController() {
  const {dealsState, setInitalState, setCurrentDealId, setDetailDeal} = useDealsContext();
  const isViewingDetailedView = dealsState.currentDealId !== null;
  const currentDeal = dealsState.deals.find((deal: any) => deal.key === dealsState.currentDealId)
  useEffect(() => {
      const initDeals = async () => {
        console.log("EFFECT")
        if (!isViewingDetailedView){
          setInitalState(await fetchInitalDeals());
        }
        else{setDetailDeal(await fetchDetailedDeal(currentDeal.key))}
      };
      initDeals();
    }, [isViewingDetailedView])
    console.log(dealsState.detailedDeal)
    return (
      <>
        { isViewingDetailedView 
          ? <DetailedView
              mediaLink={currentDeal.media[0]}
              title={currentDeal.title}
              price={currentDeal.price}
              cause={currentDeal.cause.name}
          />
          : <ItemList items={dealsState.deals} isDataFetched={dealsState.deals.length > 0} pressEvent={setCurrentDealId}/>
        }
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

async function fetchDetailedDeal(dealId: string){
  try{
      let response = await fetch(apiHost + '/api/deals/' + dealId);
      let responseJSON = await response.json();
      return responseJSON;
  }
  catch(error){
      console.log(error);
  }
}