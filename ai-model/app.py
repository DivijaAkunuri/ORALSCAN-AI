from flask import Flask, request, jsonify
from flask_cors import CORS
import random

app = Flask(__name__)
CORS(app)

@app.route("/predict", methods=["POST"])
def predict():
    try:
        print("📥 REQUEST RECEIVED")

        if "image" not in request.files:
            return jsonify({"error": "No image uploaded"}), 400

        image = request.files["image"]

        print("🟢 IMAGE RECEIVED:", image.filename)

        # 🔥 SIMPLE AI SIMULATION (guaranteed output)
        classes = ["Normal", "Suspicious Lesion", "Oral Cancer"]

        prediction = random.choice(classes)
        confidence = random.randint(70, 98)

        print("🤖 OUTPUT:", prediction, confidence)

        return jsonify({
            "prediction": prediction,
            "confidence": confidence
        })

    except Exception as e:
        print("❌ ERROR:", str(e))
        return jsonify({"error": str(e)}), 500


if __name__ == "__main__":
    app.run(port=5001, debug=True)