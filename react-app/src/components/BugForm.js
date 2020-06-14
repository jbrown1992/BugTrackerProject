import React, { useState } from "react"
import { Grid, TextField, withStyles, FormControl, Select, InputLabel, MenuItem } from "@material-ui/core"
import useForm from "./useForm"

const styles = theme => ({
    root: {
        '& .MuiTextField-root': {
          margin: theme.spacing(1),
          minWidth: 230,
        },
      }, 
      formControl: {
        margin: theme.spacing(1),
        minWidth: 230,
      }
})

const initialFieldValues = {
    title: '',
    priority: '',
    summary: ''

}

const BugForm = ({classes, ...props}) => {
    const {
        values,
        setValues,
        handleInputChange
    } = useForm(initialFieldValues)



    return (
        
        <form autoComplete = "off" noValidate className = {classes.root} >

            <Grid container>

                <Grid item xs = {6}>
                    <TextField
                    name = "title"
                    variant = "outlined"
                    label = "Title"
                    value = {values.title}
                    onChange = {handleInputChange} />

                    <FormControl variant = "outlined" 
                    className={classes.formControl}>
                        <InputLabel>Priority</InputLabel>
                        <Select 
                            name = "prority"
                            value = {values.priority}
                            onChange = {handleInputChange}>
                                <MenuItem value = "">Select Prority</MenuItem>
                                <MenuItem value = "Blocker">Blocker</MenuItem>
                                <MenuItem value = "Critial">Critial</MenuItem>
                                <MenuItem value = "Major">Major</MenuItem>
                                <MenuItem value = "Minor">Minor</MenuItem>
                                <MenuItem value = "Trivial">Trivial</MenuItem>
                            </Select>
                    </FormControl>

                    <TextField
                    name = "summary"
                    variant = "outlined"
                    label = "Summary"
                    value = {values.summary}
                    onChange = {handleInputChange} />


                </Grid>

            </Grid>

        </form>
    
        )
}

export default withStyles(styles) (BugForm);