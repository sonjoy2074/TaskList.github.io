let form=document.querySelector('#task_form');
let taskList=document.querySelector('ul');
let clearBtn=document.querySelector('#clear_task_btn'); 
let filter=document.querySelector('#task_filter');  
let taskInput=document.querySelector('#new_task');

//define event listeners
form.addEventListener('submit',addTask);
taskList.addEventListener('click',removeTask);
clearBtn.addEventListener('click',clearTask);
filter.addEventListener('keyup',filterTask);
//Define functions
//add task
function addTask(e){
    e.preventDefault();
    if(taskInput.value===''){
        alert('Add a task!');   
    }else{
        //creat li element  
        let li=document.createElement('li');
        li.appendChild(document.createTextNode(taskInput.value+" "));
        let link=document.createElement('a');
        link.setAttribute('href','#');
        link.innerHTML='x';
        li.appendChild(link);
        storeTaskInLocalStorage(taskInput.value);  
        taskList.appendChild(li);
        taskInput.value='';
    }
}
function removeTask(e){
  //console.log(e.target);
  if(e.target.hasAttribute("href")){
      if(confirm("Are you sure?")){
          let ele=e.target.parentElement;
          ele.remove();
      }
  }

}
function clearTask(e){
    //taskList.innerHTML='';
    while(taskList.firstChild){
        taskList.removeChild(taskList.firstChild);
    }   

}
function filterTask(e){
    let text=e.target.value.toLowerCase();
    document.querySelectorAll('li').forEach(task=>{
        let item=task.firstChild.textContent;
        if(item.toLowerCase().indexOf(text)!=-1){
            task.style.display='block';
        }else{
            task.style.display='none';
        }
    });
}
function storeTaskInLocalStorage(task){
    let tasks;
    if(localStorage.getItem('tasks')===null){
        tasks=[];
    }else{
        tasks=JSON.parse(localStorage.getItem('tasks'));
    }
    tasks.push(task);
    localStorage.setItem('tasks',JSON.stringify(tasks));
}