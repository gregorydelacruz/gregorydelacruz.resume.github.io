import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Briefcase } from "lucide-react";

const ExperienceSection = () => (
  <Card className="mb-8">
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        <Briefcase className="h-5 w-5" />
        Work Experience
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold">Job Title</h3>
        <p className="text-gray-600">Company Name • 2020 - Present</p>
        <ul className="list-disc list-inside mt-2 text-gray-600">
          <li>Key achievement or responsibility</li>
          <li>Another key achievement or responsibility</li>
        </ul>
      </div>
    </CardContent>
  </Card>
);

export default ExperienceSection;