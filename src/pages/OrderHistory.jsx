import React from "react";
import Layout from "../components/Layout";
import Header from "../components/Header";

const OrderHistory = () => {
  return (
    <Layout>
      <Header></Header>
      <div className="justify-center items-center h-full sm:flex ">
        <div className="flex flex-col m-5">
          <div className="w-full px-16 pb-12 bg-white">
            <div className="text-start text-3xl font-bold py-5">
              Order History
            </div>
            <div className="border-b border-gray-200 shadow w-max">
              <table>
                <thead className="bg-gray-50">
                  <tr>
                    <th className="px-6 py-2 text-xs text-gray-500">
                      Order Number
                    </th>
                    <th className="px-6 py-2 text-xs text-gray-500">
                      Order Date
                    </th>
                    <th className="px-6 py-2 text-xs text-gray-500">Total</th>
                  </tr>
                </thead>
                <tbody className="bg-white">
                  <tr className="whitespace-nowrap">
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        ERT45656234156HX{" "}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-500">22-05-2022</div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Rp.3.000.000
                    </td>
                  </tr>
                  <tr className="whitespace-nowrap">
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        SAUUUEWH234156HX{" "}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-500">26-05-2022</div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Rp.1.800.000
                    </td>
                  </tr>
                  <tr className="whitespace-nowrap">
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-900">
                        YMMY0164234156HX{" "}
                      </div>
                    </td>
                    <td className="px-6 py-4">
                      <div className="text-sm text-gray-500">30-06-2022</div>
                    </td>
                    <td className="px-6 py-4 text-sm text-gray-500">
                      Rp.9.000.000
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
};

export default OrderHistory;
