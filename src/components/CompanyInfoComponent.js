import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import { Container } from "@material-ui/core";

export class CompanyInfo extends Component {
  next = (e) => {
    e.preventDefault();
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const { values, handleChange } = this.props;
    return (
      <MuiThemeProvider>
        <Dialog open fullWidth maxWidth='sm'>
          <Container>
            <AppBar title='Enter Personal Details' />
            <TextField
              label='Username'
              onChange={handleChange("username")}
              defaultValue={values.username}
              margin='normal'
              fullWidth
              variant='outlined'
            />
            <br />
            <TextField
              label='email'
              onChange={handleChange("email")}
              defaultValue={values.email}
              margin='normal'
              fullWidth
              variant='outlined'
            />
            <br />
            <TextField
              label='Website'
              onChange={handleChange("website")}
              defaultValue={values.website}
              margin='normal'
              fullWidth
              variant='outlined'
            />
            <br />

            <Button
              color='secondary'
              style={{ margin: 10 }}
              variant='contained'
              onClick={this.back}
            >
              Back
            </Button>

            <Button color='primary' variant='contained' onClick={this.next}>
              Continue
            </Button>
          </Container>
        </Dialog>
      </MuiThemeProvider>
    );
  }
}

export default CompanyInfo;
