function createCard(title, cName, views, monthsOld, duration, thumbnail) {
    let viewStr;
    if (views < 1000000) {
        viewStr = views / 1000 + "K"
    }
    else if (views > 1000000) {
        viewStr = views / 1000000 + "M"
    }
    else {
        viewStr = views / 1000 + "K"
    }

    let htmlText = ` <div class="card">
    <div class="image">
        <img src="${thumbnail}" alt="">
        <div class="capsule">${duration}</div>    
    </div>
    <div class="text">
        <h1>${title}</h1>
        <p>${cName} . ${viewStr} views . ${monthsOld}</p>
    </div>
</div>`
    document.querySelector(".container").innerHTML = document.querySelector(".container").innerHTML + htmlText

}


createCard("Introduction to front end web development", "codewithMrunal", 4000, "9 months old", "5:23", "https://cdn.pixabay.com/photo/2023/08/05/14/24/twilight-8171206_1280.jpg")
createCard("Introduction to cooking receipes", "codewithSupriya", 3000, "3 months old", "2:23", "https://cdn.pixabay.com/photo/2023/08/05/14/24/twilight-8171206_1280.jpg")