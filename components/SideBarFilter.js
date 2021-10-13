import React from 'react';
import { makeStyles } from '@mui/styles';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import Button from '@mui/material/Button';
import ListSubheader from '@mui/material/ListSubheader';
import ListItem from '@mui/material/ListItem';
import { FilterSelectedButton } from './FilterSelectedButton';
import IconButton from '@mui/material/IconButton';
import ClearIcon from '@mui/icons-material/Clear';
import ClearAllIcon from '@mui/icons-material/ClearAll';
import Grid from '@mui/material/Grid';
import SideBarItemFilter from './SideBarItemFilter';
import SubCategoryFilter from './SubCategoryFilter';
import ColorFilterLink from './ColorFilterLink';
import SizeFilterLink from './SizeFilterLink';
import BrandFilterLink from './BrandFilterLink';

import { useGlobalContext } from '../context';
import FilterSubmenu from './FilterSubmenu'

const useStyles = makeStyles({
    list: {
        width: 280,
    },
    fullList: {
        width: 'auto',
    },
    nested: {
        paddingLeft: '25px'
    },

});



export default function SideBarFilter() {
    const classes = useStyles();
    const { categoryFilter, colorFilter, resetProductFilter, colorPressed, colorFilterPressed, subCategoriesPressed, categoriesPressed, categoryFilterPressed, subCategoryFilterPressed,
        sizePressed, filterSideBarOpen, setFilterSideBarOpen, sizeFilter, sizeFilterPressed, brandPressed, brandFilter, brandFilterPressed } = useGlobalContext()

    const anyFilterPressed = (colorPressed.state || subCategoriesPressed.state || categoriesPressed.state || sizePressed.state || brandPressed.state)

    const list = () => (
        <List
            component="nav"
            aria-labelledby="nested-list-subheader"
            className={classes.list}
            subheader={
                <ListSubheader component="div" id="nested-list-subheader" disableSticky={true}>
                    <Grid container justifyContent="flex-end" alignItems="center">
                        <Grid item>
                            <IconButton aria-label="expand" size="small" className={classes.togle_btn} onClick={() => { setFilterSideBarOpen(false) }}>
                                <ClearIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                    <Divider />
                </ListSubheader>
            }
            className={classes.root}
        >
            <ListItem>
                <Grid container direction="row" justifyContent="center" alignItems="center" spacing={1}>


                    {categoriesPressed.state ? (<FilterSelectedButton func={() => {
                        resetProductFilter()
                        categoryFilterPressed({ ...categoriesPressed, state: false })
                    }}>{`${categoriesPressed.name}`}</FilterSelectedButton>) : null}

                    {subCategoriesPressed.state ? (<FilterSelectedButton func={() => {
                        resetProductFilter()
                        subCategoryFilterPressed({ ...subCategoriesPressed, state: false })
                    }}>{`${subCategoriesPressed.name}`}</FilterSelectedButton>) : null}

                    {colorPressed.state ? (<FilterSelectedButton func={() => {
                        resetProductFilter()
                        colorFilterPressed({ ...colorPressed, state: false })
                    }}>{`${colorPressed.name}`}</FilterSelectedButton>) : null}

                    {sizePressed.state ? (<FilterSelectedButton func={() => {
                        resetProductFilter()
                        sizeFilterPressed({ ...sizePressed, state: false })
                    }}>{`Talla :${sizePressed.name}`}</FilterSelectedButton>) : null}

                    {brandPressed.state ? (<FilterSelectedButton func={() => {
                        resetProductFilter()
                        brandFilterPressed({ ...brandPressed, state: false })
                    }}>{`Marca :${brandPressed.name}`}</FilterSelectedButton>) : null}

                    <Grid item xs={12} style={{ textAlign: 'right' }}>

                        {anyFilterPressed ? (<Button variant="outlined" startIcon={<ClearAllIcon />} size="small" onClick={
                            () => {
                                resetProductFilter()
                                categoryFilterPressed({ ...categoriesPressed, state: false })
                                subCategoryFilterPressed({ ...subCategoriesPressed, state: false })
                                colorFilterPressed({ ...colorPressed, state: false })
                                sizeFilterPressed({ ...sizePressed, state: false })
                                brandFilterPressed({ ...brandPressed, state: false })
                            }

                        }> Cerrar Todos</Button>) : null}

                    </Grid>
                </Grid>

            </ListItem>

            <SideBarItemFilter name="Categoria"  >
                {categoryFilter.map((category) => {
                    return <SubCategoryFilter key={category.id} category={category} />
                })}
            </SideBarItemFilter>

            <SideBarItemFilter name="Color"  >
                <FilterSubmenu data={colorFilter}><ColorFilterLink /></FilterSubmenu>
            </SideBarItemFilter>

            <SideBarItemFilter name="Marca"  >
                <FilterSubmenu data={brandFilter}><BrandFilterLink /></FilterSubmenu>
            </SideBarItemFilter>

            <SideBarItemFilter name="Tamaño"  >
                <FilterSubmenu data={sizeFilter}><SizeFilterLink /></FilterSubmenu>
            </SideBarItemFilter>


        </List>
    );

    return (
        <div>
            <SwipeableDrawer
                anchor='right'
                open={filterSideBarOpen}
                onClose={() => { setFilterSideBarOpen(false) }}
                onOpen={() => { setFilterSideBarOpen(false) }}
                classes={{ paper: classes.list }}
            >
                {list()}
            </SwipeableDrawer>
        </div>
    );
}