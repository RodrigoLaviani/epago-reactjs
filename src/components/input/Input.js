import './Input.css';

const Input = ({ name, title, value, handleChange }) => {
    return (
        <label className="input-label">
            <h4>{title}</h4>
            <input name={name} type="text" value={value || ''} onChange={handleChange} className="styled-input"/>
        </label>
    )
}

export default Input;