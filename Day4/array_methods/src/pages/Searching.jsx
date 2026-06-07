import React from 'react'

const Searching = () => {
  return (
    <>
    <div className='flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-20 mx-4 md:mx-12 lg:mx-20 my-8 md:my-12 lg:my-20 bg-gradient-to-br from-gray-50 to-blue-50'>
        <div className="border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50 w-full md:w-[350px] lg:w-[400px] hover:-translate-y-1">
  <h2 className="text-3xl font-bold mb-5 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent border-l-4 border-blue-500 pl-3">indexOf()</h2>

  <p className="mb-4 text-gray-700 leading-relaxed bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
    Searches the array from left to right (starting at index 0) for a
    specific value and returns the index of the first matching element.
    It uses <strong className="text-blue-700">strict equality (===)</strong> to compare values.
  </p>

  <div className="mb-4">
    <h3 className="font-semibold text-gray-800 mb-2 flex items-center text-lg">
      <span className="w-1 h-5 bg-blue-500 mr-2 rounded"></span>
      Syntax:
    </h3>

    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mt-2 overflow-x-auto text-sm font-mono shadow-inner">
{`array.indexOf(searchElement, fromIndex);

// fromIndex is optional and specifies
// where to start searching`}
    </pre>
  </div>

  <div className="mb-4 bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
    <h3 className="font-semibold text-gray-800 mb-2 flex items-center text-lg">
      <span className="w-1 h-5 bg-green-500 mr-2 rounded"></span>
      Returns:
    </h3>
    <p className="text-gray-700">
      A <strong className="text-purple-700">Number</strong> representing the index of the first
      matching element. If no match is found, it returns
      <code className="bg-red-100 px-1.5 py-0.5 rounded text-red-700 font-mono text-sm mx-1"> -1 </code>.
    </p>
  </div>

  <div className="mb-4 bg-purple-50 p-3 rounded-lg border-l-4 border-purple-500">
    <h3 className="font-semibold text-gray-800 mb-2 flex items-center text-lg">
      <span className="w-1 h-5 bg-purple-500 mr-2 rounded"></span>
      Copy Behavior:
    </h3>
    <p className="text-gray-700">
      Does not copy, modify, or create a new array. It simply searches
      the existing array and returns the index.
    </p>
  </div>

  <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-3 rounded-lg border-l-4 border-orange-500">
    <h3 className="font-semibold text-gray-800 mb-2 flex items-center text-lg">
      <span className="w-1 h-5 bg-orange-500 mr-2 rounded"></span>
      Project Use Case:
    </h3>
    <p className="text-gray-700">
      Checking if a specific product ID, category name, or user role
      exists in a list and finding its exact position so you can target
      or update it.
    </p>
  </div>
</div>


<div className="border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50 w-full md:w-[350px] lg:w-[400px] hover:-translate-y-1">
  <h2 className="text-3xl font-bold mb-5 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent border-l-4 border-blue-500 pl-3">lastIndexOf()</h2>

  <p className="mb-4 text-gray-700 leading-relaxed bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
    Works exactly like <code className="bg-gray-200 px-1.5 py-0.5 rounded text-red-600 font-mono text-sm">indexOf()</code>, but searches the array
    from <strong className="text-blue-700">right to left</strong> (from the end to the beginning).
    It still returns the standard 0-based index of the last matching element.
  </p>

  <div className="mb-4">
    <h3 className="font-semibold text-gray-800 mb-2 flex items-center text-lg">
      <span className="w-1 h-5 bg-blue-500 mr-2 rounded"></span>
      Syntax:
    </h3>

    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mt-2 overflow-x-auto text-sm font-mono shadow-inner">
{`array.lastIndexOf(searchElement, fromIndex);`}
    </pre>
  </div>

  <div className="mb-4 bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
    <h3 className="font-semibold text-gray-800 mb-2 flex items-center text-lg">
      <span className="w-1 h-5 bg-green-500 mr-2 rounded"></span>
      Returns:
    </h3>
    <p className="text-gray-700">
      A <code className="bg-green-100 px-1.5 py-0.5 rounded text-purple-700 font-mono text-sm">Number</code> representing the index of the last match found.
      Returns <code className="bg-red-100 px-1.5 py-0.5 rounded text-red-700 font-mono text-sm mx-1">-1</code> if no match is found.
    </p>
  </div>

  <div className="mb-4 bg-purple-50 p-3 rounded-lg border-l-4 border-purple-500">
    <h3 className="font-semibold text-gray-800 mb-2 flex items-center text-lg">
      <span className="w-1 h-5 bg-purple-500 mr-2 rounded"></span>
      Copy Behavior:
    </h3>
    <p className="text-gray-700">
      Does not copy, modify, or create a new array. It simply searches
      the existing array and returns an index value.
    </p>
  </div>

  <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-3 rounded-lg border-l-4 border-orange-500">
    <h3 className="font-semibold text-gray-800 mb-2 flex items-center text-lg">
      <span className="w-1 h-5 bg-orange-500 mr-2 rounded"></span>
      Project Use Case:
    </h3>
    <p className="text-gray-700">
      Tracking breadcrumbs or user activity logs where you need to find
      the most recent occurrence of a specific action, such as the last
      page visited or the latest search term used.
    </p>
  </div>
</div>


<div className="border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50 w-full md:w-[350px] lg:w-[400px] hover:-translate-y-1">
  <h2 className="text-3xl font-bold mb-5 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent border-l-4 border-blue-500 pl-3">includes()</h2>

  <p className="mb-4 text-gray-700 leading-relaxed bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
    A clean, modern method used to check whether an item exists in an
    array. Unlike <code className="bg-gray-200 px-1.5 py-0.5 rounded text-red-600 font-mono text-sm">indexOf()</code>, it correctly identifies
    <code className="bg-gray-200 px-1.5 py-0.5 rounded text-red-600 font-mono text-sm mx-1">NaN</code> values and directly returns a Boolean result.
  </p>

  <div className="mb-4">
    <h3 className="font-semibold text-gray-800 mb-2 flex items-center text-lg">
      <span className="w-1 h-5 bg-blue-500 mr-2 rounded"></span>
      Syntax:
    </h3>

    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mt-2 overflow-x-auto text-sm font-mono shadow-inner">
{`array.includes(searchElement, fromIndex);`}
    </pre>
  </div>

  <div className="mb-4 bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
    <h3 className="font-semibold text-gray-800 mb-2 flex items-center text-lg">
      <span className="w-1 h-5 bg-green-500 mr-2 rounded"></span>
      Returns:
    </h3>
    <p className="text-gray-700">
      A Boolean value:
      <code className="bg-green-200 px-1.5 py-0.5 rounded text-green-700 font-mono text-sm mx-1"> true </code> if the element is found, otherwise
      <code className="bg-red-100 px-1.5 py-0.5 rounded text-red-700 font-mono text-sm mx-1"> false </code>.
    </p>
  </div>

  <div className="mb-4 bg-purple-50 p-3 rounded-lg border-l-4 border-purple-500">
    <h3 className="font-semibold text-gray-800 mb-2 flex items-center text-lg">
      <span className="w-1 h-5 bg-purple-500 mr-2 rounded"></span>
      Copy Behavior:
    </h3>
    <p className="text-gray-700">
      Does not copy, modify, or mutate the original array. It simply
      checks for the existence of a value and returns the result.
    </p>
  </div>

  <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-3 rounded-lg border-l-4 border-orange-500">
    <h3 className="font-semibold text-gray-800 mb-2 flex items-center text-lg">
      <span className="w-1 h-5 bg-orange-500 mr-2 rounded"></span>
      Project Use Case:
    </h3>
    <p className="text-gray-700">
      Role-based access control, such as checking whether a user has
      the required permission:
      <code className="block mt-2 bg-gray-900 text-green-400 p-3 rounded-lg text-sm font-mono shadow-inner">
        {" "}if (userRoles.includes('admin')) {'{'} allowAccess(); {'}'}
      </code>
    </p>
  </div>
</div>


<div className="border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50 w-full md:w-[350px] lg:w-[400px] hover:-translate-y-1">
  <h2 className="text-3xl font-bold mb-5 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent border-l-4 border-blue-500 pl-3">find()</h2>

  <p className="mb-4 text-gray-700 leading-relaxed bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
    Use this when you need to locate a specific item in an array.
    It returns the <strong className="text-blue-700">first element</strong> that satisfies the
    given condition and then stops searching. When working with arrays
    of objects, this is usually the preferred method.
  </p>

  <div className="mb-4">
    <h3 className="font-semibold text-gray-800 mb-2 flex items-center text-lg">
      <span className="w-1 h-5 bg-blue-500 mr-2 rounded"></span>
      Syntax:
    </h3>

    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mt-2 overflow-x-auto text-sm font-mono shadow-inner">
{`const foundItem = array.find((element, index, array) => {
  return condition; // returns true or false
});`}
    </pre>
  </div>

  <div className="mb-4 bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
    <h3 className="font-semibold text-gray-800 mb-2 flex items-center text-lg">
      <span className="w-1 h-5 bg-green-500 mr-2 rounded"></span>
      Returns:
    </h3>
    <p className="text-gray-700">
      The actual element (value or object) that matches the condition.
      If no matching element is found, it returns
      <code className="bg-purple-100 px-1.5 py-0.5 rounded text-purple-700 font-mono text-sm mx-1"> undefined</code>.
    </p>
  </div>

  <div className="mb-4 bg-purple-50 p-3 rounded-lg border-l-4 border-purple-500">
    <h3 className="font-semibold text-gray-800 mb-2 flex items-center text-lg">
      <span className="w-1 h-5 bg-purple-500 mr-2 rounded"></span>
      Copy Behavior:
    </h3>
    <p className="text-gray-700">
      <strong className="text-orange-700">Shallow assignment.</strong> It does not create a copy of
      the array. If the returned value is an object, it returns a
      reference to that object. Modifying it will affect the original
      array.
    </p>
  </div>

  <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-3 rounded-lg border-l-4 border-orange-500">
    <h3 className="font-semibold text-gray-800 mb-2 flex items-center text-lg">
      <span className="w-1 h-5 bg-orange-500 mr-2 rounded"></span>
      Project Use Case:
    </h3>
    <p className="text-gray-700">
      Retrieving a specific user object from a database array using a
      unique user ID, such as finding a user's profile details before
      displaying or updating them.
    </p>
  </div>
</div>


<div className="border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50 w-full md:w-[350px] lg:w-[400px] hover:-translate-y-1">
  <h2 className="text-3xl font-bold mb-5 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent border-l-4 border-blue-500 pl-3">findIndex()</h2>

  <p className="mb-4 text-gray-700 leading-relaxed bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
    Similar to <code className="bg-gray-200 px-1.5 py-0.5 rounded text-red-600 font-mono text-sm">find()</code>, but instead of returning the actual
    element, it tells you the <strong className="text-blue-700">index position</strong> where that
    element exists in the array.
  </p>

  <div className="mb-4">
    <h3 className="font-semibold text-gray-800 mb-2 flex items-center text-lg">
      <span className="w-1 h-5 bg-blue-500 mr-2 rounded"></span>
      Syntax:
    </h3>

    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mt-2 overflow-x-auto text-sm font-mono shadow-inner">
{`const index = array.findIndex((element, index, array) => {
  return condition;
});`}
    </pre>
  </div>

  <div className="mb-4 bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
    <h3 className="font-semibold text-gray-800 mb-2 flex items-center text-lg">
      <span className="w-1 h-5 bg-green-500 mr-2 rounded"></span>
      Returns:
    </h3>
    <p className="text-gray-700">
      A <strong className="text-purple-700">Number</strong> representing the index of the first
      matching element. Returns <code className="bg-red-100 px-1.5 py-0.5 rounded text-red-700 font-mono text-sm mx-1">-1</code> if no match is found.
    </p>
  </div>

  <div className="mb-4 bg-purple-50 p-3 rounded-lg border-l-4 border-purple-500">
    <h3 className="font-semibold text-gray-800 mb-2 flex items-center text-lg">
      <span className="w-1 h-5 bg-purple-500 mr-2 rounded"></span>
      Copy Behavior:
    </h3>
    <p className="text-gray-700">
      Does not copy, modify, or create a new array. It simply searches
      the array and returns the position of the matching element.
    </p>
  </div>

  <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-3 rounded-lg border-l-4 border-orange-500">
    <h3 className="font-semibold text-gray-800 mb-2 flex items-center text-lg">
      <span className="w-1 h-5 bg-orange-500 mr-2 rounded"></span>
      Project Use Case:
    </h3>
    <p className="text-gray-700">
      Finding the position of an item in a list so you can pass that
      exact index to <code className="bg-gray-200 px-1.5 py-0.5 rounded text-red-600 font-mono text-sm">splice()</code> to update or delete the item.
      For example, removing a product from a shopping cart based on its ID.
    </p>
  </div>
</div>


<div className="border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50 w-full md:w-[350px] lg:w-[400px] hover:-translate-y-1">
  <h2 className="text-3xl font-bold mb-5 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent border-l-4 border-blue-500 pl-3">findLastIndex()</h2>

  <p className="mb-4 text-gray-700 leading-relaxed bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
    Works just like <code className="bg-gray-200 px-1.5 py-0.5 rounded text-red-600 font-mono text-sm">findIndex()</code>, but searches from the
    <strong className="text-blue-700"> end of the array to the beginning</strong>. It returns the
    index of the last element that satisfies the given condition.
  </p>

  <div className="mb-4">
    <h3 className="font-semibold text-gray-800 mb-2 flex items-center text-lg">
      <span className="w-1 h-5 bg-blue-500 mr-2 rounded"></span>
      Syntax:
    </h3>

    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mt-2 overflow-x-auto text-sm font-mono shadow-inner">
{`const lastIndex = array.findLastIndex((element, index, array) => {
  return condition;
});`}
    </pre>
  </div>

  <div className="mb-4 bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
    <h3 className="font-semibold text-gray-800 mb-2 flex items-center text-lg">
      <span className="w-1 h-5 bg-green-500 mr-2 rounded"></span>
      Returns:
    </h3>
    <p className="text-gray-700">
      A <strong className="text-purple-700">Number</strong> representing the index of the last
      matching element. Returns <code className="bg-red-100 px-1.5 py-0.5 rounded text-red-700 font-mono text-sm mx-1">-1</code> if no match is found.
    </p>
  </div>

  <div className="mb-4 bg-purple-50 p-3 rounded-lg border-l-4 border-purple-500">
    <h3 className="font-semibold text-gray-800 mb-2 flex items-center text-lg">
      <span className="w-1 h-5 bg-purple-500 mr-2 rounded"></span>
      Copy Behavior:
    </h3>
    <p className="text-gray-700">
      Does not copy, modify, or create a new array. It only returns
      the index of the matching element.
    </p>
  </div>

  <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-3 rounded-lg border-l-4 border-orange-500">
    <h3 className="font-semibold text-gray-800 mb-2 flex items-center text-lg">
      <span className="w-1 h-5 bg-orange-500 mr-2 rounded"></span>
      Project Use Case:
    </h3>
    <p className="text-gray-700">
      Locating the index of the most recently added out-of-stock
      product in an inventory system to remove it or mark it for review.
    </p>
  </div>
</div>


<div className="border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50 w-full md:w-[350px] lg:w-[400px] hover:-translate-y-1">
  <h2 className="text-3xl font-bold mb-5 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent border-l-4 border-blue-500 pl-3">some()</h2>

  <p className="mb-4 text-gray-700 leading-relaxed bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
    Use this when you want to check whether at least one element in an
    array satisfies a condition. It stops iterating immediately
    (<strong className="text-blue-700">short-circuits</strong>) as soon as it finds the first
    matching element.
  </p>

  <div className="mb-4">
    <h3 className="font-semibold text-gray-800 mb-2 flex items-center text-lg">
      <span className="w-1 h-5 bg-blue-500 mr-2 rounded"></span>
      Syntax:
    </h3>

    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mt-2 overflow-x-auto text-sm font-mono shadow-inner">
{`const hasMatch = array.some((element, index, array) => {
  return condition;
});`}
    </pre>
  </div>

  <div className="mb-4 bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
    <h3 className="font-semibold text-gray-800 mb-2 flex items-center text-lg">
      <span className="w-1 h-5 bg-green-500 mr-2 rounded"></span>
      Returns:
    </h3>
    <p className="text-gray-700">
      A Boolean value:
      <code className="bg-green-200 px-1.5 py-0.5 rounded text-green-700 font-mono text-sm mx-1"> true </code> if at least one element passes the test,
      otherwise <code className="bg-red-100 px-1.5 py-0.5 rounded text-red-700 font-mono text-sm mx-1"> false </code>.
    </p>
  </div>

  <div className="mb-4 bg-purple-50 p-3 rounded-lg border-l-4 border-purple-500">
    <h3 className="font-semibold text-gray-800 mb-2 flex items-center text-lg">
      <span className="w-1 h-5 bg-purple-500 mr-2 rounded"></span>
      Copy Behavior:
    </h3>
    <p className="text-gray-700">
      Does not copy, modify, or create a new array. It simply checks
      the elements and returns a Boolean result.
    </p>
  </div>

  <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-3 rounded-lg border-l-4 border-orange-500">
    <h3 className="font-semibold text-gray-800 mb-2 flex items-center text-lg">
      <span className="w-1 h-5 bg-orange-500 mr-2 rounded"></span>
      Project Use Case:
    </h3>
    <p className="text-gray-700">
      Validating form data or checking constraints, such as determining
      whether some items in a shopping cart require special shipping
      instructions (for example, fragile or hazardous products).
    </p>
  </div>
</div>


<div className="border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-2xl transition-all duration-300 bg-gradient-to-br from-white to-gray-50 w-full md:w-[350px] lg:w-[400px] hover:-translate-y-1">
  <h2 className="text-3xl font-bold mb-5 bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent border-l-4 border-blue-500 pl-3">every()</h2>

  <p className="mb-4 text-gray-700 leading-relaxed bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
    Tests whether all elements in an array pass a given condition.
    If it finds even one element that fails the test, it immediately
    stops checking and returns <code className="bg-red-100 px-1.5 py-0.5 rounded text-red-700 font-mono text-sm mx-1">false</code>.
  </p>

  <div className="mb-4">
    <h3 className="font-semibold text-gray-800 mb-2 flex items-center text-lg">
      <span className="w-1 h-5 bg-blue-500 mr-2 rounded"></span>
      Syntax:
    </h3>

    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mt-2 overflow-x-auto text-sm font-mono shadow-inner">
{`const allMatch = array.every((element, index, array) => {
  return condition;
});`}
    </pre>
  </div>

  <div className="mb-4 bg-green-50 p-3 rounded-lg border-l-4 border-green-500">
    <h3 className="font-semibold text-gray-800 mb-2 flex items-center text-lg">
      <span className="w-1 h-5 bg-green-500 mr-2 rounded"></span>
      Returns:
    </h3>
    <p className="text-gray-700 leading-relaxed">
      A Boolean value:
      <br />
      • <code className="bg-green-200 px-1.5 py-0.5 rounded text-green-700 font-mono text-sm">true</code> if every element passes the test.
      <br />
      • <code className="bg-red-100 px-1.5 py-0.5 rounded text-red-700 font-mono text-sm">false</code> if at least one element fails.
      <br />
      • Returns <code className="bg-green-200 px-1.5 py-0.5 rounded text-green-700 font-mono text-sm">true</code> for an empty array.
    </p>
  </div>

  <div className="mb-4 bg-purple-50 p-3 rounded-lg border-l-4 border-purple-500">
    <h3 className="font-semibold text-gray-800 mb-2 flex items-center text-lg">
      <span className="w-1 h-5 bg-purple-500 mr-2 rounded"></span>
      Copy Behavior:
    </h3>
    <p className="text-gray-700">
      Does not copy, modify, or create a new array. It simply evaluates
      the condition and returns a Boolean result.
    </p>
  </div>

  <div className="bg-gradient-to-r from-orange-50 to-amber-50 p-3 rounded-lg border-l-4 border-orange-500">
    <h3 className="font-semibold text-gray-800 mb-2 flex items-center text-lg">
      <span className="w-1 h-5 bg-orange-500 mr-2 rounded"></span>
      Project Use Case:
    </h3>
    <p className="text-gray-700">
      Multi-step checkouts or form validation, such as verifying that
      every required field has been filled out before allowing the user
      to submit the form.
    </p>
  </div>
</div>
    </div>
    </>
  )
}

export default Searching