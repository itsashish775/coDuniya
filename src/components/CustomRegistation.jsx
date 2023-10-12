import PropTypes from "prop-types";
import axios from 'axios';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

// third-party
import { motion } from "framer-motion";
import Switch from "@mui/material/Switch";
import {
  Grid,
  Stack,
  InputLabel,
  OutlinedInput,
  FormHelperText,
  Button,
  Typography,
  Box,
  Avatar,
  InputAdornment,
  Select,
  MenuItem,
} from "@mui/material";
import * as Yup from "yup";
import { useFormik } from "formik";
import { useState } from "react";
const errMsg = {
  pssvalidateString:
    "Password must contain atleast 8 character, One numeric, One capital and one small letter along with one special chatecter.",
  minName: "Name must be at least 3 characters.",
  maxName: "Name must be at most 30 characters.",
  passRegex:
    "^(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[@$!%*#?&])[A-Za-z0-9d@$!%*#?&]{8,}",
};
//Validation Schema for login form
const validationSchema = Yup.object({
  name: Yup.string()
    .matches(/^[A-Za-z ]*$/, "Only Alphabets Allowed.")
    .required("Name is required.")
    .min(3, errMsg.minName)
    .max(30, errMsg.maxName),
  email: Yup.string()
    .required("Email is required.")
    .email("Please enter a valid email."),
  location: Yup.string().required("Location is required."),
  course: Yup.string().required("Course is required."),
  contact_number: Yup.string().matches(
    /^[0-9]{8,14}$/,
    "Minimum 8 and maximum 14 numeric character allowed."
  ),
});
function AnimateButton({ children, type }) {
  switch (type) {
    case "rotate": // only available in paid version
    case "slide": // only available in paid versionz   
    case "scale": // only available in paid version
    default:
      return (
        <motion.div whileHover={{ scale: 1 }} whileTap={{ scale: 0.9 }}>
          {children}
        </motion.div>
      );
  }
}

AnimateButton.propTypes = {
  children: PropTypes.node,
  type: PropTypes.oneOf(["slide", "scale", "rotate"]),
};

AnimateButton.defaultProps = {
  type: "scale",
};
const CustomRegistation = ({ setVal }) => {
  let cities = [
    "Select Cities",
    "Agra",
    "Allahabad",
    "Aligarh",
    "Ambedkar Nagar",
    "Auraiya",
    "Azamgarh",
    "Barabanki",
    "Budaun",
    "Bagpat",
    "Bahraich",
    "Bijnor",
    "Ballia",
    "Banda",
    "Balrampur",
    "Bareilly",
    "Basti",
    "Bulandshahr",
    "Chandauli",
    "Chhatrapati Shahuji Maharaj Nagar",
    "Chitrakoot",
    "Deoria",
    "Etah",
    "Kanshi Ram Nagar",
    "Etawah",
    "Firozabad",
    "Farrukhabad",
    "Fatehpur",
    "Faizabad",
    "Gautam Buddh Nagar",
    "Gonda",
    "Ghazipur",
    "Gorakhpur",
    "Ghaziabad",
    "Hamirpur",
    "Hardoi",
    "Mahamaya Nagar",
    "Jhansi",
    "Jalaun",
    "Jyotiba Phule Nagar",
    "Jaunpur district",
    "Ramabai Nagar (Kanpur Dehat)",
    "Kannauj",
    "Kanpur",
    "Kaushambi",
    "Kushinagar",
    "Lalitpur",
    "Lakhimpur Kheri",
    "Lucknow",
    "Mau",
    "Meerut",
    "Maharajganj",
    "Mahoba",
    "Mirzapur",
    "Moradabad",
    "Mainpuri",
    "Mathura",
    "Muzaffarnagar",
    "Panchsheel Nagar district (Hapur)",
    "Pilibhit",
    "Shamli",
    "Pratapgarh",
    "Rampur",
    "Raebareli",
    "Saharanpur",
    "Sitapur",
    "Shahjahanpur",
    "Sant Kabir Nagar",
    "Siddharthnagar",
    "Sonbhadra",
    "Sant Ravidas Nagar",
    "Sultanpur",
    "Shravasti",
    "Unnao",
    "Varanasi",
  ];
  let countryCode = [
    { country: "Afghanistan", code: "93", iso: "AF" },
    { country: "Albania", code: "355", iso: "AL" },
    { country: "Algeria", code: "213", iso: "DZ" },
    { country: "American Samoa", code: "1-684", iso: "AS" },
    { country: "Andorra", code: "376", iso: "AD" },
    { country: "Angola", code: "244", iso: "AO" },
    { country: "Anguilla", code: "1-264", iso: "AI" },
    { country: "Antarctica", code: "672", iso: "AQ" },
    { country: "Antigua and Barbuda", code: "1-268", iso: "AG" },
    { country: "Argentina", code: "54", iso: "AR" },
    { country: "Armenia", code: "374", iso: "AM" },
    { country: "Aruba", code: "297", iso: "AW" },
    { country: "Australia", code: "61", iso: "AU" },
    { country: "Austria", code: "43", iso: "AT" },
    { country: "Azerbaijan", code: "994", iso: "AZ" },
    { country: "Bahamas", code: "1-242", iso: "BS" },
    { country: "Bahrain", code: "973", iso: "BH" },
    { country: "Bangladesh", code: "880", iso: "BD" },
    { country: "Barbados", code: "1-246", iso: "BB" },
    { country: "Belarus", code: "375", iso: "BY" },
    { country: "Belgium", code: "32", iso: "BE" },
    { country: "Belize", code: "501", iso: "BZ" },
    { country: "Benin", code: "229", iso: "BJ" },
    { country: "India", code: "91", iso: "IN" },
  ];
  const universityDegrees = [
    "Select Course",
    "Bachelor of Science",
    "Bachelor of Arts",
    "Master of Business Administration (MBA)",
    "Doctor of Medicine (MD)",
    "Ph.D. in Engineering",
    // Add more degrees as needed
  ];
  const formik = useFormik({
    initialValues: {
      name: "",
      email: "",
      contact_number: "",
      country_code: "",
      course: "",
      location: "",
      checked: false,
    },
    validationSchema: validationSchema,
    onSubmit: (values) => {
      const url = 'http://localhost:5555/users/registration';
      axios.post(url, values)
        .then(response => {
          console.log("Ashish", response.status)
          if (response.status == 200) {
            toast.success('POST request successful!', {
              position: toast.POSITION.TOP_RIGHT
            });
            setVal(val => !val)
          }
        })
        .catch(error => {
          console.error('Error:', error);
        });
      // alert(JSON.stringify(values, null, 2));
    },
  });
  return (
    <Box sx={{ py: 5, px: 5 }}>
      <form onSubmit={formik.handleSubmit}>
        <Grid container>
          <Grid container mb={2} spacing={2}>
            <Grid item xs={6} sm={6}>
              <Stack mb={2} spacing={1}>
                <InputLabel htmlFor="name">Full Name</InputLabel>
                <OutlinedInput
                  id="name"
                  type="text"
                  value={formik.values.name}
                  name="name"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  placeholder="Full Name"
                  fullWidth
                  error={Boolean(formik.touched.name && formik.errors.name)}
                />
                {formik.touched.name && formik.errors.name && (
                  <FormHelperText
                    error
                    id="standard-weight-helper-text-name-login"
                  >
                    {formik.errors.name}
                  </FormHelperText>
                )}
              </Stack>
              <Stack mb={2} spacing={1}>
                <InputLabel htmlFor="">Mobile Number</InputLabel>
                <Stack direction="row" spacing={1}>
                  <Grid xs={3} item>
                    <Select
                      name="country_code"
                      value={formik.values?.country_code || 91}
                      onChange={formik.handleChange}
                      fullWidth
                    >
                      {countryCode.map((n, i) => (
                        <MenuItem value={n.code} key={i}>
                          {n.iso}(+{n.code} )
                        </MenuItem>
                      ))}
                    </Select>
                  </Grid>
                  <Grid xs={9} item>
                    <OutlinedInput
                      id="contact_number"
                      value={formik.values.contact_number}
                      name="contact_number"
                      onBlur={formik.handleBlur}
                      onChange={formik.handleChange}
                      placeholder="Mobile Number"
                      fullWidth
                      error={Boolean(
                        formik.touched.contact_number &&
                        formik.errors.contact_number
                      )}
                    />
                  </Grid>
                </Stack>
                <Stack mb={2} spacing={1}>
                  <InputLabel htmlFor="couses-login">
                    Course Interested In
                  </InputLabel>
                  <Select
                    name="course"
                    value={formik.values?.course || "Select Course"}
                    onChange={formik.handleChange}
                    fullWidth
                  >
                    {universityDegrees.map((n, i) => (
                      <MenuItem value={n} key={i}>
                        {n}
                      </MenuItem>
                    ))}
                  </Select>
                  {formik.touched.course && formik.errors.course && (
                    <FormHelperText
                      error
                      id="standard-weight-helper-text-name-login"
                    >
                      {formik.errors.course}
                    </FormHelperText>
                  )}
                </Stack>
              </Stack>
            </Grid>
            <Grid item xs={12} sm={6}>
              <Stack mb={2} spacing={1}>
                <InputLabel htmlFor="email">Email Address</InputLabel>
                <OutlinedInput
                  id="email"
                  type="email"
                  value={formik.values.email}
                  name="email"
                  onBlur={formik.handleBlur}
                  onChange={formik.handleChange}
                  placeholder="Email Address"
                  fullWidth
                  autoComplete="off"
                  error={Boolean(formik.touched.email && formik.errors.email)}
                />
                {formik.touched.email && formik.errors.email && (
                  <FormHelperText
                    error
                    id="standard-weight-helper-text-user_email"
                  >
                    {formik.errors.email}
                  </FormHelperText>
                )}
              </Stack>
              <Stack mb={2} spacing={1}>
                <InputLabel htmlFor="location">City You Live In</InputLabel>
                <Select
                  name="location"
                  value={formik.values?.location || "Select Cities"}
                  onChange={formik.handleChange}
                  fullWidth
                >
                  {cities.map((n, i) => (
                    <MenuItem value={n} key={i}>
                      {n}
                    </MenuItem>
                  ))}
                </Select>
                {formik.touched.location && formik.errors.location && (
                  <FormHelperText
                    error
                    id="standard-weight-helper-text-name-login"
                  >
                    {formik.errors.location}
                  </FormHelperText>
                )}
              </Stack>
              <Stack mb={2} spacing={1}>
                <InputLabel htmlFor="checked">
                  Looking For New Distance Course?
                </InputLabel>
                <Switch
                  name="checked"
                  checked={formik.values?.checked}
                  onChange={formik.handleChange}
                  inputProps={{ "aria-label": "controlled" }}
                  color="warning"
                />
              </Stack>
            </Grid>
          </Grid>
        </Grid>
        <div>By submitting this form, you accept and agree to our <span style={{ color: "#67c2e2", fontWeight: "500" }}>Terms of Use.</span></div>
        <Grid container>
          <Grid item xs={12} sm={12}>
            <div className="form_bottom">
              <div className="bottom_text">Already Registered? Click Here To Login.</div>
              <div>
                <Grid item>
                  <AnimateButton>
                    <Button
                      disableElevation
                      //   disabled={buttonDisabled}
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                      color="warning"
                      style={{
                        // backgroundColor: "green",
                        color: "white",
                        padding: "10px 40px"
                      }}
                    >
                      SUBMIT
                    </Button>
                  </AnimateButton>
                </Grid>
              </div>
            </div>
          </Grid>
        </Grid>
      </form>
    </Box>
  );
};
export default CustomRegistation;
