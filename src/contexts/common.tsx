import { createContext, useContext, useState } from "react";
import sections from "@/assets/sections.json";

type SectionType = {
  id: number;
  label: string;
  confidence: number;
  position: number[];
  value: string;
};

const extractSectionsData = () => {
  const _sections = sections.data?.sections
    .map((section) => section?.children)
    .flat()
    .filter(
      (section) =>
        section?.content?.position && section?.content?.position.length
    )
    .map((section) => {
      const { id, label, content } = section;
      const { confidence, position, value } = content || {};
      let _section = {
        id,
        label,
        confidence,
        position,
        value,
      } as SectionType;
      return _section;
    });
  return _sections;
};

type CommonContextStateType = {
  sections: SectionType[];
  selectedSection: SectionType | null;
  setSelectedSection: (v: SectionType) => void;
};

const CommonContext = createContext<CommonContextStateType | null>(null);

const CommonContextProvider = ({ children }: { children: React.ReactNode }) => {
  const [selectedSection, setSelectedSection] = useState<SectionType | null>(
    null
  );

  const sectionsData = extractSectionsData();

  const value: CommonContextStateType | null = {
    sections: sectionsData,
    selectedSection,
    setSelectedSection,
  };

  return (
    <>
      <CommonContext.Provider value={value}>{children}</CommonContext.Provider>
    </>
  );
};

const useCommonContext = () => {
  const context = useContext(CommonContext);
  if (context === null) {
    throw new Error("use inside provider");
  }
  return context;
};

export { useCommonContext, CommonContextProvider };
