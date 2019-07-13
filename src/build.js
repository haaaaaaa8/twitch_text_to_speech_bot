// eslint-disable-next-line node/no-unpublished-require
const { compile } = require('nexe')
const path = require('path')

async function runBuild() {
  await compile({
    input: path.join(__dirname, '../src/main.js'),
    // build: true, // required to use patches
    targets: 'mac-x64-12.6.0',
    name: 'twitch_text_to_speech_bot',
    // loglevel: 'verbose',
  }).then(() => {
    console.log('success mac')
  })

  await compile({
    input: path.join(__dirname, '../src/main.js'),
    // build: true, // required to use patches
    target: 'windows-x64-12.6.0',
    name: 'twitch_text_to_speech_bot',
    // loglevel: 'verbose',
  }).then(() => {
    console.log('success win')
  })
}

runBuild()