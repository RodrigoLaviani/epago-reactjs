import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import { useForm } from "../../shared/hooks/useForm";
import { PAYMENT_METHODS } from "../../shared/constants/paymentMethods";
import Button from "../../components/button/Button";
import Select from "../../components/select/Select";
import Cart from "../../components/cart/Cart";
import ProductList from "../../components/productList/ProductList";
import './ShoppingCart.css';

const ShoppingCart = () => {
    const navigate = useNavigate();
    const { form, handleChange, handleSubmit } = useForm({
        paymentMethods: 'Tarjetas-Credito-Debito',
    });
    const [order, setOrder] = useState(null)

    useEffect(() => {
        setOrder((new Date()).getTime() + "");
    }, [])

    const handlerSubmitShoppingCart = (e, path) => {
        handleSubmit();
        navigate(path);
        e.preventDefault();
    }

    return (
        <div className="shopping-cart-container">
            <div className="shopping-cart-left">
                <ProductList />
                <Select title={'Método de pago:'} name={'paymentMethods'} handleSelectChange={handleChange} options={PAYMENT_METHODS} value={form.paymentMethods} />
                <label className="shopping-cart-order"><h4>Número de orden:</h4> {order}</label>
            </div>
            <div className="shopping-cart-right">
                <div className="shopping-cart-right-component">
                    <Cart />
                </div>
                <div className="shopping-cart-button">
                    <Button value={'Atras'} disabled={false} handlerButton={(e) => handlerSubmitShoppingCart(e, '/')} />
                    <Button value={'Continuar'} disabled={false} handlerButton={(e) => handlerSubmitShoppingCart(e, '/preview')} />
                </div>
            </div>
        </div>
    )
}

export default ShoppingCart;