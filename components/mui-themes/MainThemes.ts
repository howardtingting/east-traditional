import { createTheme } from '@mui/material/styles';

// declare module '@mui/material/styles' {
//     interface Theme {
//         etm_palette: {
//             white: string;
//             bluelink: "2D9CDB";
//             lightgreen: "6FCF97";
//             actiongreen: "04C35C";
//         };
//     }
//     // allow configuration using `createTheme`
//     interface ThemeOptions {
//         etm_palette?: {
//             white?: string;
//             bluelink: "2D9CDB";
//             lightgreen: "6FCF97";
//             actiongreen: "04C35C";
//         };
//     }
// }

// const theme = createTheme({
//     etm_palette: {
//       white: "#fff",
//       bluelink: "2D9CDB",
//       lightgreen: "6FCF97",
//       actiongreen: "04C35C"
//     },
// });

const theme = createTheme({
    palette: {
      navgreen: {
        main: '#6FCF97',
        contrastText: '#fff',
      },
      whitelink: {
        main: '#fff',
        contrastText: 'rgb(255,255,255,0)',
      },
    },
  });
  
  declare module '@mui/material/styles' {
    interface Palette {
      navgreen: Palette['primary'];
      whitelink: Palette['primary'];
    }
  
    // allow configuration using `createTheme`
    interface PaletteOptions {
      navgreen?: PaletteOptions['primary'];
      whitelink?: PaletteOptions['primary'];
    }
  }
  
  // Update the Button's color prop options
  declare module '@mui/material/Button' {
    interface ButtonPropsColorOverrides {
      navgreen: true;
      whitelink: true;
    }
  }

export default theme;