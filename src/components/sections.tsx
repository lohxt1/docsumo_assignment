import { useCommonContext } from "@/contexts/common";

const Sections = () => {
  const { sections, setSelectedSection, selectedSection } = useCommonContext();

  return (
    <>
      <div className="sections-container">
        <div className="sections-title">Sections</div>
        {sections?.map((section) => (
          <div
            className={`section-block ${
              selectedSection?.id == section?.id ? "selected" : ""
            }`}
            onClick={() => {
              setSelectedSection(section);
            }}
          >
            {section?.label}
          </div>
        ))}
      </div>
      <style jsx>
        {`
          .sections-container {
            width: 100%;
            display: flex;
            flex-direction: column;
            gap: 20px;
          }
          .sections-title {
            font-size: 14px;
            width: calc(100% - 20px);
            border-bottom: 1px solid #fff5;
            padding: 20px 10px;
            color: #fff;
          }
          .section-block {
            font-size: 12px;
            padding: 10px;
            cursor: pointer;
            font-family: courier new;
            color: #fff;
          }
          .selected {
            background: #00f5;
          }
        `}
      </style>
    </>
  );
};

export default Sections;
