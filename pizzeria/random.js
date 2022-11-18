var crust=[
    "thin",
    "hand tossed",
    "cauliflower",
    "deep dish",
    "gluten-free"
];

var sauce=[
    "marinara",
    "alfredo",
    "garlic & olive oil",
    "bbq",
    "roasted pepper"
];

var cheese=[
    "mozzarella",
    "no cheese",
    "vegan",
    "colby jack",
    "cheddar"
];

var toppings=[
    "pepperoni",
    "sausage",
    "bacon",
    "peppers",
    "onions",
    "pineapple",
    "fresh basil",
    "spinach",
    "chicken"
]

    var pizza =[
        crust[Math.floor(Math.random()*crust.length)],
        sauce[Math.floor(Math.random()*sauce.length)],
        cheese[Math.floor(Math.random()*cheese.length)],
        toppings[Math.floor(Math.random()*toppings.length)],
    ]
    console.log(pizza);


