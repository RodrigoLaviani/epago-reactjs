import './Select.css';

const Select = ({ options, handleSelectChange, name, title, value }) => {
    return (
        <label className="select-label">
            <h4>{title}</h4>
            <select name={name} value={value} onChange={handleSelectChange} className="styled-select">
                {options.map((option) => {
                    return <option key={`${option.key}`} value={option.key}>{option.text}</option>
                })}
            </select>
        </label>
    );
}

export default Select;