
alert("猫派犬派きめて")
//cat or dog
const chooseCat = document.getElementById("chooseCat");
const chooseDog = document.getElementById("chooseDog");
const catContainer = document.getElementById("catContainer");
const dogContainer = document.getElementById("dogContainer");

//fetch img & display
const catBtn = document.getElementById("catBtn");
const dogBtn = document.getElementById("dogBtn");
const containerImgDog = document.getElementById("containerImgDog");
const containerImgCat = document.getElementById("containerImgCat");
const fetchCat = "https://api.thecatapi.com/v1/images/search";
const fetchDog = "https://api.thedogapi.com/v1/images/search";

//Lock
const containerLocks = document.getElementsByClassName("container-img-lock");

//all EventListener
chooseCat.addEventListener("click", (e)=> catOrDog(e));
chooseDog.addEventListener("click", (e)=> catOrDog(e));
catBtn.addEventListener("click", (e)=> getImg(e, containerImgCat, fetchCat));
dogBtn.addEventListener("click", (e)=> getImg(e, containerImgDog, fetchDog));

for (let i = 0; i < containerLocks.length ; i++){
    let containerLock = containerLocks[i];
    containerLock.addEventListener("click", (e)=> lockUnlock(e));
}


//functions start
function lockUnlock(e){
    let containerLock = e.target.parentElement;
    let lockI = `<i class="fas fa-lock"></i>`;
    let unlockI = `<i class="fas fa-unlock"></i>`;
    if(containerLock.innerHTML == unlockI)
        {containerLock.innerHTML = lockI;}
    else{
        containerLock.innerHTML = unlockI;
    }
    let gate = containerLock.nextElementSibling;
    gate.classList.toggle("displayNone")
}



function catOrDog(e){
    resetClear()
    let chosenBtn = e.target;
    if(chosenBtn.classList.contains("cat")){
        catContainer.classList.toggle("displayNone")

    }else{
        dogContainer.classList.toggle("displayNone")

    }
}

function resetClear(){
    catContainer.classList.add("displayNone")
    dogContainer.classList.add("displayNone")
}

async function getImg(e, containerImg, fetchUrl){
    containerImg.innerHTML = "";
    fetch(fetchUrl)
        .then(respponse => respponse.json())
        .then((data) => {
            let imgUrl = data[0].url
            let imgEle = document.createElement("img")
            imgEle.setAttribute("src", `${imgUrl}`)
            containerImg.appendChild(imgEle)
        })
        .catch(err => console.log(err))
}





