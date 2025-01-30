$(document).ready(function () {
    // Fetch states when the page loads
    fetchStates();

    // Fetch cities when a state is selected
    $('#state').change(function () {
        const stateId = $(this).val();
        fetchCities(stateId);
    });

    // Fetch hotels when a city is selected
    $('#city').change(function () {
        const cityId = $(this).val();
        fetchHotels(cityId);
    });

    // Fetch food items based on selected hotel and food type
    $('#foodType, #hotel').change(function () {
        const hotelId = $('#hotel').val();
        const foodType = $('#foodType').val();
        fetchFoodItems(hotelId, foodType);
    });

    // Handle form submission
    $('#foodForm').submit(function (event) {
        event.preventDefault();
        const formData = {
            state: $('#state').val(),
            city: $('#city').val(),
            hotel: $('#hotel').val(),
            foodType: $('#foodType').val(),
            foodItem: $('#foodItem').val(),
        };

        // Send data to the backend
        $.ajax({
            url: 'http://localhost:5000/find-food',
            type: 'POST',
            data: formData,
            success: function (data) {
                $('#price').text(data.price);
                $('#speciality').text(data.speciality);
                $('#recipe').text(data.recipe);
            },
            error: function (error) {
                console.error(error);
            }
        });
    });

    // Fetch states from backend
    function fetchStates() {
        $.ajax({
            url: 'http://localhost:5000/api/states',
            method: 'GET',
            success: function (data) {
                data.states.forEach(state => {
                    $('#state').append(new Option(state.name, state.id));
                });
            },
        });
    }

    // Fetch cities based on selected state
    function fetchCities(stateId) {
        $.ajax({
            url: `http://localhost:5000/api/cities/${stateId}`,
            method: 'GET',
            success: function (data) {
                $('#city').empty();
                data.cities.forEach(city => {
                    $('#city').append(new Option(city.name, city.id));
                });
            },
        });
    }

    // Fetch hotels based on selected city
    function fetchHotels(cityId) {
        $.ajax({
            url: `http://localhost:5000/api/hotels/${cityId}`,
            method: 'GET',
            success: function (data) {
                $('#hotel').empty();
                data.hotels.forEach(hotel => {
                    $('#hotel').append(new Option(hotel.name, hotel.id));
                });
            },
        });
    }

    // Fetch food items based on selected hotel and food type
    function fetchFoodItems(hotelId, foodType) {
        $.ajax({
            url: `http://localhost:5000/api/food-items/${hotelId}/${foodType}`,
            method: 'GET',
            success: function (data) {
                $('#foodItem').empty();
                data.foodItems.forEach(item => {
                    $('#foodItem').append(new Option(item.name, item.id));
                });
            },
        });
    }
});
