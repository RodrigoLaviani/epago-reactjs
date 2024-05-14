import './Details.css';

const Details = () => {
    return (
        <div className='details-container'>
            <h3 className='details-title'>Detalles de orden</h3>
            {
                <table className='details-table no-border'>
                    <tr>
                        <td><b>Número de orden: </b></td>
                    </tr>
                    <tr>
                        <td><b>Método de pago: </b></td>
                    </tr>
                </table>
            }
        </div>
    )
};

export default Details;