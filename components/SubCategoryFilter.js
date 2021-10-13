import React from 'react';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import IconButton from '@mui/material/IconButton';
import ExpandLess from '@mui/icons-material/ExpandLess';
import ExpandMore from '@mui/icons-material/ExpandMore';
import Collapse from '@mui/material/Collapse';
import Grid from '@mui/material/Grid';
import { makeStyles } from '@mui/styles';
import Link from 'next/link';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import { useGlobalContext } from '../context';

const SubCategoryFilter = ({ category }) => {

    const { setProductFilterFromCategory, categoryFilterPressed, setProductFilterFromSubCategory, subCategoryFilterPressed } = useGlobalContext()

    const useStyles = makeStyles({
        nested: {
            paddingLeft: '50px'
        },

    });

    const classes = useStyles();
    const [open, setOpen] = React.useState(false);

    const handleClick = () => {
        setOpen(!open);
    };

    return (
        <>
            <ListItem button className={classes.nested} >
                <ListItem onClick={() => {
                    setProductFilterFromCategory(category.id)
                    categoryFilterPressed({ name: category.name, state: true })
                }}>
                    <ListItemText disableTypography primary={<Typography variant="overline" gutterBottom>
                        {category.name}
                    </Typography>} />
                </ListItem>
                <IconButton aria-label="expand" onClick={handleClick}>
                    {open ? <ExpandLess /> : <ExpandMore />}
                </IconButton>
            </ListItem>
            <Collapse in={open} timeout="auto" unmountOnExit>

                <Grid container spacing={2} direction="row"
                    justifyContent="center"
                    alignItems="center" className={classes.nested}>

                    {category.subcategories.map((subcategory) => {
                        return (<Grid item xs={6} key={subcategory.id} style={{ textAlign: "center" }}>
                            <Paper style={{ background: '#f1f1f1', color: '#DF1A7C', cursor: "pointer" }} onClick={() => {
                                setProductFilterFromSubCategory(subcategory.id)
                                subCategoryFilterPressed({ name: subcategory.name, state: true })
                            }}>
                                <Typography variant="caption" gutterBottom>
                                    {subcategory.name}
                                </Typography>
                            </Paper>
                        </Grid>)
                    })}

                </Grid>

            </Collapse>
        </>
    )
}

export default SubCategoryFilter
