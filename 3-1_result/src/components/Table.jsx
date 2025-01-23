import React from 'react'

function Table() {
  return (
    <div>
        <div class="overflow-x-auto">
  <table class="table-auto border-collapse border border-gray-300 w-full text-sm">
    <thead>
      <tr class="bg-blue-100 ">
        <th class="border border-gray-300 px-4 py-2">Subject Code</th>
        <th class="border border-gray-300 px-4 py-2">Subject Name</th>
        <th class="border border-gray-300 px-4 py-2">Internal Marks</th>
        <th class="border border-gray-300 px-4 py-2">External Marks</th>
        <th class="border border-gray-300 px-4 py-2">Total Marks</th>
        <th class="border border-gray-300 px-4 py-2">Result Status</th>
        <th class="border border-gray-300 px-4 py-2">Credits</th>
        <th class="border border-gray-300 px-4 py-2">Grade</th>
      </tr>
    </thead>
    <tbody>
      
      <tr class="odd:bg-white even:bg-gray-100">
        <td class="border border-gray-300 px-4 py-2">20A05507</td>
        <td class="border border-gray-300 px-4 py-2">COMMUNITY SERVICE PROJECT</td>
        <td class="border border-gray-300 px-4 py-2">93</td>
        <td class="border border-gray-300 px-4 py-2">0</td>
        <td class="border border-gray-300 px-4 py-2">93</td>
        <td class="border border-gray-300 px-4 py-2">P</td>
        <td class="border border-gray-300 px-4 py-2">1.5</td>
        <td class="border border-gray-300 px-4 py-2">S</td>
      </tr>
      <tr class="odd:bg-white even:bg-gray-100">
        <td class="border border-gray-300 px-4 py-2">20A05503</td>
        <td class="border border-gray-300 px-4 py-2">FORMAL LANGUAGES AND AUTOMATA THEORY</td>
        <td class="border border-gray-300 px-4 py-2">28</td>
        <td class="border border-gray-300 px-4 py-2">4</td>
        <td class="border border-gray-300 px-4 py-2">32</td>
        <td class="border border-gray-300 px-4 py-2">F</td>
        <td class="border border-gray-300 px-4 py-2">0</td>
        <td class="border border-gray-300 px-4 py-2">F</td>
      </tr>
    
    </tbody>
  </table>
</div>

    </div>
  )
}

export default Table