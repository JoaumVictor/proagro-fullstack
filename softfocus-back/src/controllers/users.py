from flask_restx import Resource
from src.server.instance import server

app, api = server.app, server.api

db_mock = [
    {
        "id": 1,
        "name": "Jorge",
        "description": "tio do agronegocio"
    },
]

@api.route("/users/getAll")
class Users(Resource):
    def get(self):
        print(Resource)
        return db_mock
