// var express = require('express');
// var app = express();
// var http = require('http').Server(app);
// var io = require('socket.io')(http);




// var triage = [];
// var triageCounselors = [];
// var patients = [];
// var counselors = [];
// var connections = {};



// function getHighestPriorityPatient() {
//   return patients.pop();
// }

// function getFirstFreeCounselor() {
//   return counselors.find(function(counselor) {
//     return counselor.isFree === true;
//   });
// }

// function patientNext() {

  
//   var counselor = getFirstFreeCounselor();
//   if (counselor) {
//     var patient = getHighestPriorityPatient();
//     // console.log('triage before connection ', triage);
//     if (patient) {
//       patient.emit('start stream');
//       counselor.emit('start stream');

//       counselor.isFree = false;

//       connections[patient.id] = counselor;
//       connections[counselor.id] = patient;
//     }
//     else {
//       console.log('no patients are waiting');
//     }
//   }
//   else {
//     console.log('could not find any counselors');
//   }
// }

// function getFirstFreeTriageCounselor() {
//   return triageCounselors.find(function(tCounselor) {
//     return tCounselor.isFree === true; //if no counselors are free, will return undefined
//   });
// }

// function getFirstTriagePatient() {
//   return triage.shift();
// }

// function triageNext() {
  
//   var triageCounselor = getFirstFreeTriageCounselor();
//   if (triageCounselor) {
//     var triagePatient = getFirstTriagePatient();
//     // console.log('triage before connection ', triage);
//     if (triagePatient) {

//       triagePatient.emit('start stream');
//       triageCounselor.emit('start stream');

//       triageCounselor.isFree = false;

//       connections[triagePatient.id] = triageCounselor;
//       //inside connections object, it is being assigned a key which is triagePatient.id, 
//       //and the value is triageCounselor

//       connections[triageCounselor.id] = triagePatient;
//       console.log('connected');
//     }
//     else {
//       console.log('there are no triage patients');
//     }
//   }
//   else {
//     console.log('I could not find a triage counselor');
//   }
// }


// app.use(express.static('public'));

// app.get('/', function(req, res) {
//   res.sendfile('index.html');
// });

// app.get('/triageCounselor', function(req, res) {
//   res.sendfile('triageCounselor.html');
// });

// app.get('/counselor', function(req, res) {
//   res.sendfile('counselor.html');
// });

// io.on('connection', function(socket) {
//   socket.on('triage patient', function() {
//     socket.isPatient = true;
//     triage.push(socket);
//     triageNext();
//   });

//   socket.on('counselor', function() {
//     socket.isFree = true;
//     socket.isCounselor = true;
//     counselors.push(socket);
//     patientNext();
//   });
  
//   socket.on('triage counselor', function() {
//     socket.isFree = true;
//     socket.isCounselor = true;
//     triageCounselors.push(socket);
//     triageNext();
//   });
  
//   socket.on('patient', function(){
//     socket.isPatient = true;
//     patientNext();
//   });

//   socket.on('stream id', function(data) {
//     if (connections[socket.id]) {
//       connections[socket.id].emit('connect peer', data);
//     }
//   });

//   socket.on('queue', function(counselorsEvaluation) {
//     console.log('queue was heard');
//     var patientSocket = connections[socket.id];

//     if (patientSocket) {
//       socket.isFree = true;
//       console.log('is the counselors socket really free ', socket.isFree);
//       patientSocket.priority = counselorsEvaluation.priority;
//       patients.push(patientSocket);
//       patients.sort(function(patient1, patient2) {
//         if (patient1.priority > patient2.priority) {
//           return 1;
//         }
//         else if (patient1.priority < patient2.priority) {
//           return -1;
//         }
//         else {
//           return 0;
//         }
//       });
      
//       socket.emit('stop call');
//       patientSocket.emit('queued');


//       connections[socket.id] = null;
//       connections[patientSocket.id] = null;

//       triageNext();
//       patientNext();
//     }
//     else {
//       console.log('must have a connection in order to evaluate');
//     }

//   });

//   socket.on('triage counselor free', function(){
//     console.log('I heard that the triage counselor is free again');
//     triageNext();
//   });

//   socket.on('disconnect', function() {

//     var otherParty = connections[socket.id];
//     if (otherParty) {
//       otherParty.emit('stop call');

//       if (otherParty.isCounselor) {
//         otherParty.isFree = true;
//       }

//       connections[socket.id] = null;
//       connections[otherParty.id] = null;
//     }

//     triageNext();
//   });
// });




// http.listen(process.env.PORT, function() {
//   console.log('listening on', process.env.PORT);
// });