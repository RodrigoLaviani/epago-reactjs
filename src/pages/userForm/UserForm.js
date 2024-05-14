import Input from "../../components/input/Input";
import Select from "../../components/select/Select";
import Button from "../../components/button/Button";
import { COUNTRIES } from "../../shared/constants/countries";
import { DOCUMENT_TYPES } from "../../shared/constants/documentTypes";
import { useForm } from "../../shared/hooks/useForm";
import { useNavigate } from "react-router-dom";
import "./UserForm.css";

const UserForm = ({ changePath }) => {
    const { form, handleChange, isDisableSubmit, handleSubmit } = useForm({
        firstname: 'Jhony',
        lastname: 'Pacheco',
        documentType: 'DNI',
        document: '98910021',
        email: 'test@test.com',
        phone: '+51016194810',
        country: 'PER',
        department: 'LIMA',
        province: 'LIMA',
        district: 'SAN ISIDRO',
        address: 'Ca Nueve 1802',
        zip: '15036'
    });
    const navigate = useNavigate();

    const handleSubmitForm = (e) => {
        handleSubmit();
        navigate('/shopping');
        changePath(true);
        e.preventDefault();
    }

    return (
        <form onSubmit={handleSubmitForm} className="container-user-form">
            <div className="user-form">
                <Input title="Nombre" name="firstname" value={form.firstname} handleChange={handleChange} />
                <Input title="Apellido" name="lastname" value={form.lastname} handleChange={handleChange} />
                <Select title="Tipo de documento" name="documentType" handleSelectChange={handleChange} options={DOCUMENT_TYPES} value={form.documentType} />
                <Input title="Documento" name="document" value={form.document} handleChange={handleChange} />
                <Input title="Email" name="email" value={form.email} handleChange={handleChange} />
                <Input title="Teléfono" name="phone" value={form.phone} handleChange={handleChange} />
            </div>
            <div className="user-form">
                <Select title="País" name="country" handleSelectChange={handleChange} options={COUNTRIES} value={form.country} />
                <Input title="Departamento" name="department" value={form.department} handleChange={handleChange} />
                <Input title="Provincia" name="province" value={form.province} handleChange={handleChange} />
                <Input title="Distrito" name="district" value={form.district} handleChange={handleChange} />
                <Input title="Dirección" name="address" value={form.address} handleChange={handleChange} />
                <Input title="Código postal" name="zip" value={form.zip} handleChange={handleChange} />
            </div>
            <div className="user-button-container">
                <h3>En esta versión se va a mantener la datos del cliente para el envío y facturación.</h3>
                <Button value={'Continuar'} disabled={isDisableSubmit()} />
            </div>
        </form>
    );
}

export default UserForm;