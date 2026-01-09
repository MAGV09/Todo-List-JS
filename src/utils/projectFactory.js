function createProject(name,tasksList=[]){
return {id: crypto.randomUUID(),name,tasksList}
}

export default createProject