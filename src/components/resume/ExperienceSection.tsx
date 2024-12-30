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
        <h3 className="text-lg font-semibold">Senior IT Support Engineer</h3>
        <p className="text-gray-600">Sitelink Software • Raleigh, NC</p>
        <p className="text-gray-600 mt-2 italic">
          SMD Software (Sitelink) is a $12 million firm which is the leading provider of Software-as-a-Service (SaaS) to the Self Storage industry. 
          They serve over 9500 customers including 70% of the top 100 operating groups in the country.
        </p>
        <p className="text-gray-600 mt-4">
          <span className="font-semibold">Responsibilities:</span> Provide technical support by diagnosing and resolving hardware, software, and network issues. 
          Manage system maintenance, installations, and security compliance. Collaborate on IT projects, ensure reliable operations, 
          document solutions, and deliver training to enhance efficiency and user satisfaction.
        </p>
        <div className="mt-4">
          <p className="font-semibold text-gray-800">Accomplishments:</p>
          <ul className="list-disc list-inside mt-2 text-gray-600 space-y-2">
            <li>Consistently maintained customer satisfaction scores of 95% or higher by delivering exceptional, personalized support.</li>
            <li>Successfully resolved over 300+ client issues monthly, ensuring minimal disruption to customer operations.</li>
            <li>Spearheaded the design and implementation of tailored training programs for 50+ clients, driving a 40% improvement in product adoption and operational efficiency.</li>
            <li>Regularly performed public speaking to groups of 60-80 executives at a time.</li>
            <li>Developed a robust knowledge base and innovative training modules, cutting support requests by 20% while empowering clients with self-service resources.</li>
            <li>Reduced complex technical issue resolution time by 25% by fostering strategic collaborations, leveraging advanced tools, and enhancing escalation protocols.</li>
            <li>Cultivated strong, trust-based relationships with clients, driving a remarkable 30% increase in retention and fostering long-term loyalty.</li>
            <li>Proactively enhanced product expertise, contributing to the successful rollout of impactful software features.</li>
            <li>Conducted dynamic training sessions, ensuring clients gained mastery and confidence in using our products.</li>
          </ul>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default ExperienceSection;