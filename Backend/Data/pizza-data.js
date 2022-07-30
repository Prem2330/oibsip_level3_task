const pizzas = [
    {
      name: "Margherita",
      varients: ["small", "medium", "large"],
      prices: [
        {
          small: 99,
          medium: 199,
          large: 399,
        },
      ],
      base:["Thin crust","Cheese burst","Pan Pizza","Stuffed","Cheese stuffed"],
      cheese:["Mozzarella Cheese" ,"Parmesan Cheese","Gouda Cheese","Goat Cheese","Ricotta Cheese"],
      veggies:["Tomato","Jalepeno","bell peppers", "corn", "broccoli","Baby Spinach"],
      sauce:["Pesto","White Garlic Sauce","Garlic Ranch Sauce","Hummus","Buffalo Sauce","Marinara Sauce"],
      category: "veg",
      image: "https://cdn.shopify.com/s/files/1/0205/9582/articles/20220211142347-margherita-9920_ba86be55-674e-4f35-8094-2067ab41a671.jpg?crop=center&height=800&v=1644590192&width=800",
      description: "Classic pizza with 100% real mozzarella cheese",
    },
    {
      name: "Farmhouse",
      varients: ["small", "medium", "large"],
      prices: [
        {
          small: 229,
          medium: 399,
          large: 599,
        },
      ],
      base:["Thin crust","Cheese burst","Pan Pizza","Stuffed","Cheese stuffed"],
      cheese:["Mozzarella Cheese" ,"Parmesan Cheese","Gouda Cheese","Goat Cheese","Ricotta Cheese"],
      veggies:["Tomato","Jalepeno","bell peppers", "corn", "broccoli","Baby Spinach"],
      sauce:["Pesto","White Garlic Sauce","Garlic Ranch Sauce","Hummus","Buffalo Sauce","Marinara Sauce"],
      category: "veg",
      image: "https://www.brotherskitchen.in/wp-content/uploads/2021/03/farmhouse-pizza-vegetarian-pizza-with-mouth-watering-toppings_1024-768-600x450.jpg",
      description:
        "Delightful combination of onion, tomato,capsicum & grilled mushroom",
    },
    {
      name: "Veggie Paradise",
      varients: ["small", "medium", "large"],
      prices: [
        {
          small: 180,
          medium: 290,
          large: 460,
        },
      ],
      base:["Thin crust","Cheese burst","Pan Pizza","Stuffed","Cheese stuffed"],
      cheese:["Mozzarella Cheese" ,"Parmesan Cheese","Gouda Cheese","Goat Cheese","Ricotta Cheese"],
      veggies:["Tomato","Jalepeno","bell peppers", "corn", "broccoli","Baby Spinach"],
      sauce:["Pesto","White Garlic Sauce","Garlic Ranch Sauce","Hummus","Buffalo Sauce","Marinara Sauce"],
      category: "veg",
      description:
        "The awesome combination of Golden corn, black olives, capsicum, red paprika",
      image: "https://www.archanaskitchen.com/images/archanaskitchen/1-Author/Waagmi_Soni/Gralic_Crust_Veggie_Pizza.jpg",
    },
    {
      name: "Chicken Golden Delight",
      varients: ["small", "medium", "large"],
      prices: [
        {
          small: 249,
          medium: 349,
          large: 599,
        },
      ],
      base:["Thin crust","Cheese burst","Pan Pizza","Stuffed","Cheese stuffed"],
      cheese:["Mozzarella Cheese" ,"Parmesan Cheese","Gouda Cheese","Goat Cheese","Ricotta Cheese"],
      veggies:["Tomato","Jalepeno","bell peppers", "corn", "broccoli","Baby Spinach"],
      sauce:["Pesto","White Garlic Sauce","Garlic Ranch Sauce","Hummus","Buffalo Sauce","Marinara Sauce"],
      category: "nonveg",
      image: "https://static.wixstatic.com/media/c1db4b_a6ed9358b3ec4c6ab8522b9b2c57ec64~mv2.jpg/v1/fill/w_3000,h_2250,al_c,q_85/c1db4b_a6ed9358b3ec4c6ab8522b9b2c57ec64~mv2.jpg",
      description:
        "Barbecue chicken, golden corn and extra cheese, truely delightful",
    },
    {
      name: "Chicken Pepperoni",
      varients: ["small", "medium", "large"],
      prices: [
        {
          small: 320,
          medium: 580,
          large: 800,
        },
      ],
      base:["Thin crust","Cheese burst","Pan Pizza","Stuffed","Cheese stuffed"],
      cheese:["Mozzarella Cheese" ,"Parmesan Cheese","Gouda Cheese","Goat Cheese","Ricotta Cheese"],
      veggies:["Tomato","Jalepeno","bell peppers", "corn", "broccoli","Baby Spinach"],
      sauce:["Pesto","White Garlic Sauce","Garlic Ranch Sauce","Hummus","Buffalo Sauce","Marinara Sauce"],
      category: "nonveg",
      image: "https://www.simplyrecipes.com/thmb/8caxM88NgxZjz-T2aeRW3xjhzBg=/2000x1125/smart/filters:no_upscale()/__opt__aboutcom__coeus__resources__content_migration__simply_recipes__uploads__2019__09__easy-pepperoni-pizza-lead-3-8f256746d649404baa36a44d271329bc.jpg",
      description:
        "Delectable flavor of Chicken Pepperoni, topped with extra cheese",
    },
    {
      name: "Indi Chicken Tikka",
      varients: ["small", "medium", "large"],
      prices: [
        {
          small: 250,
          medium: 380,
          large: 500,
        },
      ],
      base:["Thin crust","Cheese burst","Pan Pizza","Stuffed","Cheese stuffed"],
      cheese:["Mozzarella Cheese" ,"Parmesan Cheese","Gouda Cheese","Goat Cheese","Ricotta Cheese"],
      veggies:["Tomato","Jalepeno","bell peppers", "corn", "broccoli","Baby Spinach"],
      sauce:["Pesto","White Garlic Sauce","Garlic Ranch Sauce","Hummus","Buffalo Sauce","Marinara Sauce"],
      category: "nonveg",
      image: "https://media-cdn.tripadvisor.com/media/photo-s/08/c6/e8/4f/pizza-hut.jpg",
      description:
        "Flavour of tandoori masala with Chicken tikka, onion, red paprika & mint mayo",
    },
  ];
  
module.exports=pizzas;