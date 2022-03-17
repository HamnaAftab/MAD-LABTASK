//Question 1​
var student = {
    firstName: "Hamna",
    lastName: "Aftab",
    Age: 21,
    Registration_number: "Fa19-Bcs-020",
    Cgpa: 3.03,
    Department: "CS",
    semester: "6th",
    getAll: function () {
        console.log('Name' + this.firstName + " " + this.lastName + '\n' + 'Age' + this.Age + '\n' + 'Registration_number' + this.Registration_number + '\n' + 'Cgpa' + this.Cgpa + '\n' + 'Department ' + this.Department + '\n' + 'Semester ' + this.semester);
    }
}
student.getAll();

//Question 2
var student = {
    firstName: "Hamna",
    lastName: "Aftab",
    Age: 21,
    Registration_number: "Fa19-Bcs-020",
    Cgpa: 3.03,
    Department: "CS",
    semester: "6th",
    getAll: function () {
        console.log('Name ' + this.firstName + " " + this.lastName + '\n' + 'Age ' + this.Age + '\n' + 'Registration number ' + this.Registration_number + '\n' + 'Cgpa ' + this.Cgpa + '\n' + 'Department ' + this.Department + '\n' + 'Semester ' + this.semester);
    }
}
console.log("Before Deleting Registration_number :")
student.getAll();
console.log("\n\n");
delete student.Registration_number;
console.log("After Deleting Registration_number :");
student.getAll();

//Question 3
var library = [
    {
        author: 'Bill Gates',
        title: 'The Road Ahead',
        readingStatus: true
    },
    {
        author: 'Steve Jobs',
        title: 'Walter Isaacson',
        readingStatus: true
    },
    {
        author: 'Suzanne Collins',
        title: 'Mockingjay: The Final Book of The Hunger Games',
        readingStatus: false
    }];
for (let item of library) {
    console.log("Author " + item.author + "\n" + "Title " + item.title + "\n" + "Reading Status " + item.readingStatus);
    console.log("\t\t");
}
/*​​ function sandwich_calculator(bread){ 
      return (Math.floor(bread/2)+" Sandwiches can be made!"); 
      } 
      console.log(sandwich_calculator(7)); */
function sandwich_calculator(bread, cheese) {
    var sandwiches = 0;
    while (true) {
        if (bread >= 2) {
            bread -= 2;
            if (cheese >= 1) {
                cheese -= 1
                sandwiches += 1;
            }
            else {
                console.log(sandwiches + " Sandwiches can be made!");
                break;
            }
        }
        else {
            console.log(sandwiches + " Sandwiches can be made!");
            break;
        }
    }
}
sandwich_calculator(26, 12);


//question 3
/*var​ ​library​ ​=​ ​[​  
          { 
              author​: ​'Bill Gates'​, 
              title​: ​'The Road Ahead'​, 
              readingStatus​: ​true 
          }​, 
          { 
              author​: ​'Steve Jobs'​, 
              title​: ​'Walter Isaacson'​, 
              readingStatus​: ​true 
          }​, 
          { 
              author​: ​'Suzanne Collins'​, 
              title​:  ​'Mockingjay: The Final Book of The Hunger Games'​,​  
              readingStatus​: ​false 
          }​]​; 
      class​ ​sandwich​{ 
              sandwich​(​noofbread​)​{ 
                  this​.​noofbread​ ​=​ ​noofbread 
              } 
     
              sandwich_calculator​(​bread​)​{ 
                  // It will return total number of possible sandwiches 
                  var​ ​n​ ​=​ ​this​.​noofbread​ ​/​2​  
                  return​ ​n 
              } 
          } 
     
     
          class​ ​withCheez​ ​extends​ ​sandwich​{ 
              breadwithcheez​(​sbreads​)​ ​{ 
                  this​.​sandwich_calculator​.​apply​(​sbreads​,​ ​chees​)​; 
                  sandwich​ ​=​ ​super​.​n​ ​+​ ​chees 
                  return​ ​sandwich 
              } 
          }*/