import project from "../data/projectData.js"

const handleProject =(res, status, message, project=null)=>{
    res.status(status).json({
        status,message,project
    })
}

const viewProject = (req,res) =>{
    res.status(200).json({
        success:true,
    })
}

const updateProject = (req,res)=>{
    res.status(200).json({
        success:true,
    })
}

export {
    viewProject,
    updateProject
}