var existingEntries = JSON.parse(localStorage.getItem("allEntries"));
const main_div = document.querySelector('.row');
const clearBtn = document.querySelector('.btn');
clearBtn.addEventListener('click', () => {
    localStorage.clear();
    main_div.parentNode.removeChild(main_div);
});

if (existingEntries) {
    
existingEntries.forEach(e => {
    // CREATE DOM ELEMENTS
    var first_div = document.createElement('DIV');
    var second_div = document.createElement('DIV');
    var third_div = document.createElement('DIV');
    var img = document.createElement('IMG');
    var h5 = document.createElement('H5');
    var deleteButton = document.createElement('BUTTON')
    var deleteButtonDiv = document.createElement('DIV');


    // ID for delete button
    var id = e.name;


    // ADD CLASSES
    first_div.classList.add('hov', 'col-lg-3', 'col-sm-6', 'col-12');
    second_div.classList.add('card', 'border-0', 'mb-2', 'list-card', 'cardshow');
    third_div.classList.add('card-body');
    img.classList.add('card-img-top', 'border-0');
    h5.classList.add('card-title');
    deleteButton.classList.add('btn-danger');

    deleteButtonDiv.setAttribute('style', 'width:100%;')
    second_div.setAttribute('style', 'max-width: 18rem;');
    img.setAttribute('style', 'max-width: 20rem;');
    img.setAttribute('src', e.image);
    deleteButton.setAttribute('style', 'width: 4rem; height: 2rem; font-size: 12px;margin-left:70%; border-radius: 6px;')
    deleteButton.innerText = 'remove'
    deleteButton.setAttribute('id',id);
    h5.innerText = e.name;
    
    first_div.style.transform = "none";
    h5.style.textAlign = "center";  
    img.style.objectFit = "contain";

    // APPEND
    third_div.append(h5);
    second_div.append(img);
    deleteButtonDiv.append(deleteButton)
    third_div.append(deleteButtonDiv)
    second_div.append(third_div);
    first_div.append(second_div);
    main_div.append(first_div);

    // Using Event Delegation
    document.addEventListener('click',function(prop){
        if(prop.target && prop.target.id===id){
            // console.log(e);

            var tempList = [];
            existingEntries.forEach( entry => {
                if(entry.name !== e.name)
                    tempList.push(entry);
            })
            // console.log(tempList);
            localStorage.setItem("allEntries", JSON.stringify(tempList));
            first_div.parentNode.removeChild(first_div);


            //do something
         }
     });

});
}
