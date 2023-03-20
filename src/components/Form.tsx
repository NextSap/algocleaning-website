import React, {FormEvent, useState} from 'react';
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField} from "@mui/material";
import Button from "@/components/Button";
import {colors} from "@/utils/ColorsUtils";

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
    name: string,
    email: string,
    phone: string,
    address: string,
    area: string,

}

const Form = (props: FormProps) => {
    const [form, setForm] = useState<FormState>({
        name: "",
        email: "",
        phone: "",
        address: "",
        area: ""
    });

    const [name, setName] = useState<string>("");
    const [email, setEmail] = useState<string>("");
    const [phone, setPhone] = useState<string>("");

    const handleChange = (event: SelectChangeEvent) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        console.log("Form submitted");
        if (formValidated()) {
            console.log("Form validated");
        }
        console.log("Form not validated");
    }



    const formValidated = (): boolean => {
        let valid = true;
        if (isVoid(form.name)) {
            setError("name", "Veuillez renseigner votre nom");
            valid = false;
        }

        if (isVoid(form.phone) || (isVoid(form.address) || !form.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i))) {
            if (isVoid(form.phone)) {
                setError("phone", "Veuillez renseigner votre numéro de téléphone");
            }

            if (isVoid(form.address) || !form.email.match(/^([\w.%+-]+)@([\w-]+\.)+([\w]{2,})$/i)) {
                setError("address", "Veuillez renseigner une adresse correcte");
            }

            valid = false;
        }
        return valid;
    }
    const isVoid = (value: string): boolean => {
        return value === "";
    }

    const setError = (id: string, error: string): void => {
        const input = document.getElementById(id);
        if (input) {
            input.setAttribute("error", "true");
            input.setAttribute("helperText", error);
            console.log(input);
        }
    }

    return (
        <form onSubmit={handleSubmit}>
            <TextField
                error={!isVoid(form.name)}
                onChange={setName("")}
                id="name"
                label="Nom"/>
            <TextField
                error
                id="email-address"
                label="Adresse email"/>
            <TextField
                error
                id="phone"
                label="Téléphone"/>
            <FormControl>
                <InputLabel id="area">Superficie</InputLabel>
                <Select
                    error
                    labelId="area"
                    id="area-select"
                    value={form.area}
                    onChange={handleChange}
                    name="area"
                    sx={{width: "130px"}}>
                    {availableAreas.map((area, index) => (
                        <MenuItem key={index} value={area.value}>{area.name}</MenuItem>
                    ))}
                </Select>
            </FormControl>
            <TextField
                id="message"
                label="Message"/>
            <Button type="submit"
                    backgroundColor={"#fff"}
                    fontColor={"#000"}>Envoyer</Button>
        </form>
    );
};

export default Form;