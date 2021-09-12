import React from 'react';
import { makeStyles } from '@material-ui/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import { Box, Card, CardHeader, Typography } from '@material-ui/core';

const useStyles = makeStyles({
  table: {
    minWidth: 650
  }
});

function createData(name, Client, Interest) {
  return { name, Client, Interest };
}

const rows = [
  createData('GA-01', 'Sam', 'Fixed'),
  createData('GA-02', 'Mark', 'Fixed'),
  createData('GA-02', 'Zeus', 'Varied'),
  createData('GA-01', 'Max', 'Fixed'),
  createData('GA-03', 'Kobe', 'Varied')
];

export default function BasicTable() {
  const classes = useStyles();

  return (
    <Card>
      <CardHeader title="Recent Group Created" />
      <TableContainer component={Paper}>
        <Table className={classes.table} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Group ID</TableCell>
              <TableCell align="right">Client</TableCell>
              <TableCell align="right">Type of Interest&nbsp;(g)</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow key={row.name}>
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.Client}</TableCell>
                <TableCell align="right">{row.Interest}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </Card>
  );
}
