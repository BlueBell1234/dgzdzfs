var names = ["Family Book","Tisha Reddy","Amith Mogili","Sunitha Yarram","Aadrit Yarram","Shivama Yarram","Anki Reddy"];

var images = ["Family.jpg","girl.png","dad.jpg","mom.png","cousinbro.png","grandma.jpg","grandpa.jpg"]

var i = 0;

function update(){
    i++;
    var number_of_people_in_family_array = 5
    if(i > number_of_people_in_family_array){
        i = 0;
    }
    var updatedImage = images[i];
    var updatedNames = names[i];
    document.getElementById("family_member_image").src = updatedImage;
    document.getElementById("family_member_label").innerHTML = updatedNames;
}