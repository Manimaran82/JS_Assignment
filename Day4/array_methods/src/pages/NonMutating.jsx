import React from 'react'

const Mutating = () => {
  return (
    <>
    <div className='flex flex-wrap justify-center gap-8 mx-4 my-8 md:gap-12 md:mx-12 md:my-12 lg:gap-20 lg:mx-20 lg:my-20'>
      
      <div className="border border-gray-200 rounded-xl p-6 shadow-lg bg-white w-full md:w-[500px] lg:w-[600px] hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-800 border-b-2 border-blue-200 pb-2">toSorted()</h2>
        
        <p className="mb-4 text-gray-700 leading-relaxed">
          The non-mutating version of <code className="bg-gray-100 px-1.5 py-0.5 rounded text-red-600 font-mono text-sm">sort()</code>. It creates a
          sorted copy of the array without changing the original array.
          Like <code className="bg-gray-100 px-1.5 py-0.5 rounded text-red-600 font-mono text-sm">sort()</code>, it defaults to alphabetical sorting
          unless you provide a comparison function.
        </p>
        
        <div className="mb-4">
          <h3 className="font-semibold text-lg text-gray-800 mb-2">Syntax:</h3>
          
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mt-2 overflow-x-auto font-mono text-sm shadow-inner">
{`const sortedArray = array.toSorted((a, b) => a - b);
// Numerical ascending order`}
          </pre>
        </div>
        
        <div className="mb-4">
          <h3 className="font-semibold text-lg text-gray-800 mb-2">Returns:</h3>
          <p className="text-gray-700 leading-relaxed">
            A brand-new array with the elements sorted according to the
            comparison function.
          </p>
        </div>
        
        <div className="mb-4">
          <h3 className="font-semibold text-lg text-gray-800 mb-2">Copy Behavior:</h3>
          <p className="text-gray-700 leading-relaxed">
            <strong className="text-blue-700">Shallow copy.</strong> It copies the elements into a new
            array container, leaving the original array unchanged.
          </p>
        </div>
        
        <div>
          <h3 className="font-semibold text-lg text-gray-800 mb-2">Project Use Case:</h3>
          <p className="text-gray-700 leading-relaxed bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
            A dashboard data table where users click a column header to sort
            data (for example, <code className="bg-gray-200 px-1.5 py-0.5 rounded text-red-600 font-mono text-sm">"Sort by Price"</code>), allowing the UI
            state to update safely without modifying the original data source.
          </p>
        </div>
      </div>
      
      
      <div className="border border-gray-200 rounded-xl p-6 shadow-lg bg-white w-full md:w-[500px] lg:w-[600px] hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-800 border-b-2 border-blue-200 pb-2">toReversed()</h2>
        
        <p className="mb-4 text-gray-700 leading-relaxed">
          The non-mutating version of <code className="bg-gray-100 px-1.5 py-0.5 rounded text-red-600 font-mono text-sm">reverse()</code>. It creates a
          copy of the array with the element order inverted, leaving the
          original array unchanged.
        </p>
        
        <div className="mb-4">
          <h3 className="font-semibold text-lg text-gray-800 mb-2">Syntax:</h3>
          
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mt-2 overflow-x-auto font-mono text-sm shadow-inner">
{`const reversedArray = array.toReversed();`}
          </pre>
        </div>
        
        <div className="mb-4">
          <h3 className="font-semibold text-lg text-gray-800 mb-2">Returns:</h3>
          <p className="text-gray-700 leading-relaxed">
            A brand-new array containing the same elements in reverse order.
          </p>
        </div>
        
        <div className="mb-4">
          <h3 className="font-semibold text-lg text-gray-800 mb-2">Copy Behavior:</h3>
          <p className="text-gray-700 leading-relaxed">
            <strong className="text-blue-700">Shallow copy.</strong> It creates a new outer array while
            preserving references to nested objects.
          </p>
        </div>
        
        <div>
          <h3 className="font-semibold text-lg text-gray-800 mb-2">Project Use Case:</h3>
          <p className="text-gray-700 leading-relaxed bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
            Flipping the display order of a notification feed or user activity
            logs from <strong>"Newest First"</strong> to
            <strong> "Oldest First"</strong> without modifying the original
            component state.
          </p>
        </div>
      </div>
      
      
      <div className="border border-gray-200 rounded-xl p-6 shadow-lg bg-white w-full md:w-[500px] lg:w-[600px] hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-800 border-b-2 border-blue-200 pb-2">toSpliced()</h2>
        
        <p className="mb-4 text-gray-700 leading-relaxed">
          The non-mutating version of <code className="bg-gray-100 px-1.5 py-0.5 rounded text-red-600 font-mono text-sm">splice()</code>. Use this when you
          need to delete, insert, or replace elements in an array without
          changing the original array. Instead of modifying the existing array,
          it returns a completely new array with the updates applied.
        </p>
        
        <div className="mb-4">
          <h3 className="font-semibold text-lg text-gray-800 mb-2">Syntax:</h3>
          
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mt-2 overflow-x-auto font-mono text-sm shadow-inner">
{`const updatedArray = array.toSpliced(
  startIndex,
  deleteCount,
  item1,
  item2,
  ...
);`}
          </pre>
        </div>
        
        <div className="mb-4">
          <h3 className="font-semibold text-lg text-gray-800 mb-2">Returns:</h3>
          <p className="text-gray-700 leading-relaxed">
            A brand-new array containing all the insertions, deletions,
            or replacements. The original array remains unchanged.
          </p>
        </div>
        
        <div className="mb-4">
          <h3 className="font-semibold text-lg text-gray-800 mb-2">Copy Behavior:</h3>
          <p className="text-gray-700 leading-relaxed">
            <strong className="text-blue-700">Shallow copy.</strong> It creates a new outer array,
            but object elements retain their original references.
          </p>
        </div>
        
        <div>
          <h3 className="font-semibold text-lg text-gray-800 mb-2">Project Use Case:</h3>
          <p className="text-gray-700 leading-relaxed bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
            In a CRUD application, you can remove, update, or insert items
            in a list while preserving immutability. This is especially useful
            in React state updates, such as deleting a row from a table using
            <code className="bg-gray-200 px-1.5 py-0.5 rounded text-red-600 font-mono text-sm"> setItems(items.toSpliced(index, 1)) </code>.
          </p>
        </div>
      </div>
      
      
      <div className="border border-gray-200 rounded-xl p-6 shadow-lg bg-white w-full md:w-[500px] lg:w-[600px] hover:shadow-xl transition-shadow duration-300">
        <h2 className="text-2xl md:text-3xl font-bold mb-4 text-blue-800 border-b-2 border-blue-200 pb-2">with()</h2>
        
        <p className="mb-4 text-gray-700 leading-relaxed">
          A beautiful, highly specific addition to JavaScript. Use this when
          you want to replace a single element at a specific index without
          mutating the original array. Instead of using
          <code className="bg-gray-100 px-1.5 py-0.5 rounded text-red-600 font-mono text-sm"> arr[index] = newValue </code>, you can use
          <code className="bg-gray-100 px-1.5 py-0.5 rounded text-red-600 font-mono text-sm"> with() </code> to create an updated copy.
        </p>
        
        <div className="mb-4">
          <h3 className="font-semibold text-lg text-gray-800 mb-2">Syntax:</h3>
          
          <pre className="bg-gray-900 text-gray-100 p-4 rounded-lg mt-2 overflow-x-auto font-mono text-sm shadow-inner">
{`const updatedArray = array.with(index, newValue);`}
          </pre>
        </div>
        
        <div className="mb-4">
          <h3 className="font-semibold text-lg text-gray-800 mb-2">Returns:</h3>
          <p className="text-gray-700 leading-relaxed">
            A brand-new array where the element at the specified index has
            been replaced with the new value.
          </p>
        </div>
        
        <div className="mb-4">
          <h3 className="font-semibold text-lg text-gray-800 mb-2">Copy Behavior:</h3>
          <p className="text-gray-700 leading-relaxed">
            <strong className="text-blue-700">Shallow copy.</strong> It creates a new outer array while
            preserving references to nested objects that were not replaced.
          </p>
        </div>
        
        <div>
          <h3 className="font-semibold text-lg text-gray-800 mb-2">Project Use Case:</h3>
          <p className="text-gray-700 leading-relaxed bg-blue-50 p-3 rounded-lg border-l-4 border-blue-500">
            Updating one specific item in a list, such as marking a single
            task as completed in a checklist or toggling the status of one
            notification without mutating the original state.
          </p>
        </div>
      </div>
      
    </div>
    
    </>
  )
}

export default Mutating