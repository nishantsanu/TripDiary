
var buttons = document.getElementsByClassName("filesubmitbutton");
var display= document.getElementById("myEmbed").src;
console.log('hii');




buttons[0].addEventListener('click', function () {

    
    console.log(document.forms.myform.uploadfile.value);
    return;
});