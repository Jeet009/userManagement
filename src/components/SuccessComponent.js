import React, { Component } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";

export default class SimpleTable extends Component {
  //Rendering Data In Browser
  render() {
    const {
      values: { name, username, email, phone, city, website },
    } = this.props;
    return (
      <TableContainer component={Paper}>
        <h5 style={{ margin: 10 }}>User Added Successfully</h5>
        <Table aria-label='simple table'>
          <TableHead>
            <TableRow>
              <TableCell>Name</TableCell>
              <TableCell align='right'>Username</TableCell>
              <TableCell align='right'>Email</TableCell>
              <TableCell align='right'>City</TableCell>
              <TableCell align='right'>Phone</TableCell>
              <TableCell align='right'>Website</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell component='th' scope='row'>
                {name}
              </TableCell>
              <TableCell align='right'>{username}</TableCell>
              <TableCell align='right'>{email}</TableCell>
              <TableCell align='right'>{city}</TableCell>
              <TableCell align='right'>{phone}</TableCell>
              <TableCell align='right'>{website}</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    );
  }
}
