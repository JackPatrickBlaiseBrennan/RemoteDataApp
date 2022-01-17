import { useDealsContext } from '../models/dealsContext';
import DetailController from './DetailController';
import ChooseController from './ChooseController';
import { SwipeProvider } from '../models/swipeContext';

export default function DealsController() {
  const {dealsState} = useDealsContext();
  
  const isViewingDetailedView = dealsState.currentDealId !== null;
    return (
      <>
        { isViewingDetailedView 
          ? <SwipeProvider>
              <DetailController/>
            </SwipeProvider>
          : <ChooseController/>
        }
      </>
    );
  }

