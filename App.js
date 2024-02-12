import { FitnessContext } from './Context';
import StackNavigator from './StackNavigator';
//import { StatusBar } from 'expo-status-bar';

export default function App() {
  return (
    <>
    <FitnessContext>
        {/* <StatusBar/> */}
        <StackNavigator />
    </FitnessContext>
    </>
  );
}