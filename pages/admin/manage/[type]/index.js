import React, { useState } from 'react';
import styles from '../../../../styles/Add.module.css';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import Typography from '@mui/material/Typography';
import Image from 'next/image'
import Link from 'next/link'
import { useRouter } from 'next/router';
import { useGlobalContext } from '../../../../context';
import { DataGrid } from '@mui/x-data-grid';






const Index = () => {

    const { adminSideBarOpen, products, colors, sizes, brands, categories, subCategories } = useGlobalContext()
    const [pagesize, setPagesize] = useState(5)

    const router = useRouter()
    const { type } = router.query



    let columns = []
    let row = []

    if (type == 'producto') {
        columns = [
            { field: 'id', headerName: 'ID', width: 150 },
            {
                field: 'short_description',
                headerName: 'Descripción corta',
                flex: 1,
                editable: true,
            },
            {
                field: 'real_price',
                headerName: 'Precio real',
                type: 'number',
                width: 145,
                editable: true,
            },
            {
                field: 'discount_price',
                headerName: 'Precio Timeless',
                type: 'number',
                width: 180,
                editable: true,
            },
            {
                field: 'brand',
                headerName: 'Marca',
                sortable: true,
                width: 120,
                editable: false,
                valueFormatter: (params) => {
                    return `${params.value.name}`
                },
            },
            {
                field: 'category',
                headerName: 'Categoria',
                sortable: true,
                width: 160,
                valueFormatter: (params) => {
                    return `${params.value.name}`
                },
            },
            {
                field: 'subcategory',
                headerName: 'Sub categoria',
                sortable: true,
                width: 180,
                valueFormatter: (params) => {
                    return `${params.value.name}`
                },
            },

            {
                field: 'acciones',
                headerName: 'Acciones',
                sortable: true,
                width: 180,
                renderCell: (params) => {
                    return <Grid container
                        direction="column"
                        justifyContent="center"
                        alignItems="center">

                        <Grid item xs={12}> <Grid container
                            direction="row"
                            justifyContent="center"
                            alignItems="center">

                            <Grid item xs={6}>
                                <Link href={`/admin/edit/${type}/${params.getValue(params.id, 'id')}`}>
                                    <IconButton aria-label="delete" color='secondary'>
                                        <EditIcon />
                                    </IconButton>
                                </Link>
                            </Grid>
                            <Grid item xs={6}>
                                <IconButton aria-label="delete">
                                    <DeleteIcon />
                                </IconButton>
                            </Grid>
                        </Grid>
                        </Grid>
                    </Grid>

                },
            }
        ];

        row = products

    }


    if (type == 'color') {
        columns = [
            { field: 'id', headerName: 'ID', width: 150, sortable: true, },
            {
                field: 'name',
                headerName: 'Nombre',
                flex: 1,
            },
            {
                field: 'hex',
                headerName: 'Hex',
                flex: 1,
                renderCell: (params) => {
                    return <div className={styles.rounded} style={{ backgroundColor: `${params.value}` }}></div>
                },
            },
            {
                field: 'acciones',
                headerName: 'Acciones',
                flex: 1,
                renderCell: (params) => {
                    return <Grid container
                        direction="column"
                        justifyContent="center"
                        alignItems="center">

                        <Grid item xs={12}><Grid container
                            direction="row"
                            justifyContent="center"
                            alignItems="center" spacing={5}>

                            <Grid item xs={6}>
                                <Link href={`/admin/edit/${type}/${params.getValue(params.id, 'id')}`}>
                                    <IconButton aria-label="delete" color='secondary'>
                                        <EditIcon />
                                    </IconButton>
                                </Link>
                            </Grid>
                            <Grid item xs={6}>
                                <IconButton aria-label="delete">
                                    <DeleteIcon />
                                </IconButton>
                            </Grid>
                        </Grid>
                        </Grid>
                    </Grid>
                },
            }
        ];

        row = colors
    }

    if (type == 'talla') {
        columns = [
            { field: 'id', headerName: 'ID', width: 150, sortable: true, },
            {
                field: 'name',
                headerName: 'Nombre',
                flex: 1,
                headerAlign: 'center',
                align: 'center'
            },
            {
                field: 'acciones',
                headerName: 'Acciones',
                headerAlign: 'center',
                flex: 1,
                renderCell: (params) => {
                    return <Grid container
                        direction="column"
                        justifyContent="center"
                        alignItems="center">

                        <Grid item xs={12}>
                            <Grid container
                                direction="row"
                                justifyContent="center"
                                alignItems="center" spacing={5}>

                                <Grid item xs={6}>
                                    <Link href={`/admin/edit/${type}/${params.getValue(params.id, 'id')}`}>
                                        <IconButton aria-label="delete" color='secondary'>
                                            <EditIcon />
                                        </IconButton>
                                    </Link>
                                </Grid>
                                <Grid item xs={6}>
                                    <IconButton aria-label="delete">
                                        <DeleteIcon />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                },
            }
        ];

        row = sizes
    }

    if (type == 'marca') {
        columns = [
            { field: 'id', headerName: 'ID', width: 150, sortable: true, },
            {
                field: 'name',
                headerName: 'Nombre',
                flex: 1,
                headerAlign: 'center',
                align: 'center'
            },
            {
                field: 'img_url',
                headerName: 'Imagen',
                flex: 1,
                headerAlign: 'center',
                align: 'center',
                renderCell: (params) => {
                    return <Grid container
                        direction="column"
                        justifyContent="center"
                        alignItems="center">

                        <Grid item xs={12} >
                            <Grid container
                                direction="column"
                                justifyContent="center"
                                alignItems="center">
                                <Image
                                    alt={`${params.value}`}
                                    src={`/logos/${params.value}`}
                                    width={60}
                                    height={30}
                                    quality={100}
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                },
            },
            {
                field: 'acciones',
                headerName: 'Acciones',
                headerAlign: 'center',
                flex: 1,
                renderCell: (params) => {
                    return <Grid container
                        direction="column"
                        justifyContent="center"
                        alignItems="center">

                        <Grid item xs={12}>
                            <Grid container
                                direction="row"
                                justifyContent="center"
                                alignItems="center" spacing={5}>

                                <Grid item xs={6}>
                                    <Link href={`/admin/edit/${type}/${params.getValue(params.id, 'id')}`}>
                                        <IconButton aria-label="delete" color='secondary'>
                                            <EditIcon />
                                        </IconButton>
                                    </Link>
                                </Grid>
                                <Grid item xs={6}>
                                    <IconButton aria-label="delete">
                                        <DeleteIcon />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                },
            }
        ];

        row = brands
    }

    if (type == 'categoria') {
        columns = [
            { field: 'id', headerName: 'ID', width: 150, sortable: true, },
            {
                field: 'name',
                headerName: 'Nombre',
                flex: 1,
                headerAlign: 'center',
                align: 'center'
            },
            {
                field: 'acciones',
                headerName: 'Acciones',
                headerAlign: 'center',
                flex: 1,
                renderCell: (params) => {
                    return <Grid container
                        direction="column"
                        justifyContent="center"
                        alignItems="center">

                        <Grid item xs={12}>
                            <Grid container
                                direction="row"
                                justifyContent="center"
                                alignItems="center" spacing={5}>

                                <Grid item xs={6}>
                                    <Link href={`/admin/edit/${type}/${params.getValue(params.id, 'id')}`}>
                                        <IconButton aria-label="delete" color='secondary'>
                                            <EditIcon />
                                        </IconButton>
                                    </Link>
                                </Grid>

                                <Grid item xs={6}>
                                    <IconButton aria-label="delete">
                                        <DeleteIcon />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                },
            }
        ];

        row = categories
    }

    if (type == 'subcategoria') {
        columns = [
            { field: 'id', headerName: 'ID', width: 150, sortable: true, },
            {
                field: 'name',
                headerName: 'Nombre',
                flex: 1,
                headerAlign: 'center',
                align: 'center'
            },
            {
                field: 'category_id',
                headerName: 'Categoria padre',
                flex: 1,
                headerAlign: 'center',
                align: 'center',
                valueFormatter: (params) => {
                    const valueFormatted = categories.find((category) => {
                        return category.id == params.value
                    });

                    const { name } = valueFormatted
                    return `${name}`;
                },
            },
            {
                field: 'acciones',
                headerName: 'Acciones',
                headerAlign: 'center',
                flex: 1,
                renderCell: (params) => {
                    return <Grid container
                        direction="column"
                        justifyContent="center"
                        alignItems="center">

                        <Grid item xs={12}>
                            <Grid container
                                direction="row"
                                justifyContent="center"
                                alignItems="center" spacing={5}>

                                <Grid item xs={6}>
                                    <Link href={`/admin/edit/${type}/${params.getValue(params.id, 'id')}`}>
                                        <IconButton aria-label="delete" color='secondary'>
                                            <EditIcon />
                                        </IconButton>
                                    </Link>
                                </Grid>

                                <Grid item xs={6}>
                                    <IconButton aria-label="delete">
                                        <DeleteIcon />
                                    </IconButton>
                                </Grid>
                            </Grid>
                        </Grid>
                    </Grid>
                },
            }
        ];

        row = subCategories
    }



    return (<div className={`${styles.container} ${adminSideBarOpen ? null : styles.open}`}>

        <div style={{ margin: '25px 25px', textTransform: 'capitalize' }}>
            <Typography variant="h5">
                {`Administrando: ${type}`}
            </Typography>
        </div>

        <div style={{ height: 'auto', width: '90%', backgroundColor: '#FFF' }}>
            <DataGrid
                rows={row}
                columns={columns}
                pageSize={pagesize}
                rowsPerPageOptions={[5, 10, 15]}
                onPageSizeChange={(newPageSize) => setPagesize(newPageSize)}
                autoHeight
                checkboxSelection
                disableSelectionOnClick
            />
        </div>
    </div>
    )
}

Index.layout = 'admin'

export default Index
