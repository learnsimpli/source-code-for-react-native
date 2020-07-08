import React, { memo } from 'react';
import Background from '../components/Background';
import Logo from '../components/Logo';
import Header from '../components/Header';
import Button from '../components/Button';
import Paragraph from '../components/Paragraph';

const HomeScreen = ({ navigation }) => (
  <Background>
    <Logo />
    <Header> Hello world </Header>

    <Paragraph>
      My login app
    </Paragraph>
    <Button mode="contained" onPress={() => navigation.navigate('LoginScreen')}>
      Sign In
    </Button>
    <Button
      mode="contained"
      onPress={() => navigation.navigate('RegisterScreen')}
    >
      Sign up
    </Button>
  </Background>
);

export default memo(HomeScreen);
