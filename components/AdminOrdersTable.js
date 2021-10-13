import React, { useState } from 'react'
import { DataGrid } from '@mui/x-data-grid';
import { useGlobalContext } from '../context';
import IconButton from '@mui/material/IconButton';
import VisibilityIcon from '@mui/icons-material/Visibility';
import DeleteIcon from '@mui/icons-material/Delete';
import Link from 'next/link'
import { useRouter } from 'next/router'




const columns = [
    {
        field: 'id',
        headerName: 'ID de la orden',
        width: 250,
        renderCell: (params) => {
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




    // {
    //     field: 'created_ad',
    //     headerName: 'Fecha de creación',
    //     // description: '',
    //     sortable: false,
    //     width: 160,
    //     valueGetter: (params) =>
    //         `${params.getValue(params.id, 'firstName') || ''} ${params.getValue(params.id, 'lastName') || ''
    //         }`,
    // },
];




const AdminOrdersTable = () => {
    const [pageSize, setPageSize] = useState(10)
    const { orders } = useGlobalContext()
    const router = useRouter()

    const handleRedirect = (route) => {
        router.push(route)
    }


    return (
        <div style={{ height: '90%', width: '80%' }}>
            <DataGrid
                rows={orders}
                columns={columns}
                pageSize={pageSize}
                onPageSizeChange={(newPageSize) => setPageSize(newPageSize)}
                rowsPerPageOptions={[5, 10, 15]}
                checkboxSelection
                autoHeight
                disableSelectionOnClick
            />
        </div>
    )
}


export default AdminOrdersTable
