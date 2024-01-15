import {useCallback} from 'react';
import BrandList from '@components/organisms/brands-list/BrandList';
import CategoryList from '@components/organisms/category-list/CategoryList';
import OfferList from '@components/organisms/offer-list/OfferList';
import ProductList from '@components/organisms/product-list/ProductList';
import {FlatList, View} from 'react-native';

const HomeScreen = () => {
  const sectionsData = [
    {id: 'category-list', component: CategoryList},
    {id: 'brand-list', component: BrandList},
    {id: 'product-list', component: ProductList},
    {id: 'offer-list', component: OfferList},
  ];

  const renderItem = useCallback(({item}: any) => {
    const Component = item.component;
    return (
      <View testID={item.id}>
        <Component />
      </View>
    );
  }, []);

  return (
    <FlatList
      data={sectionsData}
      keyExtractor={item => item.id}
      renderItem={renderItem}
    />
  );
};

export default HomeScreen;
