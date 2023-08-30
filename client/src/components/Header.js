import React, { useContext, useState } from 'react';
import { styled, alpha } from '@mui/material/styles';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import { UserAuthContext } from "../context/UserAuthProvider";
import Login from './Login';
import Signup from './Signup';

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  '&:hover': {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: 'auto',
  marginRight: 'auto',
  width: '60%',
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: 'inherit',
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '20ch',
      },
    },
  },
}));
const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: 'black', // Green pastel color
  color: theme.palette.common.white,
  borderRadius: "15%",
  margin: "5px",
  '&:hover': {
    backgroundColor: '#7bc68c', // Slightly darker shade on hover
  },
}));

function Header() {
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setSignupModalOpen] = useState(false);
  const { user, logout } = useContext(UserAuthContext);

  const handleLoginModalOpen = () => {
    setLoginModalOpen(true);
  };

  const handleLoginModalClose = () => {
    setLoginModalOpen(false);
  };

  const handleSignupModalOpen = () => {
    setSignupModalOpen(true);
  };

  const handleSignupModalClose = () => {
    setSignupModalOpen(false);
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <div>
            <img src={process.env.PUBLIC_URL + "Dogoutline.png"} alt="PetSnuggles logo" width="150px" />
          </div>
          <h1>Pet Snuggles</h1>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: 'none', sm: 'block' } }}
          >
          </Typography>
          <Search
            searchTerm={searchTerm}
            onSearchChange={setSearchTerm}
          >
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
            />
          </Search>
          <div>
            {user ? (
              <StyledButton variant="outlined" onClick={logout}>
                Logout
              </StyledButton>
            ) : (
              <>
                <StyledButton variant="outlined" onClick={handleLoginModalOpen}>
                  Login
                </StyledButton>
                <StyledButton variant="outlined" onClick={handleSignupModalOpen}>
                  Signup
                </StyledButton>
                <Dialog open={isLoginModalOpen} onClose={handleLoginModalClose}>
                  <DialogTitle>Login</DialogTitle>
                  <DialogContent>
                    <Login onLogin={() => handleLoginModalClose()} />
                  </DialogContent>
                </Dialog>
                <Dialog open={isSignupModalOpen} onClose={handleSignupModalClose}>
                  <DialogTitle>Signup</DialogTitle>
                  <DialogContent>
                    <Signup />
                  </DialogContent>
                </Dialog>
              </>
            )}
          </div>
        </Toolbar>
      </AppBar>
    </Box>
  );
}

export default Header;