const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 3000;

// Middleware
app.use(bodyParser.json());
app.use(cors());

// Example data
// States data
const states = [
    { id: 1, name: 'California' },
    { id: 2, name: 'Texas' },
    { id: 3, name: 'New York' },
    { id: 4, name: 'Florida' },
    { id: 5, name: 'Illinois' },
    { id: 6, name: 'Washington' },
    { id: 7, name: 'Georgia' },
];

// Cities data
const cities = {
    1: [{ id: 1, name: 'Los Angeles' }, { id: 2, name: 'San Francisco' }, { id: 3, name: 'San Diego' }],
    2: [{ id: 4, name: 'Houston' }, { id: 5, name: 'Dallas' }, { id: 6, name: 'Austin' }],
    3: [{ id: 7, name: 'New York City' }, { id: 8, name: 'Buffalo' }, { id: 9, name: 'Rochester' }],
    4: [{ id: 10, name: 'Miami' }, { id: 11, name: 'Orlando' }, { id: 12, name: 'Tampa' }],
    5: [{ id: 13, name: 'Chicago' }, { id: 14, name: 'Aurora' }, { id: 15, name: 'Naperville' }],
    6: [{ id: 16, name: 'Seattle' }, { id: 17, name: 'Tacoma' }, { id: 18, name: 'Spokane' }],
    7: [{ id: 19, name: 'Atlanta' }, { id: 20, name: 'Savannah' }, { id: 21, name: 'Augusta' }],
};

// Hotels data
const hotels = {
    1: [{ id: 1, name: 'Hotel California' }, { id: 2, name: 'Beach Resort' }],
    2: [{ id: 3, name: 'LA Resort' }, { id: 4, name: 'Downtown Inn' }],
    3: [{ id: 5, name: 'NYC Luxury Hotel' }, { id: 6, name: 'Brooklyn Boutique' }],
    4: [{ id: 7, name: 'Miami Beach Hotel' }, { id: 8, name: 'Orlando Grand' }],
    5: [{ id: 9, name: 'Chicago Towers' }, { id: 10, name: 'Wrigley Field Hotel' }],
    6: [{ id: 11, name: 'Seattle Suites' }, { id: 12, name: 'Evergreen Inn' }],
    7: [{ id: 13, name: 'Atlanta Grand' }, { id: 14, name: 'Savannah Suites' }],
};

// Food items data (Veg and Non-Veg)
const foodItems = {
    1: {
        veg: [
            { id: 1, name: 'Veg Burger' },
            { id: 2, name: 'Grilled Vegetable Salad' },
            { id: 3, name: 'Veg Tacos' },
        ],
        'non-veg': [
            { id: 4, name: 'Chicken Burger' },
            { id: 5, name: 'Grilled Chicken Salad' },
            { id: 6, name: 'Chicken Tacos' },
        ],
    },
    2: {
        veg: [
            { id: 7, name: 'Vegan Pizza' },
            { id: 8, name: 'Tofu Stir Fry' },
            { id: 9, name: 'Veg Pasta' },
        ],
        'non-veg': [
            { id: 10, name: 'Pepperoni Pizza' },
            { id: 11, name: 'Beef Stir Fry' },
            { id: 12, name: 'Seafood Pasta' },
        ],
    },
    3: {
        veg: [
            { id: 13, name: 'Falafel Wrap' },
            { id: 14, name: 'Vegetarian Sushi' },
            { id: 15, name: 'Veggie Quesadilla' },
        ],
        'non-veg': [
            { id: 16, name: 'Sushi Rolls (Salmon)' },
            { id: 17, name: 'Beef Quesadilla' },
            { id: 18, name: 'Chicken Fajitas' },
        ],
    },
    4: {
        veg: [
            { id: 19, name: 'Cauliflower Steaks' },
            { id: 20, name: 'Roasted Vegetables' },
            { id: 21, name: 'Vegan Burritos' },
        ],
        'non-veg': [
            { id: 22, name: 'Fish Tacos' },
            { id: 23, name: 'Pork BBQ Ribs' },
            { id: 24, name: 'Grilled Salmon' },
        ],
    },
    5: {
        veg: [
            { id: 25, name: 'Tomato Basil Soup' },
            { id: 26, name: 'Panzanella Salad' },
            { id: 27, name: 'Zucchini Noodles' },
        ],
        'non-veg': [
            { id: 28, name: 'Chicken Parmesan' },
            { id: 29, name: 'Grilled Shrimp Skewers' },
            { id: 30, name: 'Pork Schnitzel' },
        ],
    },
};

// Food details (price, speciality)
const foodDetails = {
    1: { price: '$5', speciality: 'Delicious Vegan Patty' },
    2: { price: '$6', speciality: 'Healthy Grilled Veggies' },
    3: { price: '$4', speciality: 'Freshly Made Tacos' },
    4: { price: '$7', speciality: 'Juicy Chicken Patty' },
    5: { price: '$8', speciality: 'Tasty Grilled Chicken' },
    6: { price: '$6', speciality: 'Spicy Chicken Tacos' },
    7: { price: '$9', speciality: 'Delicious Vegan Pizza' },
    8: { price: '$10', speciality: 'Fresh Tofu Stir Fry' },
    9: { price: '$8', speciality: 'Classic Veg Pasta' },
    10: { price: '$12', speciality: 'Pepperoni and Mozzarella Pizza' },
    11: { price: '$13', speciality: 'Beef Stir Fry with Veggies' },
    12: { price: '$15', speciality: 'Seafood Pasta with Shrimp' },
    13: { price: '$11', speciality: 'Crispy Falafel with Tzatziki' },
    14: { price: '$14', speciality: 'Vibrant Vegetarian Sushi Rolls' },
    15: { price: '$9', speciality: 'Melted Cheese Quesadilla' },
    16: { price: '$16', speciality: 'Fresh Salmon Sushi Rolls' },
    17: { price: '$12', speciality: 'Grilled Beef Quesadilla' },
    18: { price: '$14', speciality: 'Juicy Chicken Fajitas' },
    19: { price: '$18', speciality: 'Tender Cauliflower Steaks' },
    20: { price: '$20', speciality: 'Roasted Veggies with Olive Oil' },
    21: { price: '$19', speciality: 'Vegan Burritos with Avocados' },
    22: { price: '$22', speciality: 'Fish Tacos with Lime' },
    23: { price: '$25', speciality: 'BBQ Ribs with Smoky Sauce' },
    24: { price: '$28', speciality: 'Grilled Salmon with Herbs' },
    25: { price: '$7', speciality: 'Tomato Soup with Fresh Basil' },
    26: { price: '$8', speciality: 'Classic Panzanella Salad' },
    27: { price: '$6', speciality: 'Zucchini Noodles with Pesto' },
    28: { price: '$14', speciality: 'Crispy Chicken Parmesan' },
    29: { price: '$16', speciality: 'Grilled Shrimp with Garlic Butter' },
    30: { price: '$18', speciality: 'Crispy Pork Schnitzel' },
};

// Recipe data (Diet or not)
const recipeSuggestions = {
    'diet': [
        { id: 1, name: 'A healthy, low-calorie Vegan Burger made with gluten-free bread and organic veggies.' },
        { id: 2, name: 'Grilled Veggie Salad with olive oil and balsamic vinegar dressing.' },
        { id: 3, name: 'Tacos with fresh veggies and a tangy lime dressing.' },
        { id: 4, name: 'Chicken Burger with a low-fat patty and no mayo.' },
        { id: 5, name: 'Grilled Chicken Salad with light vinaigrette.' },
        { id: 6, name: 'Spicy Chicken Tacos with avocado and light sour cream.' },
        { id: 7, name: 'Vegan Pizza with a cauliflower crust, topped with zucchini, tomatoes, and a pesto drizzle.' },
        { id: 8, name: 'Zucchini Noodles with pesto sauce, topped with roasted tomatoes.' },
        { id: 9, name: 'Tofu Stir-Fry with broccoli, bell peppers, and a low-sodium soy sauce.' },
        { id: 10, name: 'Roasted Cauliflower Steaks with lemon and turmeric seasoning.' },
        { id: 11, name: 'Chickpea and Avocado Salad with a lemon-tahini dressing.' },
        { id: 12, name: 'Baked Sweet Potato Fries with a light avocado dip.' },
        { id: 13, name: 'Stuffed Bell Peppers with quinoa, black beans, and a sprinkle of nutritional yeast.' },
        { id: 14, name: 'Veggie Wrap with hummus, spinach, cucumber, and roasted carrots.' },
        { id: 15, name: 'Cauliflower Rice Stir-Fry with peas, carrots, and soy sauce.' },
        { id: 16, name: 'Almond-Crusted Salmon with steamed vegetables.' },
        { id: 17, name: 'Lentil Soup with spinach, garlic, and a dash of olive oil.' },
        { id: 18, name: 'Greek Salad with cucumbers, olives, feta cheese, and a light olive oil dressing.' },
        { id: 19, name: 'Chia Pudding with almond milk and fresh berries.' },
        { id: 20, name: 'Avocado Toast with a poached egg and a sprinkle of chia seeds.' },
    ],
    'no-diet': [
        { id: 1, name: 'Delicious Vegan Burger with fries and a side of avocado dip.' },
        { id: 2, name: 'Grilled Veggie Salad with creamy feta cheese and roasted almonds.' },
        { id: 3, name: 'Tacos with spicy salsa, cheese, and sour cream.' },
        { id: 4, name: 'Juicy Chicken Burger with bacon, lettuce, and mayo.' },
        { id: 5, name: 'Grilled Chicken Salad with creamy ranch dressing.' },
        { id: 6, name: 'Tacos with chicken, cheese, and creamy sour cream.' },
        { id: 7, name: 'Cheese Stuffed Meatballs with marinara sauce, served with garlic bread.' },
        { id: 8, name: 'Spaghetti Bolognese with beef and tomato sauce, topped with parmesan.' },
        { id: 9, name: 'Pepperoni Pizza with mozzarella cheese and a crispy crust.' },
        { id: 10, name: 'BBQ Chicken Pizza with caramelized onions and cilantro.' },
        { id: 11, name: 'Beef Tacos with a crunchy shell, lettuce, cheese, and salsa.' },
        { id: 12, name: 'Pork Ribs with smoky BBQ sauce and mashed potatoes.' },
        { id: 13, name: 'Fried Chicken with biscuits and a side of creamy gravy.' },
        { id: 14, name: 'Grilled Shrimp Skewers with garlic butter sauce.' },
        { id: 15, name: 'Pulled Pork Sandwiches with coleslaw and pickles.' },
        { id: 16, name: 'Lasagna with ricotta cheese, marinara sauce, and layers of ground beef.' },
        { id: 17, name: 'Steak Frites with a garlic herb butter and crispy fries.' },
        { id: 18, name: 'Chicken Alfredo with fettuccine pasta and a creamy white sauce.' },
        { id: 19, name: 'Fish and Chips with malt vinegar and tartar sauce.' },
        { id: 20, name: 'Mac and Cheese with extra cheddar and crispy breadcrumbs on top.' },
    ]
};




app.get('/api/states', (req, res) => {
    res.json(states);
});

app.get('/api/cities/:stateId', (req, res) => {
    const stateId = req.params.stateId;
    res.json(cities[stateId] || []);
});

app.get('/api/hotels/:cityId', (req, res) => {
    const cityId = req.params.cityId;
    res.json(hotels[cityId] || []);
});

app.get('/api/food-items/:hotelId/:foodType', (req, res) => {
    const hotelId = req.params.hotelId;
    const foodType = req.params.foodType;
    res.json(foodItems[hotelId] ? foodItems[hotelId][foodType] : []);
});

app.get('/api/food-details/:foodItemId', (req, res) => {
    const foodItemId = req.params.foodItemId;
    res.json(foodDetails[foodItemId] || {});
});

app.get('/api/recipe-suggestions/:diet', (req, res) => {
    const diet = req.params.diet;
    res.json(recipeSuggestions[diet] || []);
});

app.post('/api/recipe', (req, res) => {
    const { foodItem, diet } = req.body;
    const recipe = recipeSuggestions[diet].find(r => r.id === parseInt(foodItem));
    if (recipe) {
        return res.json({ recipe: recipe.name });
    }
    res.status(400).json({ error: 'Invalid food item or diet type' });
});

// Start the server
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});