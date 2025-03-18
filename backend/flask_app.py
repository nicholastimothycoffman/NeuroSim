from flask import Flask, request, jsonify
import openai

app = Flask(__name__)

# Initialize OpenAI API
openai.api_key = "openai_api_key"

@app.route('/generate', methods=['POST'])
def generate_response():
	data = request.json
	response = openai.Completion.create(
		engine="text-davinci-003",
		prompt=data['text'],
		max_tokens=100
	)
	return jsonify({"response": response.choices[0].text.strip()})

if __name__ == '__main__':
	app.run(debug=True)
