import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import { styled } from '@mui/material/styles';
import Divider from '@mui/material/Divider';
import Grid from '@mui/material/Grid';
import SearchIcon from '@mui/icons-material/Search';
import { NavLink } from 'react-router-dom'
// import { useUserAuth } from '../context/UserAuthProvider';

const StickyFooter = styled('div')({
  position: 'sticky',
  bottom: 0,
  backgroundColor: 'white', 
  zIndex: 1000,
});

function Footer() {
  // const { user } = useUserAuth(); 
  return (
    <StickyFooter>
      <Grid container>
        <Stack direction="row" spacing={5}>
          <Divider orientation="vertical" flexItem />
          <Grid item xs>
            <NavLink to="/">
              <Button>
                <SearchIcon style={{ color: 'black' }}/>
              </Button>
            </NavLink>
          </Grid>
          <Divider orientation="vertical" flexItem />
          <Grid item xs>
            <NavLink to='/favorites'>
              <Button>
                <FavoriteIcon style={{ color: 'red' }}/> 
              </Button>
            </NavLink>
          </Grid>
          <Divider orientation="vertical" flexItem />
          <Grid item xs>
          {/* <NavLink to='/schedule'>
            <Button>
              <CalendarTodayOutlinedIcon style={{ color: 'blue' }}/>
            </Button>
          </NavLink> */}
          </Grid>
          <Divider orientation="vertical" flexItem />
          <Grid item xs>
            <NavLink to='/profile'>
            <Button>
              <PersonOutlinedIcon style={{ color: 'black' }} />
            </Button>
          </NavLink>
          </Grid>
          <Divider orientation="vertical" flexItem />
      </Stack>
    </Grid>
  </StickyFooter>
  );
}

export default Footer
