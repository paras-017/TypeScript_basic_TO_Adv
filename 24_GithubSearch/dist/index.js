"use strict";
const getUsername = document.querySelector('#user');
const formSubmit = document.querySelector('#form'); //type defining way 1
// const formSubmit:HTMLFormElement|null= document.querySelector('#form')         //type defining way 2
const main_container = document.querySelector('.main-container');
async function myCustomFetcher(url, options) {
    const response = await fetch(url, options);
    if (!response.ok) {
        throw new Error(`Network response was not Okay- status: ${response.status}`);
    }
    const data = await response.json();
    console.log(data);
    return data;
}
function fetchUrlData(url) {
    myCustomFetcher(url, {}).then((userInfo) => {
        for (const singleUser of userInfo) {
            // showResultUI(singleUser)
            console.log(singleUser);
        }
    });
}
// default function call
fetchUrlData('https://api.github.com/users');
