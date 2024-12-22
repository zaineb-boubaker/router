import React, { useState } from "react";
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import Fade from "@mui/material/Fade";


function Add({ handleClose, open, movies, setMovies }) {
  const [newMovie, setNewMovie] = useState({});
  const handleAddNewMovie = () => {
    setMovies([...movies, newMovie]);
  };
  console.log(newMovie);
  return (
    <Dialog
      open={open}
      onClose={handleClose}
      TransitionComponent={Fade}
      transitionDuration={{ enter: 500, exit: 300 }}
      PaperProps={{
        sx: {
          borderRadius: "30px",
          width: "500px",
          border: "2px solid white",
        },
        style: { backgroundColor: "#2d1c30", color: "white" },
        component: "form",
        onSubmit: (event) => {
          event.preventDefault();
          const formData = new FormData(event.currentTarget);
          const formJson = Object.fromEntries(formData.entries());
          const email = formJson.email;
          console.log(email);
          handleClose();
        },
      }}
    >
      <DialogTitle>Add Your Movie</DialogTitle>
      <DialogContent>
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Movie Name"
          type="text"
          fullWidth
          variant="standard"
          sx={{
            width: "400px",

            "& .MuiInputBase-root": {
              color: "white",
            },
            "& .MuiInputBase-root.Mui-focused": {
              color: "white",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "white",
            },
            input: {
              color: "white",
            },
            label: {
              color: "white",
            },

            "& .MuiInput-underline:before": {
              borderBottomColor: "white",
            },
            "& .MuiInput-underline:after": {
              borderBottomColor: "white",
            },
          }}
          onChange={(e) => {
            setNewMovie({ ...newMovie, title: e.target.value });
          }}
        />
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Description"
          type="text"
          fullWidth
          variant="standard"
          sx={{
            width: "400px",

            "& .MuiInputBase-root": {
              color: "white",
            },
            "& .MuiInputBase-root.Mui-focused": {
              color: "white",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "white",
            },
            input: {
              color: "white",
            },
            label: {
              color: "white",
            },

            "& .MuiInput-underline:before": {
              borderBottomColor: "white",
            },
            "& .MuiInput-underline:after": {
              borderBottomColor: "white",
            },
          }}
          onChange={(e) => {
            setNewMovie({ ...newMovie, description: e.target.value });
          }}
        />
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Image"
          type="text"
          fullWidth
          variant="standard"
          sx={{
            width: "400px",

            "& .MuiInputBase-root": {
              color: "white",
            },
            "& .MuiInputBase-root.Mui-focused": {
              color: "white",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "white",
            },
            input: {
              color: "white",
            },
            label: {
              color: "white",
            },

            "& .MuiInput-underline:before": {
              borderBottomColor: "white",
            },
            "& .MuiInput-underline:after": {
              borderBottomColor: "white",
            },
          }}
          onChange={(e) => {
            setNewMovie({ ...newMovie, posterURL: e.target.value });
          }}
        />
        <TextField
          autoFocus
          margin="dense"
          id="name"
          label="Rate"
          type="number"
          fullWidth
          variant="standard"
          sx={{
            width: "400px",

            "& .MuiInputBase-root": {
              color: "white",
            },
            "& .MuiInputBase-root.Mui-focused": {
              color: "white",
            },
            "& .MuiInputLabel-root.Mui-focused": {
              color: "white",
            },
            input: {
              color: "white",
            },
            label: {
              color: "white",
            },

            "& .MuiInput-underline:before": {
              borderBottomColor: "white",
            },
            "& .MuiInput-underline:after": {
              borderBottomColor: "white",
            },
          }}
          onChange={(e) => {
            setNewMovie({ ...newMovie, rating: +e.target.value });
          }}
        />
      </DialogContent>
      <DialogActions>
        <Button
          style={{
            color: "white",
          }}
          onClick={handleClose}
        >
          Cancel
        </Button>
        <Button
          onClick={handleAddNewMovie}
          style={{
            color: "white",
          }}
          type="submit"
        >
          Save
        </Button>
      </DialogActions>
    </Dialog>
  );
}

export default Add;
