import axios from "axios";
import React from "react";
import Posts from "./Posts";

const ListPost = () => {
  const postAPI = (url = "https://localhost:7178/api/post2") => {
    return {
      fetchAll: () => axios.get(url),
      create: (newRecord) => axios.post(url, newRecord),
      update: (id, updatedRecord) => axios.put(url + id, updatedRecord),
      delete: (id) => axios.delete(url + id),
    };
  };

  const addOrEdit = (formData, onSuccess) => {
    postAPI().create(formData)
        .then(res => {
            onSuccess();
        })
        .catch(err => console.log(err))
  };
  return (
    <>
        
    </>
    // <div>
    //   <div className="flex flex-wrap ">
    //     <div className="md:w-full pr-4 pl-4">
    //       <div className="py-8 px-4 md:py-16 md:px-8 mb-8 bg-gray-200 rounded pr-0 pl-0 rounded-none py-4">
    //         <div className="container mx-auto sm:px-4 text-center">
    //           <h1 className="text-4xl">Upload Photo</h1>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="md:w-1/3 pr-4 pl-4">
    //       <Employee addOrEdit={addOrEdit} recordForEdit={recordForEdit} />
    //     </div>
    //     <div className="md:w-2/3 pr-4 pl-4">
    //       <table>
    //         <tbody>
    //           {
    //             //tr > 3 td
    //             [...Array(Math.ceil(employeeList.length / 3))].map((e, i) => (
    //               <tr key={i}>
    //                 <td>{imageCard(employeeList[3 * i])}</td>
    //                 <td>
    //                   {employeeList[3 * i + 1]
    //                     ? imageCard(employeeList[3 * i + 1])
    //                     : null}
    //                 </td>
    //                 <td>
    //                   {employeeList[3 * i + 2]
    //                     ? imageCard(employeeList[3 * i + 2])
    //                     : null}
    //                 </td>
    //               </tr>
    //             ))
    //           }
    //         </tbody>
    //       </table>
    //     </div>
    //   </div>
    // </div>
  );
};

export default ListPost;
