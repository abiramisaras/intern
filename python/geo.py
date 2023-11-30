import requests

# Replace 'YOUR_API_KEY' with your OpenWeatherMap API key
api_key = '7ad0e73cc079b7f0ccc3572089f7289c'

# Replace 'CITY_NAME' and 'COUNTRY_CODE' with the city and country you want to get weather data for
city_name = 'hggkh'
country_code = 'cmd'

# Construct the API URL
url = f'http://api.openweathermap.org/data/2.5/weather?q={city_name},{country_code}&appid={api_key}'

# Send an HTTP GET request to the API
response = requests.get(url)

# Check if the request was successful (status code 200)
if response.status_code == 200:
    # Parse the JSON response
    data = response.json()

    # Extract and display weather information
    weather_description = data['weather'][0]['description']
    temperature = data['main']['temp']
    humidity = data['main']['humidity']

    print(f'Weather in {city_name}, {country_code}:')
    print(f'Description: {weather_description}')
    print(f'Temperature: {temperature}°C')
    print(f'Humidity: {humidity}%')
else:
    print(f'Failed to retrieve weather data. Status code: {response.status_code}')
