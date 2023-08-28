import * as React from 'react';
import Stack from '@mui/material/Stack';
import Button from '@mui/material/Button';
import { AiFillHeart, BiSearchAlt, AiOutlineCalendar } from 'react-icons/ai';
import { MdPersonOutline } from 'react-icons/md'
import { styled } from '@mui/material/styles';
import MuiGrid from '@mui/material/Grid';
import Divider from '@mui/material/Divider';

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
    <Stack direction="row" spacing={2}>
      <Grid item xs>

        <Button><BiSearchAlt /></Button>
      </Grid>
        <Divider orientation="vertical" flexItem>
        VERTICAL
      </Divider>
      <Grid item xs>
        <Button>
          <AiFillHeart color="red"/> 
        </Button>
      </Grid>
      <Divider orientation="vertical" flexItem>
        VERTICAL
      </Divider>
      <Grid item xs>
        <Button>
          <AiOutlineCalendar color="blue"/>
        </Button>
      </Grid>
        <Divider orientation="vertical" flexItem>
        VERTICAL
      </Divider>
      <Grid item xs>
      <Button>
      <MdPersonOutline />
      </Button>
      </Grid>
      <Divider orientation="vertical" flexItem>
        VERTICAL
      </Divider>
      </Stack>
    </Grid>

  );
}

export default Footer
