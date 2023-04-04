import React from 'react';
import { Menu, MenuItem, ListItemText, Typography } from '@mui/material';
import { useDispatch } from 'react-redux';
import { setMenuId } from 'redux/reducers/Tab/setActivatedMenu';
import { useNavigate } from 'react-router-dom';
import { addTab } from 'redux/reducers/Tab/setOpenTab';

export default function HeaderMenu ({anchorEl, open, handleClose, crntOpnMenu}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();

    const handleProfileClick = () => {
        const isMenuOpen = crntOpnMenu.some((tab) => tab.id === 'Profile');
        if (!isMenuOpen) {
            dispatch(addTab({ id: 'Profile' }));
        }
        dispatch(setMenuId('Profile'));
    };
      
    return (
        <Menu anchorEl={anchorEl} open={open} onClick={handleClose} PaperProps={{ elevation: 0,
            sx: {
                overflow: 'visible',
                filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                mt: '10px', mr:'15px'
            }}} transformOrigin={{ horizontal: 'right', vertical: 'top' }} anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}>
            <MenuItem onClick={handleProfileClick}>
                <ListItemText>
                    <Typography sx={{color:"#0d6efd", fontSize:'14px', textAlign:'center'}}>내 정보</Typography>
                </ListItemText>
            </MenuItem>
            <MenuItem>
                <ListItemText>
                    <Typography sx={{fontSize:'14px', textAlign:'center'}} onClick={()=>navigate("/login")}>Log out</Typography>
                </ListItemText>
            </MenuItem>
        </Menu>
    );
}
