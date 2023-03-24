import React, {ChangeEvent, FormEvent, useState} from 'react';
import {FormControl, InputLabel, MenuItem, Select, SelectChangeEvent, TextField} from "@mui/material";
import Button from "@/components/Button";
import {colors} from "@/utils/ColorsUtils";

const availableAreas: string[] = ["< 50 m²", "50 - 100 m²", "> 100 m²"];
const availableDomains: string[] = ["Façades", "Terrasses", "Toitures"];

type FormProps = {
    size: "small" | "medium" | undefined,
    selectColor?: string,
    color?: string,
    domain?: "Façades" | "Terrasses" | "Toitures",
}

type FormState = {
    name: string,
    email: string,
    phone: string,
    address: string,
    area: string,
    domain: string,
    message: string,
}

type ErrorState = {
    name: boolean,
    email: boolean,
    phone: boolean,
}

const Form = (props: FormProps) => {
    const [form, setForm] = useState<FormState>({
        name: "",
        email: "",
        phone: "",
        address: "",
        area: "",
        domain: props.domain ? props.domain : "",
        message: "",
    });

    const [errors, setErrors] = useState<ErrorState>({
        name: false,
        email: false,
        phone: false,
    });

    const handleChange = (event: FormChangeEvent) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
    };

    const handleSubmit = (event: FormEvent) => {
        event.preventDefault();
        setErrors({
            name: isVoid(form.name),
            email: isVoid(form.email),
            phone: isVoid(form.phone),
        });

        if(isVoid(form.name) || isVoid(form.email) || isVoid(form.phone)) return;

        // TODO: Implement API call to send email

        setFormVoid();
    }

    const setFormVoid = (): void => {
        setForm({
            name: "",
            email: "",
            phone: "",
            address: "",
            area: "",
            domain: "",
            message: "",
        });
    }

    const isVoid = (value: string): boolean => {
        return value === "";
    }

    type FormChangeEvent = ChangeEvent<HTMLInputElement | HTMLTextAreaElement> | SelectChangeEvent;

    return (
        <form className="flex flex-col justify-around w-full space-y-5" onSubmit={handleSubmit}>
            <div className="flex justify-between">
                <TextField
                    error={errors.name}
                    helperText={errors.name && "Ce champ est obligatoire"}
                    value={form.name}
                    onChange={handleChange}
                    name="name"
                    label="Nom"
                    size={props.size}
                    sx={{width: "45%"}}/>
                <TextField
                    error={errors.phone}
                    helperText={errors.phone && "Entrez un numéro de téléphone correct"}
                    value={form.phone}
                    onChange={handleChange}
                    name="phone"
                    label="Téléphone"
                    size={props.size}
                    sx={{width: "45%"}}/>
            </div>
            <TextField
                error={errors.email}
                helperText={errors.email && "Entrez un email correct"}
                value={form.email}
                onChange={handleChange}
                name="email"
                type="email"
                label="Adresse email"
                size={props.size}/>
            <div className="flex justify-between w-full">
                <FormControl size={props.size} sx={{width: "45%"}}>
                    <InputLabel id="area">Superficie</InputLabel>
                    <Select
                        labelId="area"
                        value={form.area}
                        onChange={handleChange}
                        name="area"
                        label="Superficie">
                        {availableAreas.map((area, index) => (
                            <MenuItem key={index} value={area}>{area}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
                <FormControl size={props.size} sx={{width: "45%"}}>
                    <InputLabel id="domain">Domaine</InputLabel>
                    <Select
                        labelId="domain"
                        value={form.domain}
                        onChange={handleChange}
                        name="domain"
                        label="domaine">
                        {availableDomains.map((domain, index) => (
                            <MenuItem key={index} value={domain}>{domain}</MenuItem>
                        ))}
                    </Select>
                </FormControl>
            </div>
            <TextField
                id="message"
                value={form.message}
                onChange={handleChange}
                name="message"
                label="Message"
                size={props.size}
                inputProps={{style: {height: "150px"}}}
                multiline/>

            <Button type="submit"
                    backgroundColor={colors.main}
                    hoverBackgroundColor={colors.lightGrey}
                    fontColor={colors.white}>
                Envoyer
            </Button>
        </form>
    );
};

export default Form;