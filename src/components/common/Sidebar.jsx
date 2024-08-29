import { useSelector, useDispatch } from "react-redux";
import { useState } from "react";
import { updateFilter } from "../../features/sidebarSlice";

const Sidebar = () => {
  const dispatch = useDispatch();
  const filters = useSelector((state) => state.sidebar.filters);
  const [openSections, setOpenSections] = useState({
    category: true,
    occasion: false,
    fabric: false,
    jacketMaterial: false,
    sleeveLength: false,
    sleeve: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prev) => ({
      ...prev,
      [section]: !prev[section],
    }));
  };

  const handleCheckboxChange = (filterCategory, filterValue) => {
    dispatch(updateFilter({ filterCategory, filterValue }));
  };

  const renderCheckboxes = (items, filterCategory) =>
    items.map(({ label, count }, index) => (
      <li key={`${filterCategory}-${label}`} className="flex items-center">
        <input
          type="checkbox"
          id={`${filterCategory}-${label}`}
          className="mr-2 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
          checked={filters[filterCategory]?.includes(label) || false}
          onChange={() => handleCheckboxChange(filterCategory, label)}
        />
        <label htmlFor={`${filterCategory}-${label}`} className="text-gray-800">
          {label} {count !== undefined ? `(${count})` : ""}
        </label>
      </li>
    ));

  return (
    <aside className="lg:w-64 w-full bg-white text-gray-800 p-6 lg:sticky lg:top-24 lg:h-screen lg:overflow-y-auto shadow-md font-poppins transition-all duration-300 ease-in-out">
      <h2 className="text-2xl font-bold mb-6">Filters</h2>
      <div className="space-y-6">
        {/* CATEGORY FILTER */}
        <FilterSection
          title="CATEGORY"
          isOpen={openSections.category}
          toggleSection={() => toggleSection("category")}
        >
          {renderCheckboxes(
            [
              { label: "men's clothing", count: 7 },
              { label: "women's clothing", count: 8 },
              { label: "jewelery", count: 3 },
              { label: "electronics", count: 2 },
            ],
            "category"
          )}
        </FilterSection>

        {/* OCCASION FILTER */}
        <FilterSection
          title="OCCASION"
          isOpen={openSections.occasion}
          toggleSection={() => toggleSection("occasion")}
        >
          {renderCheckboxes(
            [
              { label: "Rainy Season", count: 1 },
              { label: "Casual", count: 3 },
              { label: "Wedding", count: 1 },
              { label: "Party", count: 10 },
            ],
            "occasion"
          )}
        </FilterSection>

        {/* FABRIC FILTER */}
        <FilterSection
          title="FABRIC"
          isOpen={openSections.fabric}
          toggleSection={() => toggleSection("fabric")}
        >
          {renderCheckboxes(
            [
              { label: "French Knot", count: 2 },
              { label: "Zardosi", count: 2 },
              { label: "Muslin", count: 1 },
              { label: "Satin Blend", count: 1 },
            ],
            "fabric"
          )}
        </FilterSection>

        {/* JACKET MATERIAL FILTER */}
        <FilterSection
          title="JACKET MATERIAL"
          isOpen={openSections.jacketMaterial}
          toggleSection={() => toggleSection("jacketMaterial")}
        >
          {renderCheckboxes(
            [
              { label: "Leather", count: 5 },
              { label: "Denim", count: 3 },
              { label: "Wool", count: 4 },
            ],
            "jacketMaterial"
          )}
        </FilterSection>

        {/* SLEEVE LENGTH FILTER */}
        <FilterSection
          title="SLEEVE LENGTH"
          isOpen={openSections.sleeveLength}
          toggleSection={() => toggleSection("sleeveLength")}
        >
          {renderCheckboxes(
            [
              { label: "Short", count: 5 },
              { label: "Long", count: 3 },
              { label: "Sleeveless", count: 4 },
            ],
            "sleeveLength"
          )}
        </FilterSection>

        {/* SLEEVE FILTER */}
        <FilterSection
          title="SLEEVE"
          isOpen={openSections.sleeve}
          toggleSection={() => toggleSection("sleeve")}
        >
          {renderCheckboxes(
            [
              { label: "Full Sleeve", count: 5 },
              { label: "Half Sleeve", count: 3 },
              { label: "Three-Quarter Sleeve", count: 4 },
            ],
            "sleeve"
          )}
        </FilterSection>
      </div>
    </aside>
  );
};

const FilterSection = ({ title, isOpen, toggleSection, children }) => (
  <div>
    <h3
      className="font-semibold text-lg mb-2 cursor-pointer flex justify-between items-center hover:text-blue-600 transition duration-200"
      onClick={toggleSection}
    >
      {title}
      <span>
        {isOpen ? (
          <i className="fas fa-angle-up"></i>
        ) : (
          <i className="fas fa-angle-down"></i>
        )}
      </span>
    </h3>
    {isOpen && <ul className="space-y-2 pl-4">{children}</ul>}
  </div>
);

export default Sidebar;
