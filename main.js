window.addEventListener(("scroll"),()=>{
    document.querySelector("#fotogit").style.marginTop = `-${window.scrollY * 1.5}px`
    document.querySelector("#Label").style.marginBottom = `-${window.scrollY * 1.1}px`
    document.querySelector("#Home h1").style.marginTop = `${window.scrollY * 1.5}px`
    document.querySelector("#Mountain1").style.marginBottom = `${106 - window.scrollY * 1.1}px`
    document.querySelector("#leftCloud").style.marginLeft = `-${window.scrollY}px`
    document.querySelector("#mainCloud").style.marginTop = `-${window.scrollY}px`
    document.querySelector("#rightCloud").style.marginRight = `-${window.scrollY}px`
})