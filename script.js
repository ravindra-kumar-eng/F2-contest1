/** @format */

let arr = [
    { id: 1, name: "john", age: "18", profession: "developer" },
    { id: 2, name: "jack", age: "20", profession: "developer" },
    { id: 3, name: "karen", age: "19", profession: "admin" },
  ];
  
  function PrintDeveloperswithMap() {
    //Write your code here
    let a=arr.map((value)=>{
        if(value.profession==="developer"){
            console.log(value)
        }
    })

  }
  
  function PrintDeveloperbyForEach() {
    //Write your code here
    let a=arr.forEach((value)=>{
        if(value.profession==="developer"){
            console.log(value)
        }
    })
  }
  
  function addData() {
    //Write your code here
    let newItem={id:4,name:"susan",age:"20",profession:"intern"};
    arr.push(newItem)
    console.log(arr)
  }
  
  function removeAdmin() {
    //Write your code here
    let arr2=arr.filter((value)=>{
        if(value.profession!=="admin"){
            return value
        }
    })
    console.log(arr2)
  }
  
  function concatenateArray() {
    //Write your code here
    let newArr = [
        { id: 4, name: "Ravindra", age: "21", profession: "developer" },
        { id: 5, name: "Akash", age: "22", profession: "Mentor" },
        { id: 6, name: "Riddi", age: "25", profession: "Teacher" },
      ];
      let concatArray=arr.concat(newArr)
      console.log(concatArray)
  }
