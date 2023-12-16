from flask import Flask, render_template, request
import os

app = Flask(__name__)

#Create routes to where all the folders are located
@app.route('/css/<filename>')
def serve_css(filename):
    return app.send_static_file('css/' + filename)

@app.route('/js/<filename>')
def serve_javascript(filename):
    return app.send_static_file('js/' + filename)

@app.route('/IMG/<filename>')
def serve_images(filename):
    return app.send_static_file('IMG/' + filename)

#Create page routes
@app.route('/')
def index():
    return render_template('index.html')


#Create server host
if __name__ == '__main__':
    app.run(host='0.0.0.0', port=7000, debug=True)