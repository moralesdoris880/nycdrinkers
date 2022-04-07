puts "Begin Seeding...🌱"

tgifridays = Restaurant.create(name: 'TGI Fridays',address: '7000 Austin St, Queens, NY 11375', category: 'American')
    dbmojito = tgifridays.drinks.create(name: 'Double Berry Mojito', ingredients: 'Bacardi Rum, strawberry, raspberry, fresh mint,
    and Sprite®', restaurant_id: tgifridays.id)

    aroundtheworld = tgifridays.drinks.create(name: 'Around The World Lit', ingredients: 'ABSOLUT Vodka, Hendricks Gin, Captain
    Morgan Spiced Rum, Altos Tequila, Cointreau, and Coke®', restaurant_id: tgifridays.id)

    fridaymargarita = tgifridays.drinks.create(name: 'Fridays Margarita', ingredients: '1800 Silver Tequila and triple sec', 
    restaurant_id: tgifridays.id)

    strawberryhenny = tgifridays.drinks.create(name: 'Strawberry Henny', ingredients:'Hennessy V.S Cognac, Grand Marnier,
    and strawberry', restaurant_id: tgifridays.id)

    diddy = tgifridays.drinks.create(name:'Diddy On The Beach',ingredients: 'Vodka, coconut rum, fresh lemon and lime juices, agave nectar,
     blueberries and Yellow Red Bull',restaurant_id: tgifridays.id)

    pumpkinspice = tgifridays.drinks.create(name: 'Pumpkin Spice Latte Martini', ingredients: 'Spicy Captain Morgan, Kahlúa, 
    Butterscotch Schnapps, Monin Pumpkin Spice, whipped cream, nutmeg, and a cinnamon rim', restaurant_id: tgifridays.id)

    barbados = tgifridays.drinks.create(name: 'Barbados Rum Punch', ingredients: 'Captain Morgan Spiced Gold Rum, mango, passion fruit and 
    strawberry purée, fresh lime and lemon juices, 7 Up, Angostura Bitters', restaurant_id: tgifridays.id)

    merry = tgifridays.drinks.create(name:'Merry Margarita', ingredients: 'Jose Cuervo Silver, triple sec, cranberry', restaurant_id: tgifridays.id)

    mangohenny = tgifridays.drinks.create(name: 'Mango Henny Lemonade', ingredients: 'Hennessy V.S Cognac, mango', restaurant_id: tgifridays.id)

    ultimateclaus = tgifridays.drinks.create(name: 'Ultimate Claus for Celebration', ingredients: 'SKYY Vodka, apple, Hella Aromatic Bitters, 
    poured over green cotton candy', restaurant_id: tgifridays.id)

    crownapple = tgifridays.drinks.create(name: 'Crown Apple Cooler', ingredients: 'Crown Apple Canadian Whisky, sour apple, pomegranate', 
    restaurant_id: tgifridays.id)

    sweetalabama = tgifridays.drinks.create(name: 'Sweet Home Alabama Slamma', ingredients: 'Southern Comfort Whiskey, Disaronno Amaretto, 
    Fanta Orange, grenadine plus a fresh orange wheel and cherries', restaurant_id: tgifridays.id)

    goldenhour = tgifridays.drinks.create(name: 'Golden Hour', ingredients: 'Bacardí Rum, Hennessy V.S Cognac, triple sec, fresh-squeezed 
    lemon juice, lemon spiral', restaurant_id: tgifridays.id)

    pbskrewball = tgifridays.drinks.create(name: 'PB Skrewball', ingredients: 'Skrewball Peanut Butter Whiskey witn Kahlúa, Baileys Irish 
    Cream, half and half, a mini peanut butter cup and strawberry skewer', restaurant_id: tgifridays.id)

hisaes = Restaurant.create(name: '212 Hisaes',address: '212 E 9th St, New York, NY 10003', category: 'Asian Fusion')
    longislandit = hisaes.drinks.create(name: 'Long Island Ice Tea', ingredients: 'Rum, Tequila, Vodka, Gin, lemon, sugar, and Coke®', 
    price: 4, restaurant_id: hisaes.id)

    melonball = hisaes.drinks.create(name: 'Melon Ball', ingredients: 'Vodka, Midori, orange juice', restaurant_id: hisaes.id)


puts "Seeding Complete 🌱"



