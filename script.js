/* =====================================================
   JENELYN AUDITOR PORTFOLIO
   SCRIPT.JS
   Part 1
===================================================== */

/* ===========================
   GET ELEMENTS
=========================== */

const profilePic = document.getElementById("profilePic");
const loginModal = document.getElementById("loginModal");
const closeModal = document.getElementById("cancelBtn");
const loginBtn = document.getElementById("loginBtn");
const passwordInput = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");

/* ===========================
   OPEN LOGIN MODAL
=========================== */

if(profilePic){

    profilePic.addEventListener("click", function(){

        loginModal.style.display = "flex";

    });

}

/* ===========================
   CLOSE LOGIN MODAL
=========================== */

if(closeModal){

    closeModal.addEventListener("click", function(){

        loginModal.style.display = "none";

        passwordInput.value = "";

    });

}

/* Close when clicking outside */

window.addEventListener("click", function(e){

    if(e.target == loginModal){

        loginModal.style.display = "none";

        passwordInput.value = "";

    }

});

/* ===========================
   SHOW / HIDE PASSWORD
=========================== */

if(togglePassword){

    togglePassword.addEventListener("click", function(){

        if(passwordInput.type === "password"){

            passwordInput.type = "text";

            this.innerHTML =
            '<i class="fa-solid fa-eye-slash"></i>';

        }else{

            passwordInput.type = "password";

            this.innerHTML =
            '<i class="fa-solid fa-eye"></i>';

        }

    });

}

/* ===========================
   LOGIN VERIFICATION
=========================== */

if(loginBtn){

    loginBtn.addEventListener("click", function(){

        let answer = passwordInput.value
        .trim()
        .toLowerCase();

        if(answer === "jenelyn"){

            alert("Access Granted!");

            window.location.href = "dashboard.html";

        }

        else{

            alert("Incorrect answer! Try unscrambling my name again.");

            passwordInput.value = "";

            passwordInput.focus();

        }

    });

}

/* ===========================
   ENTER KEY LOGIN
=========================== */

if(passwordInput){

    passwordInput.addEventListener("keypress", function(e){

        if(e.key === "Enter"){

            loginBtn.click();

        }

    });

}
/* =====================================================
   SCRIPT.JS
   Part 2 - Gallery Lightbox
===================================================== */

/* ===========================
   LIGHTBOX
=========================== */

const lightbox = document.getElementById("lightbox");
const preview = document.getElementById("preview");

/* Open Image */

function openImage(image){

    if(lightbox && preview){

        lightbox.style.display = "flex";

        preview.src = image;

        document.body.style.overflow = "hidden";

    }

}

/* Close Image */

function closeImage(){

    if(lightbox){

        lightbox.style.display = "none";

        document.body.style.overflow = "auto";

    }

}

/* Close when clicking outside the image */

if(lightbox){

    lightbox.addEventListener("click", function(e){

        if(e.target === lightbox){

            closeImage();

        }

    });

}

/* Prevent image click from closing */

if(preview){

    preview.addEventListener("click", function(e){

        e.stopPropagation();

    });

}

/* ESC Key */

document.addEventListener("keydown", function(e){

    if(e.key === "Escape"){

        closeImage();

    }

});

/* ===========================
   AUTO APPLY TO ALL IMAGES
=========================== */

document.querySelectorAll(".gallery img").forEach(function(image){

    image.addEventListener("click", function(){

        openImage(this.src);

    });

});

/* =====================================================
   SCRIPT.JS
   Part 3 (Final)
===================================================== */

/* ===========================
   SMOOTH PAGE TRANSITION
=========================== */

document.querySelectorAll("a").forEach(link=>{

    if(link.href && !link.href.startsWith("javascript")){

        link.addEventListener("click",function(e){

            if(
                this.target !== "_blank" &&
                !this.href.includes("#")
            ){

                e.preventDefault();

                document.body.style.opacity="0";

                setTimeout(()=>{

                    window.location.href=this.href;

                },300);

            }

        });

    }

});

window.addEventListener("load",()=>{

    document.body.style.opacity="1";

    document.body.style.transition="opacity .3s ease";

});

/* ===========================
   FLOATING PARTICLES
=========================== */

function createParticles(){

    const amount = 20;

    for(let i=0;i<amount;i++){

        const particle=document.createElement("div");

        particle.classList.add("particle");

        particle.style.left=Math.random()*100+"%";

        particle.style.animationDuration=
        (10+Math.random()*10)+"s";

        particle.style.animationDelay=
        Math.random()*5+"s";

        particle.style.opacity=
        Math.random()*.5;

        document.body.appendChild(particle);

    }

}

createParticles();

/* ===========================
   SCROLL ANIMATION
=========================== */

const observer=new IntersectionObserver(entries=>{

    entries.forEach(entry=>{

        if(entry.isIntersecting){

            entry.target.classList.add("fade-up");

        }

    });

},{
    threshold:.15
});

document.querySelectorAll(".card,.section,.glass,.gallery")
.forEach(item=>{

    observer.observe(item);

});

/* ===========================
   SCROLL TO TOP BUTTON
=========================== */

const topButton=document.createElement("button");

topButton.innerHTML='<i class="fa-solid fa-arrow-up"></i>';

topButton.id="topBtn";

document.body.appendChild(topButton);

topButton.style.position="fixed";
topButton.style.bottom="25px";
topButton.style.right="25px";
topButton.style.width="55px";
topButton.style.height="55px";
topButton.style.borderRadius="50%";
topButton.style.border="none";
topButton.style.cursor="pointer";
topButton.style.background="rgba(0,0,0,.25)";
topButton.style.backdropFilter="blur(10px)";
topButton.style.color="white";
topButton.style.fontSize="20px";
topButton.style.display="none";
topButton.style.zIndex="999";

window.addEventListener("scroll",()=>{

    if(window.scrollY>300){

        topButton.style.display="block";

    }else{

        topButton.style.display="none";

    }

});

topButton.addEventListener("click",()=>{

    window.scrollTo({

        top:0,

        behavior:"smooth"

    });

});

/* ===========================
   CURRENT YEAR IN FOOTER
=========================== */

const year=document.getElementById("year");

if(year){

    year.textContent=new Date().getFullYear();

}