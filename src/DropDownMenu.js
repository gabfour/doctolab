import * as React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useEffect, useState } from 'react';
import { collection, onSnapshot, QuerySnapshot } from "firebase/firestore";

import { db } from "./index";

export default function DropDownMenu() {
    const [doctorList, setDoctorList] = useState(new Map());
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    useEffect(()=> 
        onSnapshot(collection(db, "doctorList"), (snapshot) => {
            console.log(snapshot.docs.map((doc) => ({...doc.data(), id: doc.id})));
            },
        ),
    []);

    return (
        <div>
        <Button
            id="basic-button"
            aria-controls={open ? 'basic-menu' : undefined}
            aria-haspopup="true"
            aria-expanded={open ? 'true' : undefined}
            onClick={handleClick}
        >
            Doctor List
        </Button>
        <Menu
            id="basic-menu"
            anchorEl={anchorEl}
            open={open}
            onClose={handleClose}
            MenuListProps={{
            'aria-labelledby': 'basic-button',
            }}
        >
            <MenuItem onClick={handleClose}>{doctorList.id}</MenuItem>
        </Menu>
        </div>
    );
}