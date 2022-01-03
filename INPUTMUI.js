import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import {
  TextField,
  Button,
  Radio,
  RadioGroup,
  FormLabel,
  FormControlLabel,
  FormGroup,
  Checkbox,
  InputLabel,
  MenuItem,
  Select,
  FormControl,
  Typography,
} from "@mui/material";

const initialValues = {
  name: "",
  email: "",
  password: "",
  textarea: "",
  radiooption: "female",
  checkBoxOption: [],
  age: "",
};
const validationSchema = yup.object({
  name: yup.string().required("Required"),
  email: yup.string().required("Required").email("Invalid Email Type"),
  password: yup
    .string()
    .required("Required")
    .min(8, "Password must be minimum 8 Character")
    .max(10, "Password must be maximum 10 character"),
  textarea: yup.string().required("Required"),
  age: yup.string().required("Required"),
});

function INPUTMUI() {
  const formik = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    onSubmit: (values, onSubmitprops) => {
      console.log("form data", values);
      onSubmitprops.resetForm();
    },
  });
  return (
    <>
      <div className="input-ui">
        <Typography fontSize="large">Input Validation</Typography>
        <form onSubmit={formik.handleSubmit}>
          <div className="input">
            <TextField
              id="name"
              name="name"
              label="Name"
              value={formik.values.name}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              error={formik.touched.name && Boolean(formik.errors.name)}
              helperText={formik.touched.name && formik.errors.name}
            />
          </div>
          <div className="input">
            <TextField
              id="email"
              name="email"
              label="Email"
              value={formik.values.email}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              error={formik.touched.email && Boolean(formik.errors.email)}
              helperText={formik.touched.email && formik.errors.email}
            />
          </div>

          <div className="input">
            <TextField
              id="password"
              name="password"
              label="Password"
              type="password"
              value={formik.values.password}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              error={formik.touched.password && Boolean(formik.errors.password)}
              helperText={formik.touched.password && formik.errors.password}
            />
          </div>

          <div className="input">
            <TextField
              id="textarea"
              name="textarea"
              label="Messages"
              value={formik.values.textarea}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
              error={formik.touched.textarea && Boolean(formik.errors.password)}
              helperText={formik.touched.textarea && formik.errors.textarea}
            />
          </div>

          {/* Radio buttons start*/}
          <div className="input">
            <FormLabel component="legend">Gender</FormLabel>
            <RadioGroup
              row
              name="radiooption"
              value={formik.values.radiooption}
              onChange={formik.handleChange}
            >
              <FormControlLabel
                value="female"
                control={<Radio />}
                label="Female"
              />
              <FormControlLabel value="male" control={<Radio />} label="Male" />
              <FormControlLabel
                value="other"
                control={<Radio />}
                label="Other"
              />
            </RadioGroup>
          </div>
          {/* Radio button End */}

          {/* Check Box Start */}
          <div className="input">
            <FormLabel>Select Course</FormLabel>
            <FormGroup
              row
              value={formik.values.checkBoxOption}
              onChange={formik.handleChange}
            >
              <FormControlLabel
                value="html"
                control={<Checkbox />}
                name="checkBoxOption"
                label="HTML"
              />

              <FormControlLabel
                value="css"
                name="checkBoxOption"
                control={<Checkbox />}
                label="CSS"
              />
              <FormControlLabel
                value="javascript"
                name="checkBoxOption"
                control={<Checkbox />}
                label="JS"
              />
              <FormControlLabel
                value="reactjs"
                control={<Checkbox />}
                name="checkBoxOption"
                label="REACT JS"
              />
            </FormGroup>
          </div>
          {/* Check Box End */}

          {/* Select menu start */}
          <div className="input">
            <FormControl required sx={{ m: 1, minWidth: 120 }}>
              <InputLabel>Age</InputLabel>
              <Select
                name="age"
                value={formik.values.age}
                label="Age *"
                onChange={formik.handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
                <MenuItem value={40}>Fourty</MenuItem>
                <MenuItem value={50}>Fifty</MenuItem>
              </Select>
            </FormControl>
          </div>
          {/* Select menu End */}

          <div style={{ marginTop: "2rem" }}>
            <Button color="primary" variant="contained" type="submit">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </>
  );
}

export default INPUTMUI;
