import React, { useState } from "react"
import { Grid, TextField, withStyles, FormControl, Select, InputLabel, MenuItem, Button, FormHelperText } from "@material-ui/core"
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
      },
      smMargin: {
        margin: theme.spacing(1),
      }
})

const initialFieldValues = {
    title: '',
    priority: '',
    summary: ''

}

const BugForm = ({classes, ...props}) => {

    const validate = (fieldValues = values) => {
        let temp = {}
        if('title' in fieldValues)
        temp.title = fieldValues.title ? "":"This field is required"
        if('priority' in fieldValues)
        temp.priority = fieldValues.priority ? "":"This field is required"
        if('summary' in fieldValues)
        temp.summary = fieldValues.summary ? "":"This field is required"
        setErrors({
            ...temp
        })

        if(fieldValues == values) {

        return Object.values(temp).every(x => x=="")
    }
    }

    const {
        values,
        setValues,
       errors,
       setErrors,
        handleInputChange
    } = useForm(initialFieldValues, validate)

    const handleSubmit = e => {
        e.preventDefault()
        if (validate()) {
            window.alert('Bug added')
        }
        console.log(values)
    }



    return (
        
        <form autoComplete = "off" noValidate className = {classes.root} onSubmit = {handleSubmit} >

            <Grid container>

                <Grid item xs = {6}>
                    <TextField
                    name = "title"
                    variant = "outlined"
                    label = "Title"
                    value = {values.title}
                    onChange = {handleInputChange}
                    {...(errors.title && { error:true, helperText:errors.title})} />

                    <FormControl variant = "outlined" 
                    className={classes.formControl}
                    {...(errors.priority && { error:true})}>
                        <InputLabel>Priority</InputLabel>
                        <Select 
                            name = "priority"
                            value = {values.priority}
                            onChange = {handleInputChange}>
                                <MenuItem value = "">Select Prority</MenuItem>
                                <MenuItem value = "Blocker">Blocker</MenuItem>
                                <MenuItem value = "Critial">Critial</MenuItem>
                                <MenuItem value = "Major">Major</MenuItem>
                                <MenuItem value = "Minor">Minor</MenuItem>
                                <MenuItem value = "Trivial">Trivial</MenuItem>
                            </Select>
                            {errors.priority && <FormHelperText>{errors.priority}</FormHelperText>}
                    </FormControl>

                    <TextField
                    name = "summary"
                    variant = "outlined"
                    label = "Summary"
                    value = {values.summary}
                    onChange = {handleInputChange}
                    {...(errors.summary && { error:true, helperText:errors.summary})} />

                    <div>
                        <Button
                        variant = "contained"
                        color = "primary"
                        type = "submit"
                        className={classes.smMargin}>
                            Submit
                        </Button>

                        <Button
                        variant = "contained"
                        type = "rest"
                        className={classes.smMargin}>
                            Reset
                        </Button>
                    </div>


                </Grid>

            </Grid>

        </form>
    
        )
}

export default withStyles(styles) (BugForm);