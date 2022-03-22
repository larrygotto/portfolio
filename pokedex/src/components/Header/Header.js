import React, { useContext } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { GlobalStateContext } from "../../Global/GlobalStateContext";
import { pageData } from "../../constants/pageData";
import { Link } from "react-router-dom";
import {ContainerHeader} from './styleHeader'
import useMediaQuery from '@mui/material/useMediaQuery';

export default function Header() {
  const { states } = useContext(GlobalStateContext);

  const { page, pokemon } = states;
  const matches = useMediaQuery('(max-width:600px)');

  return (
    <ContainerHeader display={pageData[page].display}>
      <Box sx={{ flexGrow: 1 }} >
        <AppBar position="static">
          <Toolbar>
            <Link to={pageData[page].path}>
              <Button
                variant="contained"
                color="secondary"
                size = {matches?'small':'medium'}
              >
                {pageData[page].button}
              </Button>
            </Link>
            <Typography
              align="center"
              variant={matches?'h6':'h4'}
              component="div"
              sx={{ flexGrow: 1 }}
            >
              {pageData[page].title+pokemon}
            </Typography>
            <Link to={"/pokedex"}>
              <Button
                className="extra-button"
                variant="contained"
                color="secondary"
                size = {matches?'small':'medium'}
              >
                pokédex
              </Button>
            </Link>
          </Toolbar>
        </AppBar>
      </Box>
    </ContainerHeader>
  );
}
