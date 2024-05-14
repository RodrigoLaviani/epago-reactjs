import './ClientData.css';

const ClientData = ({ title }) => {
    return (
        <div className='client-data-container'>
            <h3 className='client-data-title'>{title}</h3>
            {
                <table className='client-data-table no-border'>
                    <tr>
                        <td><b>Nombre: </b></td>
                        <td><b>País: </b></td>
                    </tr>
                    <tr>
                        <td><b>Apellido: </b></td>
                        <td><b>Departamento: </b></td>
                    </tr>
                    <tr>
                        <td><b>Tipo de documento: </b></td>
                        <td><b>Provincia: </b></td>
                    </tr>
                    <tr>
                        <td><b>Documento: </b></td>
                        <td><b>Distrito: </b></td>
                    </tr>
                    <tr>
                        <td><b>Email: </b></td>
                        <td><b>Dirección: </b></td>
                    </tr>
                    <tr>
                        <td><b>Teléfono: </b></td>
                        <td><b>Código postal: </b></td>
                    </tr>
                </table>
            }
        </div>
    )
}

export default ClientData;