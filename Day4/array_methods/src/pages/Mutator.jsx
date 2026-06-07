import React from 'react'

const Mutator = () => {
  return (
    <>
    <div className='flex flex-wrap justify-center gap-8 md:gap-12 lg:gap-20 px-4 md:px-10 lg:px-20 py-8 md:py-12 lg:py-20 bg-gradient-to-br from-gray-50 to-gray-100 min-h-screen'>
        <div className="border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white w-full lg:w-[600px] hover:scale-[1.02] transition-transform duration-300">
  <h2 className="text-3xl font-bold mb-4 text-red-800 border-l-4 border-red-500 pl-3">push()</h2>

  <p className="mb-4 text-gray-700 leading-relaxed">
    Adds one or more elements directly to the end of an array.
    This method modifies the original array by appending the new
    items to its last position.
  </p>

  <div className="mb-4">
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">📝 Syntax:</h3>

    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mt-2 overflow-x-auto text-sm font-mono">
{`array.push(element1, element2, ..., elementN);`}
    </pre>
  </div>

  <div className="mb-4">
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">🎯 Returns:</h3>
    <p className="text-gray-700">
      A <strong className="text-red-600">number</strong> representing the new length of the
      array after the elements have been added.
    </p>
  </div>

  <div className="mb-4">
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">📋 Copy Behavior:</h3>
    <p className="text-gray-700">
      <strong className="text-red-600">No copy is made.</strong> It directly mutates the
      original array by adding elements to the end.
    </p>
  </div>

  <div>
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">💡 Project Use Case:</h3>
    <p className="text-gray-700">
      Appending a newly created item, such as a new comment,
      notification, or product in a shopping cart, to the end
      of an existing list.
    </p>
  </div>
</div>


<div className="border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white w-full lg:w-[600px] hover:scale-[1.02] transition-transform duration-300">
  <h2 className="text-3xl font-bold mb-4 text-red-800 border-l-4 border-red-500 pl-3">pop()</h2>

  <p className="mb-4 text-gray-700 leading-relaxed">
    Removes the very last element from an array. Use this when you
    need to delete the most recently added item from the end of the array.
  </p>

  <div className="mb-4">
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">📝 Syntax:</h3>

    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mt-2 overflow-x-auto text-sm font-mono">
{`array.pop();`}
    </pre>
  </div>

  <div className="mb-4">
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">🎯 Returns:</h3>
    <p className="text-gray-700">
      The element that was removed. If the array is empty, it returns
      <code className="bg-gray-100 px-1 py-0.5 rounded text-red-600"> undefined</code>.
    </p>
  </div>

  <div className="mb-4">
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">📋 Copy Behavior:</h3>
    <p className="text-gray-700">
      <strong className="text-red-600">No copy is made.</strong> It directly modifies
      (mutates) the original array.
    </p>
  </div>

  <div>
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">💡 Project Use Case:</h3>
    <p className="text-gray-700">
      Implementing an <strong className="text-red-600">"Undo"</strong> feature where the last
      action performed by the user is removed from a history stack.
    </p>
  </div>
</div>


<div className="border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white w-full lg:w-[600px] hover:scale-[1.02] transition-transform duration-300">
  <h2 className="text-3xl font-bold mb-4 text-red-800 border-l-4 border-red-500 pl-3">unshift()</h2>

  <p className="mb-4 text-gray-700 leading-relaxed">
    Use this method when you want to add one or more elements to the
    beginning of an array. All existing elements are shifted to a
    higher index position.
  </p>

  <div className="mb-4">
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">📝 Syntax:</h3>

    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mt-2 overflow-x-auto text-sm font-mono">
{`array.unshift(element1, element2, ..., elementN);`}
    </pre>
  </div>

  <div className="mb-4">
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">🎯 Returns:</h3>
    <p className="text-gray-700">
      A <strong className="text-red-600">Number</strong> representing the new length of the array.
    </p>
  </div>

  <div className="mb-4">
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">📋 Copy Behavior:</h3>
    <p className="text-gray-700">
      <strong className="text-red-600">No copy is made.</strong> It directly modifies
      (mutates) the original array.
    </p>
  </div>

  <div>
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">💡 Project Use Case:</h3>
    <p className="text-gray-700">
      Adding a <strong className="text-red-600">"Pin to Top"</strong> feature, displaying the
      newest notification first, or showing the latest post at the top
      of a social media feed.
    </p>
  </div>
</div>


<div className="border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white w-full lg:w-[600px] hover:scale-[1.02] transition-transform duration-300">
  <h2 className="text-3xl font-bold mb-4 text-red-800 border-l-4 border-red-500 pl-3">shift()</h2>

  <p className="mb-4 text-gray-700 leading-relaxed">
    Use this method when you want to remove the very first element
    from an array. After removal, all the remaining elements shift
    one position to the left, causing their indexes to decrease by one.
  </p>

  <div className="mb-4">
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">📝 Syntax:</h3>

    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mt-2 overflow-x-auto text-sm font-mono">
{`array.shift();`}
    </pre>
  </div>

  <div className="mb-4">
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">🎯 Returns:</h3>
    <p className="text-gray-700">
      The element that was removed from the beginning of the array.
      If the array is empty, it returns <code className="bg-gray-100 px-1 py-0.5 rounded text-red-600">undefined</code>.
    </p>
  </div>

  <div className="mb-4">
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">📋 Copy Behavior:</h3>
    <p className="text-gray-700">
      <strong className="text-red-600">No copy is made.</strong> It directly modifies
      (mutates) the original array by removing its first element.
    </p>
  </div>

  <div>
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">💡 Project Use Case:</h3>
    <p className="text-gray-700">
      Managing a <strong className="text-red-600">First-In, First-Out (FIFO)</strong> queue,
      such as processing print jobs, handling customer support tickets,
      or executing API requests in the order they were received.
    </p>
  </div>
</div>

<div className="border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white w-full lg:w-[600px] hover:scale-[1.02] transition-transform duration-300">
  <h2 className="text-3xl font-bold mb-4 text-red-800 border-l-4 border-red-500 pl-3">splice()</h2>

  <p className="mb-4 text-gray-700 leading-relaxed">
    The Swiss Army knife of mutator methods. Use this when you need to
    <strong className="text-red-600"> delete, insert, or replace </strong> elements at any
    specific position in an array. Unlike many array methods,
    <code className="bg-gray-100 px-1 py-0.5 rounded text-red-600"> splice() </code> directly modifies the original array.
  </p>

  <div className="mb-4">
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">📝 Syntax:</h3>

    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mt-2 overflow-x-auto text-sm font-mono">
{`array.splice(startIndex, deleteCount, item1, item2, ...);`}
    </pre>
  </div>

  <div className="mb-4">
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">🎯 Returns:</h3>
    <p className="text-gray-700">
      A new array containing the elements that were deleted.
      If no elements are removed, it returns an empty array
      <code className="bg-gray-100 px-1 py-0.5 rounded text-red-600"> [] </code>.
    </p>
  </div>

  <div className="mb-4">
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">📋 Copy Behavior:</h3>
    <p className="text-gray-700">
      It returns a <strong className="text-red-600">shallow copy</strong> of the deleted items,
      but its main effect is the <strong className="text-red-600">in-place modification</strong>
      of the original array.
    </p>
  </div>

  <div>
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">💡 Project Use Case:</h3>
    <p className="text-gray-700">
      A data table where a user clicks <strong className="text-red-600">"Delete"</strong> on a
      row in the middle of a list, inserts a new row between existing
      rows, or replaces outdated data with updated information.
    </p>
  </div>
</div>


<div className="border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white w-full lg:w-[600px] hover:scale-[1.02] transition-transform duration-300">
  <h2 className="text-3xl font-bold mb-4 text-red-800 border-l-4 border-red-500 pl-3">sort()</h2>

  <p className="mb-4 text-gray-700 leading-relaxed">
    Use this when you want to arrange the elements of an array in a
    specific order. By default, <code className="bg-gray-100 px-1 py-0.5 rounded text-red-600">sort()</code> converts elements
    to strings and sorts them alphabetically using UTF-16 code units.
    This means numbers may not sort correctly (for example, 10 comes
    before 2). For numerical sorting, you should always provide a
    comparison function.
  </p>

  <div className="mb-4">
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">📝 Syntax:</h3>

    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mt-2 overflow-x-auto text-sm font-mono">
{`// Ascending numerical sort
array.sort((a, b) => a - b);

// Descending numerical sort
array.sort((a, b) => b - a);`}
    </pre>
  </div>

  <div className="mb-4">
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">🎯 Returns:</h3>
    <p className="text-gray-700">
      The same original array, now sorted.
    </p>
  </div>

  <div className="mb-4">
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">📋 Copy Behavior:</h3>
    <p className="text-gray-700">
      <strong className="text-red-600">No copy is made.</strong> It directly modifies
      (mutates) the original array.
    </p>
  </div>

  <div>
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">💡 Project Use Case:</h3>
    <p className="text-gray-700">
      Sorting a user dashboard list by name alphabetically, arranging
      products by price from lowest to highest, or displaying the most
      recent items first.
    </p>
  </div>
</div>



<div className="border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white w-full lg:w-[600px] hover:scale-[1.02] transition-transform duration-300">
  <h2 className="text-3xl font-bold mb-4 text-red-800 border-l-4 border-red-500 pl-3">reverse()</h2>

  <p className="mb-4 text-gray-700 leading-relaxed">
    Reverses the order of the elements in an array in place. The first
    element becomes the last, and the last element becomes the first.
  </p>

  <div className="mb-4">
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">📝 Syntax:</h3>

    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mt-2 overflow-x-auto text-sm font-mono">
{`array.reverse();`}
    </pre>
  </div>

  <div className="mb-4">
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">🎯 Returns:</h3>
    <p className="text-gray-700">
      The same original array, now reversed.
    </p>
  </div>

  <div className="mb-4">
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">📋 Copy Behavior:</h3>
    <p className="text-gray-700">
      <strong className="text-red-600">No copy is made.</strong> It directly modifies
      (mutates) the original array.
    </p>
  </div>

  <div>
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">💡 Project Use Case:</h3>
    <p className="text-gray-700">
      Toggling a list's display order between
      <strong className="text-red-600"> "Oldest First"</strong> and
      <strong className="text-red-600"> "Newest First"</strong>, such as sorting messages,
      notifications, or activity feeds.
    </p>
  </div>
</div>


<div className="border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white w-full lg:w-[600px] hover:scale-[1.02] transition-transform duration-300">
  <h2 className="text-3xl font-bold mb-4 text-red-800 border-l-4 border-red-500 pl-3">fill()</h2>

  <p className="mb-4 text-gray-700 leading-relaxed">
    Use this when you want to replace all elements, or a specific
    section of an array, with the same static value. It directly
    updates the existing array instead of creating a new one.
  </p>

  <div className="mb-4">
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">📝 Syntax:</h3>

    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mt-2 overflow-x-auto text-sm font-mono">
{`array.fill(value, startIndex, endIndex)`}
    </pre>
  </div>

  <div className="mb-4">
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">🎯 Returns:</h3>
    <p className="text-gray-700">
      The <strong className="text-red-600">same original array</strong>, now modified with the
      specified value.
    </p>
  </div>

  <div className="mb-4">
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">📋 Copy Behavior:</h3>
    <p className="text-gray-700">
      <strong className="text-red-600">No copy is made.</strong> It mutates the original array.
      If the value passed is an object, all filled positions will
      reference that exact same object.
    </p>
  </div>

  <div>
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">💡 Project Use Case:</h3>
    <p className="text-gray-700">
      Instantly resetting a game board, such as a Tic-Tac-Toe grid,
      Sudoku board, or score tracker, back to empty states or zeros.
    </p>
  </div>
</div>

<div className="border border-gray-200 rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow duration-300 bg-white w-full lg:w-[600px] hover:scale-[1.02] transition-transform duration-300">
  <h2 className="text-3xl font-bold mb-4 text-red-800 border-l-4 border-red-500 pl-3">copyWithin()</h2>

  <p className="mb-4 text-gray-700 leading-relaxed">
    Use this method when you want to copy a sequence of elements from
    one part of an array to another position within the <strong className="text-red-600">same array</strong>,
    without changing its overall length.
  </p>

  <div className="mb-4">
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">📝 Syntax:</h3>

    <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mt-2 overflow-x-auto text-sm font-mono">
{`array.copyWithin(targetIndex, startIndex, endIndex);`}
    </pre>
  </div>

  <div className="mb-4">
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">🎯 Returns:</h3>
    <p className="text-gray-700">
      The same original array, now modified with the copied elements.
    </p>
  </div>

  <div className="mb-4">
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">📋 Copy Behavior:</h3>
    <p className="text-gray-700">
      <strong className="text-red-600">No copy is made.</strong> The method modifies the original
      array directly by shifting data internally. It does not create
      a new array.
    </p>
  </div>

  <div>
    <h3 className="font-semibold text-gray-800 mb-2 text-lg">💡 Project Use Case:</h3>
    <p className="text-gray-700">
      Useful in low-level buffer manipulations, data stream processing,
      or performance-critical scenarios such as shifting algorithmic
      graphics data without allocating additional memory.
    </p>
  </div>
</div>
    </div>
    </>
  )
}

export default Mutator