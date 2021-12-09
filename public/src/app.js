const canvas = require('canvas')
const faceapi = require('face-api.js')

const { Canvas, Image, ImageData } = canvas

faceapi.env.monkeyPatch({ Canvas, Image, ImageData })
const input = require('../img') 
//const input = document.getElementById('myImage')

Promise.all([
    faceapi.nets.ssdMobilenetv1.loadFromDisk('/mnt/c/Users/akahr/Desktop/workspace/graduation-project/public/models/ssd_mobilenetv1/ssd_mobilenetv1_model-weights_manifest.json'),
    faceapi.nets.tinyFaceDetector.loadFromDisk('/mnt/c/Users/akahr/Desktop/workspace/graduation-project/public/models/tiny_face_detector/tiny_face_detector_model-weights_manifest.json'),
    faceapi.nets.faceLandmark68Net.loadFromDisk('/mnt/c/Users/akahr/Desktop/workspace/graduation-project/public/models/face_landmark_68/face_landmark_68_model-weights_manifest.json'),
    faceapi.nets.faceRecognitionNet.loadFromDisk('/mnt/c/Users/akahr/Desktop/workspace/graduation-project/public/models/face_recognition/face_recognition_model-weights_manifest.json')
]).then(start())


async function start() {
    console.log('HELLO')
    const detection = await faceapi.detectSingleFace(input)
    const detectionWithLandmarks = await detection.withFaceLandmarks()
    const result = await detectionWithLandmarks.withFaceDescriptor()

    console.log(result)
}