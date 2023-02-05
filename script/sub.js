let res = JSON.parse(localStorage.getItem('users'));

document.querySelector('#start-btn').addEventListener('click', function () {
    if (localStorage.length == 0 && !localStorage.key('users')) {
        document.querySelector('.span-1').classList.add('open');
        document.querySelector('.span-2').classList.add('open');
        setTimeout(function(){
            document.querySelector('.span-1').classList.remove('open');
            document.querySelector('.span-2').classList.remove('open');
        },2000);
    }
    else {
        for (let i = 0; i < res.length; i++) {
            if (document.querySelector('#start-email').value == res[i].email && document.querySelector('#start-pass').value == res[i].password) {
                
                document.querySelector('.container').style.display = 'none';
                document.querySelector('.sub-container').innerHTML = `
        <div class="logo"><img src="./images/anonymous_hacker_icon.svg" alt=""></div>
        <h2>${res[i].firstName}</h2>
         <h2>${res[i].secondName}</h2>
         <h2>${res[i].email}</h2>
         <button class="sing-up">sing up</button>
            `;
            document.querySelector('.sing-up').addEventListener('click',function(){
                document.querySelector('.container').style.display = 'block';
                document.querySelector('.sub-container').innerHTML = '';
            })
            }
            if(document.querySelector('#start-email').value != res[i].email){
                document.querySelector('.span-1').classList.add('open');
                setTimeout(function(){
                    document.querySelector('.span-1').classList.remove('open');
                },2000);
            }
            if(document.querySelector('#start-pass').value != res[i].password){
                document.querySelector('.span-2').classList.add('open');
                setTimeout(function(){
                    document.querySelector('.span-2').classList.remove('open');
                },2000);
            }
        }
    }
    document.querySelector('#start-email').value = '';
    document.querySelector('#start-pass').value = '';
})
