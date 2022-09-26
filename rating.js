 ratingData = [
    {restaurant: 'KFC', rating:5},
    {restaurant: 'Burger King', rating:4},
    {restaurant: 'KFC', rating:3},
    {restaurant: 'Domino', rating:2},
    {restaurant: 'Subway', rating:3},
    {restaurant: 'Domino', rating:1},
    {restaurant: 'Subway', rating:4},
    {restaurant: 'Pizza Hut', rating:5}
    ];
     
    //question-a//
    var restaurant_name=Array.from(new Set(ratingData.map(value=>value.restaurant)));
    let average_rating =[];
    ratingData.forEach(element => {
        let sum=0;
        let count=0;
        let average=0;
        ratingData.forEach(value=>{
            if( value.restaurant=== element.restaurant){
                sum+=value.rating;
                count++;
            };
        });
        average=(sum/count);
        average_rating.push({"restaurant": element.restaurant,"average rating": average})
    });
    let restaurant_rating =[];
    restaurant_name.forEach(element=>{
        let index=0;
        average_rating.forEach(value=>{
            if (value.restaurant ===element){
                index=average_rating.indexOf(value);
            };
        });
        restaurant_rating.push(average_rating[index]);
    });
    console.log("The average rating for all the restaurants:", restaurant_rating);


    //question-b//
    let rating_above_4= restaurant_rating.filter(value=> value["average rating"]>=4);
    console.log("Restaurants with average rating greater than or equal to 4:",rating_above_4);