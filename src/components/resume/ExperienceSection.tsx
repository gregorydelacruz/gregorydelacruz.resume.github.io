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
        <div className="mt-4">
          <p className="font-semibold text-gray-800">Responsibilities:</p>
          <p className="text-gray-600 mt-2">
            Provide technical support by diagnosing and resolving hardware, software, and network issues. 
            Manage system maintenance, installations, and security compliance. Collaborate on IT projects, ensure reliable operations, 
            document solutions, and deliver training to enhance efficiency and user satisfaction.
          </p>
        </div>
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

      <div>
        <h3 className="text-lg font-semibold">Software Support Engineer, MSS</h3>
        <p className="text-gray-600">Nortel Networks Corporation • Raleigh, NC</p>
        <p className="text-gray-600 mt-2 italic">
          Nortel Networks Corporation was a $10 Billion multinational telecommunications and data networking equipment manufacturer with 
          over 90,000 employees.
        </p>
        <div className="mt-4">
          <p className="font-semibold text-gray-800">Responsibilities:</p>
          <p className="text-gray-600 mt-2">
            Managed all aspects of internal software testing, ensuring high functionality and performance across company systems. I led company-wide software training programs to equip teams with essential skills while maintaining and optimizing internal databases to enhance operational efficiency. Overseeing Quality Assurance for each new software release, I guaranteed product reliability and user satisfaction. My role involved extensive travel throughout North America, where I trained managers and provided technical support to ensure smooth software adoption. Additionally, I created and maintained content for internal Nortel websites, improving communication and accessibility for employees.
          </p>
        </div>
        <div className="mt-4">
          <p className="font-semibold text-gray-800">Accomplishments:</p>
          <ul className="list-disc list-inside mt-2 text-gray-600 space-y-2">
            <li>Personally conceived and created online training - replacing previously required in-person training. My program saved the company tens of thousands of dollars in on-going travel expenses.</li>
            <li>Achieved a $2 million reduction in cost as the leader of a consolidation project for software test management platforms. This project pared down multi-site, multi-user, multi-project test platforms into a single platform.</li>
            <li>Presented over 1500 hours of training to more than 3000 managers, technical professionals and support staff.</li>
            <li>Regularly performed public speaking to groups of 60-80 executives at a time.</li>
            <li>Installed, configured and maintained more than 125 new user applications.</li>
            <li>Integrated multiple systems to facilitate enterprise resource planning. Created and maintained Oracle tables, triggers, procedures, views, synonyms, constraints, and indices on data tables for several critical databases across multiple locations.</li>
            <li>Provided technical support for several applications on a 24-hour basis.</li>
          </ul>
        </div>
      </div>
    </CardContent>
  </Card>
);

export default ExperienceSection;