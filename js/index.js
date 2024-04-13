const bodyParent = document.querySelector('body')
const toggleTheme = document.querySelector('.dropDownBtn')
let themes = document.querySelector('.dropDownContent')
let contactBtn = document.querySelector('.contactBtn')
let contactDiv = document.querySelector('.contactPage')

let state;
//detect user color mode and apply by default
const prefersDarkColorScheme = ()=> {
   const check =  window && window.matchMedia && 
    window.matchMedia('(prefers-color-scheme: dark)').matches
    console.log(check)
    if(check){
       document.documentElement.setAttribute('data-theme', 'dark')
       state = 'darkMode'
       localStorage.theme = state
    }
    else{
        document.documentElement.setAttribute('data-theme', 'light')
        state = 'lightMode'
        localStorage.theme = state
    }
}
// prefersDarkColorScheme()

document.documentElement.setAttribute('data-theme', 'light')
