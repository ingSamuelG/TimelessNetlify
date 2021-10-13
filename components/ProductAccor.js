import React from 'react';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import Fade from '@mui/material/Fade';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const ProductAccor = ({ description }) => {
    return (
        <div>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <Typography variant='overline'>Descripción larga</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant='caption'>
                        {description.long_description}
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography variant='overline'>Composición</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant='caption'>
                        {description.composition}
                    </Typography>
                </AccordionDetails>
            </Accordion>
            <Accordion>
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel2a-content"
                    id="panel2a-header"
                >
                    <Typography variant='overline'>Condición</Typography>
                </AccordionSummary>
                <AccordionDetails>
                    <Typography variant='caption'>
                        {description.condition}
                    </Typography>
                </AccordionDetails>
            </Accordion>


        </div>
    )
}

export default ProductAccor
