import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import * as actions from '../actions'
import { connect } from 'react-redux';

const useStyles = makeStyles(theme => ({
  fab: {
    margin: theme.spacing(1),
  },
  extendedIcon: {
    marginRight: theme.spacing(1),
  },
}));

const CreateFab = (props) => {
  const classes = useStyles();
  console.log(props)
  return (
    <Fab color="primary" aria-label="add" className={classes.fab} style={{position: "fixed", top: "30rem", left: "1rem"}} > 
      <AddIcon onClick={props.onClick}/>
    </Fab>   
    )
}

class FloatingActionButton extends React.Component {
  render() {
    let currentSession = this.props.session
    return (
      <div>
        <CreateFab onClick={() => this.props.showSession(currentSession)}/>
      </div>
    );
  }
}

function mapStateToProps({ session }) {
  return { session }
}

export default connect(mapStateToProps, actions)(FloatingActionButton)