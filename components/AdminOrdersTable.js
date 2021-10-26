import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import PreviewIcon from '@mui/icons-material/Preview';
import VisibilityIcon from '@mui/icons-material/Visibility';
import Link from 'next/link'
import { useRouter } from 'next/router'


const AdminOrdersTable = ({ orders, initialPageSize, links = true, funcOpen, funcClose }) => {
    const [pageSize, setPageSize] = useState(initialPageSize)
    const router = useRouter()

    const handleRedirect = (route) => {
        router.push(route)
    }

    const columns = [
        {
            field: 'id',
            headerName: 'ID de la orden',
            width: 250,
            renderCell: function Ids(params) {
                return <Link href="/admin/order/[id]" as={`/admin/order/${params.value}`}>{params.value}</Link>
                // <IconButton IconButton aria-label="Ver" size="small" >
                //     <VisibilityIcon fontSize="inherit" />
                // </IconButton >
                // <Link href="/admin/order/[id]" as={`/admin/order/${params.value}`}>{params.value}</Link> 
            }
        },
        {
            field: 'user_name',
            headerName: 'Nombre de cliente',
            flex: 1,
            editable: false,
        },
        {
            field: 'state',
            headerName: 'Status',
            width: 250,
            editable: true,
            valueFormatter: (params) => {
                let value
                switch (params.value) {
                    case 0:
                        value = 'Orden recibida'
                        break;

                    case 1:
                        value = 'Pagadas'
                        break;

                    case 2:
                        value = 'Empacada y lista para despacho'
                        break;

                    case 3:
                        value = 'Enviada'
                        break;

                    case 4:
                        value = 'Completada'
                        break;

                    case 5:
                        value = 'Rembolsada'
                        break;

                    case 6:
                        value = 'Cancelada'
                        break;


                    default: 'N/A'
                        break;
                }

                return value

            }
        },

        // function getSteps() {
        //     return ['Orden recibida', 'Pagadas', 'Empacada y lista para despacho', 'Enviada', 'Completada', 'Rembolsada', 'Cancelada'];
        // }
        {
            field: 'total',
            headerName: ' Total',
            type: 'number',
            width: 110,
            editable: false,
        },
        {
            field: 'created_ad',
            headerName: 'Fecha de creación',
            // description: '',
            sortable: false,
            width: 250,
        },
        {
            field: 'shipped_date',
            headerName: 'Fecha de envío',
            // description: '',
            sortable: false,
            width: 250,
        },

    ];


    const columnsWoLinks = [
        {
            field: 'user_name',
            headerName: 'Nombre de cliente',
            flex: 1,
            headerAlign: "center",
            align: "center",
            editable: false,
        },
        {
            field: 'state',
            headerName: 'Status',
            headerAlign: "center",
            align: "center",
            width: 250,
            align: "center",
            editable: false,
            valueFormatter: (params) => {
                let value
                switch (params.value) {
                    case 0:
                        value = 'Orden recibida'
                        break;

                    case 1:
                        value = 'Pagadas'
                        break;

                    case 2:
                        value = 'Empacada y lista para despacho'
                        break;

                    case 3:
                        value = 'Enviada'
                        break;

                    case 4:
                        value = 'Completada'
                        break;

                    case 5:
                        value = 'Rembolsada'
                        break;

                    case 6:
                        value = 'Cancelada'
                        break;


                    default: 'N/A'
                        break;
                }

                return value

            }
        },

        {
            field: 'total',
            headerName: ' Total',
            headerAlign: "center",
            align: "center",
            type: 'number',
            width: 110,
            editable: false,
        },
        {
            field: 'created_ad',
            headerName: 'Fecha de creación',
            // description: '',
            headerAlign: "center",
            align: "center",
            sortable: false,
            width: 250,
        },
        {
            field: 'acciones',
            headerName: 'Acciones',
            // description: '',
            sortable: false,
            width: 250,
            renderCell: function Acciones(params) {
                return <Grid container
                    direction="column"
                    justifyContent="center"
                    alignItems="center">

                    <Grid item xs={12}>
                        <IconButton aria-label="Ver" size="large" color="secondary" onClick={() => {
                            funcOpen(params.id)
                        }}>
                            <VisibilityIcon />
                        </IconButton>
                    </Grid>

                </Grid>

            }
        },
    ];


    return (
        <div style={{ height: '90%', width: '90%', margin: 'auto' }}>
            <DataGrid
                rows={orders}
                columns={links ? columns : columnsWoLinks}
                pageSize={pageSize}
                onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                rowsPerPageOptions={[5, 10, 15]}
                autoHeight
                disableSelectionOnClick
            />
        </div>
    )
}

AdminOrdersTable.displayName = 'AdminOrdersTable';

export default AdminOrdersTable
