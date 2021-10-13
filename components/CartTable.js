import React from 'react'

export const CartTable = () => {
    return (
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
    )
}
