import DetailedView from "../views/DetailedView";
import { useDealsContext } from "../models/dealsContext";
import { useEffect, } from 'react';
import { useSwipeContext } from "../models/swipeContext";

export default function DetailController() {
    const {dealsState, setDetailDeal, unsetCurrentlDeal,} = useDealsContext();
    const isDetailDeal = dealsState.detailedDeal !== null && dealsState.detailedDeal !== undefined;
    const currentDeal = dealsState.deals.find((deal: any) => deal.key === dealsState.currentDealId)
    
    const {swipeState} = useSwipeContext();
    useEffect(() => {
        const initDeals = async () => {
          setDetailDeal(await fetchDetailedDeal(currentDeal.key))
        };
        initDeals();
      }, [])
    return (
        <>
            {isDetailDeal &&
                <DetailedView
                    headerMediaLink={currentDeal.media[swipeState.index]}
                    title={currentDeal.title}
                    price={currentDeal.price}
                    cause={currentDeal.cause.name}
                    avatarMedialink={dealsState.detailedDeal.user.avatar}
                    userTitle={dealsState.detailedDeal.user.name}
                    description={dealsState.detailedDeal.description}
                    backAction={unsetCurrentlDeal}
                /> 
            }
        </>  
    )
}

const apiHost = 'https://bakesaleforgood.com';

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