import Header from "@/components/resume/Header";
import AboutSection from "@/components/resume/AboutSection";
import ExperienceSection from "@/components/resume/ExperienceSection";
import EducationSection from "@/components/resume/EducationSection";
import SkillsSection from "@/components/resume/SkillsSection";

const Index = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <Header />
        <AboutSection />
        <ExperienceSection />
        <EducationSection />
        <SkillsSection />
      </div>
    </div>
  );
};

export default Index;