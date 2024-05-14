import ReactDOM from 'react-dom';
import Button from '../button/Button';
import './Settings.css';
import Select from '../select/Select';
import { useForm } from '../../shared/hooks/useForm';
import { ENVIRONMENTS } from '../../shared/constants/enviroments';
import Input from '../input/Input';

const Settings = ({ handler }) => {
    const { form, handleSubmit, handleChange, isDisableSubmit } = useForm({
        environment: 'quality',
        apikey: '49663545-17e3-4ecb-9edb-52654accc12b',
        secret: 'ufgtRPBvTYZx5qVatGCx49CuAqztu8xA'
    });

    const handlerSubmitSettings = (e) => {
        handleSubmit();
        handler();
        e.preventDefault();
    }

    return ReactDOM.createPortal(
        <>
            <div className="overlay-modal" />
            <div className="setting-container">
                <div className="setting-form">
                    <Select title={'Ambiente'} name={'environment'} handleSelectChange={handleChange} options={ENVIRONMENTS} value={form.environment} />
                    <Input title={'ApiKey'} name={'apikey'} handleChange={handleChange} value={form.apikey} />
                    <Input title={'Secret'} name={'secret'} handleChange={handleChange} value={form.secret} />
                </div>
                <Button disabled={isDisableSubmit()} value={'Guardar y salir'} handlerButton={(e) => handlerSubmitSettings(e)} />
            </div>
        </>
        , document.getElementById('modal'))
}

export default Settings;