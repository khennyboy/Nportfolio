const bodyParent = document.querySelector('body')

const prefersDarkColorScheme = ()=> {
   const check =  window && window.matchMedia && 
    window.matchMedia('(prefers-color-scheme: dark)').matches
    if(check){
       bodyParent.classList.add('dark')
    }
    else{
        bodyParent.classList.add('light')
    }
}
// prefersDarkColorScheme()

document.documentElement.setAttribute('data-theme', 'dark')