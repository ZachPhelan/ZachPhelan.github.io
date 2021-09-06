const core = require('@actions/core');
const github = require('@actions/github');
const writeGood = require('write-good');

try {
  // `who-to-greet` input defined in action metadata file
  const textInput = core.getInput('text');
  var suggestions = writeGood('${textInput}');
  var output = JSON.stringify(suggestions, undefined, 2);
  console.log(textInput);
  console.log(output);
  // Get the JSON webhook payload for the event that triggered the workflow
  const payload = JSON.stringify(github.context.payload, undefined, 2)
  console.log(`The event payload: ${payload}`);
} catch (error) {
  core.setFailed(error.message);
}
