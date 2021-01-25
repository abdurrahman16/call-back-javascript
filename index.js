
// document.getElementById('firstButton3').addEventListener('click', function(){
//     document.body.style.backgroundColor = 'teal';
// });

// document.getElementById('first').addEventListener('click', function(event){
//  console.log('clicked on first');
// });


var items = document.getElementsByClassName('item');
for (let i=0; i<items.length; i++){
    var item= items[i];
    item.addEventListener('click', function(event){
        // event.target.parentNode.removeChild(event.target);
    });
}

document.getElementById('addNew').addEventListener('click', function(){
 var itemParent = document.getElementById('myList');
 var newItem = document.createElement('li');
 newItem.innerText ='Brand new item';
 itemParent.appendChild(newItem)
});