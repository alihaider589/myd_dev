import React from 'react';
import { StyleSheet, Text, View,StatusBar } from 'react-native';
import Card from './src/components/Card'
import Header from './src/components/Header'
import { Left, Body, Right, Container ,} from 'native-base';
import Checkbox from './src/components/Checkbox'
import Form from './src/components/Form'
import Picker from './src/components/Picker'
import Spinner from './src/components/Spinner'
import Typography from './src/components/Typography'
export default function App() {
  return (
<Container style={{marginTop:StatusBar.currentHeight}}>

<Picker />
</Container>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
