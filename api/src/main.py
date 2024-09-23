from flask import Flask, json, request
from flask_cors import CORS
from waitress import serve

import src.requests.base as base

api = Flask(__name__)
CORS(api)

@api.route("/")
def init():
    return "Poly API en ejecución."

@api.route("/all-<field>")
def polys(field):
    return base.get_all(field)

@api.route("/<field>-from-type_id:<type_id>")
def polys_from_(field, type_id):
    return base.get_from_type(field, type_id)

@api.route("/properties-from-polymer_id:<polymer_id>")
def properties(polymer_id):
    return base.get_properties(polymer_id)

@api.route("/description-from-polymer_id:<polymer_id>")
def description(polymer_id):
    return base.get_data(polymer_id, "description")

@api.route("/usage-from-polymer_id:<polymer_id>")
def usage(polymer_id):
    return base.get_data(polymer_id, "usage")

@api.route("/mix", methods=["POST"])
def mix():
    response = json.jsonify(base.get_mix(request.get_json(force=True)))
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

@api.route("/suggest", methods=["POST"])
def suggest():
    response = json.jsonify(base.get_suggestion(request.get_json(force=True)))
    response.headers.add('Access-Control-Allow-Origin', '*')
    return response

def main():
    serve(api, listen='*:5000')

if __name__ == "__main__":
    main()
