import React from "react";
import { Grid, TextField, Button, Typography, Box, Grid2 } from "@mui/material";
import { makeStyles } from "@mui/styles";

import { useForm, Controller } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "../../Store/Reducers/contactReducer";

const schema = yup.object().shape({
  name: yup.string().required("Name is required"),
  email: yup
    .string()
    .email("Invalid email format")
    .required("Email is required"),
  message: yup.string().required("Message is required"),
});

const useStyles = makeStyles((theme) => ({
  container: {
    backgroundColor: "#333",
    color: "#fff",
    padding: theme.spacing(4),
    borderRadius: theme.spacing(2),
  },
  formContainer: {
    backgroundColor: "#444",
    borderRadius: theme.spacing(2),
    padding: theme.spacing(4),
  },
  input: {
    marginBottom: theme.spacing(2),
    "& .MuiOutlinedInput-root": {
      "& fieldset": {
        marginBottom: "8px",
        borderColor: "#555",
      },
      "&:hover fieldset": {
        borderColor: "#777",
      },
    },
    "& .MuiInputLabel-root": {
      color: "#aaa",
    },
    "& .MuiInputBase-input": {
      color: "#fff",
    },
  },
  button: {
    marginTop: theme.spacing(2),
    backgroundColor: "#ff9800",
    "&:hover": {
      backgroundColor: "#e68900",
    },
  },
  contactInfo: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    paddingLeft: theme.spacing(4),
    "& p": {
      marginBottom: theme.spacing(1),
    },
  },
}));

const ContactForm = () => {
  const dispatch = useDispatch();

  const classes = useStyles();
  const {
    control,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm({
    resolver: yupResolver(schema),
  });

  const { contacts } = useSelector((state) => state.contact);
  console.log(contacts);
  const onSubmit = (data) => {
    dispatch(addContact(data));
    alert("Form submitted successfully");
    reset();
  };
  return (
    <Grid2>
      <Typography variant="h3">Contact Page</Typography>

      <Box className={classes.container}>
        <Grid container spacing={4}>
          <Grid item xs={12} md={6}>
            <Box className={classes.formContainer}>
              <Typography variant="h5" gutterBottom>
                Contact US
              </Typography>
              <form onSubmit={handleSubmit(onSubmit)}>
                <Controller
                  name="name"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Name"
                      variant="outlined"
                      className={classes.input}
                      error={!!errors.name}
                      helperText={errors.name ? errors.name.message : ""}
                    />
                  )}
                />
                <Controller
                  name="email"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Email"
                      variant="outlined"
                      className={classes.input}
                      error={!!errors.email}
                      helperText={errors.email ? errors.email.message : ""}
                    />
                  )}
                />
                <Controller
                  name="message"
                  control={control}
                  defaultValue=""
                  render={({ field }) => (
                    <TextField
                      {...field}
                      fullWidth
                      label="Message"
                      variant="outlined"
                      multiline
                      rows={4}
                      className={classes.input}
                      error={!!errors.message}
                      helperText={errors.message ? errors.message.message : ""}
                    />
                  )}
                />
                <Button
                  type="submit"
                  variant="contained"
                  fullWidth
                  className={classes.button}
                >
                  Send Message
                </Button>
              </form>
            </Box>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box className={classes.contactInfo}>
              <Typography variant="h5" gutterBottom>
                Contact information
              </Typography>
              <Typography>
                We're open for any suggestion or just to have a chat.
              </Typography>
              <Typography>
                <strong>Address:</strong> Ghodawat Business Bay, Vaidehi
                Enclave, Bavdhan, Pune, Maharashtra 411045
              </Typography>
              <Typography>
                <strong>Phone:</strong> +1235 2355 98
              </Typography>
              <Typography>
                <strong>Email:</strong> info@enark.com
              </Typography>
              <Typography>
                <strong>Website:</strong> enark.com
              </Typography>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Grid2>
  );
};

export default ContactForm;
