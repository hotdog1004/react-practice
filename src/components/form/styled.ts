import styled from '@emotion/styled';
import { Typography, TextField } from '@mui/material';

export const CustomTextField = styled(TextField)({
  '& .MuiInputBase-input': {
    padding: '0.375rem 0.75rem',
  },
});

export const StyledTitle = styled(Typography)`
  font-weight: 700;
`;
