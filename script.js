let doors = document.getElementsByClassName("door")
let level = document.getElementsByClassName("levelup")[0]
let win = 1
let again = document.getElementById("again")
let randomNumber = Math.floor(Math.random() * 3)
for (let i = 0; i < 3; i = i + 1) {
    doors[i].onclick = function (event) {
        console.log(i);
        for (let j = 0; j < 3; j = j + 1) {
            // pointer-events: none блокирует двери, чтобы игрок не мог открывать больше одной двер
            doors[j].style.pointerEvents = ("none")
        }
        if (randomNumber == i) {
            doors[i].src = "door" + 2 + ".png"
        }
        else {
            randomNumber = Math.floor(Math.random() * 3)
            doors[i].src = "door" + 1 + ".png"
            setTimeout(() => {
                highlight()
                for (let m = 0; m < 3; m = m + 1) {
                    // pointer-events: auto разблокирует двери, так, что игрок сможет снова на них кликать
                    doors[m].style.pointerEvents = ("auto")
                    doors[m].src = "door0.png"
                }
                win = win + 1
                level.innerHTML = "level:" + win
            }, 1000);
        }
    }
}
again.onclick = function (event) {
    for (let k = 0; k < 3; k = k + 1) {
        doors[k].style.pointerEvents = ("auto")
        doors[k].src = "door0.png"

    }
    win = 1
    level.innerHTML = "level:" + win
    console.log("try again");

}

function highlight() {
    setTimeout(() => {

        let door = doors[randomNumber]
        door.classList.add("light")

        setTimeout(() => {
            door.classList.remove("light")
        }, 500)
    }, Math.floor(Math.random() * 20000))

}
highlight()

// Если нажать на try again, то уровень обнуляется
// Поменять цвет у тега h3. Сейчас его не видно 