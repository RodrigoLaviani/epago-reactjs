import './Cart.css';

const Cart = ({ products = [], discount = 0, shipping = 0, total = 0 }) => {
    return (
        <div className='cart-container'>
            <h3 className='cart-title'>Carrito</h3>
            {
                products.length > 0 &&
                <table className='cart-table no-border'>
                    <tr>
                        <td className='header-cell'>Nombre</td>
                        <td className='header-cell'>Cantidad</td>
                        <td className='header-cell'>Precio por unidad</td>
                    </tr>
                    {products.map(product => {
                        <tr>
                            <td>{product.name}</td>
                            <td>{product.quantity}</td>
                            <td>S/. {product.unitAmount}</td>
                        </tr>
                    })}
                    <tr>
                        <td></td>
                        <td className='totals-cell'>Descuentos</td>
                        <td className='totals-cell'>S/. {discount}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className='totals-cell'>Envío</td>
                        <td className='totals-cell'>S/. {shipping}</td>
                    </tr>
                    <tr>
                        <td></td>
                        <td className='totals-cell'>Total</td>
                        <td className='totals-cell'>S/. {total}</td>
                    </tr>
                </table>
            }
        </div>
    )
}

export default Cart;