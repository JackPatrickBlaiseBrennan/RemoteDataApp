import { StatusBar } from 'expo-status-bar';

import { useEffect } from 'react';
import fetchInitalDeals from './ajaxController';
import { useDealsContext } from '../models/dealsContext';
import DealsList from '../components/DealsList';

export default function DealsController() {
  const {updateState} = useDealsContext();
  useEffect(() => {
      const initDeals = async () => (updateState(await fetchInitalDeals()));
      initDeals();
    }, [])
    return (
      <>
        <DealsList></DealsList>
      </>
    );
  }