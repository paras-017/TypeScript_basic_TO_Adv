"use strict";
const getUsername = document.querySelector('#user');
const formSubmit = document.querySelector('#form'); //type defining way 1
// const formSubmit:HTMLFormElement|null= document.querySelector('#form')         //type defining way 2
const main_container = document.querySelector('.main_container');
async function myCustomFetcher(url, options) {
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error(`Network response was not Okay- status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data;
}
const showResultUI = (singleUser) => {
    const { avatar_url, url, location, login } = singleUser;
    main_container.insertAdjacentHTML("beforeend", `
    <div class='card'>
      <img src=${avatar_url} alt=${login}/>
      <hr/>
      <div class="card-footer">
        <img src=${avatar_url} alt=${login}>
        <a href=${url}>Github</a>
      </div>
    </div>`);
};
function fetchUrlData(url) {
    myCustomFetcher(url, {}).then((userInfo) => {
        for (const singleUser of userInfo) {
            // showResultUI(singleUser)
            showResultUI(singleUser);
        }
    });
}
// default function call
fetchUrlData('https://api.github.com/users');
