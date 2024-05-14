import { useState } from "react";

export const useForm = (defaultForm) => {
    const [form, setForm] = useState({...defaultForm});

    const handleChange = (e) => {
        setForm({
            ...form,
            [e.target.name]: e.target.value
          });
    }

    const isDisableSubmit = () => {
       return Object.values(form).includes('');
    }

    const handleSubmit = () => {
        console.log(form)
        // Save to redux or api context
    }

    return { handleChange, form, isDisableSubmit, handleSubmit }
}