// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBP5fSB_kiakv0r-WMo7BkP2Ik70c26tT0",
    authDomain: "whattschat-f522c.firebaseapp.com",
    databaseURL: "https://whattschat-f522c-default-rtdb.firebaseio.com",
    projectId: "whattschat-f522c",
    storageBucket: "whattschat-f522c.appspot.com",
    messagingSenderId: "746097682908",
    appId: "1:746097682908:web:51a0278320ad4af5774719",
    measurementId: "G-5QLWYM65L1"
  };
  
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

// Get a reference to the database service
const database = firebase.database();

// Retrieve students from Firebase and display in table
const studentsTable = document.getElementById('studentsTable');

function renderStudents(students) {
  studentsTable.innerHTML = `
    <tr>
      <th>Name</th>
      <th>Behavior Points</th>
      <th>Achievement Points</th>
      <th></th>
    </tr>
  `;

  students.forEach(function(student) {
    const studentRow = document.createElement('tr');
    studentRow.innerHTML = `
      <td>${student.name}</td>
      <td>${student.behavior}</td>
      <td>${student.achievement}</td>
      <td>
        <button onclick="updatePoints('${student.id}', 'behavior', -1)">-</button>
     
     
        <button onclick="updatePoints('${student.id}', 'achievement', 1)">+</button>
      </td>
    `;
    studentsTable.appendChild(studentRow);
  });
}

function updatePoints(studentId, field, value) {
  const studentRef = database.ref('students/' + studentId);
  studentRef.transaction(function(student) {
    if (student) {
      student[field] = (student[field] || 0) + value;
    }
    return student;
  });
}

database.ref('students').on('value', function(snapshot) {
  const students = [];
  snapshot.forEach(function(childSnapshot) {
    const student = childSnapshot.val();
    student.id = childSnapshot.key;
    students.push(student);
  });
  renderStudents(students);
});

function addStudent() {
  const name = document.getElementById('name').value;
  const behaviorPoints = parseInt(document.getElementById('behavior').value);
  const achievementPoints = parseInt(document.getElementById('achievement').value);

  // Save student data to Firebase
  const newStudentRef = database.ref('students').push();
  newStudentRef.set({
    name: name,
    behaviorPoints: behaviorPoints,
    achievementPoints: achievementPoints
  });

  // Clear input fields
  document.getElementById('name').value = '';
  document.getElementById('behavior').value = '';
  document.getElementById('achievement').value = '';
}