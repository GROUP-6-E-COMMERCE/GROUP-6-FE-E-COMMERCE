import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";

function ListProductPage() {
  return (
    <Layout>
      <Header></Header>
      <div className="justify-center items-center h-full sm:flex ">
        <div className="flex flex-col m-5">
          <div className="w-full px-16 pb-12 bg-white">
            <div className="text-start text-3xl font-bold py-5">My Product</div>
            <div className="border-b border-gray-200 shadow w-max">
              <table>
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-2 text-xs text-gray-500">No</th>
                    <th className="px-6 py-2 text-xs text-gray-500">
                      Product Name
                    </th>
                    <th className="px-6 py-2 text-xs text-gray-500">price</th>
                    <th className="px-6 py-2 text-xs text-gray-500">
                      Quantity
                    </th>
                    <th className="px-6 py-2 text-xs text-gray-500">Edit</th>
                    <th className="px-6 py-2 text-xs text-gray-500">Delete</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="whitespace-nowrap">
                    <td className="px-6 py-4 text-sm text-gray-500">1</td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        SSD Samsung EVO
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-500">RP.4.500.000</div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">5</td>
                    <td className="px-6 py-4">
                      <a
                        href=" "
                        className="px-4 py-1 text-sm text-white bg-blue-400 rounded"
                      >
                        Edit
                      </a>
                    </td>
                    <td className="px-6 py-4">
                      <a
                        href=" "
                        className="px-4 py-1 text-sm text-white bg-red-400 rounded"
                      >
                        Delete
                      </a>
                    </td>
                  </tr>
                  <tr className="whitespace-nowrap">
                    <td className="px-6 py-4 text-sm text-gray-500">2</td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        Keyboard Logitech
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-500">RP.350.000</div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">8</td>
                    <td className="px-6 py-4">
                      <a
                        href=" "
                        className="px-4 py-1 text-sm text-white bg-blue-400 rounded"
                      >
                        Edit
                      </a>
                    </td>
                    <td className="px-6 py-4">
                      <a
                        href=" "
                        className="px-4 py-1 text-sm text-white bg-red-400 rounded"
                      >
                        Delete
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}

export default ListProductPage;
