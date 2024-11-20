db.products.insertOne(
    {
        "name":"Prouduct 1",
        "desc": "this is the description of product 1",
        "price":45,
        "url": "https://picsum.photos/seed/picsum/200/300"
    }
)
db.products.insertOne(
    {
        "name":"Prouduct 2",
        "desc": "this is the description of product 1",
        "price":90,
        "url": "https://picsum.photos/seed/picsum/200/300"
    }
)
db.products.insertMany(
[    {
        "name":"Prouduct 3",
        "desc": "this is the description of product 1",
        "price":90,
        "url": "https://picsum.photos/seed/picsum/200/300"
    },
    {
        "name":"Prouduct 4",
        "desc": "this is the description of product 1",
        "price":90,
        "url": "https://picsum.photos/seed/picsum/200/300"
    },
]    
)
db.products.insertMany(
    [    {
            "name":"Prouduct 5",
            "desc": "this is the description of product 5",
            "price":70,
            "url": "https://picsum.photos/seed/picsum/200/300"
        },
        {
            "name":"Prouduct 6",
            "desc": "this is the description of product 6",
            "price":100,
            "url": "https://picsum.photos/seed/picsum/200/300"
        },
    ]    
    )