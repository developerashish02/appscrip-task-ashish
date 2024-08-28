import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { updateFilter } from "../../features/sidebarSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.sidebar.filters);
  const [openSection, setOpenSection] = useState(true);

  const toggleSection = () => {
    setOpenSection((prev) => !prev);
  };

  const handleCheckboxChange = (filterCategory, filterValue) => {
    dispatch(updateFilter({ filterCategory, filterValue }));
  };

  const renderCheckboxes = (items, filterCategory) =>
    items.map(({ label, count }, index) => (
      <li key={index} className="flex items-center">
        <input
          type="checkbox"
          id={label}
          className="mr-2"
          checked={filters[filterCategory].includes(label)}
          onChange={() => handleCheckboxChange(filterCategory, label)}
        />
        <label htmlFor={label} className="text-gray-800">
          {label} {count !== undefined ? `(${count})` : ""}
        </label>
      </li>
    ));

  return (
    <aside className="lg:w-64 bg-white text-gray-800 p-4 lg:sticky lg:top-24 lg:h-screen lg:overflow-y-auto shadow-lg font-poppins">
      <h2 className="text-xl font-semibold mb-4">Filters</h2>
      <div className="space-y-4">
        <div>
          <h3
            className="font-medium text-lg mb-2 cursor-pointer flex justify-between items-center hover:text-blue-600 transition duration-200"
            onClick={toggleSection}
          >
            CATEGORY
            <span>
              {openSection ? (
                <i className="fas fa-angle-up"></i>
              ) : (
                <i className="fas fa-angle-down"></i>
              )}
            </span>
          </h3>
          {openSection && (
            <ul className="space-y-2 pl-4">
              {renderCheckboxes(
                [
                  { label: "men's clothing", count: 7 },
                  { label: "women's clothing", count: 8 },
                  { label: "jewelery", count: 3 },
                  { label: "electronics", count: 2 },
                ],
                "category"
              )}
            </ul>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
