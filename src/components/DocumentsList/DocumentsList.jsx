import React from 'react';
import { connect } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

import { fetchDocuments } from '../../actions/index';





class DocumentsList extends React.Component {
  componentDidMount = () => {
    this.props.getDocuments();
  }
  render () {
    console.log(this.props);
    return (
      <div>
        <Paper>
        {(this.props.documents.data)? 
          <Table size="small">
            <TableHead>
              <TableRow>
                <TableCell align="right">id</TableCell>
                <TableCell align="right">title</TableCell>
                <TableCell align="right">from</TableCell>
                <TableCell align="right">sum</TableCell>
              </TableRow>
            </TableHead>
            
               
             <TableBody> 
              {this.props.documents.data.map(row => (
                <TableRow key={row.id}>
                  <TableCell component="th" scope="row">
                    {row.name}
                  </TableCell>
                  <TableCell align="right">{row.id}</TableCell>
                  <TableCell align="right">{row.title}</TableCell>
                  <TableCell align="right">{row.from}</TableCell>
                  <TableCell align="right">{row.sum}</TableCell>
                </TableRow>
              ))}
              </TableBody>
          </Table>
          : <div>Dowloading...</div>}

        </Paper>
      </div>
    );
  }

  
}


const mapStateToProps = (state) => ({ documents: state.documents });
const mapDispatchToProps = { getDocuments: fetchDocuments };

export default connect(mapStateToProps,mapDispatchToProps)(DocumentsList);