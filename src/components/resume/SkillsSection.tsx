import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { skillCategories } from "./SkillsData";

const SkillsSection = () => (
  <Card>
    <CardHeader>
      <CardTitle>Technical Skills</CardTitle>
    </CardHeader>
    <CardContent>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {skillCategories.map((category) => (
          <div key={category.title} className="space-y-3">
            <div className="flex items-center gap-2 font-semibold">
              <category.icon className="h-5 w-5" />
              {category.title}
            </div>
            <div className="flex flex-wrap gap-2">
              {category.skills.map((skill) => (
                <span
                  key={skill}
                  className="bg-gray-100 text-gray-800 px-3 py-1 rounded-full text-sm"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </CardContent>
  </Card>
);

export default SkillsSection;