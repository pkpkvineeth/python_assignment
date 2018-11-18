from flask import Flask,render_template

app=Flask(__name__)
@app.route('/')
def home():
    return render_template('index.html',current=1)
@app.route('/about')
def about():
    return render_template('about.html',current=3)
@app.route('/services')
def services():
    return render_template('services.html',current=2)
if(__name__=='__main__'):
    app.run()