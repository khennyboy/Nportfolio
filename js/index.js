const bodyParent = document.querySelector('body')
const toggleTheme = document.querySelector('.dropDownBtn')
let themes = document.querySelector('.dropDownContent')
let contactBtn = document.querySelector('.contactMe')
let contactDiv = document.querySelector('.contactPage')
let contactForm = document.getElementById('contact-form')
let submitBtn = contactForm.querySelector('.submitBtn')
let statusMessage = document.querySelector('.statusMessage')
let notify = document.querySelectorAll('.notify')
let allProject = document.querySelector('.allProject')
let allSkills = document.querySelector('.allSkills')
let mode, check;

let projects = [
    {
        image : './images/forkifyProjectResize.png',
        name:'Recipe-Hub',
        url : ['https://www.github.com/khennyboy/recipeProject', 'https://forkify-sheriffbaba.netlify.app/' ]
        
    },
    {
        image: './images/fronend2Resize.jpg',
        name:'Shortly Url',
        url : ['https://github.com/khennyboy/linkShortener', 'https://khennyboy.github.io/linkShortener/']

    },
    {
        image: './images/figmaProjectResize.png',
        name:'Figma File Implementation',
        url : ['https://www.github.com/khennyboy/figmaDesign', 'https://khennyboy.github.io/figmaDesign/']

    },
    {
        image: './images/dicegameResize.png',
        name:'Dice game',
        url : ['https://github.com/khennyboy/diceGame', 'https://khennyboy.github.io/diceGame/']

    },
    {
        image: './images/passwordProjectResize.png',
        name:'Password Generator',
        url : ['https://github.com/khennyboy/passwordGen', 'https://khennyboy.github.io/passwordGen/']
    },
    {
        image : './images/DragDrop.png',
        name:'Drag & Drop',
        url : ['https://github.com/khennyboy/dragDrop.git', 'https://fun-drag-drop.netlify.app' ]
        
    },
    {
        image : './images/DrawApp.png',
        name:'DrawApp',
        url : ['https://github.com/khennyboy/DrawingApp.git', 'https://fundrawapp.netlify.app' ]
        
    },
]

let skills = [
    {
        image:'./images/htmlImage.webp',
        name:'Html5'
    },
    {
        image:'./images/CssImage.jpg',
        name:'Css3'
    },
    {
        image:'./images/JsImage.jpg',
        name:'Javascript'
    },
    {
        image:'./images/TailwindImage.webp',
        name:'Tailwindcss',
        autofill: true
    },
    {
        image:'./images/ReactImage.webp',
        name:'ReactJs'
    },
    {
        image:'./images/TypeScript.webp',
        name:'TypeScript'
    },
    {
        image: './images/ReduxImage.webp',
        name:'Redux',
        autofill:true
    },
    
]

projects.forEach(function(each){
    let markUp = `<div class="eachProject">
    <img src="${each.image}" alt="ProjectImage" class="projectImage"/>
        <h2 class="name">${each.name}</h2>
        <div class='project_links'>
        <a href="${each.url[0]}" class="liveUrl" title="sourceCode"><i class='bx bxl-github' ></i></a>
        <a href="${each.url[1]}" class="liveUrl" title="liveUrl"><i class='bx bxl-chrome'></i></a>   
        </div>
</div>`
    allProject.insertAdjacentHTML('beforeend', markUp)
})

skills.forEach(function(each){
    let markUp = `<div class="skillsGroup">
        <div><img style="${each.autofill ? 'object-fit: fill': ''}" src="${each.image}" alt="languagePix"/></div>
        <h4>${each.name}</h4>
    </div>
`
    allSkills.insertAdjacentHTML('beforeend', markUp)
})

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
    themes.classList.toggle('showDropContent')
})

// close theme when user click the body or esc key 
document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape' && themes.classList.contains('showDropContent')) {
      themes.classList.remove('showDropContent')
    }
  });

document.body.addEventListener('click', function(e){
    if(!document.querySelector('.dropDownBtn').contains(e.target) && !document.querySelector('.dropDownContent').contains(e.target)){
        themes.classList.remove('showDropContent')
    }
});


// handle result of message
function handleMessage(mode=true, res='Message sent successfully', mes='SEND MESSAGE'){
    submitBtn.disabled = false;
    submitBtn.classList.remove('notAllowed')
    submitBtn.innerHTML = mes
    mode && contactForm.reset()
    statusMessage.innerHTML = "***" + res
    mode && statusMessage.classList.add('showStatusMessage', 'accept')
    !mode && statusMessage.classList.add('showStatusMessage','reject')
    setTimeout(()=>statusMessage.classList.remove('showStatusMessage', 'reject', 'accept'), 2000)
}

// contact function
function handleSubmit(event){
    event.preventDefault();
    notify.forEach((each)=>{
        each.classList.remove('notifyUser')
    })
    let datas = [...new FormData(this)]
    let match = /^([a-z\d\.-]+)@([a-z\d-]+)\.([a-z]{2,8})(\.[a-z]{2,8})?$/

    let check = datas.filter((eachData, index)=>{
        if(index!==1 && eachData[1].trim()==='') return eachData
        if(index==1 && !match.test(eachData[1])) return eachData
    })
    check.forEach((each)=>{
        document.querySelector(`.${each[0]}`).classList.add('notifyUser')
    })
    if(check.length!==0) return
    submitBtn.disabled = true;
    submitBtn.classList.add('notAllowed')
    submitBtn.innerHTML = 'Please wait'
    emailjs.sendForm('sheriff_baba', 'template_8amrujf', this)
        .then(function() {
            handleMessage()
        }, function(error) {
            handleMessage(false, error)
        });
}
contactForm.addEventListener('submit', handleSubmit);

// add animation effect
// const sr = ScrollReveal({
//     distance :'45px',
//     duration:2000,
//     reset: true
// })
// sr.reveal('.wrapper', {delay:200, origin:'left'})
