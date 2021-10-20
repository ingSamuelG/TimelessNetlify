import React from 'react'
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import { useGlobalContext } from '../context';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function AddressCheckBox({ addresses = [], fun, state }) {
    const { myDefaultAddress } = useGlobalContext()

    return (
        <Typography variant="caption">
            <FormControl component="fieldset">
                <FormLabel component="legend">Selección de la dirección</FormLabel>
                <RadioGroup
                    aria-label="Tipo de envio"
                    defaultValue={myDefaultAddress}
                    name="radio-buttons-group"
                    value={state}
                    onChange={(e) => {
                        fun(e.target.value)
                    }}
                >
                    {addresses.map((address) => {
                        return <FormControlLabel key={address.id} value={address.id} control={<Radio />} label={`${address.addressee} - ${address.street} - ${address.city}`} />
                    })}

                </RadioGroup>
            </FormControl>
        </Typography>
    )
}

export default AddressCheckBox
