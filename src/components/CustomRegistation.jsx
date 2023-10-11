import PropTypes from "prop-types";

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
  password: Yup.string()
    .matches(errMsg.passRegex, errMsg.pssvalidateString)
    .required("Password is required."),
  contact_number: Yup.string().matches(
    /^[0-9]{8,14}$/,
    "Minimum 8 and maximum 14 numeric character allowed."
  ),
});
function AnimateButton({ children, type }) {
  switch (type) {
    case "rotate": // only available in paid version
    case "slide": // only available in paid version
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
const CustomRegistation = () => {
    let cities = [
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
    "Bachelor of Science",
    "Bachelor of Arts",
    "Master of Business Administration (MBA)",
    "Doctor of Medicine (MD)",
    "Ph.D. in Engineering",
    // Add more degrees as needed
  ];
  const [buttonDisabled, setButtonDisabled] = useState(false);
  const initialValues = {
    name: "",
    email: "",
    password: "",
    contact_number: "",
    country_code: "91",
    location: "",
    checked: false,
    course: "",
    currentFile: "",
    previewImage: "",
    serverError: null,
};
console.log(initialValues);
const {
    handleBlur,
    handleChange,
    handleSubmit,
    values,
    errors,
    setFieldValue,
    touched,
  } = useFormik({
    initialValues: initialValues,
    validationSchema: validationSchema,
    enableReinitialize: true,
    onSubmit: (values, { setErrors }) => {
      try {
        // setButtonDisabled(true);
        // const formData = new FormData();
        // formData.append('name', values.name);
        // formData.append('email', values.email);
        // formData.append('contact', values.contact_number);
        // formData.append('country_code', values.country_code);
        // formData.append('password', values.password);
        // formData.append('profile_image', values.currentFile);
        // addUserClick(values).then((res) => {
        //     setButtonDisabled(false);
        // });
        alert("asdasdf")
        alert(JSON.stringify(values, null, 2));
      } catch (err) {
        // setButtonDisabled(false);
        alert("asdasdf")
        setErrors({ serverError: err.message });
      }
    },
  });
  return (
    <>
      <div>
        <Box sx={{ py: 5, px: 2 }}>
          <form noValidate onSubmit={handleSubmit}>
            <Grid container>
              <Grid container mb={2} spacing={2}>
                <Grid item xs={6} sm={6}>
                  <Stack mb={2} spacing={1}>
                    <InputLabel htmlFor="name-login">Full Name</InputLabel>
                    <OutlinedInput
                      id="name-login"
                      type="text"
                      value={values.name}
                      name="name"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="Full Name"
                      fullWidth
                      error={Boolean(touched.name && errors.name)}
                    />
                    {touched.name && errors.name && (
                      <FormHelperText
                        error
                        id="standard-weight-helper-text-name-login"
                      >
                        {errors.name}
                      </FormHelperText>
                    )}
                  </Stack>
                  <Stack mb={2} spacing={1}>
                    <InputLabel htmlFor="email-login">Mobile Number</InputLabel>
                    <Stack direction="row" spacing={1}>
                      <Grid xs={3} item>
                        <Select
                          name="country_code"
                          value={values?.country_code || 91}
                          onChange={handleChange}
                          fullWidth
                        >
                          {countryCode.map((n, i) => (
                            <MenuItem value={n.country}>
                              {n.iso}(+{n.code} )
                            </MenuItem>
                          ))}
                        </Select>
                      </Grid>
                      <Grid xs={9} item>
                        <OutlinedInput
                          id="contact_number"
                          value={values.contact_number}
                          name="contact_number"
                          onBlur={handleBlur}
                          onChange={handleChange}
                          placeholder="Mobile Number"
                          fullWidth
                          error={Boolean(
                            touched.contact_number && errors.contact_number
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
                        value={values?.course && "Ashish"}
                        onChange={handleChange}
                        fullWidth
                      >
                        {universityDegrees.map((n, i) => (
                          <MenuItem value={n} key={i}>
                            {n}
                          </MenuItem>
                        ))}
                      </Select>
                      {touched.course && errors.course && (
                        <FormHelperText
                          error
                          id="standard-weight-helper-text-name-login"
                        >
                          {errors.course}
                        </FormHelperText>
                      )}
                    </Stack>
                    {
                      <FormHelperText
                        error
                        id="standard-weight-helper-text-country_code"
                      >
                        {touched.country_code && errors.country_code
                          ? errors.country_code
                          : touched.contact_number && errors.contact_number
                          ? errors.contact_number
                          : null}
                      </FormHelperText>
                    }
                  </Stack>
                </Grid>
                <Grid item xs={12} sm={6}>
                  <Stack mb={2} spacing={1}>
                    <InputLabel htmlFor="user_email">Email Address</InputLabel>
                    <OutlinedInput
                      id="user_email"
                      type="email"
                      value={values.email}
                      name="email"
                      onBlur={handleBlur}
                      onChange={handleChange}
                      placeholder="Email Address"
                      fullWidth
                      autoComplete="off"
                      error={Boolean(touched.email && errors.email)}
                    />
                    {touched.email && errors.email && (
                      <FormHelperText
                        error
                        id="standard-weight-helper-text-user_email"
                      >
                        {errors.email}
                      </FormHelperText>
                    )}
                  </Stack>
                  <Stack mb={2} spacing={1}>
                    <InputLabel htmlFor="location-login">
                      City You Live In
                    </InputLabel>
                    <Select
                      name="location"
                      value={values?.location && "Ashish"}
                      onChange={handleChange}
                      fullWidth
                    >
                      {cities.map((n, i) => (
                        <MenuItem value={n} key={i}>
                          {n}
                        </MenuItem>
                      ))}
                    </Select>
                    {touched.location && errors.location && (
                      <FormHelperText
                        error
                        id="standard-weight-helper-text-name-login"
                      >
                        {errors.location}
                      </FormHelperText>
                    )}
                  </Stack>
                  <Stack mb={2} spacing={1}>
                    <InputLabel htmlFor="distance-login">
                      Looking For New Distance Course?
                    </InputLabel>
                    <Switch
                      name="checked"
                      checked={values?.checked}
                      onChange={handleChange}
                      inputProps={{ "aria-label": "controlled" }}
                      color="warning"
                    />
                  </Stack>
                </Grid>
              </Grid>
              {errors.submit && (
                <Grid item xs={12} sm={6}>
                  <FormHelperText error>{errors.submit}</FormHelperText>
                </Grid>
              )}
              <Grid container spacing={2} ml={-2} mt={1}>
                <Grid item>
                  <AnimateButton>
                    <Button
                      disableElevation
                      disabled={buttonDisabled}
                      fullWidth
                      size="large"
                      type="submit"
                      variant="contained"
                      color="warning"
                    >
                      Save
                    </Button>
                  </AnimateButton>
                </Grid>
                <Grid item>
                  <AnimateButton>
                    <Button
                      disableElevation
                      disabled={buttonDisabled}
                      fullWidth
                      size="large"
                      variant="outlined"
                      color="warning"
                    >
                      Cancel
                    </Button>
                  </AnimateButton>
                </Grid>
              </Grid>
            </Grid>
          </form>
        </Box>
      </div>
    </>
  );
};
export default CustomRegistation;
