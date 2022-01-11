import { StatusBar } from 'expo-status-bar';
import { DealsProvider } from '../models/dealsContext';
import DealsController from './DealsController';

export default function App() {
  return (
    <>
      <DealsProvider>
        <DealsController></DealsController>
      </DealsProvider>
      <StatusBar style="auto" />
    </>
  );
}


