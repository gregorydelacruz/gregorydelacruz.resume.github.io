import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { GraduationCap } from "lucide-react";

const EducationSection = () => (
  <Card className="mb-8">
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        <GraduationCap className="h-5 w-5" />
        Education
      </CardTitle>
    </CardHeader>
    <CardContent className="space-y-6">
      <div>
        <h3 className="text-lg font-semibold">Dual Bachelor of Science - Economics and Finance</h3>
        <p className="text-gray-600">Towson State University • Baltimore, MD</p>
        <p className="text-gray-600 mt-2">
          Comprehensive education in economic theory, financial markets, and quantitative analysis.
        </p>
      </div>
    </CardContent>
  </Card>
);

export default EducationSection;