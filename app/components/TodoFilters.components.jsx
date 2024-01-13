export const FiltersContainer = ({ children }) => {
  return (
    <div className="flex items-start flex-col min-[270px]:justify-around min-[270px]:flex-row p-3 border-t border-b border-solid border-slate-800">
      {children}
    </div>
  );
};

export const FilterButton = ({ action, active = "", filter = "" }) => {
  return (
    <button
      onClick={action}
      className={`hover:text-white font-bold cursor-pointer transition-all duration-300 ease-in-out
        ${
          active.toLowerCase().includes(filter.toLowerCase())
            ? "text-blue-500"
            : "text-slate-500"
        }`}
    >
      {filter}
    </button>
  );
};
