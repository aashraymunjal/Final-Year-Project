import os
import sys
import requests
import seaborn as sns
import matplotlib.pyplot as plt
import cloudinary
import cloudinary.uploader
import cloudinary.api
# from videoTester import vidId, timestamps, reactions
import pickle

datafile = open('dataPickle', 'rb')
data = pickle.load(datafile)

vidId, timestamps, reactions = data[0], data[1], data[2]

# cloudinary API config
cloudinary.config(
    cloud_name="dtbfdwkge",
    api_key="457239481352565",
    api_secret="7TYqIpK3v6VaP98LKLW-StMFQGs"
)

# seaborn config
sns.set()

plt.figure()
timeseries = sns.stripplot(timestamps, reactions)
timeseries.get_figure().savefig("timeseries.jpg")
tsURL = cloudinary.uploader.upload("timeseries.jpg")['url']
plt.figure()
countplot = sns.countplot(reactions)
countplot.get_figure().savefig("countplot.jpg")
cpURL = cloudinary.uploader.upload("countplot.jpg")['url']
data = {
    'id': vidId,
    'tsURL': tsURL,
    'cpURL': cpURL
}
# print(timestamps)
r = requests.post(url="http://localhost:3000/postReaction", data=data)
print(r.text)
