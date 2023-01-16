export default function NewProject() {
  return (
    <a
      href="#"
      className="group block max-w-xs rounded-lg p-6 bg-white ring-1 ring-slate-900/5 shadow-lg space-y-3 hover:bg-sky-500 hover:ring-sky-500"
    >
      <div className="flex items-center space-x-3">
      <svg className="h-6 w-6 stroke-sky-500 group-hover:stroke-white" fill="none" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M11 19H6.931A1.922 1.922 0 015 17.087V8h12.069C18.135 8 19 8.857 19 9.913V11"></path>
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 7.64L13.042 6c-.36-.616-1.053-1-1.806-1H7.057C5.921 5 5 5.86 5 6.92V11M17 15v4M19 17h-4"></path>
      </svg>
        <h3 className="text-slate-900 group-hover:text-white text-sm font-semibold">
          New project
        </h3>
      </div>
      <p className="text-slate-500 group-hover:text-white text-sm">
        Create a new project from a variety of starting templates.
      </p>
    </a>
  );
}