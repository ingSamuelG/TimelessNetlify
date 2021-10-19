import React from 'react'
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function AddressCheckBox({ addresses, fun }) {
    return (
        <Typography variant="caption">
            <FormControl component="fieldset">
                <FormLabel component="legend">Selección de la dirección</FormLabel>
                <RadioGroup
                    aria-label="Tipo de envio"
                    defaultValue={addresses[0].id}
                    name="radio-buttons-group"
                    onChange={(e) => {
                        fun(e.target.value)
                    }}
                >
                    {addresses.map((address) => {
                        return <FormControlLabel style={{ fontSize: 60 }} value={address.id} control={<Radio />} label={`${address.addressee} - ${address.street} - ${address.city}`} />
                    })}

                </RadioGroup>
            </FormControl>
        </Typography>
    )
}

export default AddressCheckBox
