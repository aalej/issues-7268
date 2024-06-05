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
  logger.info("Hello name!", { name, message: "bNQkL2sI" });
});

exports.docCreated01 = onDocumentCreated("collection01/{doc}", (event) => {
  const snapshot = event.data;
  if (!snapshot) {
    console.log("No data associated with the event");
    return;
  }
  const data = snapshot.data();
  const name = data.name;
  logger.info("Hello name!", { name, message: "bNQkL2sI" });
});

exports.docCreated02 = onDocumentCreated("collection02/{doc}", (event) => {
  const snapshot = event.data;
  if (!snapshot) {
    console.log("No data associated with the event");
    return;
  }
  const data = snapshot.data();
  const name = data.name;
  logger.info("Hello name!", { name, message: "bNQkL2sI" });
});

exports.docCreated03 = onDocumentCreated("collection03/{doc}", (event) => {
  const snapshot = event.data;
  if (!snapshot) {
    console.log("No data associated with the event");
    return;
  }
  const data = snapshot.data();
  const name = data.name;
  logger.info("Hello name!", { name, message: "bNQkL2sI" });
});

exports.docCreated04 = onDocumentCreated("collection04/{doc}", (event) => {
  const snapshot = event.data;
  if (!snapshot) {
    console.log("No data associated with the event");
    return;
  }
  const data = snapshot.data();
  const name = data.name;
  logger.info("Hello name!", { name, message: "bNQkL2sI" });
});

exports.docWritten00 = onDocumentWritten("collection00/{doc}", (event) => {
  const snapshot = event.data;
  if (!snapshot) {
    console.log("No data associated with the event");
    return;
  }
  const data = snapshot.data();
  const name = data.name;
  logger.info("Hello name!", { name, message: "bNQkL2sI" });
});

exports.docWritten01 = onDocumentWritten("collection01/{doc}", (event) => {
  const snapshot = event.data;
  if (!snapshot) {
    console.log("No data associated with the event");
    return;
  }
  const data = snapshot.data();
  const name = data.name;
  logger.info("Hello name!", { name, message: "bNQkL2sI" });
});

exports.docWritten02 = onDocumentWritten("collection02/{doc}", (event) => {
  const snapshot = event.data;
  if (!snapshot) {
    console.log("No data associated with the event");
    return;
  }
  const data = snapshot.data();
  const name = data.name;
  logger.info("Hello name!", { name, message: "bNQkL2sI" });
});

exports.docWritten03 = onDocumentWritten("collection03/{doc}", (event) => {
  const snapshot = event.data;
  if (!snapshot) {
    console.log("No data associated with the event");
    return;
  }
  const data = snapshot.data();
  const name = data.name;
  logger.info("Hello name!", { name, message: "bNQkL2sI" });
});

exports.docWritten04 = onDocumentWritten("collection04/{doc}", (event) => {
  const snapshot = event.data;
  if (!snapshot) {
    console.log("No data associated with the event");
    return;
  }
  const data = snapshot.data();
  const name = data.name;
  logger.info("Hello name!", { name, message: "bNQkL2sI" });
});

exports.helloWorld00 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 00 - bNQkL2sI!");
});

exports.helloWorld01 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 01 - bNQkL2sI!");
});

exports.helloWorld02 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 02 - bNQkL2sI!");
});

exports.helloWorld03 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 03 - bNQkL2sI!");
});

exports.helloWorld04 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 04 - bNQkL2sI!");
});

exports.helloWorld05 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 05 - bNQkL2sI!");
});

exports.helloWorld06 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 06 - bNQkL2sI!");
});

exports.helloWorld07 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 07 - bNQkL2sI!");
});

exports.helloWorld08 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 08 - bNQkL2sI!");
});

exports.helloWorld09 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 09 - bNQkL2sI!");
});

exports.helloWorld10 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 10 - bNQkL2sI!");
});

exports.helloWorld11 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 11 - bNQkL2sI!");
});

exports.helloWorld12 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 12 - bNQkL2sI!");
});

exports.helloWorld13 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 13 - bNQkL2sI!");
});

exports.helloWorld14 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 14 - bNQkL2sI!");
});

exports.helloWorld15 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 15 - bNQkL2sI!");
});

exports.helloWorld16 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 16 - bNQkL2sI!");
});

exports.helloWorld17 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 17 - bNQkL2sI!");
});

exports.helloWorld18 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 18 - bNQkL2sI!");
});

exports.helloWorld19 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 19 - bNQkL2sI!");
});

exports.helloWorld20 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 20 - bNQkL2sI!");
});

exports.helloWorld21 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 21 - bNQkL2sI!");
});

exports.helloWorld22 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 22 - bNQkL2sI!");
});

exports.helloWorld23 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 23 - bNQkL2sI!");
});

exports.helloWorld24 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 24 - bNQkL2sI!");
});

exports.helloWorld25 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 25 - bNQkL2sI!");
});

exports.helloWorld26 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 26 - bNQkL2sI!");
});

exports.helloWorld27 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 27 - bNQkL2sI!");
});

exports.helloWorld28 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 28 - bNQkL2sI!");
});

exports.helloWorld29 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 29 - bNQkL2sI!");
});

exports.helloWorld30 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 30 - bNQkL2sI!");
});

exports.helloWorld31 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 31 - bNQkL2sI!");
});

exports.helloWorld32 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 32 - bNQkL2sI!");
});

exports.helloWorld33 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 33 - bNQkL2sI!");
});

exports.helloWorld34 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 34 - bNQkL2sI!");
});

exports.helloWorld35 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 35 - bNQkL2sI!");
});

exports.helloWorld36 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 36 - bNQkL2sI!");
});

exports.helloWorld37 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 37 - bNQkL2sI!");
});

exports.helloWorld38 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 38 - bNQkL2sI!");
});

exports.helloWorld39 = onRequest({
  region: "europe-west1"
}, (request, response) => {
  logger.info("Hello logs!", { structuredData: true });
  response.send("Hello from Firebase function number - 39 - bNQkL2sI!");
});

exports.grouped = {
  helloWorldGrp00: onRequest({
    region: "europe-west1"
  }, (request, response) => {
    logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase grouped function number - 00 - bNQkL2sI!");
  }),

  helloWorldGrp01: onRequest({
    region: "europe-west1"
  }, (request, response) => {
    logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase grouped function number - 01 - bNQkL2sI!");
  }),

  helloWorldGrp02: onRequest({
    region: "europe-west1"
  }, (request, response) => {
    logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase grouped function number - 02 - bNQkL2sI!");
  }),

  helloWorldGrp03: onRequest({
    region: "europe-west1"
  }, (request, response) => {
    logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase grouped function number - 03 - bNQkL2sI!");
  }),

  helloWorldGrp04: onRequest({
    region: "europe-west1"
  }, (request, response) => {
    logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase grouped function number - 04 - bNQkL2sI!");
  }),

  helloWorldGrp05: onRequest({
    region: "europe-west1"
  }, (request, response) => {
    logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase grouped function number - 05 - bNQkL2sI!");
  }),

  helloWorldGrp06: onRequest({
    region: "europe-west1"
  }, (request, response) => {
    logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase grouped function number - 06 - bNQkL2sI!");
  }),

  helloWorldGrp07: onRequest({
    region: "europe-west1"
  }, (request, response) => {
    logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase grouped function number - 07 - bNQkL2sI!");
  }),

  helloWorldGrp08: onRequest({
    region: "europe-west1"
  }, (request, response) => {
    logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase grouped function number - 08 - bNQkL2sI!");
  }),

  helloWorldGrp09: onRequest({
    region: "europe-west1"
  }, (request, response) => {
    logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase grouped function number - 09 - bNQkL2sI!");
  }),

  helloWorldGrp10: onRequest({
    region: "europe-west1"
  }, (request, response) => {
    logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase grouped function number - 10 - bNQkL2sI!");
  }),

  helloWorldGrp11: onRequest({
    region: "europe-west1"
  }, (request, response) => {
    logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase grouped function number - 11 - bNQkL2sI!");
  }),

  helloWorldGrp12: onRequest({
    region: "europe-west1"
  }, (request, response) => {
    logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase grouped function number - 12 - bNQkL2sI!");
  }),

  helloWorldGrp13: onRequest({
    region: "europe-west1"
  }, (request, response) => {
    logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase grouped function number - 13 - bNQkL2sI!");
  }),

  helloWorldGrp14: onRequest({
    region: "europe-west1"
  }, (request, response) => {
    logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase grouped function number - 14 - bNQkL2sI!");
  }),

  helloWorldGrp15: onRequest({
    region: "europe-west1"
  }, (request, response) => {
    logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase grouped function number - 15 - bNQkL2sI!");
  }),

  helloWorldGrp16: onRequest({
    region: "europe-west1"
  }, (request, response) => {
    logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase grouped function number - 16 - bNQkL2sI!");
  }),

  helloWorldGrp17: onRequest({
    region: "europe-west1"
  }, (request, response) => {
    logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase grouped function number - 17 - bNQkL2sI!");
  }),

  helloWorldGrp18: onRequest({
    region: "europe-west1"
  }, (request, response) => {
    logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase grouped function number - 18 - bNQkL2sI!");
  }),

  helloWorldGrp19: onRequest({
    region: "europe-west1"
  }, (request, response) => {
    logger.info("Hello logs!", { structuredData: true });
    response.send("Hello from Firebase grouped function number - 19 - bNQkL2sI!");
  }),

}