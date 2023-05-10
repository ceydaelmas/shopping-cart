import { CssBaseline } from "@mui/material";
import {
  StyledEngineProvider,
  ThemeProvider,
  createTheme,
} from "@mui/material/styles";
import { BrowserRouter } from "react-router-dom";
import { RouteList } from "./routes";
import Cart from "./components/ShoppingCart/Cart";
import { useEffect } from "react";

export const App = (): JSX.Element => {
  const theme = createTheme({
    palette: {
      mode: "light",
    },
  });

  return (
    <StyledEngineProvider injectFirst>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <RouteList />
          <Cart />
        </BrowserRouter>
      </ThemeProvider>
    </StyledEngineProvider>
  );
};

export default App;
