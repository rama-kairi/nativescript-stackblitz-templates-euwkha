import { Dialogs } from '@nativescript/core';
import { RouteProp } from '@react-navigation/core';
import * as React from 'react';
import { StyleSheet } from 'react-nativescript';
import { FrameNavigationProp } from 'react-nativescript-navigation';

import { MainStackParamList } from '../NavigationParamList';

type ScreenOneProps = {
  route: RouteProp<MainStackParamList, 'One'>;
  navigation: FrameNavigationProp<MainStackParamList, 'One'>;
};

export function ScreenOne({ navigation }: ScreenOneProps) {
  return (
    <flexboxLayout style={styles.container}>
      <label className="text-2xl mb-4 font-bold text-center text-red-500">
        Hello World!
      </label>
      <button
        style={styles.button}
        onTap={() => Dialogs.confirm('Do you want to close?')}
      >
        Tap for Alert
      </button>
      <button
        style={styles.button}
        onTap={() => navigation.navigate('Two', { message: 'Hello, world!' })}
      >
        Go to next screen
      </button>
      <button className='bg-blue-600 text-white text-lg'
        onTap={() => navigation.navigate("Three", {"message": "Hello Data"})}
      >
        Go to Third Screen!
      </button>
    </flexboxLayout>
  );
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
    flexDirection: 'column',
    justifyContent: 'center',
  },
  button: {
    fontSize: 24,
    color: '#2e6ddf',
  },
});
