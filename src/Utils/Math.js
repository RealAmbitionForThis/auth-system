getCurrentTime = () => {
    return Math.floor(new Date().getTime() / 1000)
}

randomString = (length) => {
    let result = "";
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    for (let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }
    return result;
}

getIP = () => {
    return; //TODO
}

timeToGive = (keyData) => {
    let type = keyData.type;
    let time = keyData.time;
    let userTime;
    //This is basic math -_-
    switch(type)
    {
        case "min":
            userTime = time / 60;
            break;
        case "hour":
            userTime = time * 3600; //(simplified from: (time * 60) * 60 and so fourth for rest of stuff
            break;
        case "day":
            userTime = time * 86400;
            break;
        case "week":
            userTime = time * 604800;
            break;
        case "month":
            userTime = time * 2629800;
            break;
    }

    if(userTime == 0)
        throw "Err";

    return getCurrentTime() + userTime;
}



module.exports = { getCurrentTime, randomString, getIP, timeToGive }