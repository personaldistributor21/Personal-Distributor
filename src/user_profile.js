var epro=document.querySelector('.edit_profile')
var button=document.getElementById('cp_btn');
var div1=document.querySelector('.div1')
var overlay=document.querySelector('.overlay')

button.addEventListener('click',function(){
    overlay.classList.remove('hidden')
    epro.classList.remove('hidden');
});

function close_ep()
{
    epro.classList.add('hidden');
    overlay.classList.add('hidden')
}


