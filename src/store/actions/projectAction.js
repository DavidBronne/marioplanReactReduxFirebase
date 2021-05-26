const createProject = (project) => {
    return (dispatch, getState, { getFirebase , getFireStore }) => {
        // async to DB
        dispatch({type:"CREATE_PROJECT" , project:project})
    }
}

export  default createProject;