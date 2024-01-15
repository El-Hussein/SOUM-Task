import {FC, useCallback} from 'react';
import {Category} from '@app-types';
import styles from '@designSystem/styles';
import {TouchableOpacity} from 'react-native';
import AppText from '@components/atoms/app-text/AppText';
import CachedImage from '@components/atoms/cached-image/CachedImage';

interface CategoryCardProps {
  category: Category;
  onPress?: (categoryId: number) => void;
  selected?: boolean;
  disabled?: boolean;
}

const CategoryCard: FC<CategoryCardProps> = ({
  category,
  onPress,
  disabled,
  selected,
}) => {
  const pressCategory = useCallback(() => {
    if (onPress) {
      onPress(category.categoryId);
    }
  }, [onPress, category]);

  return (
    <TouchableOpacity
      disabled={disabled}
      activeOpacity={0.8}
      testID={'category-card' + category.categoryId}
      onPress={pressCategory}
      style={[
        styles['column-container-center'],
        styles['bg-white'],
        styles[selected ? 'border-primary' : 'border-gray'],
        styles['rounded-md'],
        styles['mr-sm'],
        styles['w-lg'],
        styles['p-md'],
      ]}>
      <CachedImage
        style={[styles['w-md'], styles['h-md']]}
        uri={category.image}
      />
      <AppText
        numberOfLines={1}
        styles={[styles['text-subtitle3'], styles['text-light']]}>
        {category.name}
      </AppText>
    </TouchableOpacity>
  );
};

export default CategoryCard;
