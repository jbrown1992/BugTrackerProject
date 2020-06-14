import React, { useState, useEffect} from "react"
import { connect } from "react-redux"
import * as actions from "../actions/bug"
import { Grid, Paper, TableHead, TableCell, Table, TableContainer, TableRow, TableBody, withStyles } from "@material-ui/core"
import  BugForm  from "./BugForm"


const styles = theme => ({
    paper :{
        margin: theme.spacing(2),
        padding: theme.spacing(2)
    }
})


const Bugs = ({classes,...props}) => {

 
    
     useEffect(() => {
         props.fetchAllBugs()
     },[])

    return ( <Paper className = {classes.paper}>
        <Grid container>
    
            <Grid item xs = {6}>
                <BugForm />
                </Grid>
                <Grid item xs = {6}>
                    <div> List of Bugs</div>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                <TableCell>Id</TableCell>
                                <TableCell>Title</TableCell>
                                <TableCell>Priority</TableCell>
                                <TableCell>Summary</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {
                                    props.bugList.map((record, index) => {
                                    return (<TableRow key = {index} hover>
                                        <TableCell>{record.id}</TableCell>
                                        <TableCell>{record.title}</TableCell>
                                        <TableCell>{record.priority}</TableCell>
                                        <TableCell>{record.summary}</TableCell>

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
    fetchAllBugs : actions.fetchAll
}

export default connect(mapStateToProps, mapActionToProps)(withStyles(styles)(Bugs));