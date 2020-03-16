import React from "react"
import {
  Table,
  TableHead,
  TableBody,
  TableRow,
  TableCell
} from "@material-ui/core"
import { Container } from "@material-ui/core"
import DeleteIcon from "@material-ui/icons/Delete"
import { Link } from 'react-router-dom'


const Listings = props => {
  return (
    <div className="table-container">
      <Container>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell align="left">Name</TableCell>
              <TableCell align="left">Description</TableCell>
              <TableCell align="left">Hours</TableCell>
              <TableCell align="left">Address</TableCell>
              { document.cookie === "loggedIn=true" ? (<TableCell>Delete</TableCell>):(null)}
            </TableRow>
          </TableHead>
          <TableBody>
            {props.listings.map((listing, index) => {
              return (
                <TableRow key={listing.id}>
                  <TableCell align="left"><Link to={`/details/${listing.id}`}>{listing.Name}</Link></TableCell>
                  <TableCell align="left">{listing.description}</TableCell>
                  <TableCell align="left">{listing.hours}</TableCell>
                  <TableCell align="left">{listing.address}</TableCell>
                  {document.cookie === "loggedIn=true" ? (
                                    <TableCell>
                                        <DeleteIcon
                                            onClick = {() => props.removeListing(index)}
                                            className="icon text-red" 
                                            style={{ color: "red"}} /> 
                                    </TableCell>     
                                    ):(null)}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </Container>
    </div>
  );
};

export default Listings;
