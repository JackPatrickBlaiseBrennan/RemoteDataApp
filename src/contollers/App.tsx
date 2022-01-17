import { StatusBar } from 'expo-status-bar';
import { DealsProvider } from '../models/dealsContext';
import ViewController from './ViewController';

export default function App() {
  return (
    <>
      <DealsProvider>
          <ViewController></ViewController>
      </DealsProvider>
      <StatusBar style="auto" />
    </>
  );
}


