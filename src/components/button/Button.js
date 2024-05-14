import './Button.css';

const Button = ({value, disabled, handlerButton }) => {
    return (
        <>
        {
            handlerButton ?
                <button disabled={disabled} className='button' onClick={handlerButton}>{value}</button>
                :
                <input type="submit" value={value} disabled={disabled} className='button' />
        }
        </>
    )
}

export default Button;