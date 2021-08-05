
/*forms*/
var input = document.getElementsByClassName('form_input');
for (var i=0; i < input.length; i++) {
    input[i].addEventListener('keyup', function(){
        if(this.value.length >= 1)
        {
            this.nextElementSibling.classList.add('fijar')
        }
        else
        {
            this.nextElementSibling.classList.remove('fijar')

        }
    });
}

/*animated*/
var animated = document.querySelectorAll(".animated");
function mostrarScroll(){
    var scrollTop = document.documentElement.scrollTop;
    for (var i=0; i < animated.length; i++) {
        var alturaAnimated = animated[i].offsetTop;
        if(alturaAnimated - 500 < scrollTop) {
            animated[i].style.opacity = 1;
            animated[i].classList.add("mostrarArriba");
        }
    }
}

window.addEventListener('scroll', mostrarScroll);