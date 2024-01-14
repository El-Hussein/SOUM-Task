// In App.js in a new project

import {
  getHomeBrands,
  getHomeCategories,
  getHomeOffers,
  getHomeProducts,
} from '@actions';
import {
  selectAllOffers,
  selectBrands,
  selectCategories,
  selectProducts,
} from '@selectors';
import * as React from 'react';
import {View, Text} from 'react-native';
import {useDispatch, useSelector} from 'react-redux';

const HomeScreen = () => {
  const dispatch = useDispatch();
  const homeCategories = useSelector(selectCategories);
  console.log('homeCategories', homeCategories);
  const homeBrands = useSelector(selectBrands);
  console.log('homeBrands', homeBrands);
  const homeProducts = useSelector(selectProducts);
  console.log('homeProducts', homeProducts);
  const homeOffers = useSelector(selectAllOffers);
  console.log('homeOffers', homeOffers);
  React.useEffect(() => {
    dispatch(getHomeCategories());
    dispatch(getHomeBrands(1));
    dispatch(getHomeProducts(1));
    dispatch(getHomeOffers(1));
  }, []);
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Text>Home Screen</Text>
    </View>
  );
};

export default HomeScreen;
