import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { useGlobalContext } from '../context';
import Image from 'next/image'
import Grid from '@mui/material/Grid';
import { ccyFormat, priceRow } from './OrderCard';
import { QtyBtn } from './QtyBtn';


export default function CartTable() {
    const store = require('store')
    const row = store.get('cart')
    const { products } = useGlobalContext()
    const [pagesize, setPagesize] = useState(5)


    // ${ params.getValue(params.id, 'id') }

    const columns = [
        {
            field: 'img',
            headerName: 'Imagen',
            flex: 1,
            headerAlign: 'center',
            align: 'center',
            sortable: false,
            disableColumnMenu: true,
            renderCell: function Product_image(params) {
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
                                alt={`${params.value.alt}`}
                                src={`${params.value.src}`}
                                width={100}
                                height={100}
                                quality={100}
                            />
                        </Grid>
                    </Grid>
                </Grid>
            },
            filterable: false
        },
        {
            field: 'short_description',
            headerName: 'Producto',
            flex: 1,
            headerAlign: 'center',
            align: 'center',
            valueFormatter: (params) => {
                return `${params.value} - ${params.row.size}`
            },
            filterable: false,
            sortable: false,
            disableColumnMenu: true,
        },
        {
            field: 'price',
            headerName: 'Precio',
            flex: 1,
            headerAlign: 'center',
            align: 'center',
            valueFormatter: (params) => {
                return ccyFormat(params.value)
            },
            filterable: false,

        },
        {
            field: 'acciones',
            headerName: 'Acciones',
            headerAlign: 'center',
            flex: 1,
            align: 'center',
            filterable: false,
            sortable: false,
            renderCell: function Buttons(params) {

                return <QtyBtn row={params.row} />
            }
        },
        {
            field: 'sub_total',
            headerName: 'Subtotal',
            flex: 1,
            headerAlign: 'center',
            align: 'center',
            filterable: false,
            sortable: false,
            valueFormatter: (params) => {
                return ccyFormat(params.row.qty * params.row.price)
            }
        },

    ];

    return (
        <DataGrid
            rows={row}
            columns={columns}
            pageSize={pagesize}
            rowsPerPageOptions={[5, 10, 15]}
            onPageSizeChange={(newPageSize) => setPagesize(newPageSize)}
            autoHeight
            rowHeight={100}
            getRowId={(row) => row.entry_id}
            checkboxSelection
            disableSelectionOnClick
        />
    )
}
