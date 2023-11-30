# import requests


# api_key='7ad0e73cc079b7f0ccc3572089f7289c'
# user_input=input("Enter city:")

# weather_data=requests.get(
#     f"https://api.openweathermap.org/data/2.5/weather?q={user_input}&units=imperial&appid={api_key}"
# )

import requests

# Replace 'API_URL' with the URL of the API you want to access
api_key='7ad0e73cc079b7f0ccc3572089f7289c'
user_input='india'
api_url = f'https://api.openweathermap.org/data/2.5/weather?q={user_input}&units=imperial&appid={api_key}'

# Send an HTTP GET request to the API
response = requests.get(api_url)

# Check if the request was successful (status code 200)
if response.status_code == 200:
    # Parse the JSON response
    data = response.json()

    # Now you can work with the JSON data
    print(data)
else:
    print(f'Failed to retrieve data from the API. Status code: {response.status_code}')


 