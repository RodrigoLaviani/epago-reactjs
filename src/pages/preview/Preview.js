import { useState } from 'react';
import { useNavigate } from "react-router-dom";
import Button from '../../components/button/Button';
import Modal from '../../components/modal/Modal';
import Cart from '../../components/cart/Cart';
import ClientData from '../../components/clientData/ClientData';
import Details from '../../components/details/Details';
import './Preview.css';

const Confirm = () => {
    const navigate = useNavigate();
    const [modal, setModal] = useState(false);


    return (
        <div className="preview-cart-container">
            <div className="preview-cart-left">
                <ClientData title={'Cliente'}/>
                <Details />
                <label>
                    <p className='preview-reference'>* En esta versión se va a mantener la datos del cliente para el envío y facturación.</p>
                </label>
            </div>
            <div className="preview-cart-right">
                <Cart />
                <div className="preview-cart-button">
                    <Button value={'Atras'} disabled={false} handlerButton={(e) => navigate('/shopping')} />
                    <Button value={'Pagar'} disabled={false} handlerButton={() => setModal(true)}></Button>
                </div>
            </div>
            {modal && <Modal handler={setModal} />}
        </div>
    )
}

export default Confirm;