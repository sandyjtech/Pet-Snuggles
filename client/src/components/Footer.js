import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import FavoriteIcon from '@mui/icons-material/Favorite';
import CalendarTodayOutlinedIcon from '@mui/icons-material/CalendarTodayOutlined';
import PersonOutlinedIcon from '@mui/icons-material/PersonOutlined';
import { styled } from '@mui/material/styles';
import MuiGrid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';
import SearchIcon from '@mui/icons-material/Search';
import { Link } from 'react-router-dom'

const Grid = styled(MuiGrid)(({ theme }) => ({
  width: '100%',
  ...theme.typography.body2,
  '& [role="separator"]': {
    margin: theme.spacing(0, 2),
  },
}));

function Footer() {

  return (
    <Grid container>
    <Stack direction="row" spacing={5}>
    <Divider orientation="vertical" flexItem>
      </Divider>
      <Grid item xs>
        <Link to="/"><Button><SearchIcon style={{ color: 'black' }}/></Button></Link>
      </Grid>
        <Divider orientation="vertical" flexItem>
      </Divider>
      <Grid item xs>
        <Link to="/favorites"><Button>
          <FavoriteIcon style={{ color: 'red' }}/> 
        </Button>
        </Link>
      </Grid>
      <Divider orientation="vertical" flexItem>
      </Divider>
      <Grid item xs>
        <Link to="/schedule"><Button>
          <CalendarTodayOutlinedIcon style={{ color: 'blue' }}/>
        </Button>
        </Link>
      </Grid>
        <Divider orientation="vertical" flexItem>
      </Divider>
      <Grid item xs>
      <Link to="/profile"><Button>
      <PersonOutlinedIcon style={{ color: 'black' }}/>
      </Button>
      </Link>
      </Grid>
      <Divider orientation="vertical" flexItem>
      </Divider>
      </Stack>
    </Grid>

  );
}

export default Footer