import {Product} from './Product';
export const filterProducts = (array, key: string): Product[] => {
    return array.reduce((result, currentValue) => {
     (result[currentValue[key]] = result[currentValue[key]] || []).push(
      currentValue,
    );
     return result;
  }, {});
};
