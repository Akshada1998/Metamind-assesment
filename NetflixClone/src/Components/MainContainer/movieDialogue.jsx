import   React from "react";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
import DialogContentText from "@mui/material/DialogContentText";

import { useDispatch, useSelector } from "react-redux";
import VedioBackground from "./vedioBackground.jsx";
import { setOpen } from "../../Redux/movieSlice.js";

export default function MovieDialogBox() {
  const { open, id } = useSelector((store) => store.movie);
  const dispatch = useDispatch();
  
  const handleClose = () => {
    dispatch(setOpen()   );
  };
  return (
    <React.Fragment>
      <Dialog
        open={open}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            <VedioBackground movieId={id} bool={true} />
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <button onClick={handleClose}> Cancle</button>
        </DialogActions>
      </Dialog>
    </React.Fragment>
  );
}
