const getUsername = document.querySelector('#user') as HTMLInputElement
const formSubmit = document.querySelector('#form') as HTMLFormElement             //type defining way 1
// const formSubmit:HTMLFormElement|null= document.querySelector('#form')         //type defining way 2
const main_container = document.querySelector('.main_container') as HTMLElement

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

const showResultUI = (singleUser:UserData) => {
    const {avatar_url, url, location, login} = singleUser
  main_container.insertAdjacentHTML(
    "beforeend",`
    <div class='card'>
      <img src=${avatar_url} alt=${login}/>
      <hr/>
      <div class="card-footer">
        <img src=${avatar_url} alt=${login}>
        <a href=${url}>Github</a>
      </div>
    </div>`
  )
}


function fetchUrlData(url:string){
    myCustomFetcher<UserData[]>(url,{}).then((userInfo)=>{
        for(const singleUser of userInfo){
            // showResultUI(singleUser)
           showResultUI(singleUser)
        }
    })
}

// default function call
fetchUrlData('https://api.github.com/users')

// Search Functionalty
formSubmit.addEventListener('submit',async (e)=>{
    e.preventDefault()
    const searchTerm = getUsername.value.toLowerCase()
    try {
        const url = `https://api.github.com/users`
        const allUserData = await myCustomFetcher<UserData[]>(url,{})
        const matchingUsers = allUserData.filter((user)=>{
          return user.login.toLowerCase().includes(searchTerm)
        })
        //clear previous data
        main_container.innerHTML = ''
        if(matchingUsers.length === 0){
            main_container.insertAdjacentHTML(
                "beforeend",`<p class='empty-msg'>No matching users found.</p>`
            )
        }else{
            for(const singleUser of matchingUsers){
                showResultUI(singleUser)
            }
        }
    } catch (error) {
        
    }
})
