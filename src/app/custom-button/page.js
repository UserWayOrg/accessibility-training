export default function Button() {
  return (
    <div className="p-6 w-full">
      <h1 className="text-3xl	font-bold mb-5">Custom Button Example</h1>
      <div
        className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:ring ring-blue-600 ring-offset-2 outline-none inline-block"
        tabIndex={0}
        role="button"
      >
        Checkout
      </div>
    </div>
  );
}
