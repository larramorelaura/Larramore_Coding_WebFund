// var monster = {
//     id: 1,
//     name: "Bulbasaur",
//     types: ["poison", "grass"]
// };
// console.log(monster.name);
// console.log(monster.types);
// console.log(monster['types'][1]);

var pokémon = [
    { "id": 1,   "name": "Bulbasaur",  "types": ["poison", "grass"] },
    { "id": 5,   "name": "Charmeleon", "types": ["fire"] },
    { "id": 9,   "name": "Blastoise",  "types": ["water"] },
    { "id": 12,  "name": "Butterfree", "types": ["bug", "flying"] },
    { "id": 16,  "name": "Pidgey",     "types": ["normal", "flying"] },
    { "id": 23,  "name": "Ekans",      "types": ["poison"] },
    { "id": 24,  "name": "Arbok",      "types": ["poison"] },
    { "id": 25,  "name": "Pikachu",    "types": ["electric"] },
    { "id": 37,  "name": "Vulpix",     "types": ["fire"] },
    { "id": 52,  "name": "Meowth",     "types": ["normal"] },
    { "id": 63,  "name": "Abra",       "types": ["psychic"] },
    { "id": 67,  "name": "Machamp",    "types": ["fighting"] },
    { "id": 72,  "name": "Tentacool",  "types": ["water", "poison"] },
    { "id": 74,  "name": "Geodude",    "types": ["rock", "ground"] },
    { "id": 87,  "name": "Dewgong",    "types": ["water", "ice"] },
    { "id": 98,  "name": "Krabby",     "types": ["water"] },
    { "id": 115, "name": "Kangaskhan", "types": ["normal"] },
    { "id": 122, "name": "Mr. Mime",   "types": ["psychic"] },
    { "id": 133, "name": "Eevee",      "types": ["normal"] },
    { "id": 144, "name": "Articuno",   "types": ["ice", "flying"] },
    { "id": 145, "name": "Zapdos",     "types": ["electric", "flying"] },
    { "id": 146, "name": "Moltres",    "types": ["fire", "flying"] },
    { "id": 148, "name": "Dragonair",  "types": ["dragon"] }
];

// for(var i=0; i<pokémon.length; i++) {
//     if(pokémon[i].id > 99) {
//         console.log(pokémon[i].name);
//     }
// }

// //1
// for(var i=0; i<pokémon.length; i++){
//     if(pokémon[i].id%3==0){
//         console.log(pokémon[i]);
//     }
// }

// //2
// for(var i=0; i<pokémon.length; i++){
//     if (pokémon[i].types.length > 1){
//         console.log(pokémon[i]);
//     }
// }

// //3
// for(var i=0; i<pokémon.length; i++){
//     for(var j=0; j<pokémon[i].types.length; j++){
//         if(pokémon[i].types[j]=='poison'){
//             console.log(pokémon[i]);
//         }
//     }
// }

// //4
// for(var i=0; i<pokémon.length; i++){
    
//         if(pokémon[i].types[1]=='flying'){
//             console.log(pokémon[i].types[0];)
//         }
    
// }

//5
for(var i=0; i<pokémon.length; i++){
    if(pokémon[i].types[0]=='poison' && pokémon[i].length == 1){
        var eman = "";
        for(var j=pokémon[i].name.length-1; j>=0; j--){
            newChar= pokémon[i].name[j];
            eman += newChar;
        }
        
    }
    console.log(eman);
}

