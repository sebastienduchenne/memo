from flask import Flask, request, render_template
app = Flask(__name__)

@app.route("/")
def helloworld():
    print("helloworld")
    return "Hello World!"


@app.route('/post_video', methods = ['GET', 'POST'])
def post_video():
    print("post_video")
    if request.method == 'POST':
        print("Recieved video File")
        file = request.files['video']
        print('File from the POST request is: {}'.format(file))
        with open("video.mp4", "wb") as video:
            video_stream = file.read()
            video.write(video_stream)
        return "Success"
    return 'Call from get'


@app.route("/helloworld")
def helloworld2():
    print("helloworld2")
    return render_template("index.html")