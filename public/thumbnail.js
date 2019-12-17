var video_id = window.location.search.split('v=')[1];
var ampersandPosition = video_id.indexOf('&');
if(ampersandPosition != -1) {
  video_id = video_id.substring(0, ampersandPosition);
}

function getVideoId()
{
    return this.video_id;
}