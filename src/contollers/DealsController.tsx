import { useEffect } from 'react';
import { useDealsContext } from '../models/dealsContext';
import ChooseView from '../views/ChooseView';

import DetailedView from '../views/DetailedView';

export default function DealsController() {
  const {dealsState, setInitalState, setCurrentDealId, setDetailDeal, unsetCurrentlDeal, setSearchDeals} = useDealsContext();
  const isDetailDeal = dealsState.detailedDeal !== null && dealsState.detailedDeal !== undefined;
  const isViewingDetailedView = dealsState.currentDealId !== null;
  const currentDeal = dealsState.deals.find((deal: any) => deal.key === dealsState.currentDealId)
  async function setCurrentDealIdAndFetchDetails(dataKey:string){
    setCurrentDealId(dataKey)
    setDetailDeal(await fetchDetailedDeal(dataKey))
  }
  // console.log(dealsState.detailedDeal);

  useEffect(() => {
      const initDeals = async () => {
        if (!isViewingDetailedView){
          setInitalState(await fetchInitalDeals());
        }
        else{setDetailDeal(await fetchDetailedDeal(currentDeal.key))}
      };
      initDeals();
    }, [isViewingDetailedView])

    async function performSearch (searchTerm: string){
      if (searchTerm === '') setSearchDeals(null);
      else setSearchDeals(await fetchSearchedDeals(searchTerm));
    }
    const displayDeals = dealsState.searchDeals === null; 

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
          : displayDeals 
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
