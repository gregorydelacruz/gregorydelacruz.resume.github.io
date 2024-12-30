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
      <p className="text-gray-600 leading-relaxed">
        I tenaciously win sales and resolve all roadblocks, whether customer resistance or technical challenges.
        Dynamic and results-driven IT Support Specialist with a proven track record of swiftly diagnosing and resolving complex
        technical issues to minimize downtime and maximize productivity. Adept at system maintenance, network troubleshooting, and
        providing exceptional customer-focused support to both technical and non-technical users. Skilled in identifying inefficiencies,
        implementing robust solutions, and delivering proactive training to empower teams and enhance operational success. Passionate
        about optimizing IT infrastructure and creating seamless user experiences to support diverse IT environments and drive
        organizational efficiency.
      </p>
    </CardContent>
  </Card>
);

export default AboutSection;