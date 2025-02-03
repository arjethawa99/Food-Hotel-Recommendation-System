const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = 3000;

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
    { id: 8, name: 'Arizona' },
    { id: 9, name: 'Nevada' },
    { id: 10, name: 'Ohio' }
];

// Cities data
const cities = {
    1: [
        { id: 1, name: 'Los Angeles' },
        { id: 2, name: 'San Francisco' },
        { id: 3, name: 'San Diego' },
        { id: 4, name: 'Sacramento' },
        { id: 5, name: 'San Jose' },
        { id: 6, name: 'Fresno' }
    ],
    2: [
        { id: 7, name: 'Houston' },
        { id: 8, name: 'Dallas' },
        { id: 9, name: 'Austin' },
        { id: 10, name: 'San Antonio' },
        { id: 11, name: 'Fort Worth' },
        { id: 12, name: 'El Paso' }
    ],
    3: [
        { id: 13, name: 'New York City' },
        { id: 14, name: 'Buffalo' },
        { id: 15, name: 'Rochester' },
        { id: 16, name: 'Syracuse' },
        { id: 17, name: 'Albany' },
        { id: 18, name: 'Yonkers' }
    ],
    4: [
        { id: 19, name: 'Miami' },
        { id: 20, name: 'Orlando' },
        { id: 21, name: 'Tampa' },
        { id: 22, name: 'Jacksonville' },
        { id: 23, name: 'Tallahassee' },
        { id: 24, name: 'St. Petersburg' }
    ],
    5: [
        { id: 25, name: 'Chicago' },
        { id: 26, name: 'Aurora' },
        { id: 27, name: 'Naperville' },
        { id: 28, name: 'Rockford' },
        { id: 29, name: 'Joliet' },
        { id: 30, name: 'Elgin' }
    ],
    6: [
        { id: 31, name: 'Seattle' },
        { id: 32, name: 'Tacoma' },
        { id: 33, name: 'Spokane' },
        { id: 34, name: 'Vancouver' },
        { id: 35, name: 'Bellevue' },
        { id: 36, name: 'Everett' }
    ],
    7: [
        { id: 37, name: 'Atlanta' },
        { id: 38, name: 'Savannah' },
        { id: 39, name: 'Augusta' },
        { id: 40, name: 'Columbus' },
        { id: 41, name: 'Macon' },
        { id: 42, name: 'Roswell' }
    ],
    8: [
        { id: 43, name: 'Phoenix' },
        { id: 44, name: 'Tucson' },
        { id: 45, name: 'Mesa' },
        { id: 46, name: 'Chandler' },
        { id: 47, name: 'Scottsdale' },
        { id: 48, name: 'Glendale' }
    ],
    9: [
        { id: 49, name: 'Las Vegas' },
        { id: 50, name: 'Reno' },
        { id: 51, name: 'Henderson' },
        { id: 52, name: 'Paradise' },
        { id: 53, name: 'Carson City' },
        { id: 54, name: 'Sparks' }
    ],
    10: [
        { id: 55, name: 'Columbus' },
        { id: 56, name: 'Cleveland' },
        { id: 57, name: 'Cincinnati' },
        { id: 58, name: 'Toledo' },
        { id: 59, name: 'Akron' },
        { id: 60, name: 'Dayton' }
    ]
};


const hotels = {
    1: [
        { id: 1, name: 'Hotel California' },
        { id: 2, name: 'Beach Resort' }
    ],
    2: [
        { id: 3, name: 'LA Resort' },
        { id: 4, name: 'Downtown Inn' }
    ],
    3: [
        { id: 5, name: 'NYC Luxury Hotel' },
        { id: 6, name: 'Brooklyn Boutique' }
    ],
    4: [
        { id: 7, name: 'Miami Beach Hotel' },
        { id: 8, name: 'Orlando Grand' }
    ],
    5: [
        { id: 9, name: 'Chicago Towers' },
        { id: 10, name: 'Wrigley Field Hotel' }
    ],
    6: [
        { id: 11, name: 'Seattle Suites' },
        { id: 12, name: 'Evergreen Inn' }
    ],
    7: [
        { id: 13, name: 'Atlanta Grand' },
        { id: 14, name: 'Savannah Suites' }
    ],
    8: [
        { id: 15, name: 'Phoenix Resort' },
        { id: 16, name: 'Tucson Inn' }
    ],
    9: [
        { id: 17, name: 'Vegas Luxe' },
        { id: 18, name: 'Reno Retreat' }
    ],
    10: [
        { id: 19, name: 'Columbus Luxury' },
        { id: 20, name: 'Cleveland City Inn' }
    ],
    11: [
        { id: 21, name: 'San Francisco Luxury' },
        { id: 22, name: 'Bay Area Inn' }
    ],
    12: [
        { id: 23, name: 'Dallas Deluxe' },
        { id: 24, name: 'Fort Worth Grand' }
    ],
    13: [
        { id: 25, name: 'Austin Heights' },
        { id: 26, name: 'San Antonio Suites' }
    ],
    14: [
        { id: 27, name: 'Buffalo Comfort' },
        { id: 28, name: 'Rochester Resort' }
    ],
    15: [
        { id: 29, name: 'Syracuse Stay' },
        { id: 30, name: 'Albany Inn' }
    ],
    16: [
        { id: 31, name: 'Yonkers Grand' },
        { id: 32, name: 'Tallahassee Towers' }
    ],
    17: [
        { id: 33, name: 'Sacramento Suites' },
        { id: 34, name: 'San Jose Comfort' }
    ],
    18: [
        { id: 35, name: 'Fresno Resort' },
        { id: 36, name: 'Crescent Inn' }
    ],
    19: [
        { id: 37, name: 'El Paso Grande' },
        { id: 38, name: 'Fort Worth Inn' }
    ],
    20: [
        { id: 39, name: 'Naperville Heights' },
        { id: 40, name: 'Rockford Lodge' }
    ],
    21: [
        { id: 41, name: 'Joliet Comfort' },
        { id: 42, name: 'Elgin Stay' }
    ],
    22: [
        { id: 43, name: 'Tacoma Suites' },
        { id: 44, name: 'Bellevue Inn' }
    ],
    23: [
        { id: 45, name: 'Vancouver Grand' },
        { id: 46, name: 'Spokane Resort' }
    ],
    24: [
        { id: 47, name: 'Everett Inn' },
        { id: 48, name: 'Spokane Suites' }
    ],
    25: [
        { id: 49, name: 'Savannah Luxury' },
        { id: 50, name: 'Macon Grand' }
    ],
    26: [
        { id: 51, name: 'Roswell Retreat' },
        { id: 52, name: 'Augusta Lodge' }
    ],
    27: [
        { id: 53, name: 'Columbus Resort' },
        { id: 54, name: 'Chandler Inn' }
    ],
    28: [
        { id: 55, name: 'Mesa Grande' },
        { id: 56, name: 'Glendale Resort' }
    ],
    29: [
        { id: 57, name: 'Henderson Suites' },
        { id: 58, name: 'Paradise Inn' }
    ],
    30: [
        { id: 59, name: 'Carson City Lodge' },
        { id: 60, name: 'Sparks Resort' }
    ],
    31: [
        { id: 61, name: 'Salt Lake Hotel' },
        { id: 62, name: 'Park City Suites' }
    ],
    32: [
        { id: 63, name: 'Denver Lodge' },
        { id: 64, name: 'Boulder Heights' }
    ],
    33: [
        { id: 65, name: 'Minneapolis Inn' },
        { id: 66, name: 'Saint Paul Grand' }
    ],
    34: [
        { id: 67, name: 'Kansas City Hotel' },
        { id: 68, name: 'Wichita Inn' }
    ],
    35: [
        { id: 69, name: 'Indianapolis Suites' },
        { id: 70, name: 'Fort Wayne Comfort' }
    ],
    36: [
        { id: 71, name: 'Charlotte Heights' },
        { id: 72, name: 'Raleigh Lodge' }
    ],
    37: [
        { id: 73, name: 'Nashville Grand' },
        { id: 74, name: 'Knoxville Inn' }
    ],
    38: [
        { id: 75, name: 'Portland Resort' },
        { id: 76, name: 'Vancouver Suites' }
    ],
    39: [
        { id: 77, name: 'Cleveland Heights' },
        { id: 78, name: 'Dayton Lodge' }
    ],
    40: [
        { id: 79, name: 'Oklahoma City Grand' },
        { id: 80, name: 'Tulsa Comfort' }
    ],
    41: [
        { id: 81, name: 'Albuquerque Suites' },
        { id: 82, name: 'Santa Fe Resort' }
    ],
    42: [
        { id: 83, name: 'Honolulu Beach Resort' },
        { id: 84, name: 'Maui Inn' }
    ],
    43: [
        { id: 85, name: 'Boise Lodge' },
        { id: 86, name: 'Twin Falls Suites' }
    ],
    44: [
        { id: 87, name: 'Anchorage Resort' },
        { id: 88, name: 'Juneau Suites' }
    ],
    45: [
        { id: 89, name: 'Sacramento Grand' },
        { id: 90, name: 'Berkeley Lodge' }
    ],
    46: [
        { id: 91, name: 'New Orleans Inn' },
        { id: 92, name: 'Baton Rouge Suites' }
    ],
    47: [
        { id: 93, name: 'Richmond Heights' },
        { id: 94, name: 'Norfolk Resort' }
    ],
    48: [
        { id: 95, name: 'Madison Lodge' },
        { id: 96, name: 'Green Bay Inn' }
    ],
    49: [
        { id: 97, name: 'Charleston Suites' },
        { id: 98, name: 'Columbia Grand' }
    ],
    50: [
        { id: 99, name: 'Little Rock Resort' },
        { id: 100, name: 'Fort Smith Inn' }
    ],
    51: [
        { id: 101, name: 'Des Moines Lodge' },
        { id: 102, name: 'Sioux City Suites' }
    ],
    52: [
        { id: 103, name: 'Fargo Heights' },
        { id: 104, name: 'Bismarck Lodge' }
    ],
    53: [
        { id: 105, name: 'Missoula Resort' },
        { id: 106, name: 'Billings Inn' }
    ],
    54: [
        { id: 107, name: 'Lubbock Lodge' },
        { id: 108, name: 'Amarillo Grand' }
    ],
    55: [
        { id: 109, name: 'Cheyenne Suites' },
        { id: 110, name: 'Casper Inn' }
    ],
    56: [
        { id: 111, name: 'St. Louis Grand' },
        { id: 112, name: 'Springfield Comfort' }
    ],
    57: [
        { id: 113, name: 'Peoria Lodge' },
        { id: 114, name: 'Champaign Suites' }
    ],
    58: [
        { id: 115, name: 'Lansing Resort' },
        { id: 116, name: 'Grand Rapids Inn' }
    ],
    59: [
        { id: 117, name: 'Evansville Suites' },
        { id: 118, name: 'Bloomington Grand' }
    ],
    60: [
        { id: 119, name: 'Detroit Luxury' },
        { id: 120, name: 'Jackson Comfort' }
    ]
};



// Food items data (Veg and Non-Veg)
const foodItems = {
    1: {
        veg: [{ id: 1, name: 'Veg Burger' }],
        'non-veg': [{ id: 4, name: 'Chicken Burger' }],
    },
    2: {
        veg: [{ id: 7, name: 'Vegan Pizza' }],
        'non-veg': [{ id: 10, name: 'Pepperoni Pizza' }],
    },
    3: {
        veg: [{ id: 13, name: 'Falafel Wrap' }],
        'non-veg': [{ id: 16, name: 'Sushi Rolls (Salmon)' }],
    },
    4: {
        veg: [{ id: 19, name: 'Cauliflower Steaks' }],
        'non-veg': [{ id: 22, name: 'Fish Tacos' }],
    },
    5: {
        veg: [{ id: 25, name: 'Tomato Basil Soup' }],
        'non-veg': [{ id: 28, name: 'Chicken Parmesan' }],
    },
    6: {
        veg: [{ id: 31, name: 'Avocado Toast' }],
        'non-veg': [{ id: 34, name: 'Egg Salad Sandwich' }],
    },
    7: {
        veg: [{ id: 37, name: 'Pasta Primavera' }],
        'non-veg': [{ id: 40, name: 'Grilled Chicken Sandwich' }],
    },
    8: {
        veg: [{ id: 43, name: 'Roasted Brussels Sprouts' }],
        'non-veg': [{ id: 46, name: 'Chicken Fried Rice' }],
    },
    9: {
        veg: [{ id: 49, name: 'Mushroom Soup' }],
        'non-veg': [{ id: 50, name: 'Steak Frites' }],
    },
    10: {
        veg: [{ id: 52, name: 'Vegetarian Pizza' }],
        'non-veg': [{ id: 55, name: 'BBQ Pulled Pork Sandwich' }],
    },
    11: {
        veg: [{ id: 58, name: 'Lentil Soup' }],
        'non-veg': [{ id: 60, name: 'Bacon Burger' }],
    },
    12: {
        veg: [{ id: 61, name: 'Veggie Sushi Rolls' }],
        'non-veg': [{ id: 62, name: 'Grilled Shrimp Skewers' }],
    },
    13: {
        veg: [{ id: 64, name: 'Quinoa Salad' }],
        'non-veg': [{ id: 67, name: 'Chicken Wings' }],
    },
    14: {
        veg: [{ id: 69, name: 'Sweet Potato Fries' }],
        'non-veg': [{ id: 72, name: 'Lamb Chops' }],
    },
    15: {
        veg: [{ id: 74, name: 'Spinach Salad' }],
        'non-veg': [{ id: 75, name: 'Chicken Caesar Wrap' }],
    },
    16: {
        veg: [{ id: 77, name: 'Zucchini Noodles' }],
        'non-veg': [{ id: 78, name: 'Pork Schnitzel' }],
    },
    17: {
        veg: [{ id: 80, name: 'Grilled Asparagus' }],
        'non-veg': [{ id: 81, name: 'Chicken Parmesan' }],
    },
    18: {
        veg: [{ id: 83, name: 'Caprese Salad' }],
        'non-veg': [{ id: 84, name: 'Fish and Chips' }],
    },
    19: {
        veg: [{ id: 86, name: 'Cucumber Salad' }],
        'non-veg': [{ id: 88, name: 'Pork BBQ Ribs' }],
    },
    20: {
        veg: [{ id: 90, name: 'Vegan Tacos' }],
        'non-veg': [{ id: 92, name: 'Chicken Quesadilla' }],
    },
    21: {
        veg: [{ id: 94, name: 'Mango Chutney Salad' }],
        'non-veg': [{ id: 95, name: 'Beef Tacos' }],
    },
    22: {
        veg: [{ id: 97, name: 'Sweet Corn Soup' }],
        'non-veg': [{ id: 98, name: 'BBQ Chicken' }],
    },
    23: {
        veg: [{ id: 100, name: 'Tomato Avocado Salad' }],
        'non-veg': [{ id: 101, name: 'Grilled Fish' }],
    },
    24: {
        veg: [{ id: 103, name: 'Beetroot Salad' }],
        'non-veg': [{ id: 104, name: 'Shrimp Pasta' }],
    },
    25: {
        veg: [{ id: 106, name: 'Grilled Mushroom Skewers' }],
        'non-veg': [{ id: 108, name: 'Chicken Tenders' }],
    },
    26: {
        veg: [{ id: 110, name: 'Vegan Burritos' }],
        'non-veg': [{ id: 112, name: 'Chicken Shawarma' }],
    },
    27: {
        veg: [{ id: 114, name: 'Veggie Lasagna' }],
        'non-veg': [{ id: 115, name: 'Beef Burger' }],
    },
    28: {
        veg: [{ id: 117, name: 'Cauliflower Rice' }],
        'non-veg': [{ id: 119, name: 'Grilled Turkey' }],
    },
    29: {
        veg: [{ id: 121, name: 'Vegan Burrito Bowl' }],
        'non-veg': [{ id: 122, name: 'Fish Tacos' }],
    },
    30: {
        veg: [{ id: 124, name: 'Spinach Wrap' }],
        'non-veg': [{ id: 126, name: 'Pork Belly' }],
    },
    31: {
        veg: [{ id: 128, name: 'Stuffed Bell Peppers' }],
        'non-veg': [{ id: 130, name: 'Chicken Kiev' }],
    },
    32: {
        veg: [{ id: 132, name: 'Eggplant Parmesan' }],
        'non-veg': [{ id: 133, name: 'Chicken Fajitas' }],
    },
    33: {
        veg: [{ id: 135, name: 'Cabbage Rolls' }],
        'non-veg': [{ id: 136, name: 'Beef Stroganoff' }],
    },
    34: {
        veg: [{ id: 138, name: 'Tofu Stir-Fry' }],
        'non-veg': [{ id: 140, name: 'Chicken Burritos' }],
    },
    35: {
        veg: [{ id: 142, name: 'Chickpea Salad' }],
        'non-veg': [{ id: 144, name: 'Roast Duck' }],
    },
    36: {
        veg: [{ id: 146, name: 'Spinach and Feta Pastry' }],
        'non-veg': [{ id: 148, name: 'Salmon Fillet' }],
    },
    37: {
        veg: [{ id: 150, name: 'Veggie Pad Thai' }],
        'non-veg': [{ id: 152, name: 'BBQ Ribs' }],
    },
    38: {
        veg: [{ id: 154, name: 'Grilled Vegetable Skewers' }],
        'non-veg': [{ id: 156, name: 'Beef Skewers' }],
    },
    39: {
        veg: [{ id: 158, name: 'Zucchini Fritters' }],
        'non-veg': [{ id: 160, name: 'Lobster Roll' }],
    },
    40: {
        veg: [{ id: 162, name: 'Potato Salad' }],
        'non-veg': [{ id: 164, name: 'Crab Cakes' }],
    },
    41: {
        veg: [{ id: 166, name: 'Tomato Soup' }],
        'non-veg': [{ id: 168, name: 'Chicken Skewers' }],
    },
    42: {
        veg: [{ id: 170, name: 'Roasted Garlic Mushrooms' }],
        'non-veg': [{ id: 172, name: 'Beef Wellington' }],
    },
    43: {
        veg: [{ id: 174, name: 'Broccoli Salad' }],
        'non-veg': [{ id: 176, name: 'Grilled Lamb Chops' }],
    },
    44: {
        veg: [{ id: 178, name: 'Fried Tofu' }],
        'non-veg': [{ id: 180, name: 'Pork Belly Sliders' }],
    },
    45: {
        veg: [{ id: 182, name: 'Bruschetta' }],
        'non-veg': [{ id: 184, name: 'Chicken Fried Steak' }],
    },
    46: {
        veg: [{ id: 186, name: 'Pasta Salad' }],
        'non-veg': [{ id: 188, name: 'Roast Chicken' }],
    },
    47: {
        veg: [{ id: 190, name: 'Eggplant Stir Fry' }],
        'non-veg': [{ id: 192, name: 'Steak Tacos' }],
    },
    48: {
        veg: [{ id: 194, name: 'Corn on the Cob' }],
        'non-veg': [{ id: 196, name: 'Fish Fry' }],
    },
    49: {
        veg: [{ id: 198, name: 'Roasted Sweet Potatoes' }],
        'non-veg': [{ id: 200, name: 'Grilled Shrimp' }],
    },
    50: {
        veg: [{ id: 202, name: 'Kale Salad' }],
        'non-veg': [{ id: 204, name: 'Chicken Drumsticks' }],
    },
    51: {
        veg: [{ id: 206, name: 'Cucumber Avocado Salad' }],
        'non-veg': [{ id: 208, name: 'Baked Salmon' }],
    },
    52: {
        veg: [{ id: 210, name: 'Vegan Chili' }],
        'non-veg': [{ id: 212, name: 'Pork Tacos' }],
    },
    53: {
        veg: [{ id: 214, name: 'Stuffed Mushrooms' }],
        'non-veg': [{ id: 216, name: 'Beef Burritos' }],
    },
    54: {
        veg: [{ id: 218, name: 'Mango Salad' }],
        'non-veg': [{ id: 220, name: 'Chicken Wings' }],
    },
    55: {
        veg: [{ id: 222, name: 'Sweet Potato Hash' }],
        'non-veg': [{ id: 224, name: 'Lamb Shank' }],
    },
    56: {
        veg: [{ id: 226, name: 'Broccoli Stir Fry' }],
        'non-veg': [{ id: 228, name: 'Pork Chop' }],
    },
    57: {
        veg: [{ id: 230, name: 'Roasted Vegetables' }],
        'non-veg': [{ id: 232, name: 'Grilled Beef Steaks' }],
    },
    58: {
        veg: [{ id: 234, name: 'Potato Wedges' }],
        'non-veg': [{ id: 236, name: 'Grilled Chicken' }],
    },
    59: {
        veg: [{ id: 238, name: 'Lentil Stew' }],
        'non-veg': [{ id: 240, name: 'Shrimp Tacos' }],
    },
    60: {
        veg: [{ id: 242, name: 'Spinach Lasagna' }],
        'non-veg': [{ id: 244, name: 'Pork Roast' }],
    },
    61: {
        veg: [{ id: 246, name: 'Vegan Burger' }],
        'non-veg': [{ id: 248, name: 'Chicken Fajita' }],
    },
    62: {
        veg: [{ id: 250, name: 'Avocado Salad' }],
        'non-veg': [{ id: 252, name: 'Grilled Fish Tacos' }],
    },
    63: {
        veg: [{ id: 254, name: 'Roasted Carrots' }],
        'non-veg': [{ id: 256, name: 'Chicken Salad' }],
    },
    64: {
        veg: [{ id: 258, name: 'Grilled Corn' }],
        'non-veg': [{ id: 260, name: 'Fish Sticks' }],
    },
    65: {
        veg: [{ id: 262, name: 'Tomato Basil Bruschetta' }],
        'non-veg': [{ id: 264, name: 'Bacon-Wrapped Shrimp' }],
    },
    66: {
        veg: [{ id: 266, name: 'Eggplant Parmesan' }],
        'non-veg': [{ id: 268, name: 'Beef Tacos' }],
    },
    67: {
        veg: [{ id: 270, name: 'Stuffed Peppers' }],
        'non-veg': [{ id: 272, name: 'Grilled Lamb' }],
    },
    68: {
        veg: [{ id: 274, name: 'Tomato Mozzarella Salad' }],
        'non-veg': [{ id: 276, name: 'BBQ Chicken' }],
    },
    69: {
        veg: [{ id: 278, name: 'Cauliflower Wings' }],
        'non-veg': [{ id: 280, name: 'Chicken Stir-Fry' }],
    },
    70: {
        veg: [{ id: 282, name: 'Crispy Chickpeas' }],
        'non-veg': [{ id: 284, name: 'Shrimp Stir-Fry' }],
    },
    71: {
        veg: [{ id: 286, name: 'Roasted Beets' }],
        'non-veg': [{ id: 288, name: 'Beef Skewers' }],
    },
    72: {
        veg: [{ id: 290, name: 'Vegan Shepherd’s Pie' }],
        'non-veg': [{ id: 292, name: 'Fish and Chips' }],
    },
    73: {
        veg: [{ id: 294, name: 'Potato Pancakes' }],
        'non-veg': [{ id: 296, name: 'BBQ Shrimp' }],
    },
    74: {
        veg: [{ id: 298, name: 'Veggie Burger' }],
        'non-veg': [{ id: 300, name: 'Roast Chicken' }],
    },
    75: {
        veg: [{ id: 302, name: 'Pumpkin Soup' }],
        'non-veg': [{ id: 304, name: 'Pork Ribs' }],
    },
    76: {
        veg: [{ id: 306, name: 'Chickpea Curry' }],
        'non-veg': [{ id: 308, name: 'Grilled Salmon' }],
    },
    77: {
        veg: [{ id: 310, name: 'Cabbage Slaw' }],
        'non-veg': [{ id: 312, name: 'Chicken Strips' }],
    },
    78: {
        veg: [{ id: 314, name: 'Cucumber Pickle Salad' }],
        'non-veg': [{ id: 316, name: 'Pork Tenderloin' }],
    },
    79: {
        veg: [{ id: 318, name: 'Chickpea Salad' }],
        'non-veg': [{ id: 320, name: 'Beef Brisket' }],
    },
    80: {
        veg: [{ id: 322, name: 'Zucchini Chips' }],
        'non-veg': [{ id: 324, name: 'Lamb Chops' }],
    },
    81: {
        veg: [{ id: 326, name: 'Pumpkin Salad' }],
        'non-veg': [{ id: 328, name: 'Roast Beef' }],
    },
    82: {
        veg: [{ id: 330, name: 'Cauliflower Soup' }],
        'non-veg': [{ id: 332, name: 'Turkey Burgers' }],
    },
    83: {
        veg: [{ id: 334, name: 'Vegetarian Chili' }],
        'non-veg': [{ id: 336, name: 'Chicken Parmesan' }],
    },
    84: {
        veg: [{ id: 338, name: 'Potato Salad' }],
        'non-veg': [{ id: 340, name: 'Grilled Turkey' }],
    },
    85: {
        veg: [{ id: 342, name: 'Smashed Potatoes' }],
        'non-veg': [{ id: 344, name: 'Beef Stew' }],
    },
    86: {
        veg: [{ id: 346, name: 'Lemon Asparagus' }],
        'non-veg': [{ id: 348, name: 'Fish Tacos' }],
    },
    87: {
        veg: [{ id: 350, name: 'Mushroom Risotto' }],
        'non-veg': [{ id: 352, name: 'Chicken Satay' }],
    },
    88: {
        veg: [{ id: 354, name: 'Vegetarian Pizza' }],
        'non-veg': [{ id: 356, name: 'Pork Schnitzel' }],
    },
    89: {
        veg: [{ id: 358, name: 'Quinoa Salad' }],
        'non-veg': [{ id: 360, name: 'Beef Burgers' }],
    },
    90: {
        veg: [{ id: 362, name: 'Vegan Wrap' }],
        'non-veg': [{ id: 364, name: 'Chicken Wrap' }],
    },
    91: {
        veg: [{ id: 366, name: 'Roasted Garlic Cauliflower' }],
        'non-veg': [{ id: 368, name: 'Grilled Pork' }],
    },
    92: {
        veg: [{ id: 370, name: 'Mango Avocado Salad' }],
        'non-veg': [{ id: 372, name: 'Chicken Enchiladas' }],
    },
    93: {
        veg: [{ id: 374, name: 'Sweet Potato Stew' }],
        'non-veg': [{ id: 376, name: 'Beef Roast' }],
    },
    94: {
        veg: [{ id: 378, name: 'Mushroom Stew' }],
        'non-veg': [{ id: 380, name: 'Chicken Cacciatore' }],
    },
    95: {
        veg: [{ id: 382, name: 'Spinach and Feta Wrap' }],
        'non-veg': [{ id: 384, name: 'Grilled Steak' }],
    },
    96: {
        veg: [{ id: 386, name: 'Vegan Quesadilla' }],
        'non-veg': [{ id: 388, name: 'BBQ Chicken' }],
    },
    97: {
        veg: [{ id: 390, name: 'Vegetarian Souvlaki' }],
        'non-veg': [{ id: 392, name: 'Beef Kebabs' }],
    },
    98: {
        veg: [{ id: 394, name: 'Vegetarian Risotto' }],
        'non-veg': [{ id: 396, name: 'Chicken Wings' }],
    },
    99: {
        veg: [{ id: 398, name: 'Grilled Eggplant' }],
        'non-veg': [{ id: 400, name: 'Grilled Lobster' }],
    },
    100: {
        veg: [{ id: 402, name: 'Vegan Pasta' }],
        'non-veg': [{ id: 404, name: 'Grilled Shrimp' }],
    },
    101: {
        veg: [{ id: 406, name: 'Spaghetti Squash' }],
        'non-veg': [{ id: 408, name: 'Grilled Salmon' }],
    },
    102: {
        veg: [{ id: 410, name: 'Chickpea Stew' }],
        'non-veg': [{ id: 412, name: 'Chicken Stir Fry' }],
    },
    103: {
        veg: [{ id: 414, name: 'Carrot Soup' }],
        'non-veg': [{ id: 416, name: 'BBQ Shrimp Skewers' }],
    },
    104: {
        veg: [{ id: 418, name: 'Vegan Curry' }],
        'non-veg': [{ id: 420, name: 'Beef Short Ribs' }],
    },
    105: {
        veg: [{ id: 422, name: 'Veggie Tacos' }],
        'non-veg': [{ id: 424, name: 'Grilled Fish' }],
    },
    106: {
        veg: [{ id: 426, name: 'Eggplant Stir Fry' }],
        'non-veg': [{ id: 428, name: 'Pork Schnitzel' }],
    },
    107: {
        veg: [{ id: 430, name: 'Sweet Potato Salad' }],
        'non-veg': [{ id: 432, name: 'Roast Chicken' }],
    },
    108: {
        veg: [{ id: 434, name: 'Tomato Soup' }],
        'non-veg': [{ id: 436, name: 'Chicken Skewers' }],
    },
    109: {
        veg: [{ id: 438, name: 'Zucchini Noodles' }],
        'non-veg': [{ id: 440, name: 'Steak Frites' }],
    },
    110: {
        veg: [{ id: 442, name: 'Pumpkin Risotto' }],
        'non-veg': [{ id: 444, name: 'Chicken Tenders' }],
    },
    111: {
        veg: [{ id: 446, name: 'Lentil Salad' }],
        'non-veg': [{ id: 448, name: 'Grilled Pork' }],
    },
    112: {
        veg: [{ id: 450, name: 'Carrot Salad' }],
        'non-veg': [{ id: 452, name: 'Grilled Beef Skewers' }],
    },
    113: {
        veg: [{ id: 454, name: 'Cucumber Salad' }],
        'non-veg': [{ id: 456, name: 'Shrimp Tacos' }],
    },
    114: {
        veg: [{ id: 458, name: 'Fried Rice' }],
        'non-veg': [{ id: 460, name: 'Pork Ribs' }],
    },
    115: {
        veg: [{ id: 462, name: 'Vegan Queso' }],
        'non-veg': [{ id: 464, name: 'Steak Sandwich' }],
    },
    116: {
        veg: [{ id: 466, name: 'Roasted Potatoes' }],
        'non-veg': [{ id: 468, name: 'Lamb Kebabs' }],
    },
    117: {
        veg: [{ id: 470, name: 'Chickpea Wrap' }],
        'non-veg': [{ id: 472, name: 'Grilled Chicken Skewers' }],
    },
    118: {
        veg: [{ id: 474, name: 'Cabbage Soup' }],
        'non-veg': [{ id: 476, name: 'Pork Chop' }],
    },
    119: {
        veg: [{ id: 478, name: 'Spinach Lasagna' }],
        'non-veg': [{ id: 480, name: 'Chicken Fried Rice' }],
    },
    120: {
        veg: [{ id: 482, name: 'Vegetable Stir Fry' }],
        'non-veg': [{ id: 484, name: 'Grilled Shrimp Skewers' }],
    }
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
    31: { price: '$12', speciality: 'Grilled Portobello Mushrooms with Balsamic Glaze' },
    32: { price: '$10', speciality: 'Vegan Caesar Salad with Almond Croutons' },
    33: { price: '$18', speciality: 'BBQ Pulled Pork Sandwich' },
    34: { price: '$22', speciality: 'Grilled Lamb Chops with Mint Sauce' },
    35: { price: '$20', speciality: 'Roast Beef with Horseradish Cream' },
    36: { price: '$15', speciality: 'Crispy Fish Tacos with Cilantro Slaw' },
    37: { price: '$8', speciality: 'Fried Green Tomatoes with Remoulade Sauce' },
    38: { price: '$12', speciality: 'Sweet Potato Fries with Chipotle Aioli' },
    39: { price: '$16', speciality: 'Lobster Roll with Buttered Buns' },
    40: { price: '$10', speciality: 'Vegan Sweet Potato and Black Bean Chili' },
    41: { price: '$9', speciality: 'Mushroom and Swiss Burger' },
    42: { price: '$13', speciality: 'Sausage and Peppers Sandwich' },
    43: { price: '$14', speciality: 'Margherita Pizza with Fresh Basil' },
    44: { price: '$17', speciality: 'Pasta Bolognese with Beef Ragù' },
    45: { price: '$15', speciality: 'Grilled Sea Bass with Lemon Butter' },
    46: { price: '$18', speciality: 'Classic Beef Tacos with Salsa Verde' },
    47: { price: '$16', speciality: 'Pulled BBQ Chicken Sliders' },
    48: { price: '$14', speciality: 'Vegetarian Lentil Soup with Rosemary' },
    49: { price: '$20', speciality: 'Chicken Alfredo with Garlic Bread' },
    50: { price: '$22', speciality: 'Baked Ziti with Mozzarella and Parmesan' },
    51: { price: '$24', speciality: 'Roasted Duck Breast with Orange Glaze' },
    52: { price: '$13', speciality: 'Beef Empanadas with Chimichurri Sauce' },
    53: { price: '$9', speciality: 'Buffalo Cauliflower Bites with Blue Cheese Dip' },
    54: { price: '$12', speciality: 'Steak and Fries with Garlic Butter' },
    55: { price: '$18', speciality: 'Beef Wellington with Mushrooms and Puff Pastry' },
    56: { price: '$8', speciality: 'Fettuccine Alfredo with Shrimp' },
    57: { price: '$14', speciality: 'Grilled Veggie Tacos with Avocado Crema' },
    58: { price: '$10', speciality: 'Crispy Shrimp Tacos with Spicy Mayo' },
    59: { price: '$12', speciality: 'Vegetable Samosas with Tamarind Chutney' },
    60: { price: '$16', speciality: 'Crispy Chicken Wings with Ranch Dip' },
    61: { price: '$14', speciality: 'Shrimp Scampi with Garlic Bread' },
    62: { price: '$19', speciality: 'Grilled Filet Mignon with Roasted Garlic Mashed Potatoes' },
    63: { price: '$21', speciality: 'Peking Duck with Hoisin Sauce and Pancakes' },
    64: { price: '$17', speciality: 'Vegan Mushroom Risotto with Truffle Oil' },
    65: { price: '$18', speciality: 'Seafood Paella with Mussels, Shrimp, and Clams' },
    66: { price: '$22', speciality: 'Beef Tenderloin with Roasted Potatoes' },
    67: { price: '$15', speciality: 'Baked Salmon with Lemon-Dill Sauce' },
    68: { price: '$19', speciality: 'Grilled Chicken Thighs with Paprika Rub' },
    69: { price: '$11', speciality: 'Vegetarian Pad Thai with Tofu' },
    70: { price: '$14', speciality: 'Pork Tenderloin with Apple Sauce' },
    71: { price: '$16', speciality: 'Crab Cakes with Lemon Aioli' },
    72: { price: '$18', speciality: 'Vegetable Lasagna with Ricotta and Spinach' },
    73: { price: '$22', speciality: 'Lamb Korma with Basmati Rice' },
    74: { price: '$24', speciality: 'Grilled Octopus with Lemon Vinaigrette' },
    75: { price: '$18', speciality: 'Chicken Shawarma with Pita and Tzatziki' },
    76: { price: '$20', speciality: 'BBQ Beef Brisket with Coleslaw' },
    77: { price: '$14', speciality: 'Vegan Buddha Bowl with Roasted Vegetables' },
    78: { price: '$12', speciality: 'Turkey and Cranberry Sandwich' },
    79: { price: '$16', speciality: 'Seafood Gnocchi with Creamy Tomato Sauce' },
    80: { price: '$18', speciality: 'Chargrilled Ribeye Steak with Chimichurri' },
    81: { price: '$19', speciality: 'Seared Ahi Tuna with Soy Glaze' },
    82: { price: '$16', speciality: 'Pasta Primavera with Fresh Vegetables' },
    83: { price: '$14', speciality: 'Grilled Veggie Skewers with Lemon Herb Sauce' },
    84: { price: '$12', speciality: 'Pulled Chicken Nachos with Guacamole' },
    85: { price: '$17', speciality: 'Lobster Bisque with Cream' },
    86: { price: '$21', speciality: 'Bacon-Wrapped Filet Mignon with Garlic Mashed Potatoes' },
    87: { price: '$10', speciality: 'Vegan Falafel with Hummus' },
    88: { price: '$13', speciality: 'Spicy Beef Empanadas' },
    89: { price: '$22', speciality: 'BBQ Chicken Wings with Smoky Sauce' },
    90: { price: '$20', speciality: 'Eggplant Parmesan with Marinara Sauce' },
    91: { price: '$15', speciality: 'Grilled Shrimp Tacos with Cilantro' },
    92: { price: '$11', speciality: 'Veggie Burger with Avocado' },
    93: { price: '$18', speciality: 'Chicken Caesar Salad with Parmesan Croutons' },
    94: { price: '$13', speciality: 'Vegan Burrito with Sweet Potatoes' },
    95: { price: '$19', speciality: 'Vegetarian Chili with Avocado' },
    96: { price: '$14', speciality: 'Roast Chicken with Herb Butter' },
    97: { price: '$22', speciality: 'Szechuan Tofu Stir Fry with Rice' },
    98: { price: '$17', speciality: 'Seared Scallops with Garlic Butter' },
    99: { price: '$21', speciality: 'Grilled Tuna Steaks with Wasabi Sauce' },
    100: { price: '$16', speciality: 'Vegan Stir Fry with Tofu and Vegetables' },
    // Continuing up to 500...
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
        { id: 21, name: 'Vegan Chocolate Smoothie with almond butter, cocoa, and coconut milk.' }, // New
        { id: 22, name: 'Coconut Milk Rice Pudding with cinnamon and almonds.' }, // New
        { id: 23, name: 'Roasted Sweet Potatoes with quinoa and a tahini dressing.' }, // New
        { id: 24, name: 'Baked Avocado Fries with a lemon-garlic dip.' }, // New
        { id: 25, name: 'Vegan Mac and Cheese with cashew cheese sauce.' }, // New
        { id: 26, name: 'Spicy Mango Salad with a tangy chili-lime dressing.' }, // New
        { id: 27, name: 'Cucumber and Tomato Salad with olive oil and lemon juice.' }, // New
        { id: 28, name: 'Mango Chia Pudding with a hint of vanilla.' }, // New
        { id: 29, name: 'Vegan Tacos with a walnut “meat” and avocado.' }, // New
        { id: 30, name: 'Raw Vegan Brownies with dates, cocoa, and nuts.' }, // New
        { id: 31, name: 'Kale Chips with a smoky paprika seasoning.' }, // New
        { id: 32, name: 'Pea and Mint Soup with a dash of olive oil.' }, // New
        { id: 33, name: 'Zucchini Fritters with a tahini dipping sauce.' }, // New
        { id: 34, name: 'Vegan Mushroom Stroganoff with cashew cream sauce.' }, // New
        { id: 35, name: 'Lentil Tacos with guacamole and salsa.' }, // New
        { id: 36, name: 'Avocado Smoothie with coconut water and a dash of cinnamon.' }, // New
        { id: 37, name: 'Veggie Burger with homemade vegan mayo.' }, // New
        { id: 38, name: 'Grilled Portobello Mushrooms with balsamic glaze.' }, // New
        { id: 39, name: 'Cabbage Salad with apple cider vinegar and honey dressing.' }, // New
        { id: 40, name: 'Tomato and Basil Soup with a touch of coconut milk.' }, // New
        { id: 41, name: 'Spicy Chickpea Wraps with hummus and pickled onions.' }, // New
        { id: 42, name: 'Vegan Quinoa Salad with mango and lime dressing.' }, // New
        { id: 43, name: 'Grilled Vegetable Skewers with a garlic-herb marinade.' }, // New
        { id: 44, name: 'Vegan Buddha Bowl with roasted veggies and tahini dressing.' }, // New
        { id: 45, name: 'Chickpea Falafel with cucumber yogurt sauce.' }, // New
        { id: 46, name: 'Vegan Blueberry Muffins made with almond flour.' }, // New
        { id: 47, name: 'Cabbage Stir-Fry with tofu and soy sauce.' }, // New
        { id: 48, name: 'Cucumber and Avocado Salad with sesame seeds.' }, // New
        { id: 49, name: 'Almond Butter and Banana Toast with chia seeds.' }, // New
        { id: 50, name: 'Cauliflower and Cashew Soup with coconut milk.' }, // New
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
        { id: 21, name: 'Buffalo Wings with blue cheese dip.' }, // New
        { id: 22, name: 'Chicken and Waffles with maple syrup.' }, // New
        { id: 23, name: 'Pulled BBQ Chicken Sandwiches with pickles.' }, // New
        { id: 24, name: 'Steak Tacos with grilled onions and cilantro.' }, // New
        { id: 25, name: 'Beef Burger with cheddar cheese, bacon, and BBQ sauce.' }, // New
        { id: 26, name: 'Chicken Parmesan with marinara sauce and spaghetti.' }, // New
        { id: 27, name: 'Spaghetti and Meatballs with garlic bread.' }, // New
        { id: 28, name: 'Fettuccine Alfredo with creamy sauce and grilled chicken.' }, // New
        { id: 29, name: 'Roast Beef Sandwich with melted cheese and horseradish sauce.' }, // New
        { id: 30, name: 'BBQ Ribs with baked beans and cornbread.' }, // New
        { id: 31, name: 'Cheeseburger with lettuce, tomato, and pickles.' }, // New
        { id: 32, name: 'Pork Schnitzel with mashed potatoes and gravy.' }, // New
        { id: 33, name: 'Grilled Salmon with lemon-dill sauce and roasted potatoes.' }, // New
        { id: 34, name: 'Lasagna Roll-Ups with ricotta and marinara sauce.' }, // New
        { id: 35, name: 'Chicken Tenders with honey mustard dipping sauce.' }, // New
        { id: 36, name: 'Vegetable Stir-Fry with rice and soy sauce.' }, // New
        { id: 37, name: 'Eggplant Parmesan with marinara sauce and mozzarella.' }, // New
        { id: 38, name: 'Cheese Pizza with extra cheese and fresh basil.' }, // New
        { id: 39, name: 'Beef Stew with root vegetables and a rich broth.' }, // New
        { id: 40, name: 'Egg Salad Sandwich with lettuce and mayo.' }, // New
        { id: 41, name: 'Chicken Fajitas with peppers and onions.' }, // New
        { id: 42, name: 'Seafood Paella with shrimp, mussels, and saffron rice.' }, // New
        { id: 43, name: 'Pulled Pork Nachos with jalapenos and melted cheese.' }, // New
        { id: 44, name: 'Meatball Sub with marinara sauce and melted mozzarella.' }, // New
        { id: 45, name: 'Chicken Fried Steak with mashed potatoes and gravy.' }, // New
        { id: 46, name: 'Crab Cakes with remoulade sauce.' }, // New
        { id: 47, name: 'Turkey Club Sandwich with bacon and avocado.' }, // New
        { id: 48, name: 'Grilled Cheese Sandwich with tomato soup.' }, // New
        { id: 49, name: 'Pulled Chicken Tacos with chipotle crema.' }, // New
        { id: 50, name: 'Shrimp Scampi with linguine and garlic butter.' }, // New
        { id: 51, name: 'Fried Fish Tacos with coleslaw and spicy mayo.' }, // New
        { id: 52, name: 'Steak and Cheese Sandwich with peppers and onions.' }, // New
        { id: 53, name: 'BBQ Chicken Wings with ranch dip.' }, // New
        { id: 54, name: 'Chili with ground beef, beans, and cheddar cheese.' }, // New
        { id: 55, name: 'Pasta Primavera with garlic, olive oil, and Parmesan.' }, // New
        { id: 56, name: 'Grilled Pork Chops with mashed sweet potatoes.' }, // New
        { id: 57, name: 'Spaghetti Carbonara with pancetta and Parmesan.' }, // New
        { id: 58, name: 'Chicken Quesadillas with sour cream and guacamole.' }, // New
        { id: 59, name: 'Bacon-Wrapped Shrimp with lemon butter sauce.' }, // New
        { id: 60, name: 'Pasta with Pesto Sauce and cherry tomatoes.' }, // New
        { id: 61, name: 'Chicken Shawarma with pita bread and hummus.' }, // New
        { id: 62, name: 'Steak and Fries with garlic butter.' }, // New
        { id: 63, name: 'Vegetarian Chili with kidney beans and cornbread.' }, // New
        { id: 64, name: 'Cheeseburger Sliders with pickles and ketchup.' }, // New
        { id: 65, name: 'Fish Tacos with slaw and avocado crema.' }, // New
        { id: 66, name: 'Bacon-Wrapped Chicken with roasted potatoes.' }, // New
        { id: 67, name: 'Lamb Chops with mint jelly and mashed potatoes.' }, // New
        { id: 68, name: 'BBQ Brisket with pickles and potato salad.' }, // New
        { id: 69, name: 'Vegetable Samosas with tamarind chutney.' }, // New
        { id: 70, name: 'Grilled Chicken with couscous and roasted veggies.' }, // New
        { id: 71, name: 'Chicken Biryani with saffron rice and raita.' }, // New
        { id: 72, name: 'Pulled Pork Sliders with pickled onions.' }, // New
        { id: 73, name: 'Beef Empanadas with chimichurri sauce.' }, // New
        { id: 74, name: 'Spicy Chicken Wings with bleu cheese dip.' }, // New
        { id: 75, name: 'Lobster Rolls with buttery toasted buns.' }, // New
        { id: 76, name: 'Turkey Meatballs with spaghetti and marinara.' }, // New
        { id: 77, name: 'Shrimp and Grits with cajun seasoning.' }, // New
        { id: 78, name: 'BBQ Pulled Chicken Sandwiches with coleslaw.' }, // New
        { id: 79, name: 'Vegetable Stir Fry with noodles and soy sauce.' }, // New
        { id: 80, name: 'Roast Chicken with lemon and rosemary potatoes.' }, // New
    ]
};



app.get('/', (req, res) => {
    res.send('Hello, world!');
});

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
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});