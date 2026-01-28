import pytest
from app import app

@pytest.fixture
def client():
    app.config['TESTING'] = True
    with app.test_client() as client:
        yield client

def test_analytics_route(client):
    rv = client.get('/analytics')
    assert rv.status_code == 200
    json_data = rv.get_json()
    assert 'data_points' in json_data
