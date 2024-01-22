import { useState } from 'react';
import React from 'react'
import "./index.css"
import Button from '@mui/material/Button';
import Checkbox from '@mui/material/Checkbox';
import logo from "../../../src-tauri/icons/icon.ico"
import Avatar from '@mui/material/Avatar';
import Stack from '@mui/material/Stack';
import { deepOrange, deepPurple } from '@mui/material/colors';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
  borderRadius: '10px',
  color: 'black'
  
};

export default function ScreenHome() {
    const [checked, setChecked] = React.useState(true);

    const handleChange = (event) => {
      setChecked(event.target.checked);
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);
  
  return (
    <div className="screenhome">
        <div id="logoName">
        <img src={logo} width='100px'/>
        <h1>DataSafe</h1>
        </div>
    <input type="text" placeholder="informe o link do google drive" />


<div class='input-wrapper'>
    <label for='input-file'>Selecionar um arquivo</label>
    <input id='input-file' type='file' value='' />
    <span id='file-name'></span>
</div>
    
    <input type="date"/>
    <input type="time" name="" id="" />
    
    <div id='check'>
    <Checkbox
        color="default"
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
    <span>deseja fazer o backup diariamente ?</span>
    </div>

        <div id="user">
            <Stack direction="row" spacing={2}>
            <Avatar sx={{ bgcolor: deepOrange[500] }}>N</Avatar>
            </Stack>
        </div>
        <Button variant="contained"  type='submit' onClick={handleOpen}>iniciar backup</Button>

        <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Programação de Backup Concluida !
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            Sua programação foi feita com exito, a partir de agora seu backup será feito diariamente no horario 00:00
          </Typography>
        </Box>
      </Modal>
    </div>

  </div>
  )
}
