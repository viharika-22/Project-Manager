import { useState } from "react";
import NewProject from "./components/NewProject";
import NoProjectScreen from "./components/NoProjectScreen";
import SideBar from "./components/SideBar";
import SelectedProject from "./components/SelectedProject";

function App() {
  const [selectedProject, setSelectedProject] =useState({
    selectedProjectId: undefined,
    projects:[],
    tasks:[]
  })

function handleAddTask(){

}

function handleDeleteTask(){
  
}

function handleStartProject(){
  setSelectedProject((prevProject)=>{
    return{
      ...prevProject,
      selectedProjectId:null
    }
  })
}

function handleCancelProject(){
  setSelectedProject((prevProject)=>{
    return{
      ...prevProject,
      selectedProjectId:undefined
    }
  })
}

function handleDeleteProject(){
  setSelectedProject((prevProject)=>{
    return{
      ...prevProject,
      selectedProjectId:undefined,
      projects:prevProject.projects.filter((project)=>project.id !== prevProject.selectedProjectId)
    }
  })
}

function handleAddProject(projectData){
  setSelectedProject(preState=>{
    const newProject ={
      ...projectData,
      id:Math.random()
    }
    return {
      ...preState,
      selectedProjectId:undefined,
      projects:[...preState.projects, newProject]
    }
  })
}

function handelSelectProject(id){
  setSelectedProject((prevProject)=>{
    return{
      ...prevProject,
      selectedProjectId:id
    }
  })
}
const selectedProj=selectedProject.projects.find(project=> project.id === selectedProject.selectedProjectId)
let content =<SelectedProject project={selectedProj} onDelete={handleDeleteProject}/>

if(selectedProject.selectedProjectId===null){
  content=<NewProject onAdd={handleAddProject} onCancel={handleCancelProject}/>
}else if(selectedProject.selectedProjectId===undefined){
  content=<NoProjectScreen onNewProject={handleStartProject}/>
}
  return (
    <main className="h-screen my-8 flex gap-8">
      <SideBar onNewProject={handleStartProject} projects={selectedProject.projects} onSelectProject={handelSelectProject}/>
      {content}
    </main>
  );
}

export default App;
