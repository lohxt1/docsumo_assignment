import { useCommonContext } from "@/contexts/common";

const Sections = () => {
  const { sections, setSelectedSection, selectedSection } = useCommonContext();

  return (
    <>
      <div className="sections-container">
        <div className="sections-title">Sections</div>

        {/* Sections are listed and are made selectable based on the mouseenter/mouseleave events */}
        {sections?.map((section) => (
          <div
            className={`section-block ${
              selectedSection?.id == section?.id ? "section-selected" : ""
            }`}
            key={`section-${section?.id}`}
            onMouseEnter={() => {
              setSelectedSection(section);
            }}
            onMouseLeave={() => {
              setSelectedSection(null);
            }}
          >
            <div>{section?.label}</div>
            <div className="section-block-value">Value: {section?.value}</div>
            <div className="section-block-value">
              Confidence: {section?.confidence}
            </div>
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
            font-family: courier new;
          }
          .sections-title {
            font-size: 14px;
            width: calc(100% - 20px);
            padding: 20px 10px 0px 10px;
            color: var(--tx-alt);
            font-weight: 400;
          }
          .section-block {
            font-size: 12px;
            padding: 10px;
            cursor: pointer;
            color: var(--tx);
            display: flex;
            flex-direction: column;
            gap: 5px;
          }
          .section-block-value {
            font-size: 11px;
            color: var(--tx-alt);
          }
          .section-selected {
            background: var(--blue-alt);
          }
        `}
      </style>
    </>
  );
};

export default Sections;
