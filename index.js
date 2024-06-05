// Run this script to automatically generate the functions
// It's not pretty, but it should get the job done

const { writeFileSync } = require("node:fs")
const path = require("path")

// Change the values below to modify the function values
const ONDOCUMENTCREATED_FUNCTION_AMOUNT = 5
const ONDOCUMENTWRITTEN_FUNCTION_AMOUNT = 5
const ONREQUEST_FUNCTION_AMOUNT = 40
const GROUPED_FUNCTION_AMOUNT = 20
const REGION = "europe-west1"

function makeRandStr() {
    const length = 8;
    let res = '';
    const characters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
    const charactersLength = characters.length;
    let counter = 0;
    while (counter < length) {
        res += characters.charAt(Math.floor(Math.random() * charactersLength));
        counter += 1;
    }
    return res;
}

const randStr = makeRandStr() // Generate a random string per run so functions will always have a "something different" so they keep getting re-deployed

let finalStr = `const { onRequest } = require("firebase-functions/v2/https");
const { onDocumentCreated, onDocumentWritten } = require("firebase-functions/v2/firestore");
const logger = require("firebase-functions/logger");
`

// ---- onDocumentCreated function ----
let _onDocumentCreatedFunc = ``;

const onDocumentCreatedFunc = (count) => `
exports.docCreated${count} = onDocumentCreated("collection${count}/{doc}", (event) => {
    const snapshot = event.data;
    if (!snapshot) {
        console.log("No data associated with the event");
        return;
    }
    const data = snapshot.data();
    const name = data.name;
    logger.info("Hello name!", { name, message: "${randStr}" });
});
`

for (let i = 0; i < ONDOCUMENTCREATED_FUNCTION_AMOUNT; i++) {
    const c = i < 10 ? `0${i}` : i;
    _onDocumentCreatedFunc += onDocumentCreatedFunc(c)
}

finalStr += _onDocumentCreatedFunc

// ---- onDocumentWritten function ----
let _onDocumentWrittenFunc = ``;

const onDocumentWrittenFunc = (count) => `
exports.docWritten${count} = onDocumentWritten("collection${count}/{doc}", (event) => {
    const snapshot = event.data;
    if (!snapshot) {
        console.log("No data associated with the event");
        return;
    }
    const data = snapshot.data();
    const name = data.name;
    logger.info("Hello name!", { name, message: "${randStr}" });
});
`

for (let i = 0; i < ONDOCUMENTWRITTEN_FUNCTION_AMOUNT; i++) {
    const c = i < 10 ? `0${i}` : i;
    _onDocumentWrittenFunc += onDocumentWrittenFunc(c)
}

finalStr += _onDocumentWrittenFunc

// ---- onRequest function ----
let _onRequestFunc = ``

const onRequestFunc = (count) => `
exports.helloWorld${count} = onRequest({
    region: "${REGION}"
}, (request, response) => {
    logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase function number - ${count} - ${randStr}!");
});
`

for (let i = 0; i < ONREQUEST_FUNCTION_AMOUNT; i++) {
    const c = i < 10 ? `0${i}` : i;
    _onRequestFunc += onRequestFunc(c)
}

finalStr += _onRequestFunc

// ---- Grouped  onRequest function ----
let _groupedFuncInner = ''
for (let i = 0; i < GROUPED_FUNCTION_AMOUNT; i++) {
    const c = i < 10 ? `0${i}` : i;
    _groupedFuncInner += `
    helloWorldGrp${c}: onRequest({
    region: "${REGION}"
}, (request, response) => {
    logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase grouped function number - ${c} - ${randStr}!");
}),
    `
}
const _groupedFunc = `
exports.grouped = { ${_groupedFuncInner}
}`

finalStr += _groupedFunc

const indexPath = path.join(__dirname, "functions", "index.js")
writeFileSync(indexPath, finalStr)
