const { onRequest } = require("firebase-functions/v2/https");
const { onDocumentCreated, onDocumentWritten } = require("firebase-functions/v2/firestore");
const logger = require("firebase-functions/logger");

exports.docCreated00 = onDocumentCreated("collection00/{doc}", (event) => {
  const snapshot = event.data;
  if (!snapshot) {
    console.log("No data associated with the event");
    return;
  }
  const data = snapshot.data();
  const name = data.name;
  logger.info("Hello name!", { name, message: "O5mO00cu" });
});

exports.docCreated01 = onDocumentCreated("collection01/{doc}", (event) => {
  const snapshot = event.data;
  if (!snapshot) {
    console.log("No data associated with the event");
    return;
  }
  const data = snapshot.data();
  const name = data.name;
  logger.info("Hello name!", { name, message: "O5mO00cu" });
});

exports.docCreated02 = onDocumentCreated("collection02/{doc}", (event) => {
  const snapshot = event.data;
  if (!snapshot) {
    console.log("No data associated with the event");
    return;
  }
  const data = snapshot.data();
  const name = data.name;
  logger.info("Hello name!", { name, message: "O5mO00cu" });
});

exports.docCreated03 = onDocumentCreated("collection03/{doc}", (event) => {
  const snapshot = event.data;
  if (!snapshot) {
    console.log("No data associated with the event");
    return;
  }
  const data = snapshot.data();
  const name = data.name;
  logger.info("Hello name!", { name, message: "O5mO00cu" });
});

exports.docCreated04 = onDocumentCreated("collection04/{doc}", (event) => {
  const snapshot = event.data;
  if (!snapshot) {
    console.log("No data associated with the event");
    return;
  }
  const data = snapshot.data();
  const name = data.name;
  logger.info("Hello name!", { name, message: "O5mO00cu" });
});

exports.docWritten00 = onDocumentWritten("collection00 /{doc}", (event) => {
  const snapshot = event.data;
  if (!snapshot) {
    console.log("No data associated with the event");
    return;
  }
  const data = snapshot.data();
  const name = data.name;
  logger.info("Hello name!", { name, message: "O5mO00cu" });
});

exports.docWritten01 = onDocumentWritten("collection01 /{doc}", (event) => {
  const snapshot = event.data;
  if (!snapshot) {
    console.log("No data associated with the event");
    return;
  }
  const data = snapshot.data();
  const name = data.name;
  logger.info("Hello name!", { name, message: "O5mO00cu" });
});

exports.docWritten02 = onDocumentWritten("collection02 /{doc}", (event) => {
  const snapshot = event.data;
  if (!snapshot) {
    console.log("No data associated with the event");
    return;
  }
  const data = snapshot.data();
  const name = data.name;
  logger.info("Hello name!", { name, message: "O5mO00cu" });
});

exports.docWritten03 = onDocumentWritten("collection03 /{doc}", (event) => {
  const snapshot = event.data;
  if (!snapshot) {
    console.log("No data associated with the event");
    return;
  }
  const data = snapshot.data();
  const name = data.name;
  logger.info("Hello name!", { name, message: "O5mO00cu" });
});

exports.docWritten04 = onDocumentWritten("collection04 /{doc}", (event) => {
  const snapshot = event.data;
  if (!snapshot) {
    console.log("No data associated with the event");
    return;
  }
  const data = snapshot.data();
  const name = data.name;
  logger.info("Hello name!", { name, message: "O5mO00cu" });
});

exports.helloWorld00 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 00 - O5mO00cu!");
});

exports.helloWorld01 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 01 - O5mO00cu!");
});

exports.helloWorld02 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 02 - O5mO00cu!");
});

exports.helloWorld03 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 03 - O5mO00cu!");
});

exports.helloWorld04 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 04 - O5mO00cu!");
});

exports.helloWorld05 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 05 - O5mO00cu!");
});

exports.helloWorld06 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 06 - O5mO00cu!");
});

exports.helloWorld07 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 07 - O5mO00cu!");
});

exports.helloWorld08 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 08 - O5mO00cu!");
});

exports.helloWorld09 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 09 - O5mO00cu!");
});

exports.helloWorld10 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 10 - O5mO00cu!");
});

exports.helloWorld11 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 11 - O5mO00cu!");
});

exports.helloWorld12 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 12 - O5mO00cu!");
});

exports.helloWorld13 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 13 - O5mO00cu!");
});

exports.helloWorld14 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 14 - O5mO00cu!");
});

exports.helloWorld15 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 15 - O5mO00cu!");
});

exports.helloWorld16 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 16 - O5mO00cu!");
});

exports.helloWorld17 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 17 - O5mO00cu!");
});

exports.helloWorld18 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 18 - O5mO00cu!");
});

exports.helloWorld19 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 19 - O5mO00cu!");
});

exports.helloWorld20 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 20 - O5mO00cu!");
});

exports.helloWorld21 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 21 - O5mO00cu!");
});

exports.helloWorld22 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 22 - O5mO00cu!");
});

exports.helloWorld23 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 23 - O5mO00cu!");
});

exports.helloWorld24 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 24 - O5mO00cu!");
});

exports.helloWorld25 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 25 - O5mO00cu!");
});

exports.helloWorld26 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 26 - O5mO00cu!");
});

exports.helloWorld27 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 27 - O5mO00cu!");
});

exports.helloWorld28 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 28 - O5mO00cu!");
});

exports.helloWorld29 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 29 - O5mO00cu!");
});

exports.helloWorld30 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 30 - O5mO00cu!");
});

exports.helloWorld31 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 31 - O5mO00cu!");
});

exports.helloWorld32 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 32 - O5mO00cu!");
});

exports.helloWorld33 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 33 - O5mO00cu!");
});

exports.helloWorld34 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 34 - O5mO00cu!");
});

exports.helloWorld35 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 35 - O5mO00cu!");
});

exports.helloWorld36 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 36 - O5mO00cu!");
});

exports.helloWorld37 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 37 - O5mO00cu!");
});

exports.helloWorld38 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 38 - O5mO00cu!");
});

exports.helloWorld39 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 39 - O5mO00cu!");
});

exports.grouped = {
  helloWorldGrp00: onRequest({
    region: "europe-west1"
  }, (request, response) => {
    logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase grouped function number - 00 - O5mO00cu!");
  }),

  helloWorldGrp01: onRequest({
    region: "europe-west1"
  }, (request, response) => {
    logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase grouped function number - 01 - O5mO00cu!");
  }),

  helloWorldGrp02: onRequest({
    region: "europe-west1"
  }, (request, response) => {
    logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase grouped function number - 02 - O5mO00cu!");
  }),

  helloWorldGrp03: onRequest({
    region: "europe-west1"
  }, (request, response) => {
    logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase grouped function number - 03 - O5mO00cu!");
  }),

  helloWorldGrp04: onRequest({
    region: "europe-west1"
  }, (request, response) => {
    logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase grouped function number - 04 - O5mO00cu!");
  }),

  helloWorldGrp05: onRequest({
    region: "europe-west1"
  }, (request, response) => {
    logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase grouped function number - 05 - O5mO00cu!");
  }),

  helloWorldGrp06: onRequest({
    region: "europe-west1"
  }, (request, response) => {
    logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase grouped function number - 06 - O5mO00cu!");
  }),

  helloWorldGrp07: onRequest({
    region: "europe-west1"
  }, (request, response) => {
    logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase grouped function number - 07 - O5mO00cu!");
  }),

  helloWorldGrp08: onRequest({
    region: "europe-west1"
  }, (request, response) => {
    logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase grouped function number - 08 - O5mO00cu!");
  }),

  helloWorldGrp09: onRequest({
    region: "europe-west1"
  }, (request, response) => {
    logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase grouped function number - 09 - O5mO00cu!");
  }),

  helloWorldGrp10: onRequest({
    region: "europe-west1"
  }, (request, response) => {
    logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase grouped function number - 10 - O5mO00cu!");
  }),

  helloWorldGrp11: onRequest({
    region: "europe-west1"
  }, (request, response) => {
    logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase grouped function number - 11 - O5mO00cu!");
  }),

  helloWorldGrp12: onRequest({
    region: "europe-west1"
  }, (request, response) => {
    logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase grouped function number - 12 - O5mO00cu!");
  }),

  helloWorldGrp13: onRequest({
    region: "europe-west1"
  }, (request, response) => {
    logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase grouped function number - 13 - O5mO00cu!");
  }),

  helloWorldGrp14: onRequest({
    region: "europe-west1"
  }, (request, response) => {
    logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase grouped function number - 14 - O5mO00cu!");
  }),

  helloWorldGrp15: onRequest({
    region: "europe-west1"
  }, (request, response) => {
    logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase grouped function number - 15 - O5mO00cu!");
  }),

  helloWorldGrp16: onRequest({
    region: "europe-west1"
  }, (request, response) => {
    logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase grouped function number - 16 - O5mO00cu!");
  }),

  helloWorldGrp17: onRequest({
    region: "europe-west1"
  }, (request, response) => {
    logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase grouped function number - 17 - O5mO00cu!");
  }),

  helloWorldGrp18: onRequest({
    region: "europe-west1"
  }, (request, response) => {
    logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase grouped function number - 18 - O5mO00cu!");
  }),

  helloWorldGrp19: onRequest({
    region: "europe-west1"
  }, (request, response) => {
    logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase grouped function number - 19 - O5mO00cu!");
  }),

}