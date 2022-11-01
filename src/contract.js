var uploadbtn=document.getElementById('upload_btn');
var buildbtn=document.getElementById('build_btn');

uploadbtn.addEventListener('click',function(){
    document.querySelector('.upload').classList.remove('hidden');
    document.querySelector('.bc').classList.add('hidden');
    uploadbtn.classList.add('hidden');

})

buildbtn.addEventListener('click',function(){
    document.querySelector('.build').classList.remove('hidden');
    document.querySelector('.uc').classList.add('hidden');
    buildbtn.classList.add('hidden');
})

