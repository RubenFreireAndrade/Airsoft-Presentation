const titleContainer = document.getElementById("-title-container");
const linkContainer = document.getElementById("-link-container");
const introContainer = document.getElementById("-intro-container");
const introText = document.getElementById("-intro-text");

function createLinkContainer(){
    const airsoftSubheading = document.createElement('div');
    const imperiumAirsoft = document.createElement('a');
    const invictaBattlefield = document.createElement('a');
    const dogtagAirsoft = document.createElement('a');
    const incursionAirsoft = document.createElement('a');
    const ultimateWargames = document.createElement('a');
    const splatoonAirsoft = document.createElement('a');
    const sentinelAirsoft = document.createElement('a');
    const reforgerAirsoft = document.createElement('a');
    const phoenixAirsoft = document.createElement('a');
    const linkToRef = document.createElement('a');

    airsoftSubheading.setAttribute("id", "-subheading-text");
    airsoftSubheading.textContent = "Websites:";

    imperiumAirsoft.setAttribute("href", "https://imperiumairsoft.com");
    imperiumAirsoft.setAttribute("target", "_blank");
    imperiumAirsoft.setAttribute("rel", "noreferrer noopener");
    imperiumAirsoft.textContent = "Imperium Airsoft";

    invictaBattlefield.setAttribute("href", "https://www.invictabattlefield.co.uk");
    invictaBattlefield.setAttribute("target", "_blank");
    invictaBattlefield.setAttribute("rel", "noreferrer noopener");
    invictaBattlefield.textContent = "Invicta Battlefield";

    dogtagAirsoft.setAttribute("href", "https://www.dogtagairsoft.co.uk");
    invictaBattlefield.setAttribute("target", "_blank");
    invictaBattlefield.setAttribute("rel", "noreferrer noopener");
    dogtagAirsoft.textContent = "Dogtag Airsoft";

    incursionAirsoft.setAttribute("href", "https://www.incursionairsoft.co.uk");
    incursionAirsoft.setAttribute("target", "_blank");
    incursionAirsoft.setAttribute("rel", "noreferrer noopener");
    incursionAirsoft.textContent = "Incursion Airsoft";

    ultimateWargames.setAttribute("href", "https://www.ultimatewargames.net");
    ultimateWargames.setAttribute("target", "_blank");
    ultimateWargames.setAttribute("rel", "noreferrer noopener");
    ultimateWargames.textContent = "Ultimate Wargames";
    
    splatoonAirsoft.setAttribute("href", "https://splatoon.co.uk/airsoft/");
    splatoonAirsoft.setAttribute("target", "_blank");
    splatoonAirsoft.setAttribute("rel", "noreferrer noopener");
    splatoonAirsoft.textContent = "Splatoon";

    sentinelAirsoft.setAttribute("href", "https://sentinelairsoft.co.uk");
    sentinelAirsoft.setAttribute("target", "_blank");
    sentinelAirsoft.setAttribute("rel", "noreferrer noopener");
    sentinelAirsoft.textContent = "Sentinel Airsoft";

    reforgerAirsoft.setAttribute("href", "https://www.reforgerairsoft.com/home");
    reforgerAirsoft.setAttribute("target", "_blank");
    reforgerAirsoft.setAttribute("rel", "noreferrer noopener");
    reforgerAirsoft.textContent = "Reforger Airsoft";

    phoenixAirsoft.setAttribute("href", "https://www.phoenix-airsoft.co.uk");
    phoenixAirsoft.setAttribute("target", "_blank");
    phoenixAirsoft.setAttribute("rel", "noreferrer noopener");
    phoenixAirsoft.textContent = "Phoenix Airsoft";

    linkToRef.setAttribute("id", "-link-ref");
    linkToRef.setAttribute("href", "https://www.youtube.com/watch?v=XPv1jx1GtUo");
    linkToRef.setAttribute("target", "_blank");
    linkToRef.setAttribute("rel", "noreferrer noopener");
    linkToRef.textContent = "Websites referenced from Youtube video";

    linkContainer.appendChild(airsoftSubheading);
    addToList(imperiumAirsoft);
    addToList(invictaBattlefield);
    addToList(dogtagAirsoft);
    addToList(incursionAirsoft);
    addToList(ultimateWargames);
    addToList(splatoonAirsoft);
    addToList(sentinelAirsoft);
    addToList(reforgerAirsoft);
    addToList(phoenixAirsoft);
    linkContainer.appendChild(linkToRef);
}

function addToList(name){
    const list = document.createElement('li');

    list.appendChild(name);
    linkContainer.appendChild(list);
}

function createTitleContainer(){
    const titleText = document.createElement('div');
    titleText.setAttribute("id", "-title-text");
    titleText.textContent = showTitle();

    titleContainer.appendChild(titleText);
}

function createIntroContainer(){
    introContainer.appendChild(introText);
}

function showTitle(){
    let welcomeStr = "Welcome!";
    return welcomeStr;
}

function showIntroduction(){
    let welcomeStr = "You have been invited to an Airsoft event.";
    return welcomeStr;
}

createTitleContainer();
createIntroContainer();
createLinkContainer();