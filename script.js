let form=document.querySelector('#task_form');
let taskList=document.querySelector('ul');
let clearBtn=document.querySelector('#clear_task_btn'); 
let filter=document.querySelector('#task_filter');  
let taskInput=document.querySelector('#new_task');

//define event listeners
form.addEventListener('submit',addTask);
taskList.addEventListener('click',removeTask);

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