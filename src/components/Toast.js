import React, { Component } from 'react';
import {Text} from 'react-native'
import { Container, Header, Content, Toast, Button, } from 'native-base';
export default class ToastExample extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content padder>
          <Button onPress={()=> Toast.show({
              text: 'Wrong password!',
              buttonText: 'Okay',
              duration:3000
            })}>
            <Text>Toast</Text>
          </Button>
        </Content>
      </Container>
    );
  }
}