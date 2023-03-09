import * as React from 'react';
import { useSignOut } from 'react-firebase-hooks/auth';
import { Button, TextField } from '@mui/material';
import { auth } from './index';
import { DatePicker } from '@mui/x-date-pickers/DatePicker';
import { TimePicker } from '@mui/x-date-pickers/TimePicker';
import { useEffect, useState } from 'react';
import dayjs from 'dayjs';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';

export function MeetingForm() {

    const [date, setDate] = useState(dayjs('2022-04-17'));
    const [heure, setHeure] = useState(dayjs('T15:30'));
    const [signOut] = useSignOut(auth); // loading, error

    const SignUserOut = () => signOut(auth);

    return(
        <><form>
            <TextField id="outlined-basic" label="Nom" variant="outlined" />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <DatePicker label="Selection de la date"value={date} onChange={(nouvelleDate) => setDate(nouvelleDate)} />
                <TimePicker label="Selection de l'heure" value={heure} onChange={(nouvelleHeure) => setHeure(nouvelleHeure)} />
            </LocalizationProvider>
        </form>
        <Button onClick={SignUserOut}>Sign Out</Button></>
    );
}