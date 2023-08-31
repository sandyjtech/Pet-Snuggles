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
import { useUserAuth  } from "../context/UserAuthProvider";
import { PetContext } from "../context/PetProvider";
import Login from './Login';
import Signup from './Signup';

const Search = styled("div")(({ theme }) => ({
  position: "relative",
  borderRadius: theme.shape.borderRadius,
  backgroundColor: alpha(theme.palette.common.white, 0.15),
  "&:hover": {
    backgroundColor: alpha(theme.palette.common.white, 0.25),
  },
  marginLeft: "auto",
  marginRight: "auto",
  width: "60%",
}));

const SearchIconWrapper = styled("div")(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: "100%",
  position: "absolute",
  pointerEvents: "none",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  color: "inherit",
  "& .MuiInputBase-input": {
    padding: theme.spacing(1, 1, 1, 0),
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create("width"),
    width: "100%",
    [theme.breakpoints.up("sm")]: {
      width: "12ch",
      "&:focus": {
        width: "20ch",
      },
    },
  },
}));


const StyledButton = styled(Button)(({ theme }) => ({
  backgroundColor: "black",
  color: theme.palette.common.white,
  borderRadius: "15%",
  margin: "5px",
  "&:hover": {
    backgroundColor: "#7bc68c",
  },
}));

function Header() {
  const { pets } = useContext(PetContext);
  const [searchTerm, setSearchTerm] = useState('');
  const [isLoginModalOpen, setLoginModalOpen] = useState(false);
  const [isSignupModalOpen, setSignupModalOpen] = useState(false);
  const { handleLogout, user } = useUserAuth(); // Updated context hook usage

  const handleModalOpen = (modalType) => {
    if (modalType === "login") {
      setLoginModalOpen(true);
    } else if (modalType === "signup") {
      setSignupModalOpen(true);
    }
  };

  const handleModalClose = () => {
    setLoginModalOpen(false);
    setSignupModalOpen(false);
  };

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value.toLowerCase());
  };

  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <div style={{ display: 'flex', alignItems: 'center' }}>
            <img src={process.env.PUBLIC_URL + "Dogoutline.png"} alt="PetSnuggles logo" width="150px" />
          </div>
          <div style={{ marginLeft: '15px' }}>
          <h1> Pet Snuggles </h1>
          </div>
          <Typography
            variant="h6"
            noWrap
            component="div"
            sx={{ flexGrow: 1, display: { xs: "none", sm: "block" } }}
          >
            Pet Snuggles
          </Typography>
          <Search>
            <SearchIconWrapper>
              <SearchIcon />
            </SearchIconWrapper>
            <StyledInputBase
              placeholder="Search…"
              inputProps={{ 'aria-label': 'search' }}
              value={searchTerm}
              onChange={handleSearchChange}
            />
          </Search>
          <div>
            {user ? (
              <StyledButton variant="outlined" onClick={handleLogout}>
                Logout
              </StyledButton>
            ) : (
              <>
                <StyledButton
                  variant="outlined"
                  onClick={() => handleModalOpen("login")}
                >
                  Login
                </StyledButton>
                <StyledButton
                  variant="outlined"
                  onClick={() => handleModalOpen("signup")}
                >
                  Signup
                </StyledButton>
              </>
            )}
          </div>

          {/* Login and Signup modals */}
          <Dialog open={isLoginModalOpen} onClose={handleModalClose}>
            <DialogTitle>Login</DialogTitle>
            <DialogContent>
              <Login onLogin={handleModalClose} />
            </DialogContent>
          </Dialog>
          <Dialog open={isSignupModalOpen} onClose={handleModalClose}>
            <DialogTitle>Signup</DialogTitle>
            <DialogContent>
              <Signup onSignup={handleModalClose} />
            </DialogContent>
          </Dialog>
        </Toolbar>
      </AppBar>
    </Box>
  )
}

export default Header;


