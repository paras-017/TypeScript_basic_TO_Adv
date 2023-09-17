const getUsername = document.querySelector('#user') as HTMLInputElement
const formSubmit = document.querySelector('#form') as HTMLFormElement             //type defining way 1
// const formSubmit:HTMLFormElement|null= document.querySelector('#form')         //type defining way 2
const main_container = document.querySelector('.main-container') as HTMLElement

// lets create a interface of an user-data object

interface UserData {
    id:number,
    login:string,
    avatar_url:string,
    location:string,
    url:string
}

function fetchUrlData(url:string){
    // myCustomFetcher(url,{})
}

// default function call
fetchUrlData('https://api.github.com/users')