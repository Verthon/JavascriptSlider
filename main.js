// Version 0.1, next functionalies:
//  - slides changes in time,
//  - mobile friendly,
//  - add caption,
//  - add 'next' arrows,
//  - add backend(future own CMS);

const thumbBar = document.querySelector('.thumb-bar');
const darkBtn = document.querySelector('.dark');
const overlay = document.querySelector('.overlay');
const displayedImg = document.querySelector('.displayed-img');
const time = 3000;
darkBtn.addEventListener('click', function(){   
    if(this.textContent == 'Darken'){
      this.textContent = 'Lighten';
      overlay.style.backgroundColor = 'rgba(0,0,0,0.6)';
    }else{
      this.textContent = 'Darken';
      overlay.style.backgroundColor = '';
    }
});

    for(let i = 1; i < 6; i++){
        let thumbnail = document.createElement('img');
        thumbnail.setAttribute('class', 'thumbnail');
        thumbnail.setAttribute('src', 'img/pic'+i+'.jpg');
        thumbBar.appendChild(thumbnail);

        thumbnail.addEventListener('click', function(){
            displayedImg.setAttribute('src', 'img/pic'+i+'.jpg');
        });
    }

