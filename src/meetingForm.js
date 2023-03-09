import * as React from 'react';
import { useEffect, useState } from 'react';
import { useSignOut } from 'react-firebase-hooks/auth';
import { collection, addDoc, getDoc } from "firebase/firestore";
import { Button, TextField, Menu, MenuItem } from '@mui/material';
import dayjs from 'dayjs';
import { MobileDateTimePicker } from '@mui/x-date-pickers/MobileDateTimePicker';
import { AdapterDayjs } from '@mui/x-date-pickers/AdapterDayjs';
import { LocalizationProvider } from '@mui/x-date-pickers';

import { auth, db } from './index';
import DropDownMenu from './DropDownMenu';

export function MeetingForm() {

    const [nom, setNom] = useState("");
    const [dateTime, setDateTime] = useState(dayjs('2022-04-17T15:30'));
    const [signOut] = useSignOut(auth); // loading, error

    const SignUserOut = () => signOut(auth);

    const addMeeting = async (e) => {
        e.preventDefault();  
       
        try {
            const docRef = await addDoc(collection(db, "client"), {
                nom: String,
                dateTime: dayjs, 
            });
            console.log("Document written with ID: ", docRef.id);
          } catch (e) {
            console.error("Error adding document: ", e);
          }
    }
    
    return(
        <><form>
            <DropDownMenu />
            <TextField id="outlined-basic" label="Nom" variant="outlined" onChange={(e) => setNom(e.target.value)} />
            <LocalizationProvider dateAdapter={AdapterDayjs}>
                <MobileDateTimePicker label="Selection de la date et de l'heure" value={dateTime} onChange={(nouvelleDateTime) => setDateTime(nouvelleDateTime)} />
            </LocalizationProvider>
            <Button type="submit" onClick={addMeeting}>Confirm</Button>
        </form>
        <Button onClick={SignUserOut}>Sign Out</Button></>
    );
}