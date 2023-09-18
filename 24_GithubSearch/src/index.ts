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

async function myCustomFetcher<T>(url:string,options?:RequestInit):Promise<T>{
    const response = await fetch(url, options)
    if(!response.ok){
        throw new Error(`Network response was not Okay- status: ${response.status}` )
    }
    const data = await response.json()
    console.log(data)
    return data
}



function fetchUrlData(url:string){
    myCustomFetcher<UserData[]>(url,{}).then((userInfo)=>{
        for(const singleUser of userInfo){
            // showResultUI(singleUser)
        //    showResultUI(singleUser)
        }
    })
}

// default function call
fetchUrlData('https://api.github.com/users')