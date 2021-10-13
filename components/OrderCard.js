import React from 'react'
import Head from 'next/head'
import Image from 'next/image'
import Link from 'next/link'
import styles from '../styles/OrderCard.module.css'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';


export const OrderCard = ({ order_details }) => {

    function ccyFormat(num) {
        return `$ ${num.toFixed(2)}`;
    }

    function priceRow(qty, unit) {
        return qty * unit;
    }

    function subtotal(items) {
        return items.map(({ price, qty }) => price * qty).reduce((sum, i) => sum + i, 0);
    }

    const TAX_RATE = 0.07;

    const invoiceSubtotal = subtotal(order_details);
    const invoiceTaxes = TAX_RATE * invoiceSubtotal;
    const invoiceTotal = invoiceTaxes + invoiceSubtotal


    return (

        <div className={styles.container}>
            <Grid container direction="row"
                justifyContent="center"
                alignItems="center">

                <Grid item xs={12}>
                    <TableContainer component={Paper} style={{ backgroundColor: '#f8f8f8' }}>
                        <Table size="small" aria-label="a dense table">
                            <TableHead>
                                <TableRow>
                                    <TableCell align="center">Producto</TableCell>
                                    <TableCell align="center">Cantidad</TableCell>
                                    <TableCell align="center">Precio/Unitario</TableCell>
                                    <TableCell align="center">Precio/Cantidad</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {order_details.map((detail) => (
                                    <TableRow key={detail.product_id}>
                                        <TableCell align="center">
                                            {detail.product_id}
                                        </TableCell>
                                        <TableCell align="center">{detail.qty}</TableCell>
                                        <TableCell align="center">{detail.price}</TableCell>
                                        <TableCell align="center">{ccyFormat(priceRow(detail.qty, detail.price))}</TableCell>
                                    </TableRow>
                                ))}

                                <TableRow>
                                    <TableCell align="right" colSpan={2}>Subtotal</TableCell>
                                    <TableCell rowSpan={1} />
                                    <TableCell align="center">{ccyFormat(invoiceSubtotal)}</TableCell>
                                </TableRow>

                                <TableRow>
                                    <TableCell align="right" colSpan={2}>Impuesto</TableCell>
                                    <TableCell align="center">{(TAX_RATE * 100).toFixed(0)}%</TableCell>
                                    <TableCell align="center">{ccyFormat(invoiceTaxes)}</TableCell>
                                </TableRow>
                                <TableRow>
                                    <TableCell align="right" colSpan={2}>Total</TableCell>
                                    <TableCell rowSpan={1} />
                                    <TableCell align="center">{ccyFormat(invoiceTotal)}</TableCell>
                                </TableRow>
                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
            </Grid>
        </div>


    )
}
