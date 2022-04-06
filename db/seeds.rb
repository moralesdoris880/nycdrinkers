# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: "Star Wars" }, { name: "Lord of the Rings" }])
#   Character.create(name: "Luke", movie: movies.first)

tgifridays = Restaurant.create(name: 'TGI Fridays',address: '7000 Austin St, Queens, NY 11375', category: 'American')
    dbmojito = tgifridays.drinks.create(name: 'Double Berry Mojito', ingredients: 'Bacardi Rum, strawberry, raspberry, fresh mint,
    Sprite®', restaurant_id: tgifridays.id)

    aroundtheworld = tgifridays.drinks.create(name: 'Around The World Lit', ingredients: 'ABSOLUT Vodka, Hendricks Gin, Captain
    Morgan Spiced Rum, Altos Tequila, Cointreau, Coke®', restaurant_id: tgifridays.id)

    fridaymargarita = tgifridays.drinks.create(name: 'Fridays Margarita', ingredients: '1800 Silver Tequila, triple sec', 
    restaurant_id: tgifridays.id)

hisaes = Restaurant.create(name: '212 Hisaes',address: '212 E 9th St, New York, NY 10003', category: 'Asian Fusion')
    longislandit = hisaes.drinks.create(name: 'Long Island Ice Tea', ingredients: 'Rum, Tequila, Vodka, Gin, lemon, sugar, Coke®', 
    price: 4, restaurant_id: hisaes.id)



