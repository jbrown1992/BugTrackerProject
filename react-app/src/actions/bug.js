import api from "./api"

export const ACTION_TYPE = {
    CREATE : "CREATE",
    UPDATE:"UPDATE",
    DELETE:"DELETE",
    FETCH_ALL:"FETCH_ALL"
}




export const fetchAll = () =>  dispatch =>{

    api.bug().fetchAll()
    .then(
        response => {
        dispatch({
            type:ACTION_TYPE.FETCH_ALL,
            payload: response.data
        })
        }
    )
    .catch(err => console.log(err))

}


export const create = (data, onSuccess) => dispatch => {
    api.bug().create(data)
    .then (response => {
        dispatch({
            type:ACTION_TYPE.CREATE,
            payload: response.data
        })
        onSuccess()
    })
    .catch(err => console.log(err))

}

export const update = (id, data, onSuccess) => dispatch => {
    api.bug().update(id, data)
    .then (response => {
        dispatch({
            type:ACTION_TYPE.UPDATE,
            payload: {id, ...data}
        })
        onSuccess()
    })
    .catch(err => console.log(err))

}

export const Delete = (id, onSuccess) => dispatch => {
    api.bug().delete(id)
    .then (response => {
        dispatch({
            type:ACTION_TYPE.DELETE,
            payload: {id}
        })
        onSuccess()
    })
    .catch(err => console.log(err))

}

       
