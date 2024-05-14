import Button from '../button/Button';
import './Product.css';

const Product = ({ name, image, quantity = 0, unitAmount, sku, category, discount, shipping, handlerProduct }) => {
    return (
        <div key={sku} className='product-card'>
            <h5 className='product-name'>{name}</h5>
            <label>{category}</label>
            <img src={require(`../../assets/images/${image}.webp`)} alt={name} className='product-image'></img>
            <label className='product-price'>S/. {unitAmount}</label>
            <label className='product-discount'>Descuento: S/. {discount}</label>
            <label className='product-shipping..'>Envío: S/. {shipping}</label>
            <div className='product-quantity'>
                <Button value={'-'} disabled={false} handlerButton={() => handlerProduct(false, sku)}></Button>
                <p className='quantity'>{quantity}</p>
                <Button value={'+'} disabled={false} handlerButton={() => handlerProduct(true, sku)}></Button>
            </div>
        </div>
    )
}

export default Product;