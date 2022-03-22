import { createTheme } from '@mui/material/styles';
import { mainColors } from './colors';

export const theme = createTheme({
    palette: {
        primary: {
            main: mainColors.blue,
        },
        secondary: {
            main: mainColors.yellow,
            contrastText: mainColors.red,
        },
        error: {
            main: mainColors.red,
        },
        success: {
            main: mainColors.blue,
        },
    },
}); 