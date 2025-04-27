// const getStoredDoctor=()=>{
// const storedDoctorSTR=localStorage.getItem("readList");
// if(storedDoctorSTR){
//   const storedDoctorData=JSON.parse(storedDoctorSTR)
//   return storedDoctorData;
// }
// else{
//   return [];
// }
// }
// const addToStoredDB=(id)=>{
// const storedDoctorData = getStoredDoctor();
// if(storedDoctorData.includes(id)){
//   console.log("hello");
//   alert("bhai ai id alrady exist")
// }
// else{
//   storedDoctorData.push(id);
//   const data = JSON.stringify(storedDoctorData);
//   localStorage.setItem("readList",data)
// }
// }

// export{addToStoredDB,getStoredDoctor};