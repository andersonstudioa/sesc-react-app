import { useState } from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import { useNavigate } from "react-router-dom";

import { Container } from '@mui/material';
import './style.css'

function Header() {

  const navigate = useNavigate();

  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <Container
      maxWidth='100%'
      className='header-main'
    >
      <Button
        onClick={handleClick}
      >
        Menu
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        <MenuItem onClick={() => navigate("/")}>Home</MenuItem>
        <MenuItem onClick={() => navigate("/projects")}>Projetos</MenuItem>
        <MenuItem onClick={() => navigate("/tasks")}>Tarefas</MenuItem>
      </Menu>
    </Container>
  )
}

export default Header;