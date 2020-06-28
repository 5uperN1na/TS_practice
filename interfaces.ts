interface Todo {
    title: string;
    text: string;

}

function showTodo (todo: Todo){
    console.log(todo.title + ':' + todo.text)

}

let myToDo = {title: "Trash", text: "Take it out"};
 
showTodo(myToDo);