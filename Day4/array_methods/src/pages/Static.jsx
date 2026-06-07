import React from 'react'

const Static = () => {
  return (
    <>
    <div className='flex flex-wrap justify-center gap-8 px-4 py-8 md:px-8 md:py-12 bg-gradient-to-br from-gray-50 to-blue-50 min-h-screen'>
        <div className="border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)]">
  <div className="border-b-4 border-blue-500 pb-3 mb-4">
    <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Array.isArray()</h2>
  </div>
  
  <div className="space-y-4">
    <div className="bg-blue-50 p-4 rounded-lg">
      <p className="text-gray-700 leading-relaxed">
        The definitive way to check whether a value is actually an array.
        In JavaScript, <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm font-mono text-red-600">typeof []</code> returns
        <code className="bg-gray-200 px-1.5 py-0.5 rounded text-sm font-mono text-red-600 mx-1">"object"</code>, making normal type checking unreliable.
        <strong className="text-blue-700"> Array.isArray() </strong> solves this problem by accurately
        identifying arrays.
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-lg text-gray-800 mb-2 flex items-center">
        <span className="w-1 h-6 bg-blue-500 mr-2 rounded"></span>
        Syntax:
      </h3>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mt-2 overflow-x-auto font-mono text-sm shadow-inner">
{`Array.isArray(value);`}
      </pre>
    </div>

    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
      <h3 className="font-semibold text-lg text-gray-800 mb-2 flex items-center">
        <span className="w-1 h-6 bg-green-500 mr-2 rounded"></span>
        Returns:
      </h3>
      <p className="text-gray-700">
        A Boolean value:
        <code className="bg-green-200 px-1.5 py-0.5 rounded text-sm font-mono text-green-800 mx-1">true</code> if the value is an array, and
        <code className="bg-green-200 px-1.5 py-0.5 rounded text-sm font-mono text-green-800 mx-1">false</code> if it is not.
      </p>
    </div>

    <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
      <h3 className="font-semibold text-lg text-gray-800 mb-2 flex items-center">
        <span className="w-1 h-6 bg-purple-500 mr-2 rounded"></span>
        Copy Behavior:
      </h3>
      <p className="text-gray-700">
        Does not copy, modify, or create any data. It is purely a
        diagnostic validation function used for type checking.
      </p>
    </div>

    <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
      <h3 className="font-semibold text-lg text-gray-800 mb-2 flex items-center">
        <span className="w-1 h-6 bg-orange-500 mr-2 rounded"></span>
        Project Use Case:
      </h3>
      <p className="text-gray-700">
        Protecting your application from API failures. If an API is
        expected to return an array but sometimes returns
        <code className="bg-orange-200 px-1.5 py-0.5 rounded text-sm font-mono text-orange-800 mx-1">null</code> or an object, you can validate the response
        before looping through it to prevent crashes.
      </p>
    </div>
  </div>
</div>


<div className="border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)]">
  <div className="border-b-4 border-blue-500 pb-3 mb-4">
    <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Array.from()</h2>
  </div>
  
  <div className="space-y-4">
    <div className="bg-blue-50 p-4 rounded-lg">
      <p className="text-gray-700 leading-relaxed">
        This powerful utility creates a brand-new, shallow-copied array
        from an <strong className="text-blue-700">array-like</strong> or <strong className="text-blue-700">iterable</strong>
        object. Common sources include DOM NodeLists, JavaScript Sets,
        Maps, or even strings. It also accepts an optional map function
        to transform items while copying them.
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-lg text-gray-800 mb-2 flex items-center">
        <span className="w-1 h-6 bg-blue-500 mr-2 rounded"></span>
        Syntax:
      </h3>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mt-2 overflow-x-auto font-mono text-sm shadow-inner">
{`Array.from(arrayLike, mapFn);

// mapFn is optional and works similarly to .map()`}
      </pre>
    </div>

    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
      <h3 className="font-semibold text-lg text-gray-800 mb-2 flex items-center">
        <span className="w-1 h-6 bg-green-500 mr-2 rounded"></span>
        Returns:
      </h3>
      <p className="text-gray-700">
        A brand-new array containing the items extracted from the
        iterable or array-like source.
      </p>
    </div>

    <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
      <h3 className="font-semibold text-lg text-gray-800 mb-2 flex items-center">
        <span className="w-1 h-6 bg-purple-500 mr-2 rounded"></span>
        Copy Behavior:
      </h3>
      <p className="text-gray-700">
        <strong className="text-purple-700">Shallow copy.</strong> Primitive values are copied
        directly, while object references remain shared between the
        original and new arrays.
      </p>
    </div>

    <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
      <h3 className="font-semibold text-lg text-gray-800 mb-2 flex items-center">
        <span className="w-1 h-6 bg-orange-500 mr-2 rounded"></span>
        Project Use Case:
      </h3>
      <p className="text-gray-700">
        Converting a DOM NodeList into a real array so you can use
        methods like <code className="bg-orange-200 px-1.5 py-0.5 rounded text-sm font-mono text-orange-800">filter()</code> or <code className="bg-orange-200 px-1.5 py-0.5 rounded text-sm font-mono text-orange-800">reduce()</code>,
        and removing duplicate values from an array using a
        <code className="bg-orange-200 px-1.5 py-0.5 rounded text-sm font-mono text-orange-800 mx-1">Set</code>.
      </p>
    </div>
  </div>
</div>


<div className="border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white w-full md:w-[calc(50%-1rem)] lg:w-[calc(33.33%-1.5rem)]">
  <div className="border-b-4 border-blue-500 pb-3 mb-4">
    <h2 className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">Array.of()</h2>
  </div>
  
  <div className="space-y-4">
    <div className="bg-blue-50 p-4 rounded-lg">
      <p className="text-gray-700 leading-relaxed">
        Creates a new array instance with a variable number of arguments,
        regardless of the number or data type of those arguments.
        It ensures consistent behavior when creating arrays.
      </p>
    </div>

    <div>
      <h3 className="font-semibold text-lg text-gray-800 mb-2 flex items-center">
        <span className="w-1 h-6 bg-blue-500 mr-2 rounded"></span>
        Syntax:
      </h3>
      <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mt-2 overflow-x-auto font-mono text-sm shadow-inner">
{`Array.of(element0, element1, ..., elementN)`}
      </pre>
    </div>

    <div className="bg-green-50 p-4 rounded-lg border-l-4 border-green-500">
      <h3 className="font-semibold text-lg text-gray-800 mb-2 flex items-center">
        <span className="w-1 h-6 bg-green-500 mr-2 rounded"></span>
        Returns:
      </h3>
      <p className="text-gray-700">
        A brand new array containing all the arguments passed into it.
      </p>
    </div>

    <div className="bg-purple-50 p-4 rounded-lg border-l-4 border-purple-500">
      <h3 className="font-semibold text-lg text-gray-800 mb-2 flex items-center">
        <span className="w-1 h-6 bg-purple-500 mr-2 rounded"></span>
        Copy Behavior:
      </h3>
      <p className="text-gray-700">
        Creates a new array structure from scratch, independent of any
        existing array.
      </p>
    </div>

    <div className="bg-yellow-50 p-4 rounded-lg border-l-4 border-yellow-500">
      <h3 className="font-semibold text-lg text-gray-800 mb-2 flex items-center">
        <span className="w-1 h-6 bg-yellow-500 mr-2 rounded"></span>
        Why it matters:
      </h3>
      <p className="text-gray-700">
        It fixes a confusing behavior of <code className="bg-yellow-200 px-1.5 py-0.5 rounded text-sm font-mono text-yellow-800">new Array()</code>. For
        example, <code className="bg-yellow-200 px-1.5 py-0.5 rounded text-sm font-mono text-yellow-800">new Array(5)</code> creates an empty array with
        5 slots, but <code className="bg-yellow-200 px-1.5 py-0.5 rounded text-sm font-mono text-yellow-800">Array.of(5)</code> creates
        <code className="bg-yellow-200 px-1.5 py-0.5 rounded text-sm font-mono text-yellow-800"> [5] </code>.
      </p>
    </div>

    <div className="bg-orange-50 p-4 rounded-lg border-l-4 border-orange-500">
      <h3 className="font-semibold text-lg text-gray-800 mb-2 flex items-center">
        <span className="w-1 h-6 bg-orange-500 mr-2 rounded"></span>
        Project Use Case:
      </h3>
      <p className="text-gray-700">
        Useful when you need predictable array creation, especially in
        functional programming or when generating single-element or
        dynamic arrays safely.
      </p>
    </div>
  </div>
</div>
    </div>
    </>
  )
}

export default Static