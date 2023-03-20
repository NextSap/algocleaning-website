import React, {useState} from 'react';
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent} from "@mui/material";

const availableAreas = [
    {
        name: "< 50 m²",
        value: 50
    },
    {
        name: "50 - 100 m²",
        value: 100
    },
    {
        name: "> 100 m²",
        value: 150
    }
]

type FormProps = {
    type?: "global" | "toitures" | "façades" | "terrasses",
    selectColor?: string,
    color?: string,
}

type FormState = {
    firstName: string,
    lastName: string,
    email: string,
    phone: string,
    address: string,
    area: string,

}

const Form = (props: FormProps) => {
    const [form, setForm] = useState<FormState>({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        address: "",
        area: ""
    });

    const handleChange = (event: SelectChangeEvent) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    };

    return (
        <FormControl>
            <InputLabel id="area">Age</InputLabel>
            <Select
                labelId="area"
                id="area-select"
                value={form.area}
                onChange={handleChange}
                name="address"
            >
                {availableAreas.map((area, index) => (
                    <MenuItem key={index} value={area.value}>{area.name}</MenuItem>
                ))}
            </Select>
        </FormControl>
    );
};

export default Form;