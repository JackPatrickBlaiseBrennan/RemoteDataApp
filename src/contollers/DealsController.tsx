import { useEffect } from 'react';
import { useDealsContext } from '../models/dealsContext';
import ItemList from '../views/ItemList';
import DetailedView from '../views/DetailedView';

export default function DealsController() {
  const {dealsState, setInitalState, setCurrentDealId, setDetailDeal, unsetCurrentlDeal} = useDealsContext();
  const isViewingDetailedView = dealsState.currentDealId !== null;
  const currentDeal = dealsState.deals.find((deal: any) => deal.key === dealsState.currentDealId)
  const isDetailDeal = dealsState.detailedDeal !== null;
  useEffect(() => {
      const initDeals = async () => {
        if (!isViewingDetailedView){
          setInitalState(await fetchInitalDeals());
        }
        else{setDetailDeal(await fetchDetailedDeal(currentDeal.key))}
      };
      initDeals();
    }, [isViewingDetailedView])
    return (
      <>
        { isViewingDetailedView 
          ? (isDetailDeal &&
            <DetailedView
            headerMediaLink={currentDeal.media[0]}
            title={currentDeal.title}
            price={currentDeal.price}
            cause={currentDeal.cause.name}
            avatarMedialink={dealsState.detailedDeal.user.avatar}
            userTitle={dealsState.detailedDeal.user.name}
            description={dealsState.detailedDeal.description}
            backAction={unsetCurrentlDeal}
        /> )
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