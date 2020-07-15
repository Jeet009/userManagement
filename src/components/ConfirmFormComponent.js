import React, { Component } from "react";
import Dialog from "@material-ui/core/Dialog";
import AppBar from "@material-ui/core/AppBar";
import { ThemeProvider as MuiThemeProvider } from "@material-ui/core/styles";
import { List, ListItem, ListItemText, Container } from "@material-ui/core/";
import Button from "@material-ui/core/Button";

export class Confirm extends Component {
  confirm = (e) => {
    e.preventDefault();
    // PROCESS FORM //
    fetch("https://jsonplaceholder.typicode.com/users", {
      method: "POST",
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
    this.props.nextStep();
  };

  back = (e) => {
    e.preventDefault();
    this.props.prevStep();
  };

  render() {
    const {
      values: { name, username, email, phone, city, website },
    } = this.props;
    return (
      <MuiThemeProvider>
        <Dialog open fullWidth maxWidth='sm'>
          <Container>
            <AppBar title='Confirm User Data' />
            <List>
              <ListItem>
                <ListItemText primary='Name' secondary={name} />
              </ListItem>
              <ListItem>
                <ListItemText primary='Username' secondary={username} />
              </ListItem>
              <ListItem>
                <ListItemText primary='Email' secondary={email} />
              </ListItem>
              <ListItem>
                <ListItemText primary='Phone Number' secondary={phone} />
              </ListItem>
              <ListItem>
                <ListItemText primary='City' secondary={city} />
              </ListItem>
              <ListItem>
                <ListItemText primary='Website' secondary={website} />
              </ListItem>
            </List>
            <br />

            <Button
              color='secondary'
              style={{ margin: 10 }}
              variant='contained'
              onClick={this.back}
            >
              Back
            </Button>

            <Button color='primary' variant='contained' onClick={this.confirm}>
              Confirm
            </Button>
          </Container>
        </Dialog>
      </MuiThemeProvider>
    );
  }
}

export default Confirm;
