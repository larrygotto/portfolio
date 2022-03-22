import React from "react";
import Snackbar from "@mui/material/Snackbar";
import Alert from "@mui/material/Alert";
import AlertTitle from "@mui/material/AlertTitle";
import useBoxError from "../hooks/useBoxError";

export default function BoxError({error}) {
  const [open, handleClose] = useBoxError(error);
  return (
    <Snackbar
      anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
      open={open}
      autoHideDuration={15000}
      onClose={handleClose}
    >
      <Alert sx={{ width: "100%" }} severity="error" onClose={handleClose}>
        <AlertTitle>Error</AlertTitle>
        Algo deu errado no carregamento — <strong>tente mais tarde!</strong>
      </Alert>
    </Snackbar>
  );
}
