"use strict"

let btn = document.getElementById('btn');
  btn.addEventListener("click", lightMode);
  let para = document.querySelectorAll('p')
  let h1 = document.querySelector("#title")


  function lightMode() {
    if (btn.innerText === "Dark Mode") {
            document.body.classList.add('active2')
            btn.innerText = "Light Mode";

            para.forEach((content)=>{
            content.classList.add('active')
             })

            h1.classList.add('active')
            btn.classList.add('active3')
    } 
    else {
            document.body.classList.remove('active2')
            btn.innerText = "Dark Mode";
            
            para.forEach((content)=>{
            content.classList.remove('active')
      })
      h1.classList.remove('active')
      btn.classList.remove('active3')
    }
  }





