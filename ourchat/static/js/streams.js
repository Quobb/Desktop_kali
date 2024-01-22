import { createClient, createMicrophoneAndCameraTracks } from "../assets/AgoraRTC_N-4.19.3";

const APP_ID = '9708b3805c704176ac76ec3e44a13f6c';
const CHANNEL = 'main';
const TOKEN = '007eJxTYJg3O+vZApfVNX/1veVSRA7qdn4tljYp/2LO/u/bu3vWLz4rMFiaG1gkGVsYmCabG5gYmpslJpubpSYbp5qYJBoap5klyxfEpjYEMjLU333BysgAgSA+C0NuYmYeAwMAqu0g3Q==';
let UID;
const client = createClient({mode:'rtc',codec:'vp8'});

let localTracks = [ ]
let remoteUser = {}


let joinAndDisplayLocalStream = async ( ) => {
    UID =  await client.join(APP_ID,CHANNEL,TOKEN,null)

    localTracks = await createMicrophoneAndCameraTracks()


    let player = `<div class="video-container" id="user-container-${UID}">
                        <div class="username-wrapper"><span class="user-name">My Name </span></div>
                        <div class="video-player" id="user-${UID}"></div>
                    </div>`


    document.getElementById('video-streams').insertAdjacentElement('beforeend',player)

    localTracks[1].play(`user-${UID}`)

    await client.publish([localTracks[0],localTracks[1]])
}

joinAndDisplayLocalStream()
