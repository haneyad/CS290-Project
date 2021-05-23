function autoSlide() {
    i++;
    if (i<=0) {
        images[0].style.display = 'inline-block';
        images[1].style.display = 'none';
        images[2].style.display = 'none';
        i = 0;
    } else if (i == 1 ) { 
        images[0].style.display = 'none';
        images[2].style.display = 'none';
        images[1].style.display = 'inline-block';
    } else if (i >= 2) {
        images[1].style.display = 'none';
        images[0].style.display = 'none';
        images[2].style.display = 'inline-block';
        i = -1;
    }
    console.log('Auto: ', i);
    };

function nextPic() {
    if (i >= images.length - 1){
        images[2].style.display = 'none';
        images[1].style.display = 'none';
        images[0].style.display = 'inline-block';
        i = 0;
        return;
    } else if (i <= 0) {
        images[2].style.display = 'none';
        images[0].style.display = 'none';
        images[1].style.display = 'inline-block';
        i = 1;
        return
    } else if ( i == 1) { 
        images[1].style.display = 'none';
        images[0].style.display = 'none';
        images[2].style.display = 'inline-block';
        i = 2;
    }
    console.log('nextPic: ', i);
}

function prevPic() {
    if (i <= 0) {
        images[0].style.display = 'none';
        images[1].style.display = 'none';
        images[2].style.display = 'inline-block';
        i = 2;
        return;
    } else if (i >= 2) {
        images[2].style.display = 'none';
        images[0].style.display = 'none';
        images[1].style.display = 'inline-block';
        i = 1;
        return;
    } else if (i == 1) {
        images[1].style.display = 'none';
        images[2].style.display = 'none';
        images[0].style.display = 'inline-block';
        i = 0;
    }
    console.log('PrePic: ', i);
}   

const images = document.querySelectorAll("img");
images[0].style.display ='inline-block';

var i = 0;
    var i = 0;
    document.getElementById('next-pic').addEventListener('click', nextPic);
    document.getElementById('prev-pic').addEventListener('click', prevPic);
    setInterval(autoSlide, 5000);