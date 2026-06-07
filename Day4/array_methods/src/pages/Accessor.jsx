import React from 'react'

const Accessor = () => {
  return (
   <>
   <div className='flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-20 px-4 md:px-10 lg:px-20 py-8 md:py-12 lg:py-20 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen'>
         <div className="border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white w-full lg:w-[600px] hover:scale-[1.02] transition-transform duration-300">
  <h2 className="text-3xl font-bold mb-4 text-blue-800 border-l-4 border-blue-500 pl-3">concat()</h2>

  <p className="mb-4 text-gray-700 leading-relaxed">
    Used to merge two or more arrays, or individual values, into a
    single new array without modifying the original arrays.
  </p>

  <div className="mb-4">
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">📝 Syntax:</h3>

    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mt-2 overflow-x-auto text-sm font-mono">
{`const newArray = array1.concat(
  array2,
  array3,
  ...,
  valueN
);`}
    </pre>
  </div>

  <div className="mb-4">
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">🎯 Returns:</h3>
    <p className="text-gray-700">
      A brand-new array containing all the joined elements and values.
    </p>
  </div>

  <div className="mb-4">
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">📋 Copy Behavior:</h3>
    <p className="text-gray-700">
      <strong className="text-blue-600">Shallow copy.</strong> It copies elements from the source
      arrays into a new array. If the elements are objects, only their
      references are copied, not the actual objects.
    </p>
  </div>

  <div>
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">💡 Project Use Case:</h3>
    <p className="text-gray-700">
      Paginated data fetching. When a user clicks
      <strong className="font-semibold text-blue-600"> "Load More"</strong>, you can concatenate the newly
      fetched page of items to your existing list.
    </p>
  </div>
</div>



<div className="border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white w-full lg:w-[600px] hover:scale-[1.02] transition-transform duration-300">
  <h2 className="text-3xl font-bold mb-4 text-blue-800 border-l-4 border-blue-500 pl-3">slice()</h2>

  <p className="mb-4 text-gray-700 leading-relaxed">
    Extracts a specific portion of an array and copies it into a new
    array. It cuts from the <code className="bg-gray-100 px-1 py-0.5 rounded text-red-600">startIndex</code> up to—but not
    including—the <code className="bg-gray-100 px-1 py-0.5 rounded text-red-600">endIndex</code>.
  </p>

  <div className="mb-4">
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">📝 Syntax:</h3>

    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mt-2 overflow-x-auto text-sm font-mono">
{`const newArray = array.slice(startIndex, endIndex);`}
    </pre>
  </div>

  <div className="mb-4">
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">💡 Tip:</h3>
    <p className="text-gray-700">
      Omitting <code className="bg-gray-100 px-1 py-0.5 rounded text-red-600">endIndex</code> copies everything to the end of
      the array. Using <code className="bg-gray-100 px-1 py-0.5 rounded text-red-600">array.slice(0)</code> is a common way to
      create a quick shallow copy of the entire array.
    </p>
  </div>

  <div className="mb-4">
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">🎯 Returns:</h3>
    <p className="text-gray-700">
      A brand-new array containing the extracted elements.
    </p>
  </div>

  <div className="mb-4">
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">📋 Copy Behavior:</h3>
    <p className="text-gray-700">
      <strong className="text-blue-600">Shallow copy.</strong> The original array remains
      unchanged and untouched.
    </p>
  </div>

  <div>
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">💡 Project Use Case:</h3>
    <p className="text-gray-700">
      Implementing frontend pagination by displaying only a subset of
      items at a time. For example, showing 10 products per page from
      a list of 100 products.
    </p>
  </div>
</div>



<div className="border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white w-full lg:w-[600px] hover:scale-[1.02] transition-transform duration-300">
  <h2 className="text-3xl font-bold mb-4 text-blue-800 border-l-4 border-blue-500 pl-3">join()</h2>

  <p className="mb-4 text-gray-700 leading-relaxed">
    Converts all elements of an array into a single string, joined
    together by a separator that you specify.
  </p>

  <div className="mb-4">
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">📝 Syntax:</h3>

    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mt-2 overflow-x-auto text-sm font-mono">
{`const stringResult = array.join(separator);`}
    </pre>
  </div>

  <div className="mb-4">
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">💡 Tip:</h3>
    <p className="text-gray-700">
      If you don't provide a separator, it defaults to a comma
      (<code className="bg-gray-100 px-1 py-0.5 rounded text-red-600">","</code>). If you pass an empty string
      (<code className="bg-gray-100 px-1 py-0.5 rounded text-red-600">""</code>), the elements are joined with no spaces.
    </p>
  </div>

  <div className="mb-4">
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">🎯 Returns:</h3>
    <p className="text-gray-700">
      A <strong className="text-blue-600">String</strong> containing all the array elements
      combined together.
    </p>
  </div>

  <div className="mb-4">
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">📋 Copy Behavior:</h3>
    <p className="text-gray-700">
      Does not copy or modify the original array. It simply returns
      a primitive string.
    </p>
  </div>

  <div>
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">💡 Project Use Case:</h3>
    <p className="text-gray-700">
      Generating CSV export data or formatting a list of tags such as
      <code className="bg-gray-100 px-1 py-0.5 rounded text-red-600"> ["Tech", "Coding"]</code> into a display string like
      <code className="bg-gray-100 px-1 py-0.5 rounded text-red-600"> "Tech | Coding"</code>.
    </p>
  </div>
</div>


<div className="border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white w-full lg:w-[600px] hover:scale-[1.02] transition-transform duration-300">
  <h2 className="text-3xl font-bold mb-4 text-blue-800 border-l-4 border-blue-500 pl-3">toString()</h2>

  <p className="mb-4 text-gray-700 leading-relaxed">
    A simpler version of <code className="bg-gray-100 px-1 py-0.5 rounded text-red-600">join()</code>. It automatically converts
    all array elements into strings and joins them together using commas.
    It is often called behind the scenes when an array is printed alongside
    text.
  </p>

  <div className="mb-4">
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">📝 Syntax:</h3>

    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mt-2 overflow-x-auto text-sm font-mono">
{`const stringResult = array.toString();`}
    </pre>
  </div>

  <div className="mb-4">
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">🎯 Returns:</h3>
    <p className="text-gray-700">
      A comma-separated <strong className="text-blue-600">String</strong> containing all the
      elements of the array.
    </p>
  </div>

  <div className="mb-4">
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">📋 Copy Behavior:</h3>
    <p className="text-gray-700">
      Does not copy, modify, or mutate the original array. It simply
      returns its string representation.
    </p>
  </div>

  <div>
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">💡 Project Use Case:</h3>
    <p className="text-gray-700">
      Quick debugging or logging an array's contents to the console,
      such as displaying selected categories, tags, or user roles
      alongside descriptive text.
    </p>
  </div>
</div>


<div className="border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white w-full lg:w-[600px] hover:scale-[1.02] transition-transform duration-300">
  <h2 className="text-3xl font-bold mb-4 text-blue-800 border-l-4 border-blue-500 pl-3">toLocaleString()</h2>

  <p className="mb-4 text-gray-700 leading-relaxed">
    Converts the elements of an array into localized strings based on
    the user's specific runtime environment. This helps format values
    such as dates, currencies, and numbers according to regional
    conventions.
  </p>

  <div className="mb-4">
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">📝 Syntax:</h3>

    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mt-2 overflow-x-auto text-sm font-mono">
{`const localString = array.toLocaleString(locales, options);`}
    </pre>
  </div>

  <div className="mb-4">
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">🎯 Returns:</h3>
    <p className="text-gray-700">
      A localized <code className="bg-gray-100 px-1 py-0.5 rounded text-red-600">String</code> of array elements separated by a
      locale-specific separator.
    </p>
  </div>

  <div className="mb-4">
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">📋 Copy Behavior:</h3>
    <p className="text-gray-700">
      Does not copy, modify, or create a new array. It simply returns
      a formatted string representation of the array.
    </p>
  </div>

  <div>
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">💡 Project Use Case:</h3>
    <p className="text-gray-700">
      Building a multinational e-commerce application where dates,
      prices, or currency values need to be displayed correctly for
      users in different regions, such as Paris, Tokyo, or New York.
    </p>
  </div>
</div>


<div className="border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white w-full lg:w-[600px] hover:scale-[1.02] transition-transform duration-300">
  <h2 className="text-3xl font-bold mb-4 text-blue-800 border-l-4 border-blue-500 pl-3">flat()</h2>

  <p className="mb-4 text-gray-700 leading-relaxed">
    Use this when you have nested arrays (arrays inside arrays) and
    want to combine them into a single outer array. It flattens
    sub-arrays up to a specified depth.
  </p>

  <div className="mb-4">
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">📝 Syntax:</h3>

    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mt-2 overflow-x-auto text-sm font-mono">
{`const flatArray = array.flat(depth);`}
    </pre>
  </div>

  <div className="mb-4">
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">💡 Tip:</h3>
    <p className="text-gray-700 mb-2">
      If you don't know how deeply nested the arrays are, use
      <code className="bg-gray-100 px-1 py-0.5 rounded text-red-600"> Infinity </code> as the depth to flatten all levels.
    </p>

    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mt-2 overflow-x-auto text-sm font-mono">
{`const flatArray = array.flat(Infinity);`}
    </pre>
  </div>

  <div className="mb-4">
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">🎯 Returns:</h3>
    <p className="text-gray-700">
      A brand-new array with all sub-array elements concatenated
      into it up to the specified depth.
    </p>
  </div>

  <div className="mb-4">
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">📋 Copy Behavior:</h3>
    <p className="text-gray-700">
      <strong className="text-blue-600">Shallow copy.</strong> It copies elements out of their
      sub-arrays into a new array. If the elements are objects, their
      references are preserved.
    </p>
  </div>

  <div>
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">💡 Project Use Case:</h3>
    <p className="text-gray-700">
      Cleaning up inconsistent API data structures, such as a dashboard
      showing recent activities where the API returns tasks grouped by
      category arrays, and you need a single, flat timeline list.
    </p>
  </div>
</div>
   </div>
   
   </>
  )
}

export default Accessor