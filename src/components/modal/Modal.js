import ReactDOM from 'react-dom';
import { useEffect, useRef, useState } from 'react';
import Button from '../button/Button';
import { addScript, removeScript } from '../../shared/services/loadScript';
import { startPayment } from '../../shared/helper/epago';
import './Modal.css';

const Modal = ({ handler }) => {
  const effectRun = useRef(false)
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    if (effectRun.current === false) {
      addScript({
        src: `https://qa-epago-pay-button2.storage.googleapis.com/web/latest/sdk.js`,
        id: "epago-script",
        onLoad: () => {
          startPayment();
          console.log("Epago script loaded!");
          setTimeout(() => {
              setShowButton(true);
          }, 1000)
        },
      });
    }

    return () => {
      removeScript({ id: "epago-script" });
      effectRun.current = true;
      setShowButton(false);
    };
  }, []);

  return ReactDOM.createPortal(
    <>
      <div className="overlay-modal" />
      <div className="modal-container">
        <div id='cart-container'></div>
        {showButton && <Button disabled={false} value={'Cancelar'} handlerButton={() => handler()}/>}
      </div>
    </>
    , document.getElementById('modal'))
}

export default Modal;