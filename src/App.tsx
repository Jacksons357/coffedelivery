// import { Outlet } from "react-router-dom";
import { ThemeProvider } from "styled-components";
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { Outlet } from "react-router-dom";
import { CartContextProvider } from "./contexts/CartProvider";
import { Header } from "./components/Header";

export function App() {
  return (
      <ThemeProvider theme={defaultTheme}>
        <GlobalStyle />

        <CartContextProvider>
          <Header />
          <Outlet />
        </CartContextProvider>
      </ThemeProvider>
  )
}
