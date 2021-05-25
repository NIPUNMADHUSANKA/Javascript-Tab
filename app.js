const about = document.querySelector(".about");
const btns = document.querySelectorAll(".tab-btn");
const atricles = document.querySelectorAll(".content");


about.addEventListener("click",function(e){
    const id = e.target.dataset.id;
    if(id){
        btns.forEach(function(btn){
            btn.classList.remove('active');
        });

        e.target.classList.add('active');

        atricles.forEach(function(atricle){
            atricle.classList.remove('active');
        });

        const element = document.getElementById(id);
        element.classList.add('active');
    }

})