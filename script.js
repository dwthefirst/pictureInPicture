const videoElement = document.getElementById('video');
const button = document.getElementById('button');

//Prompt user to select media stream, and then pass to video element, then play
async function selectMediaStream() {
    try {
        const mediaStream = await navigator.mediaDevices.getDisplayMedia();
        videoElement.srcObject = mediaStream;
        videoElement.onloadedmetadata = () => {
            videoElement.play();
        }
        /*
        setting constant to mediaStream data and waiting to assign until the user selects a window to share
        then we pass media stream into the video Object as src object. 
        Then, when that video has loaded, it calls a function to play the video
        */
    } catch (error) {
        //Catch Error Here
        console.log(error, "OOPSIE HAS OCCURED!");
    }
}

button.addEventListener('click', async () => {
    //Disable Button when clicked
    button.disabled = true;

    //Start Picture in Picture
    await videoElement.requestPictureInPicture(); //waiting for video element to request

    //Reset Button - if successully requested Picture in Picture
    button.disabled = false;
});

selectMediaStream();