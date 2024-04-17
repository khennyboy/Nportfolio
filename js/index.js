const bodyParent = document.querySelector('body')
const toggleTheme = document.querySelector('.dropDownBtn')
let themes = document.querySelector('.dropDownContent')
let contactBtn = document.querySelector('.contactMe')
let contactDiv = document.querySelector('.contactPage')
let overlay = document.querySelector('.overlay')

let mode, check;

//detect user color mode and apply by default
const prefersDarkColorScheme = ()=> {
    check =  window && window.matchMedia && 
    window.matchMedia('(prefers-color-scheme: dark)').matches
    let persist = checkStorage()
    if(persist!='' ){
       document.documentElement.setAttribute('data-theme', persist)
        addbropBtnClickColor(persist)
    }
    if(persist=='' && check){
        document.documentElement.setAttribute('data-theme', 'dark')
        sessionStorage.theme = 'dark'
        addbropBtnClickColor('system')
    }
    if(persist=='' && !check){
        document.documentElement.setAttribute('data-theme', 'light')
        sessionStorage.theme = 'light'
        addbropBtnClickColor('system')
    }
}
prefersDarkColorScheme()

//change data theme on click
function change(){
    themes.addEventListener('click', function(e){
        let allChild = themes.querySelectorAll('.dropBtn')
        allChild.forEach((each)=>{
            each.classList.remove('dropBtnClickColor')
        })
        let buttonTag = e.target.closest('.dropBtn')
        buttonTag.classList.add('dropBtnClickColor')
        mode = buttonTag.dataset.color
        if(mode=='system' && check) {
            mode = 'dark'
        }
        if(mode=='system' &&!check){
            mode = 'light'
        }
        sessionStorage.theme = mode
        document.documentElement.setAttribute('data-theme', mode)
    })
}
change()

//check session storage and apply the selected mode
function checkStorage(){
    if(sessionStorage.theme){
        mode = sessionStorage.theme
        return mode
    }
    else return ''
}
// to add dropBtnClickColor authoamtically when the page load initially
function addbropBtnClickColor(persist){
    let allChild = themes.querySelectorAll('.dropBtn')
    allChild.forEach((each)=>{
        if(each.dataset.color == persist){
         each.classList.add('dropBtnClickColor')
        }
    })
}

// scroll into view
contactBtn.addEventListener('click', function(){
    contactDiv.scrollIntoView({behavior:'smooth'})
})

//show theme icons upon click
toggleTheme.addEventListener('click', function(){
    console.log('hello')
    themes.classList.toggle('showDropContent')
})

// close theme when user click the body or esc key 
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && themes.classList.contains('showDropContent')) {
      themes.classList.remove('showDropContent')
    }
  });
document.body.addEventListener('click', function(e){
    if(e.target!=='toggleTheme' && !document.querySelector('.dropDownBtn').contains(e.target) && !document.querySelector('.dropDownContent').contains(e.target)){
        themes.classList.remove('showDropContent')
    }
});

function loadImage(url){
    return new Promise(function(resolve, reject){
        const image = new Image()
        image.src = url
        image.onload = ()=> resolve(image)
        image.onerror = ()=> reject(new Error('Failed to load image'))
    })
}

async function outputImage(){
    try {
        let image = document.querySelector('.header_content .right')
        let src = image.dataset.src
        let data = await loadImage(src)
        data.setAttribute('class', 'profileImage')
        data.setAttribute('alt', 'profile Image')
        image.insertAdjacentElement('afterbegin', data)

    } catch (error) {
        console.error(error)
    }
}
outputImage()


// add animation effect
const sr = ScrollReveal({
    distance :'45px',
    duration:2000,
    reset: true
})
sr.reveal('.wrapper', {delay:200, origin:'left'})

// contact function
document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    emailjs.sendForm('sheriff_baba', 'template_8amrujf', this)
        .then(function(response) {
            console.log('Email sent:', response);
            alert('Message sent successfully!');
        }, function(error) {
            console.error('Error sending email:', error);
            alert('An error occurred. Please try again later.');
        });
});




// const navHeight = document.querySelector('nav').getBoundingClientRect().height
// console.log(navHeight)
// let x =  document.querySelector('nav')
// console.log(window.getComputedStyle(x).height)
