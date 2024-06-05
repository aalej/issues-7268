# Repro for issue 7268

## Versions

firebase-tools: v13.10.2<br>

## Steps to reproduce

1. Run `firebase deploy --project PROJECT_ID --debug`

```
Error: There was an error deploying functions:
- Error Failed to update function helloWorld02 in region europe-west1
- Error Failed to update function helloWorld14 in region europe-west1
- Error Failed to update function helloWorld08 in region europe-west1
- Error Failed to update function helloWorld30 in region europe-west1
- Error Failed to update function helloWorld27 in region europe-west1
- Error Failed to update function helloWorld09 in region europe-west1
```
