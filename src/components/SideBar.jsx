import React from 'react'
import Button from './Button'

const SideBar = ({onNewProject,projects,onSelectProject,selectdProjectID}) => {
  return (
    <aside className='w-1/3 px-8 py-16 bg-stone-900 text-stone-50 md:w-72 rounded-r-xl'>
      <h2 className='mb-8 font-bold uppercase md:text-xl text-stone-200 '>Your Projects</h2>
      <div>
      <Button onClick={onNewProject}>+ Add project</Button>
      </div>
      <ul className='mt-8'>
      {projects.map((project)=>{
        let classesC='w-full text-left px-2 py-1 rounded-sm my-1 hover:bg-stone-800 hover:text-stone-200'

        if(project.id ===selectdProjectID){
          classesC+=' bg-stone-800 text-stone-200'
        }else{
          classesC+=' text-stone-400'
        }

        return(
          <li key={project.id}>
          <button onClick={()=>onSelectProject(project.id)} className={classesC}>{project.title}
          </button>
         </li>
        )
      }
      )}
      </ul>
    </aside>
  )
}

export default SideBar
