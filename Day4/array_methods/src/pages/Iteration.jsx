import React from 'react'

const Iteration = () => {
  return (
    <>
    <div className='flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-20 px-4 md:px-10 lg:px-20 py-8 md:py-12 lg:py-20 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen'>
        <div className="border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white w-full lg:w-[600px] hover:scale-[1.02] transition-transform duration-300">
  <h2 className="text-3xl font-bold mb-4 text-purple-800 border-l-4 border-purple-500 pl-3">forEach()</h2>

  <p className="mb-4 text-gray-700 leading-relaxed">
    Use this when you want to execute code for every item in an array,
    but you don't want to create a new array. It is typically used for
    <strong className="text-purple-600"> side effects </strong> such as saving data, updating the DOM,
    or logging information.
  </p>

  <div className="mb-4">
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">📝 Syntax:</h3>

    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mt-2 overflow-x-auto text-sm font-mono">
{`array.forEach((element, index, array) => {
  // code
});`}
    </pre>
  </div>

  <div className="mb-4">
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">🎯 Returns:</h3>
    <p className="text-gray-700">
      <code className="bg-gray-100 px-1 py-0.5 rounded text-red-600">undefined</code> – It always returns nothing.
    </p>
  </div>

  <div className="mb-4">
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">📋 Copy Behavior:</h3>
    <p className="text-gray-700">
      Does not copy or return a new array. If you modify objects inside
      the callback, it will affect the original array.
    </p>
  </div>

  <div>
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">💡 Project Use Case:</h3>
    <p className="text-gray-700">
      Triggering an alert, logging user activity, or saving a list of
      items to <code className="bg-gray-100 px-1 py-0.5 rounded text-red-600">localStorage</code> one by one.
    </p>
  </div>
</div>

<div className="border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white w-full lg:w-[600px] hover:scale-[1.02] transition-transform duration-300">
  <h2 className="text-3xl font-bold mb-4 text-purple-800 border-l-4 border-purple-500 pl-3">map()</h2>

  <p className="mb-4 text-gray-700 leading-relaxed">
    Use this when you want to transform data. It takes an array,
    applies a function to every single item, and returns a
    <strong className="text-purple-600"> brand-new array </strong> of the exact same length
    containing the updated items.
  </p>

  <div className="mb-4">
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">📝 Syntax:</h3>

    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mt-2 overflow-x-auto text-sm font-mono">
{`const newArray = array.map((element, index, array) => {
  return transformedElement;
});`}
    </pre>
  </div>

  <div className="mb-4">
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">🎯 Returns:</h3>
    <p className="text-gray-700">
      A brand-new array containing the transformed elements.
    </p>
  </div>

  <div className="mb-4">
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">📋 Copy Behavior:</h3>
    <p className="text-gray-700">
      <strong className="text-purple-600">Shallow copy.</strong> It creates a new outer array,
      but if the elements are objects, their references are copied.
      Modifying nested objects will affect the original objects.
    </p>
  </div>

  <div>
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">💡 Project Use Case:</h3>
    <p className="text-gray-700">
      Rendering a list of UI elements in React, such as mapping an
      array of user objects into HTML <code className="bg-gray-100 px-1 py-0.5 rounded text-red-600">&lt;li&gt;</code> tags
      or displaying products dynamically.
    </p>
  </div>
</div>

<div className="border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white w-full lg:w-[600px] hover:scale-[1.02] transition-transform duration-300">
  <h2 className="text-3xl font-bold mb-4 text-purple-800 border-l-4 border-purple-500 pl-3">filter()</h2>

  <p className="mb-4 text-gray-700 leading-relaxed">
    Use this when you want to evaluate an array and remove items you
    don't need based on a condition. It checks each element against
    a test and returns only the elements that pass the test.
  </p>

  <div className="mb-4">
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">📝 Syntax:</h3>

    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mt-2 overflow-x-auto text-sm font-mono">
{`const newArray = array.filter((element, index, array) => {
  return condition; // must evaluate to true or false
});`}
    </pre>
  </div>

  <div className="mb-4">
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">🎯 Returns:</h3>
    <p className="text-gray-700">
      A brand-new array containing only the elements that passed
      the test (<code className="bg-gray-100 px-1 py-0.5 rounded text-red-600">true</code>). If no items pass the test,
      it returns an empty array <code className="bg-gray-100 px-1 py-0.5 rounded text-red-600">[]</code>.
    </p>
  </div>

  <div className="mb-4">
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">📋 Copy Behavior:</h3>
    <p className="text-gray-700">
      <strong className="text-purple-600">Shallow copy.</strong> It creates a new array containing
      only the elements that pass the condition. If the elements are
      objects, their references are copied.
    </p>
  </div>

  <div>
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">💡 Project Use Case:</h3>
    <p className="text-gray-700">
      An e-commerce search bar where users filter a product catalog
      based on categories, price ranges, ratings, or product availability.
    </p>
  </div>
</div>

<div className="border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white w-full lg:w-[600px] hover:scale-[1.02] transition-transform duration-300">
  <h2 className="text-3xl font-bold mb-4 text-purple-800 border-l-4 border-purple-500 pl-3">reduce()</h2>

  <p className="mb-4 text-gray-700 leading-relaxed">
    The powerhouse method. Use this when you want to take an entire
    array and condense it down into a single value. The result can be
    a number, string, object, or even another array. It works by
    passing an <strong className="text-purple-600">accumulator</strong> from one item to the next.
  </p>

  <div className="mb-4">
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">📝 Syntax:</h3>

    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mt-2 overflow-x-auto text-sm font-mono">
{`const result = array.reduce(
  (accumulator, currentElement, index, array) => {
    return nextAccumulatorValue;
  },
  initialValue
); // Always provide an initialValue`}
    </pre>
  </div>

  <div className="mb-4">
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">🎯 Returns:</h3>
    <p className="text-gray-700">
      The final accumulated value after processing all elements in the
      array.
    </p>
  </div>

  <div className="mb-4">
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">📋 Copy Behavior:</h3>
    <p className="text-gray-700">
      Does not copy the array itself. It returns whatever data type
      you define as the <code className="bg-gray-100 px-1 py-0.5 rounded text-red-600">initialValue</code> (number, object,
      array, string, etc.).
    </p>
  </div>

  <div>
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">💡 Project Use Case:</h3>
    <p className="text-gray-700">
      Calculating the grand total of a shopping cart by adding up
      <code className="bg-gray-100 px-1 py-0.5 rounded text-red-600"> product.price × product.quantity </code> for every item.
    </p>
  </div>
</div>

<div className="border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white w-full lg:w-[600px] hover:scale-[1.02] transition-transform duration-300">
  <h2 className="text-3xl font-bold mb-4 text-purple-800 border-l-4 border-purple-500 pl-3">reduceRight()</h2>

  <p className="mb-4 text-gray-700 leading-relaxed">
    Works exactly like <strong className="text-purple-600">reduce()</strong>, but processes the
    array in reverse order. It starts from the last element and moves
    towards the first, passing the accumulated value from right to left.
  </p>

  <div className="mb-4">
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">📝 Syntax:</h3>

    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mt-2 overflow-x-auto text-sm font-mono">
{`const result = array.reduceRight(
  (accumulator, currentElement, index, array) => {
    return nextAccumulatorValue;
  },
  initialValue
);`}
    </pre>
  </div>

  <div className="mb-4">
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">🎯 Returns:</h3>
    <p className="text-gray-700">
      The final accumulated value after processing all elements from
      right to left.
    </p>
  </div>

  <div className="mb-4">
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">📋 Copy Behavior:</h3>
    <p className="text-gray-700">
      Same as <code className="bg-gray-100 px-1 py-0.5 rounded text-red-600">reduce()</code>. It does not copy the original
      array and returns whatever data type is defined by the
      <code className="bg-gray-100 px-1 py-0.5 rounded text-red-600"> initialValue</code>.
    </p>
  </div>

  <div>
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">💡 Project Use Case:</h3>
    <p className="text-gray-700">
      Evaluating mathematical or functional expressions where the
      operations must execute from right to left, such as composing
      functions or processing nested calculations.
    </p>
  </div>
</div>

<div className="border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white w-full lg:w-[600px] hover:scale-[1.02] transition-transform duration-300">
  <h2 className="text-3xl font-bold mb-4 text-purple-800 border-l-4 border-purple-500 pl-3">flatMap()</h2>

  <p className="mb-4 text-gray-700 leading-relaxed">
    This is a two-in-one shortcut. It first applies a
    <strong className="text-purple-600"> map() </strong> operation to every element in the array
    and then automatically flattens the resulting nested arrays by
    one level.
  </p>

  <div className="mb-4">
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">📝 Syntax:</h3>

    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mt-2 overflow-x-auto text-sm font-mono">
{`const newArray = array.flatMap((element, index, array) => {
  return [element, transformedElement];
});`}
    </pre>
  </div>

  <div className="mb-4">
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">🎯 Returns:</h3>
    <p className="text-gray-700">
      A brand-new flattened array after mapping and flattening the
      result by a depth of <code className="bg-gray-100 px-1 py-0.5 rounded text-red-600">1</code>.
    </p>
  </div>

  <div className="mb-4">
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">📋 Copy Behavior:</h3>
    <p className="text-gray-700">
      <strong className="text-purple-600">Shallow copy.</strong> It creates a new array and flattens
      only the first level of nested arrays. If the elements are objects,
      their references are still preserved.
    </p>
  </div>

  <div>
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">💡 Project Use Case:</h3>
    <p className="text-gray-700">
      If you have an array of users and each user contains an array of
      tags, <code className="bg-gray-100 px-1 py-0.5 rounded text-red-600">flatMap()</code> can generate a single flat list of
      all tags without leaving you with arrays inside arrays.
    </p>
  </div>
</div>
    </div>
    </>
  )
}

export default Iteration