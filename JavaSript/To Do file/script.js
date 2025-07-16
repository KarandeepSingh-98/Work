const inputBox = document.getElementById('inputBox');
const listcontainer = document.getElementById('listcontainer');

function add()
{
    if(inputBox.value === ''){
        alert('Write your task first');
    }

    else{
        let li = document.createElement('li');
        li.innerHTML = inputBox.value;
        listcontainer.appendChild(li);

        let editbtn = document.createElement('h2');
        editbtn.innerHTML ='&#x270F';
        li.appendChild(editbtn);
        
        let span = document.createElement('span');
        span.innerHTML = "\u00d7";
        li.appendChild(span);
        
    }
    inputBox.value='';
    saveData();
}


listcontainer.addEventListener('click', function(e){

    if(e.target.tagName === 'LI'){
        e.target.classList.toggle('checked');
        saveData();
    }

    else if(e.target.tagName === 'H2'){
        let li = e.target.parentElement;
        li.contentEditable = 'true';
        li.focus();

        li.addEventListener('keydown', function(event){
            if(event.key === 'Enter'){
                event.preventDefault();
                li.contentEditable = false;
                saveData();
            }
        });
    }


    else if(e.target.tagName === 'SPAN'){
        e.target.parentElement.remove();
        saveData();
    }

}, false);


function saveData(){
    localStorage.setItem('data', listcontainer.innerHTML);
}

function savedata(){
    listcontainer.innerHTML = localStorage.getItem('data');
}

savedata();