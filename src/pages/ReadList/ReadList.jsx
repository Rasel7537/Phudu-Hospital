// import React, { useEffect, useState } from "react";
// import { useLoaderData } from "react-router";
// import { getStoredDoctor } from "../../utility/addToDB";

// const ReadList = () => {
//   const [readlist, setReadList] = useState([]);
//   const data = useLoaderData();
//   console.log(data);

//   useEffect(() => {
//     const storeDoctordata = getStoredDoctor();

//     const ConvertedStoreDoctors = storeDoctordata.map((id) => parseInt(id));
//     const myReadList = data.filter((doctor) =>
//       ConvertedStoreDoctors.includes(doctor.id)
//     );
//     setReadList(myReadList);
//   }, []);
//   return (
//     <div>
//       {/* <h1>book i read {readlist.length}</h1> */}
//     </div>
//   );
// };

// export default ReadList;
