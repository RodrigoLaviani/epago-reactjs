import { PRODUCTS } from '../../shared/constants/products';
import Product from '../product/Product';
import './ProductList.css';

const ProductList = ({  }) => {
    return (
        <div className='container-product-list'>
            {
                PRODUCTS.map(product => {
                    return <Product 
                        sku={product.sku}
                        name={product.name}
                        category={product.category}
                        image={product.image}
                        unitAmount={product.unitAmount}
                        discount={product.discount}
                        shipping={product.shipping}
                        key={product.sku}
                        />
                })
            }
        </div>
    )
}

export default ProductList;