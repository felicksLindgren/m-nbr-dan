import azure.cosmos.documents as documents
import azure.cosmos.cosmos_client as cosmos_client
import azure.cosmos.exceptions as exceptions
from azure.cosmos.partition_key import PartitionKey
import requests
import config

HOST = config.settings['host']
MASTER_KEY = config.settings['master_key']
DATABASE_ID = config.settings['database_id']
CONTAINER_ID = config.settings['container_id']
USERNAME = config.settings['username']
PASSWORD = config.settings['password']
BASE_ADDRESS = config.settings['base_address']

def fetch_token():
    # x-www-form-urlencoded body
    body = {
        'username': USERNAME,
        'password': PASSWORD,
        'client_id': 'com.moonclimbing.mb',
        'grant_type': 'password'
    }

    # POST request
    response = requests.post(f'{BASE_ADDRESS}/token', data=body)
    response.raise_for_status()
    return response.json()['access_token']

def fetch_problems(token, index):
    # Authorization header
    headers = {
        'Authorization': 'Bearer ' + token
    }

    # GET request
    response = requests.get(f'{BASE_ADDRESS}/v1/_moonapi/problems/v3/1/0/{index}', headers=headers)
    response.raise_for_status()

    content = response.json()
    problems = content['data']
    return problems

def populate_database(container, token):
    index = 0

    while True:
        print(f'Fetching problems from index {index}')
        problems = fetch_problems(token, index)

        if len(problems) == 0:
            break

        for problem in problems:
            problem['id'] = f'{problem["apiId"]}'
            container.upsert_item(problem)
            
        index = problems[-1]['apiId']

def start_import():
    client = cosmos_client.CosmosClient(
        HOST,
        { 'masterKey': MASTER_KEY },
        user_agent="CosmosDBPythonQuickstart",
        user_agent_overwrite=True
    )

    db = client.create_database_if_not_exists(id=DATABASE_ID)
    container = db.create_container_if_not_exists(
        id=CONTAINER_ID, 
        partition_key=PartitionKey(path="/grade"),
        offer_throughput=400
    )

    token = fetch_token()
    populate_database(container, token)