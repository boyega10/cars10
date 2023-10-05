
export async function fetchCars() {
    const headers = {

        'X-RapidAPI-Key': '787bc27b7bmsh2d4bbeedd934b89p157383jsn90b93b6e4cff',
        'X-RapidAPI-Host': 'cars-by-api-ninjas.p.rapidapi.com'
    }
    const response = await fetch('https://cars-by-api-ninjas.p.rapidapi.com/v1/cars?model=corolla', { headers: headers, });
    const result = await response.json();

    return result;

}