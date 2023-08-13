import { Product } from '@/types';
import React from 'react'
import NoResults from '@/components/ui/noResults';
import ProductCard from './ProductCard';

interface ProductListProps {
    items: Product[];
    title: string;
}
const ProductList:React.FC<ProductListProps> = ({title, items}) => {
  console.log('productLIst0', title, items)
  return (
    <div className="space-y-4">
        <h3 className="text-bold text-3xl">{title}</h3>
        {items.length === 0 && <NoResults />}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
            {items.map(item => <ProductCard data={item} key={item.id}></ProductCard >)}
        </div>
    </div>
  )
}

export default ProductList