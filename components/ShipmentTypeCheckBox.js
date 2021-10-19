import React from 'react'
import Typography from '@mui/material/Typography';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function ShipmentTypeCheckBox({ types, fun }) {
    return (
        <Typography variant="caption">
            <FormControl component="fieldset">
                <FormLabel component="legend">Tipo de envio</FormLabel>
                <RadioGroup
                    aria-label="Tipo de envio"
                    defaultValue={300}
                    name="radio-buttons-group"
                    onChange={(e) => {
                        fun(e.target.value)
                    }}
                >
                    {types.map((type) => {
                        return <FormControlLabel value={type.cost} control={<Radio />} label={`${type.label} ($${type.cost})`} />
                    })}

                </RadioGroup>
            </FormControl>
        </Typography>
    )
}

export default ShipmentTypeCheckBox
