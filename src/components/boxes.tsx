import { SectionType, useCommonContext } from "@/contexts/common";

const Boxes = ({ imageWidth }: { imageWidth: number }) => {
  // the original image width from which the sections data were calculated (from assets folder)
  // this value is necessary to calculate the amount by which the bounding box dimensions must be scaled.
  const ogWidth = 1700;

  const { selectedSection, sections, setSelectedSection } = useCommonContext();

  // this is the scale amount based on the rendered image size and the orginal image size
  // If the ratio is > 1, the bounding boxes will be scaled up
  // If the ratio is < 1, the bounding boxes will be scaled down
  const ratio = imageWidth / ogWidth;

  return (
    <div>
      {sections?.map((section) => (
        <BoundingBox
          section={section}
          ratio={ratio}
          setSelectedSection={setSelectedSection}
          selected={selectedSection?.id == section.id}
        />
      ))}
    </div>
  );
};

type BoundingBoxPropsType = {
  section: SectionType;
  ratio: number;
  selected?: boolean;
  setSelectedSection: (v: SectionType | null) => void;
};

const BoundingBox = ({
  section,
  ratio,
  selected = false,
  setSelectedSection,
}: BoundingBoxPropsType) => {
  const { position } = section || {};

  // Bounding box dimension calculations
  // in (x,y) coordinate representation

  //   (left, top)                                                            (left + width, top)
  //   _________________________________________________________________________
  //   |                                                                       |
  //   |                           Section text                                |
  //   |                                                                       |
  //   -------------------------------------------------------------------------
  //   (left, top + height)                                                   (left + width, top + height)

  let left = position[0] * ratio;
  let top = position[1] * ratio;
  let width = (position[2] - position[0]) * ratio;
  let height = (position[3] - position[1]) * ratio;

  return (
    <>
      <div
        className={`bounding-box ${selected ? "selected" : ""}`}
        style={{
          top: `${top}px`,
          left: `${left}px`,
          width: `${width}px`,
          height: `${height}px`,
        }}
        onMouseEnter={() => {
          !selected && setSelectedSection(section);
        }}
        onMouseLeave={() => {
          selected && setSelectedSection(null);
        }}
      ></div>
      <style jsx>
        {`
          .bounding-box {
            z-index: 10;
            position: absolute;
            width: 100px;
            height: 20px;
            border: 2px solid var(--blue);
            cursor: pointer;
          }
          .selected {
            border: 2px solid #0000;
            background: var(--blue-alt);
          }
        `}
      </style>
    </>
  );
};

export default Boxes;
