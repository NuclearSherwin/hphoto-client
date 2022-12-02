import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { getAllTags, deleteTag } from "../functions/tag_crud";

const TagIndex = () => {
  const [tags, setTags] = useState([]);

  useEffect(() => {
    onInit();
  }, []);

  const onInit = () => {
    getAllTags()
      .then((res) => {
        setTags(res.data);
        console.log(res.data);
      })
      .catch((err) => console.log(err));
  };

  const onDelete = (tagId) => {
    // eslint-disable-next-line no-restricted-globals
    if (confirm("Are you want to delete?")) {
      deleteTag(tagId).then(() => {
        onInit();
      });
    }
  };

  const RowTable = () => {
    return tags.map((tag) => (
      <tr key={tag.id} className="bg-white border-b dark:bg-gray-900 dark:border-gray-700">
        <th
          scope="row"
          className="py-4 px-6 font-medium text-gray-900 whitespace-nowrap dark:text-white"
        >
          {tag.name}
        </th>
        <td className="py-4 px-6">{tag.description}</td>
        <td className="py-4 px-6">{tag.rating}</td>
        <td className="py-4 px-6">
          <Link
            to={"/edit/"}
            className="font-medium mr-1 text-blue-600 dark:text-blue-500 hover:underline"
          >
            Edit
          </Link>
          <button
            className="font-medium ml-1 text-red-600 dark:text-red-500 hover:underline"
            onClick={() => onDelete([tag.id])}
          >
            Delete
          </button>
        </td>
      </tr>
    ));
  };

  return (
    <div className="mt-20 px-5 max-w-7xl mx-auto container">
      <div className="overflow-x-auto relative shadow-md sm:rounded-lg">
        <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
            <tr>
              <th scope="col" className="py-3 px-6">
                Topic name
              </th>
              <th scope="col" className="py-3 px-6">
                Description
              </th>
              <th scope="col" className="py-3 px-6">
                Rating
              </th>
              <th scope="col" className="py-3 px-6">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            <RowTable />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default TagIndex;
