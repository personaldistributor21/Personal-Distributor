const imgdiv=document.querySelector('.profile-pic-div');
const img=document.querySelector('#photo');
const file=document.querySelector('#file');
const upladbtn=document.querySelector('#uploadBtn');

imgdiv.addEventListener('mouseenter',function(){
    upladbtn.style.display="block";
})

imgdiv.addEventListener('mouseleave',function(){
    upladbtn.style.display="none";
})

file.addEventListener('change',function(){
    const choosedfile=this.files[0];

    if(choosedfile){
        const reader=new FileReader();

        reader.addEventListener('load',function(){
            img.setAttribute('src',reader.result)
        })

        reader.readAsDataURL(choosedfile);
    }
})



var epro=document.querySelector('.userdata')
var button=document.getElementById('compelete_pro_b');
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

function toggleMenu(){
    const subMenu=document.querySelector('.sub-menu-wrap')
    subMenu.classList.toggle("active");
}

