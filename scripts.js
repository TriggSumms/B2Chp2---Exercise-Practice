// L.X. (How are Objects Different from Arrays)
// #1
cont Mustang = {
    color: "red",
    make: "Ford",
    model: 2015
}
// #2
const shelter =["Kippers", "Jack", "Gypsy", "Angus", "Seymour Bouts", "Sharky"]
// #3
const familyMembers = {
    kevinboi: 6.5,
    kevinEtte: 6.7,
    kevinMama: 7.1,
    kevinDaddy: 7.0
}
// L.X. (Setting and Accessing Values on Objects)
// #1
const wardrobe = {
    height: 80,
    manufacturer: "Killibrew & Sons",
    contents: ["Dress shirt", "Jeans", "Suit", "Skirt", "Tennis shoes"],
    depth: 38,
    width: 50
}
console.log(wardrobe.height)
console.log(wardrobe.manafacturer)
console.log(wardrobe.contents)
console.log(wardrobe.depth)
console.log(wardrobe.width)
// #2.0 and 2.5
const empireStateBuilding = {
    stories: 103,
    height: 1453,
    address: "350 Fifth Avenue, Manhattan, New York 10118",
    squareFeet: 2768591,
    constructionDate: 1931,
    cost: 40948900,
    owner: "Empire State Realty Trust",
    eastWestLength: 424,
    northSouthLength: 187,
    architect: "Shreve, Lamb & Harmon"
}
console.log(`${empireStateBuilding.height}*${empireStateBuilding.eastWestLength}*${empireStateBuilding.NorthSouthLength}*${empireStateBuilding.squareFeet}*${empireStateBuilding.stories}`)
console.log{`${empireStateBuilding.stories}*${empireStateBuilding.address}*${empireStateBuilding.constructionDate}*${empireStateBuilding.cost}*${empireStateBuilding.owner}*${empireStateBuilding.architect}`}

// 
//L.X  Arrays as Values
// #1
const nashvilleSoftwareSchool = {
    founded: 2012,
    director: "John Wark",
    instructors: {
        fullTime: ["Jisie", "Brenda", "Steve", "Joe", "Andy"],
        partTime: ["Zoe", "Nathan"]
    },
    address: "500 Interstate Blvd. S"
}
console.log(`${nashvilleSoftwareSchool.instructors.partTime} ${nashvilleSoftwareSchool.instructors.fullTime}`)
// #2
console.log(`${nashvilleSoftwareSchool.instructors.fullTime[4]} ${nashvilleSoftwareSchool.instructors.partTime[0]}`)


// PRACTICE EXCERCISE:
const beatles = {
    albums: ["Abbey Road", "Sgt Peppers Lonely Heart's Club Band", "Revolver", "Magical Mystery Tour", "Something New"],
    history: {
        formed: 1960,
        disbanded: 1970
    },
    members: [
        {
            name: "George Harrison",
            birth: 1943,
            death: 2001
        },
        {
            name: "Paul McCartney",
            birth: 1942,
            death: null
        },
        {
            name: "John Lennon",
            birth: 1940,
            death: 1980
        },
        {
            name: "Ringo Starr",
            birth: 1940,
            death: null
        }
    ]
}

console.log(`${beatles.members.name[1]}was in the Beatles from ${beatles.history.formed} to ${beatles.history.disbanded}. He was born in ${beatles.members.birth[1]}. He contributed heavily to the ${beatles.albums[3]} Album.`)