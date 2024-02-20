import { RouterProvider } from "react-router-dom";
import { routes } from "./routes/routes";
import { ThemeProvider } from "@mui/material";
import { defaultTheme } from "./config/themes/default.theme";

export const Root = () => {
    return (
        <ThemeProvider theme={defaultTheme}>
            <RouterProvider router={routes} />
        </ThemeProvider>
    );
};
