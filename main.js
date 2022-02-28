// ┌─────────────────┐
// │ Your code here! │
// └─────────────────┘


// CreateUser

function createUser(firstName, lastName){
    let fullName = {
        firstName,
        lastName,
    }
    return fullName
}


// SetAge

function setAge(user, age){
    user.age = age
    return user
}


// IncrementAge

function incrementAge(user, olderage){
    olderage = user.age ++
    return user
}


// FixCar

function fixCar(car){
    car.needsMaintenance = false
    return car
}


// AddGrades

function addGrades(student, newGrades){
    for (i = 0; i < newGrades.length; i++){
        student.grades.push(newGrades[i])
    }
    return student
}

// GetDataType

function getDataType(object, key){
    return typeof object[key];
}

// AddToDo

function addTodo(todos, newTodo){
    todos.push(newTodo)
    return todos;
}

// AddSong

function addSong(playlist, newSong){
    playlist.songs.push(newSong)
    playlist.duration = playlist.duration + newSong.duration
    return playlist
}

// UpdateReportCard

function updateReportCard(reportCard, averageGrade){
    reportCard.grades.push(averageGrade)
    reportCard.lowestGrade = Math.min(...reportCard.grades)
    reportCard.highestGrade = Math.max(...reportCard.grades)

    let sum = 0;
    for (let i = 0; i < reportCard.grades.length; i++){
        sum += reportCard.grades[i]
    }
    reportCard.averageGrade = sum / reportCard.grades.length;
    return reportCard;
}




// ┌─────────────────────────────────────────────────────────────────────────┐
// │ Code used for testing. Do not modify!                                   │                         
// │                                                                         │
const isDef = (arg) => arg === 'function';
const pass = () => undefined;
// │                                                                         │
module.exports.createUser = isDef(typeof createUser) ? createUser : pass;
module.exports.setAge = isDef(typeof setAge) ? setAge : pass;
module.exports.incrementAge = isDef(typeof incrementAge) ? incrementAge : pass;
module.exports.fixCar = isDef(typeof fixCar) ? fixCar : pass;
module.exports.addGrades = isDef(typeof addGrades) ? addGrades : pass;
module.exports.getDataType = isDef(typeof getDataType) ? getDataType : pass;
module.exports.addTodo = isDef(typeof addTodo) ? addTodo : pass;
module.exports.addSong = isDef(typeof addSong) ? addSong : pass;
module.exports.updateReportCard = isDef(typeof updateReportCard) ? updateReportCard : pass;
// │                                                                         │
// └─────────────────────────────────────────────────────────────────────────┘
