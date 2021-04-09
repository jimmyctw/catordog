// alert("猫派犬派きめて")
$(document).ready(function(){
    $("#dogContainer").hide();
    $("#catContainer").hide();        

    //choose cat or dog--------------------------------------
    $("#chooseCat").on("click", (e)=> catOrDog(e.target));
    $("#chooseDog").on("click", (e)=> catOrDog(e.target));
    function catOrDog(target){
        const chosenBtn = target;
        const chosenStyle = {  'transition': '1s', 'color': 'red', 'transform' : 'translateY(-1rem)'}
        const originalStyle = {  'transition': '.5s', 'color': '#EF959C', 'transform' : 'translateY(0rem)'}
        if(chosenBtn.classList.contains("cat")){
            $("#chooseCat i").css(chosenStyle);
            $("#chooseDog i").css(originalStyle);
            $("#catContainer").show();
            $("#dogContainer").hide();
        }else{
            $("#chooseDog i").css(chosenStyle);
            $("#chooseCat i").css(originalStyle);
            $("#dogContainer").show();
            $("#catContainer").hide();        
        }
    }


    //fetch img & display--------------------------------------
    const $catBtn = $("#catBtn");
    const $dogBtn = $("#dogBtn");
    const $containerImgDog = $("#containerImgDog");
    const $containerImgCat = $("#containerImgCat");
    const fetchCat = "https://api.thecatapi.com/v1/images/search";
    const fetchDog = "https://api.thedogapi.com/v1/images/search";
    const catBackup = "/assests/cat.jpg";
    const dogBackup = "/assests/dog.jpg";
    $catBtn.on("click", (e)=> getImg(e, $containerImgCat, fetchCat, catBackup));
    $dogBtn.on("click", (e)=> getImg(e, $containerImgDog, fetchDog, dogBackup));

    function getImg(e, containerImg, fetchUrl, backupUrl){
        containerImg.empty();
        fetch(fetchUrl)
            .then(respponse => respponse.json())
            .then((data) => {
                let imgUrl = data[0].url
                let imgEle = document.createElement("img")
                imgEle.setAttribute("src", `${imgUrl}`)
                containerImg.append(imgEle)
            })
            .catch(err => {
                let imgEle = document.createElement("img")
                imgEle.setAttribute("src", `${backupUrl}`)
                containerImg.append(imgEle)
            })
    }





　　　//Lock
    $("#lockCat").on("click", (e)=> lockUnlock(e.target, $("#gateCat")));
    $("#lockDog").on("click", (e)=> lockUnlock(e.target, $("#gateDog")));
    function lockUnlock(containerLock, gate){
        let containerLockBtn = containerLock.parentElement;
        let lockI = `<i class="fas fa-lock"></i>`;
        let unlockI = `<i class="fas fa-unlock"></i>`;
        if(containerLockBtn.innerHTML == unlockI)
            {containerLockBtn.innerHTML = lockI;}
        else{
            containerLockBtn.innerHTML = unlockI;
        }        
        gate.toggle('displayNone')
    }
})
