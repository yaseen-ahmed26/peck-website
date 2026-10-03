// @ts-nocheck
import { dev } from "$app/environment";

const baseURL = dev ? "/api" : "https://biscuit-server.onrender.com/api"

console.log(`API base URL is ${baseURL}`)

export const user = $state({
    account: {},
    save: {}
})

async function handleResponse(response){
    let data = {};

    try{
        data = await response.json();
    }catch(error){
        data = {};
    };

    if(!response.ok){
        const errorMessage = Array.isArray(data.detail)
            ? data.detail?.[0]?.msg
            : data.message || data.detail || "Unknown error";
        
        throw new Error(`(${response.status}) ${errorMessage}`);
    };

    return data
}

export async function makeHTTPRequest(
    {requestType = "",
    requestBody = {},
    requestHeaders = {},
    requestURL = ""},
    retry = false
){
    let options = {
        method: requestType,
        headers: requestHeaders,
        body: requestBody,
        credentials: "include"
    }

    if(requestType === "GET"){
        options.body = undefined;
    }else{
        if(!requestURL.includes("login")){
            options.body = JSON.stringify(requestBody)
        }
    }

    let response = await fetch(`${baseURL}/${requestURL}`, options)

    if(!response.ok){
        if(response.status === 401 && !requestURL.includes("login")){
            if(retry){
                logOut()
                console.log("(401) Session expired");
            }

            const refreshSuccess = await getNewRefresh();

            if(refreshSuccess){
                return await makeHTTPRequest({
                    requestType,
                    requestBody,
                    requestHeaders,
                    requestURL
                }, true);
            } else {
                logOut()
                console.log("(401) Refresh failed");
            }
        }
    };

    let data = await handleResponse(response);

    if(requestURL.includes("users")){
        if(data.save){
            user.save = data.save
            delete data.save
        }
            
        user.account = data

        console.log($state.snapshot(user))
    }

    return data
}

export async function getNewRefresh(){
    try{
        const response = await fetch(`${baseURL}/auth/refresh`, {
            method: "POST",
            credentials: "include"
        });

        return response.ok;
    }catch(error){
        console.error("Refresh request error: ", error);

        return false;
    }
}

export async function getCurrentUser(){
    try{
        const response = await fetch(`${baseURL}/users/me`, {
            method: "GET",
            credentials: "include"
        });
        
        if(!response.ok){
            console.log("An error occurred getting saved data");
            return;
        }

        const userData = await response.json();
        
        user.save = userData.save
        delete userData.save
            
        user.account = userData

        console.log($state.snapshot(user))
    }catch(error){
        
    };
}

export async function automaticLogin(){
    const success = await getNewRefresh()
    if(success) getCurrentUser()
}

export async function logOut(){
    const response = await fetch(`${baseURL}/auth/logout`, {
        method: "POST",
        credentials: "include"
    });

    if(response.ok){
        user.account = {}
        user.save = {}
    }
}