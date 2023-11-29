export default function Button() {
  return (
    <div className="p-6 w-full">
      <h1 className="text-3xl	font-bold mb-5">Summary Element Example</h1>

      <details>
        <summary className="mb-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-sm focus:ring ring-blue-600 ring-offset-2 outline-none text-left w-full">
          Accordion Item #1
        </summary>
        <p className="mb-5 p-4 bg-slate-50 border-2 border-slate-300 shadow-sm rounded-sm block text-sm">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pulvinar
          purus tristique risus consectetur varius. Aliquam condimentum odio sed
          ligula laoreet laoreet. Proin tempus nunc vel nulla ornare sodales.
          Fusce accumsan tincidunt purus, ut ullamcorper dolor elementum ac.
          Aliquam dapibus elit ut mauris mattis sagittis. Vivamus nec blandit
          quam. In sodales pellentesque consectetur. Nam vitae nibh feugiat,
          fermentum metus sed, interdum lectus. Vivamus laoreet eros vitae
          scelerisque bibendum. Quisque vel finibus erat, et congue tortor.
          Etiam in tempor eros. Fusce fringilla vehicula felis, id faucibus dui
          iaculis quis. Vivamus congue convallis elit non dictum. Etiam
          imperdiet est ac maximus tristique.
        </p>
      </details>
    </div>
  );
}
