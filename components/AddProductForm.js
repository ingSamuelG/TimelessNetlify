import React, { useState } from 'react'
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Grid from '@mui/material/Grid';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import Divider from '@mui/material/Divider';
import Select from '@mui/material/Select';
import IconButton from '@mui/material/IconButton';
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';
import AddBoxIcon from '@mui/icons-material/AddBox';
import MenuItem from '@mui/material/MenuItem';
import { useGlobalContext } from '../context';
import styles from '../styles/ColorCard.module.css'
import InputLabel from '@mui/material/InputLabel';



const AddProductForm = ({ product }) => {

    const { categories, sizes, colors } = useGlobalContext()
    const [fId, setFid] = useState(product ? product.id : "")
    const [fTitle, setFtitle] = useState(product ? product.short_description : "")
    const [fcondition, setFcondition] = useState(product ? product.condition : "")
    const [flongDescription, setFlongDescription] = useState(product ? product.long_description : "")
    const [fRealPrice, setFrealPrice] = useState(product ? product.real_price : 0)
    const [fDiscountPrice, setFdiscountPrice] = useState(product ? product.discount_price : 0)
    const [fCategory, setFcategory] = useState(product ? product.category.id : 1)
    const [fSubCategory, setFsubCategory] = useState(product ? product.subcategory.id : "")
    const [fEntry, setFentry] = useState(product ? product.entry : [{ product_id: fId, color_id: 1, hex: "#000000" }])

    return (
        <Box component="form" noValidate
            autoComplete="off">
            <Paper style={{ padding: '50px' }} >
                <Grid container
                    direction="row"
                    justifyContent="center"
                    alignItems="center" spacing={5}>

                    <Grid item xs={12}>
                        <Typography variant="h6">
                            {product ? "Edite este  producto: " : "Ingrese nuevo producto:"}
                        </Typography>
                    </Grid>

                    <Grid item lg={4} xs={12}>
                        <TextField
                            required
                            id="sku-name"
                            label="SKU"
                            placeholder='Codigo unico'
                            fullWidth={true}
                            value={fId}
                            onChange={(e) => setFid(e.target.value)}
                        />
                    </Grid>

                    <Grid item lg={8} xs={12}>

                    </Grid>

                    <Grid item lg={6} xs={12}>
                        <TextField
                            required
                            id="short-description"
                            label="Descripción corta del producto"
                            placeholder='"Bolsa cruzada Channel" "Zapatos negros nike" "Reloj Rolex rosa"'
                            fullWidth={true}
                            value={fTitle}
                            onChange={(e) => setFtitle(e.target.value)}
                        />
                    </Grid>

                    <Grid item lg={6} xs={12}>
                        <TextField
                            required
                            id="condition"
                            label="Condición"
                            placeholder='"Perfecta", "Poco uso", "Con detalles"'
                            fullWidth={true}
                            value={fcondition}
                            onChange={(e) => setFcondition(e.target.value)}
                        />
                    </Grid>


                    <Grid item lg={12} xs={12}>
                        <TextField
                            id="long-desc-text"
                            label="Descripción larga"
                            multiline
                            rows={4}
                            fullWidth
                            value={flongDescription}
                            onChange={(e) => setFlongDescription(e.target.value)}
                        />
                    </Grid>

                    <Grid item lg={6} xs={12}>
                        <InputLabel htmlFor="real-price-amount">Precio real</InputLabel>
                        <OutlinedInput
                            id="real-price-amount"
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            label="Precio real"
                            fullWidth
                            inputProps={{ type: 'number' }}
                            value={fRealPrice}
                            onChange={(e) => setFrealPrice(e.target.value)}
                        />
                    </Grid>

                    <Grid item lg={6} xs={12}>
                        <InputLabel htmlFor="discount-price-amount">Precio en tienda</InputLabel>
                        <OutlinedInput
                            id="discount-price-amount"
                            startAdornment={<InputAdornment position="start">$</InputAdornment>}
                            label="Precio en tienda"
                            fullWidth
                            inputProps={{ type: 'number' }}
                            value={fDiscountPrice}
                            onChange={(e) => setFdiscountPrice(e.target.value)}
                        />
                    </Grid>

                    <Grid item lg={6} xs={12}>

                        <InputLabel id="category-label">Categoria</InputLabel>
                        <Select
                            labelId="category-label"
                            id="category-label-select-helper"
                            defaultValue='Ropa'
                            label="Categoria"
                            fullWidth={true}
                            value={fCategory}
                            onChange={(e) => {
                                setFcategory(e.target.value)
                            }}
                        >
                            {categories.map((category) => {
                                return <MenuItem key={category.id} value={category.id}>
                                    {category.name}
                                </MenuItem>
                            })}
                        </Select>
                    </Grid>

                    <Grid item lg={6} xs={12}>

                        <InputLabel id="sub-category-label">SubCategoria</InputLabel>
                        <Select
                            labelId="sub-category-label"
                            id="sub-category-select-helper"
                            defaultValue={2}
                            label="SubCategoria"
                            fullWidth={true}
                            value={fSubCategory}
                            onChange={(e) => {
                                setFsubCategory(e.target.value)
                            }}
                        >

                            {categories.find(cat => cat.id == fCategory).subcategories.map((subcat) => {
                                return <MenuItem key={subcat.id} value={subcat.id}>
                                    {subcat.name}
                                </MenuItem>
                            })}
                        </Select>
                    </Grid>

                    <Grid item lg={12} xs={12}>
                        <Grid container
                            direction="row"
                            justifyContent="space-between"
                            alignItems="center"
                            spacing={5}>
                            <Grid item xs={6}>
                                <Typography variant="h6">
                                    Variantes
                                </Typography>
                            </Grid>

                            <Grid item xs={6} style={{ textAlign: "right" }} size="large">
                                <IconButton color="secondary" aria-label="add an alarm" onClick={() => {
                                    fEntry.push({ product_id: fId, size_id: 1, size: "", color_id: 1, color_name: "new color", hex: "#ffffff", qty: 1, })
                                    setFentry([...fEntry])
                                }}>
                                    <AddBoxIcon />
                                </IconButton>
                            </Grid>
                        </Grid>

                        <Divider />
                    </Grid>

                    {fEntry.map((entry, index) => {
                        return (<React.Fragment key={`${entry.size_id}${entry.color_id}`}>
                            <Grid item lg={3} xs={4}>
                                <Grid container
                                    direction="column"
                                    justifyContent="center"
                                    alignItems="center" spacing={5}>

                                    <Grid item lg={6}>
                                        <InputLabel id="size-label">Size</InputLabel>
                                        <Select
                                            labelId="size-label"
                                            id="size-select-helper"
                                            label="Size"
                                            fullWidth={true}
                                            value={entry.size_id}
                                            onChange={(e) => {
                                                fEntry[index] = {
                                                    ...entry, size: sizes.find((size) => {
                                                        return size.id == e.target.value
                                                    }).name, size_id: e.target.value
                                                }
                                                console.log(fEntry[index])
                                                setFentry([...fEntry])
                                            }}
                                        >

                                            {sizes.map((size) => {
                                                return <MenuItem key={size.id} value={size.id}>
                                                    {size.name}
                                                </MenuItem>
                                            })}
                                        </Select>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item lg={3} xs={4}>
                                <Grid container
                                    direction="column"
                                    justifyContent="center"
                                    alignItems="center" spacing={5}>

                                    <Grid item xs={6}>
                                        <InputLabel id="size-label">Color</InputLabel>
                                        <Select
                                            labelId="size-label"
                                            id="size-select-helper"
                                            defaultValue={1}
                                            label="Color"
                                            fullWidth={true}
                                            value={entry.color_id}
                                            onChange={(e) => {
                                                const new_color = colors.find((color) => {
                                                    return color.id == e.target.value
                                                })
                                                fEntry[index] = {
                                                    ...entry,
                                                    color_name: new_color.name,
                                                    hex: new_color.hex,
                                                    color_id: e.target.value
                                                }
                                                console.log(fEntry[index])
                                                setFentry([...fEntry])
                                            }}
                                        >
                                            {colors.map((color) => {
                                                return <MenuItem key={color.id} value={color.id}>
                                                    <div className={styles.rounded} style={{ backgroundColor: `${color.hex}` }}>
                                                    </div >
                                                </MenuItem>
                                            })}
                                        </Select>
                                    </Grid>
                                </Grid>
                            </Grid>

                            <Grid item lg={3} xs={4} style={{ textAlign: 'center' }}>
                                <TextField
                                    id="qty-number"
                                    label="Cantidad"
                                    fullWidth
                                    value={entry.qty}
                                    inputProps={{ type: 'number' }}
                                    onChange={(e) => {
                                        fEntry[index] = {
                                            ...entry, qty: parseInt(e.target.value)
                                        }
                                        setFentry([...fEntry])
                                    }}
                                >

                                </TextField>
                            </Grid>

                            <Grid item lg={3} xs={12} style={{ textAlign: 'center' }}>
                                <IconButton color="secondary" aria-label="add an alarm" onClick={() => {
                                    let new_array = fEntry.filter((en) => {
                                        return (!(en.size_id == fEntry[index].size_id && en.color_id == fEntry[index].color_id && en.qty == fEntry[index].qty))
                                    })
                                    setFentry(new_array)
                                }}>
                                    <DeleteOutlineIcon />
                                </IconButton>
                            </Grid>

                        </React.Fragment>)
                    })}

                    <Grid item lg={4} xs={12}>
                        <Grid container
                            direction="row"
                            justifyContent="center"
                            alignItems="center" spacing={5}>

                            <Grid item xs={6}>
                                <Button variant="contained">Guardar</Button>
                            </Grid>

                            <Grid item xs={6}>
                                <Button variant="outlined">Borrar</Button>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </Box>
    )
}



export default AddProductForm
