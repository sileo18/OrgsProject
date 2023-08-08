import {  View, StatusBar, SafeAreaView } from 'react-native';
import Cesta from './src/telas/Cesta/Components/Cesta'

export default function App() {
  return (
    <SafeAreaView>
      <StatusBar />
      <Cesta />      
    </SafeAreaView>
  );
}


