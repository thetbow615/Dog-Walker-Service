import { getWalkers } from "./database.js"
import { getWalkerCities } from "./database.js"

const walkers = getWalkers()
const cityWalkers = getWalkerCities()


export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`
    }

    walkerHTML += "</ul>"

    return walkerHTML
}


document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("walker")) {
            const [, walkerId] = itemClicked.id.split("--")

            for (const cityWalker of cityWalkers) {
                if (cityWalker.walkerId === parseInt(walkerId)) {
                    let walkerName = ''
                    window.alert(`${cityWalker.walkerId} services ${cityWalker.cityId}`)

                    if (cityWalker.walkerId === getCities.id) {
                    }


                }
            }

        }

    }

)




