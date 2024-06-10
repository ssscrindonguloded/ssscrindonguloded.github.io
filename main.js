

document.addEventListener('DOMContentLoaded', function () {
    var images = document.querySelectorAll('.retex1, .retex2');
    
    images.forEach(function (image) {
        
        
        image.addEventListener('click', function () {
            image.classList.toggle('zoomed');
        });
    });
});




