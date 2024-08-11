import { useState } from "react";

const Sidebar = () => {
  const [openSections, setOpenSections] = useState({
    customizable: false,
    idealFor: false,
    occasion: false,
    work: false,
    fabric: false,
    segment: false,
    suitableFor: false,
    rawMaterials: false,
    jacketMaterial: false,
    sleeveLength: false,
    sleeve: false,
  });

  const toggleSection = (section) => {
    setOpenSections((prevSections) => ({
      ...prevSections,
      [section]: !prevSections[section],
    }));
  };

  const renderCheckboxes = (items) =>
    items.map(({ label, count }, index) => (
      <li key={index}>
        <input type="checkbox" id={label} className="mr-2" />
        <label htmlFor={label} className="text-gray-800">
          {label} {count !== undefined ? `(${count})` : ""}
        </label>
      </li>
    ));

  return (
    <aside className="lg:w-64 lg:bg-white lg:text-gray-800 lg:p-4 lg:sticky lg:top-24 lg:h-screen lg:overflow-y-auto lg:overflow-hidden">
      <h2 className="text-xl font-semibold mb-4">Filters</h2>
      <div className="space-y-4">
        {/* Customizable Section */}
        <div>
          <h3
            className="font-medium text-lg mb-2 cursor-pointer flex justify-between items-center"
            onClick={() => toggleSection("customizable")}
          >
            Customizable
            <span>
              {openSections.customizable ? (
                <i className="fas fa-angle-up"></i>
              ) : (
                <i className="fas fa-angle-down"></i>
              )}
            </span>
          </h3>
          {openSections.customizable && (
            <ul className="space-y-2">
              {renderCheckboxes([{ label: "Option 1" }, { label: "Option 2" }])}
            </ul>
          )}
        </div>

        {/* Ideal For Section */}
        <div>
          <h3
            className="font-medium text-lg mb-2 cursor-pointer flex justify-between items-center"
            onClick={() => toggleSection("idealFor")}
          >
            IDEAL FOR
            <span>
              {openSections.idealFor ? (
                <i className="fas fa-angle-up"></i>
              ) : (
                <i className="fas fa-angle-down"></i>
              )}
            </span>
          </h3>
          {openSections.idealFor && (
            <ul className="space-y-2">
              {renderCheckboxes([
                { label: "Men", count: 65 },
                { label: "Women", count: 63 },
              ])}
            </ul>
          )}
        </div>

        <div>
          <h3
            className="font-medium text-lg mb-2 cursor-pointer flex justify-between items-center"
            onClick={() => toggleSection("occasion")}
          >
            Occasion
            <span>
              {openSections.occasion ? (
                <i className="fas fa-angle-up"></i>
              ) : (
                <i className="fas fa-angle-down"></i>
              )}
            </span>
          </h3>
          {openSections.occasion && (
            <ul className="space-y-2">
              {renderCheckboxes([
                { label: "Baby & Kids", count: 59 },
                { label: "Rainy Season", count: 1 },
                { label: "Casual", count: 3 },
                { label: "Wedding", count: 1 },
                { label: "Party", count: 10 },
              ])}
            </ul>
          )}
        </div>

        <div>
          <h3
            className="font-medium text-lg mb-2 cursor-pointer flex justify-between items-center"
            onClick={() => toggleSection("work")}
          >
            Work
            <span>
              {openSections.work ? (
                <i className="fas fa-angle-up"></i>
              ) : (
                <i className="fas fa-angle-down"></i>
              )}
            </span>
          </h3>
          {openSections.work && (
            <ul className="space-y-2">
              {renderCheckboxes([
                { label: "French Knot", count: 2 },
                { label: "Zardosi", count: 2 },
              ])}
            </ul>
          )}
        </div>

        <div>
          <h3
            className="font-medium text-lg mb-2 cursor-pointer flex justify-between items-center"
            onClick={() => toggleSection("fabric")}
          >
            Fabric
            <span>
              {openSections.fabric ? (
                <i className="fas fa-angle-up"></i>
              ) : (
                <i className="fas fa-angle-down"></i>
              )}
            </span>
          </h3>
          {openSections.fabric && (
            <ul className="space-y-2">
              {renderCheckboxes([
                { label: "Regular", count: 2 },
                { label: "Fancy", count: 1 },
                { label: "Muslin", count: 1 },
                { label: "Embroidery", count: 1 },
                { label: "Satin Blend", count: 1 },
              ])}
            </ul>
          )}
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
