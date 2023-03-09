import * as React from 'react';
import { useSignOut } from 'react-firebase-hooks/auth';
import { Button, TextField } from '@mui/material';
import { auth } from './index';
import { MobileDatePicker } from '@mui/x-date-pickers/MobileDatePicker';
import { TimeField } from '@mui/x-date-pickers/TimeField';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';

export function MeetingForm() {

    const [date, setDate] = useState(dayjs('2022-04-17'));
    const [heure, setHeure] = useState(dayjs('2022-04-17T15:30'));
    const [signOut] = useSignOut(auth); // loading, error

    const SignUserOut = () => signOut(auth);

    return(
        <><form>
            <TextField id="outlined-basic" label="Nom" variant="outlined" />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <MobileDatePicker label="Selection de la date"value={date} onChange={(nouvelleDate) => setDate(nouvelleDate)} />
                <TimeField label="Selection de l'heure" value={heure} onChange={(nouvelleHeure) => setHeure(nouvelleHeure)} format="HH:mm" />
            </LocalizationProvider>
        </form>
        <Button onClick={SignUserOut}>Sign Out</Button></>
    );
}