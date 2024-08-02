
var classes = ["Entity_Section", "Lights_Section", "Modules_Section" , "Scripting_Section", "Window_Section",
    "Saving_Section", "Networking_Section", "CakeAi_Section", "Prefabs_Section", "Particles_Section"
];

function change_section_mode(page = 'Entities'){

    for(key in classes){
        var elm = document.getElementById(classes[key] + '_bar');
        elm.style.display = "none";
    }
    var elm = document.getElementById(page + '_bar');
    elm.style.display = "block";


    for(key in classes){
        try{
        var elm = document.getElementById(classes[key]);
        elm.style.display = "none";
        }catch(e){}

    }
    
    var elm = document.getElementById(page);
    elm.style.display = "block";

    
}

function change_br_to_new_line(){
    var elements = document.getElementsByClassName('language-python');
    console.log("changing elements to new line");
    console.log(elements);
    for(key in elements){
        try{
        var str = elements[key].innerHTML;
        var done = str;
        elements[key].innerHTML = done;
        console.log(done);
        }catch(e){}
    }
}