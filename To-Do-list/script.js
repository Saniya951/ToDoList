let inputText= document.querySelector('#inputText');
let list= document.querySelector('#list');

//keyup- when key on keyboard is released
inputText.addEventListener("keyup",function(event){
    if(event.key == "Enter"){
        addItem(this.value)
        this.value=""//after calling additem this clears the input field
    }
})


let addItem = (inputText) =>{
    let listItem = document.createElement("li");
    listItem.innerHTML = `${inputText},<i></i>`;

    //classList is a property of an element that provides access to the list of CSS classes applied to that element.
    //The toggle method is used to add the class 'done' to the element if it doesn't have it, and remove it if it does.
    listItem.addEventListener("click", function(){
        this.classList.toggle('done');
    })


    listItem.querySelector("i").addEventListener("click",function(){
        listItem.remove();
    })

    list.appendChild(listItem); //the new itemn is append to list element
}

