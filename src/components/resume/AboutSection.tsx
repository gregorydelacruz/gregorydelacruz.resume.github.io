import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { User } from "lucide-react";

const AboutSection = () => (
  <Card className="mb-8">
    <CardHeader>
      <CardTitle className="flex items-center gap-2">
        <User className="h-5 w-5" />
        About Me
      </CardTitle>
    </CardHeader>
    <CardContent>
      <p className="text-gray-600">
        Write a brief introduction about yourself and your career objectives here.
      </p>
    </CardContent>
  </Card>
);

export default AboutSection;