const numbBtns = document.querySelectorAll(".numb");
const restart = document.querySelector(".restart");
const count = document.querySelector(".count");
let sayac = 1;
let x = 0;

const numbers = [1,2,3,4,5,6,7,8];
const selectableNumbers = [...numbers, ...numbers];
selectableNumbers.sort(() => Math.random() - 0.5);

// console.log(selectableNumbers);
// console.log(parseInt(count.innerHTML));

function kutuEsle(){
    for (let i = 0; i < numbBtns.length; i++) {
        numbBtns[i].innerHTML = selectableNumbers[i]; 
        numbBtns[i].addEventListener("click", (e) => {
            // console.log(e.target.textContent);
            e.target.classList.add("kutuAc");
            console.log(e.target.classList);
            if (document.querySelectorAll('.kutuAc').length > 1) {
                if(document.querySelectorAll('.kutuAc')[0].innerHTML == document.querySelectorAll('.kutuAc')[1].innerHTML){
                    for (let i = 0; i < numbBtns.length; i++) {
                        if (numbBtns[i].textContent == document.querySelectorAll('.kutuAc')[0].innerHTML || numbBtns[i].textContent == document.querySelectorAll('.kutuAc')[1].innerHTML)   {
                            numbBtns[i].textContent = "";
                            numbBtns[i].classList.add("eslendi");
                        }
                    }
                    document.querySelectorAll('.kutuAc')[0].classList.add('kutuEsle')
                    document.querySelectorAll('.kutuAc')[1].classList.add('kutuEsle')
    
                    document.querySelectorAll('.kutuAc')[1].classList.remove('kutuAc')
                    document.querySelectorAll('.kutuAc')[0].classList.remove('kutuAc')
    
                        if(document.querySelectorAll('.kutuEsle').length == selectableNumbers.length){
                            // document.querySelectorAll('.sonuc')[0].classList.add('goster')
                            //document.getElementById('sonucGoster').innerHTML = "Tebrikler. Kazandınız!"
                        }
                    
                    
                }
                else{
                    document.querySelectorAll('.kutuAc')[1].classList.remove('kutuAc');
                    document.querySelectorAll('.kutuAc')[0].classList.remove('kutuAc');
                }

            }

        })
        console.log(sayac);
    }   
}

restart.addEventListener("click", function(){
    window.location.reload();
})

kutuEsle();