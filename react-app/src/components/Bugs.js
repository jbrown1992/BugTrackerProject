import React, { useState, useEffect} from "react"
import { connect } from "react-redux"
import * as actions from "../actions/bug"
import { Grid, Paper, TableHead, TableCell, Table, TableContainer, TableRow, TableBody, withStyles, Button, ButtonGroup } from "@material-ui/core"
import  BugForm  from "./BugForm"
import EditIcon from "@material-ui/icons/Edit"
import DeleteIcon from "@material-ui/icons/Delete"
import { useToasts } from "react-toast-notifications"


const styles = theme => ({
    paper :{
        margin: theme.spacing(1),
        padding: theme.spacing(1)
    }
})


const Bugs = ({classes,...props}) => {

    const [currentId, setCurrentId] = useState(0)

    const { addToast } = useToasts()

    
     useEffect(() => {
         props.fetchAllBugs()
     },[])

     const onDelete = id => {
        //if(window.confirm('Are you sure you want to delete?'))
        props.deleteBug(id, ()=>addToast("Bug Deleted", {appearance:'info'}))
    }

    return ( <Paper className = {classes.paper}>
        <Grid container>
    
            <Grid item xs = {6}>
                <BugForm {...({currentId, setCurrentId})}/>
                </Grid>
                <Grid item xs = {6}>
                    <div>List of Bugs</div>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                <TableCell>Id</TableCell>
                                <TableCell>Title</TableCell>
                                <TableCell>Status</TableCell>
                                <TableCell>Priority</TableCell>
                                <TableCell>Assingee</TableCell>
                                <TableCell>Summary</TableCell>
                                <TableCell></TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    props.bugList.map((record, index) => {
                                    return (<TableRow key = {index} hover>
                                        <TableCell>{record.id}</TableCell>
                                        <TableCell>{record.title}</TableCell>
                                        <TableCell>{record.status}</TableCell>
                                        <TableCell>{record.priority}</TableCell>
                                        <TableCell>{record.assingee}</TableCell>
                                        <TableCell>{record.summary}</TableCell>

                                        <TableCell>
                                            <ButtonGroup varian="text">
                                                <Button><EditIcon color = "primary" 
                                                onClick={() => { setCurrentId (record.id)}}/></Button>
                                                <Button><DeleteIcon color = "secondary"
                                                onClick={() => { onDelete(record.id) }}/></Button>
                                            </ButtonGroup>
                                        </TableCell>
                                    </TableRow>)
                                })
                            }

                            </TableBody>
                        </Table>
                    </TableContainer>
                </Grid>
    
    
    
    
        </Grid>
    </Paper>
    );
}

const mapStateToProps = state => ({
        bugList:state.bug.list
})

const mapActionToProps = {
    fetchAllBugs : actions.fetchAll,
    deleteBug : actions.Delete
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(Bugs));