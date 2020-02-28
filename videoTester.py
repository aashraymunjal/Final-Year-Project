import os
import sys
import cv2
import numpy as np
from keras.models import model_from_json
from keras.preprocessing import image
import time
import json
import pickle
import subprocess

#load model
model = model_from_json(open("fer_21.json", "r").read())
#load weights
model.load_weights('fer_21.h5')


face_haar_cascade = cv2.CascadeClassifier(
    'haarcascade_frontalface_default.xml')


cap = cv2.VideoCapture(0)
start = int(round(time.time()*1000))
reactions = []
timestamps = []
vidId = sys.argv[1]
while True:
    # captures frame and returns boolean value and captured image
    ret, test_img = cap.read()
    # test_img = rescale(test_img, percent=75)
    if not ret:
        continue
    gray_img = cv2.cvtColor(test_img, cv2.COLOR_BGR2GRAY)

    faces_detected = face_haar_cascade.detectMultiScale(gray_img, 1.32, 5)

    for (x, y, w, h) in faces_detected:
        cv2.rectangle(test_img, (x, y), (x+w, y+h), (255, 0, 0), thickness=7)
        # cropping region of interest i.e. face area from  image
        roi_gray = gray_img[y:y+w, x:x+h]
        roi_gray = cv2.resize(roi_gray, (48, 48))
        img_pixels = image.img_to_array(roi_gray)
        img_pixels = np.expand_dims(img_pixels, axis=0)
        img_pixels /= 255

        predictions = model.predict(img_pixels)
        now = (int(round(time.time()*1000)) - start)/1000

        #find max indexed array
        max_index = np.argmax(predictions[0])

        emotions = ('angry', 'disgust', 'fear', 'happy',
                    'sad', 'surprise', 'neutral')
        predicted_emotion = emotions[max_index]

        reactions.append(predicted_emotion)
        timestamps.append(now)

        cv2.putText(test_img, predicted_emotion, (int(x), int(y)),
                    cv2.FONT_HERSHEY_SIMPLEX, 1, (0, 0, 255), 2)

    resized_img = cv2.resize(test_img, (480, 360))
    cv2.imshow('img', resized_img)
    cv2.moveWindow('img', 844, 0)

    if cv2.waitKey(10) == ord('q'):  # wait until 'q' key is pressed        
        break

datafile = open("dataPickle", "wb")
data = [vidId, timestamps, reactions]
pickle.dump(data, datafile)
datafile.close()

cap.release()
cv2.destroyAllWindows()

process = subprocess.Popen("python processing.py", shell=True)
time.sleep(30)
subprocess.Popen("TASKKILL /F /PID {pid} /T".format(pid=process.pid))
