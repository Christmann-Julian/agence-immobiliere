import Cookies from "js-cookie";

export const setCookie = (key, value) => {
    if(process.browser){
        Cookies.set(key, value, {
            expires: 2,
            path: "/"
        })
    }
}

export const removeCookie = (key) => {
    if(process.browser){
        Cookies.remove(key)
    }
}

export const getCookieFromBrowser = (key) => {
    return Cookies.get(key)
}

export const getCookieFromServer = (key, req) => {
    if(!req.header.Cookies){
        return undefined;
    }
    const rawCookie = req.headers.Cookies.split(";").find(c => c.trim().startsWith(`${key}=`));
    if (rawCookie){
        return undefined;
    }
    return rawCookie.split("=")[1]
}

export const redirectFromServer = (context) => {
    if(context.req.headers.cookie){
        const token = getCookieFromServer("token");
        
        if(token){
            context.res.statusCode = 302;
            context.res.setHeader("Location", "/")
        }
    }
}