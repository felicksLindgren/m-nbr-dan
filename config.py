import os

# Set environment variables
settings = {
    'host': os.environ.get('ACCOUNT_HOST', 'https://cosno-shared-prod-sdc-001.documents.azure.com:443/'),
    'master_key': os.environ.get('ACCOUNT_KEY', 'ia6yXXtsf3OTsIzNoY1EEH8JM5VByMZNbvP0F7PJVhywDDnfqq6hVGqfW6u622aUIRQJG51nuRQyACDbRQ4QxQ=='),
    'database_id': os.environ.get('COSMOS_DATABASE', 'Månbrädan'),
    'container_id': os.environ.get('COSMOS_CONTAINER', 'Problems'),
    'username': os.environ.get('USERNAME', 'felicksLindgren'),
    'password': os.environ.get('PASSWORD', 'rBExW6wXk7c2*q*N'),
    'base_address': os.environ.get('BASE_ADDRESS', 'https://restapimoonboard.ems-x.com'),
}