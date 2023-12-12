import React, {useContext, useEffect, useState} from 'react';
import {SafeAreaView, Animated, Dimensions, Platform} from 'react-native';

import SearchResults from '../components/SearchResult/SearchResult';

import QuickActions from '../sections/Home/QuickActions';

import ProductionTracking from '../sections/Home/ProductionTracking';
import Orders from '../sections/Home/Orders';
import Header from '../components/Header/Header';

export default function Home(props: any) {
  const [opacity] = useState(new Animated.Value(0));
  const [pageAnimation] = useState(new Animated.Value(1));
  const [isFocused, setIsFocused] = useState<boolean>(false);

  let AnimatedHeaderValue = new Animated.Value(0);
  const Sheight = Dimensions.get('window').height;

  const Header_Maximum_Height = 290;
  const animateHeaderHeight = AnimatedHeaderValue.interpolate({
    inputRange: [0, Sheight - 550, Sheight - 100, Sheight],
    outputRange: [Header_Maximum_Height, Header_Maximum_Height, 0, 0],
    extrapolate: 'clamp',
  });
  const animateHeaderOpacity = AnimatedHeaderValue.interpolate({
    inputRange: [0, Sheight - 550 / 2],
    outputRange: [1, 0],
    extrapolate: 'clamp',
  });
  const Section = () => {
    return (
      <>
        <Animated.View
          style={{
            height: animateHeaderHeight,
            opacity: animateHeaderOpacity,
          }}>
          <QuickActions />
          <Orders />
        </Animated.View>
        <ProductionTracking AnimatedHeaderValue={AnimatedHeaderValue} />
      </>
    );
  };
  return (
    <Animated.View
      style={{
        opacity: pageAnimation,
        flex: 1,
      }}>
      <SafeAreaView
        style={{flex: 1, marginHorizontal: 20, backgroundColor: '#F5F5F5'}}>
        <Header
          pageAnimation={pageAnimation}
          isFocused={isFocused}
          setIsFocused={setIsFocused}
          opacity={opacity}
          navigation={props.navigation}
        />
        {isFocused ? <SearchResults opacity={opacity} /> : <Section />}
      </SafeAreaView>
    </Animated.View>
  );
}
