import Drawer from "@mui/material/Drawer";
import Box from "@mui/material/Box";
import { ThemeProvider, createTheme } from "@mui/material/styles";

const theme = createTheme({
  components: {
    MuiDrawer: {
      styleOverrides: {
        paper: {
          display: "flex",
          flexDirection: "column",
          flexWrap: "nowrap",
          backgroundColor: "#f5dbbb",
          overflow: "hidden",
        },
      },
    },
  },
});

export default function PermanentDrawerLeft({ active }) {
  return (
    <ThemeProvider theme={theme}>
      <Drawer variant="permanent" anchor="top">
        <div className="flex flex-row font-serif m-5 text-white text-xl sm:text-base xs:text-sm font-bold">
          <a href="/">
            <p className="hover:font-extrabold font-serif-italic text-2xl sm:text-lg xs:text-sm font-normal text-shadow-header">
              Patricia Childress
            </p>
          </a>
          <div className="flex flex-grow justify-end xs:pr-2">
            <a href="About" className="pr-10 xs:pr-4 hover:underline">
              {active === "About" && (
                <Box>
                  <p className="text-header-select">About</p>
                </Box>
              )}
              {active !== "About" && (
                <Box>
                  <p>About</p>
                </Box>
              )}
            </a>
            <a href="Resources" className="pr-10 xs:pr-4 hover:underline">
              {active === "Resources" && (
                <Box>
                  <p className="text-header-select">Resources</p>
                </Box>
              )}
              {active !== "Resources" && (
                <Box>
                  <p>Resources</p>
                </Box>
              )}
            </a>
            <a href="Contact" className=" xs:pr-4 hover:underline">
              {active === "Contact" && (
                <Box>
                  <p className="text-header-select">Contact</p>
                </Box>
              )}
              {active !== "Contact" && (
                <Box>
                  <p>Contact</p>
                </Box>
              )}
            </a>
          </div>
        </div>
      </Drawer>
    </ThemeProvider>
  );
}
