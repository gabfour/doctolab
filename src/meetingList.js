import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useSignOut } from 'react-firebase-hooks/auth';
import { Button } from '@mui/material';
import { auth } from './index';

function createData(name, doctorName, meetingTime) {
  return { name, doctorName, meetingTime };
}

const rows = [
  createData('etst', 'bob', 14.20),
  createData('Ice cream sandwich', 'Seb', 9.0),
  createData('etst', 'Megatron', 16.0),
];

export function MeetingList() {
    
  const [signOut] = useSignOut(auth); // loading, error

  const SignUserOut = () => signOut(auth);

    // Si liste de rdv est vide, renvoyer un message, sinon afficher table
    // if(userList.length === 0)
    return(
        <><TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>Docteur</TableCell>
              <TableCell align="right">Horaire</TableCell>

            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => (
              <TableRow
                key={row.name}
                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {row.name}
                </TableCell>
                <TableCell align="right">{row.doctorName}</TableCell>
                <TableCell align="right">{row.meetingTime}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Button onClick={SignUserOut} /></>
    );
}