

function createTodo() {
    let text = $("#txtTodo").val(); // read the text/val from controls

    let syntax = `
    <div class="d-flex todo-item">
        <h5 class="me-3">${text}</h5>
        <button class="btn btn-sm btn-danger me-1">Remove</button>
        </div>
        `;
        $("#todoContainer").append(syntax);
        

    // clear input field
    $("#txtTodo").val(''); //write the text/val to the control
    $("#txtTodo").focus();
}


// plain JS
// document.getElementById("btnSave").click = save;

function deleteTodo() {
    console.log("delete press");
    $(this).parent().remove();
}


// bottom
function init(){
    console.log("Todo app");
    //load previous data
    
    
    // hook events
    // jquery
    $("#btnSave").click(createTodo);
    
    $("#todoContainer").on('click', ".btn-danger", deleteTodo)
    
    $("#txtTodo").keypress(function(args) {
        if(args.key === "Enter"){
            createTodo();
        }
    })
    
    
}

window.onload = init;



// <button class="btn btn-sm btn-success">Done</button>

// $(`.todo-item`).on(`click`,function(){
//     console.log(`test the click`);
//     highlight();
// });
// let items=$(`#todoContainer`);
// if(items[0].childElementCount>1){
//     $(`.todo-item`).on(`click`,function(){
//         console.log(`test the click`);
//     });
// }
// console.log(items.childElementCount);