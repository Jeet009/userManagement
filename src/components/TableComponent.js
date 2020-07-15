//Component To READ, DELETE & UPDATE
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Button, Icon } from "@material-ui/core";

const useStyles = makeStyles({
  table: {
    minWidth: 650,
  },
  button: {
    margin: 10,
  },
});

export default function SimpleTable(values) {
  const classes = useStyles();
  const [users, setUser] = useState([]);

  //Fetching The Data - Using useEffect Hooks
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        setUser(data);
      });
  }, [setUser]);

  //Removing Data
  const removeData = (id) => {
    let url = `https://jsonplaceholder.typicode.com/users/${id}`;
    fetch(url, {
      method: "DELETE",
    }).then((res) => {
      const del = users.filter((employee) => id !== employee.id);
      setUser(del);
    });
  };

  //Editing Data
  const editData = (id) => {
    let url = `https://jsonplaceholder.typicode.com/users/${id}`;
    fetch(url, {
      method: "PUT",
      body: JSON.stringify({
        id: `${id}`,
        name: "foo",
        username: "bar",
        phone: "5045",
        city: "Kolkata",
        email: "user@gmail.com",
        website: "www.website.com",
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
        setUser(data);
      });
  };

  //Rendering Data In Browser
  return (
    <TableContainer component={Paper}>
      <Table className={classes.table} aria-label='simple table'>
        <TableHead>
          <TableRow>
            <TableCell>User ID</TableCell>
            <TableCell align='right'>Name</TableCell>
            <TableCell align='right'>Username</TableCell>
            <TableCell align='right'>Email</TableCell>
            <TableCell align='right'>City</TableCell>
            <TableCell align='right'>Phone</TableCell>
            <TableCell align='right'>Website</TableCell>
            <TableCell align='right'>Delete</TableCell>
            <TableCell align='right'>Edit</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {users.length > 0 ? (
            users.map((user) => (
              <TableRow key={user.id}>
                <TableCell component='th' scope='row'>
                  {user.id}
                </TableCell>
                <TableCell align='right'>{user.name}</TableCell>
                <TableCell align='right'>{user.username}</TableCell>
                <TableCell align='right'>{user.email}</TableCell>
                <TableCell align='right'>{user.address.city}</TableCell>
                <TableCell align='right'>{user.phone}</TableCell>
                <TableCell align='right'>{user.website}</TableCell>
                <TableCell align='right'>
                  <Button onClick={() => removeData(user.id)}>
                    <Icon>delete</Icon>
                  </Button>
                </TableCell>
                <TableCell align='right'>
                  <Button onClick={() => editData(user.id)}>
                    <Icon>edit</Icon>
                  </Button>
                </TableCell>
              </TableRow>
            ))
          ) : (
            <TableRow>
              <TableCell component='th' scope='row'>
                Loading...
              </TableCell>
              <TableCell align='right'>Loading...</TableCell>
              <TableCell align='right'>Loading...</TableCell>
              <TableCell align='right'>Loading...</TableCell>
              <TableCell align='right'>Loading...</TableCell>
              <TableCell align='right'>Loading...</TableCell>
              <TableCell align='right'>Loading...</TableCell>
              <TableCell align='right'>Loading...</TableCell>
              <TableCell align='right'>Loading...</TableCell>
            </TableRow>
          )}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
