import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  Briefcase, 
  GraduationCap, 
  Mail, 
  User, 
  Github, 
  Linkedin,
  Monitor,
  Command,
  MessageSquare,
  Network,
  Shield,
  Wrench,
  Database,
  Download,
  Cloud,
  Computer,
  Save,
  FileText
} from "lucide-react";

const Index = () => {
  const skillCategories = [
    {
      title: "Operating Systems",
      icon: <Monitor className="h-5 w-5" />,
      skills: ["Windows", "macOS", "Linux", "Mobile OS (Android/iOS)"]
    },
    {
      title: "Productivity & Collaboration",
      icon: <Command className="h-5 w-5" />,
      skills: ["Microsoft Office Suite", "Google Workspace", "Remote Support Tools"]
    },
    {
      title: "Ticketing & Help Desk",
      icon: <MessageSquare className="h-5 w-5" />,
      skills: ["ServiceNow", "JIRA Service Management", "Zendesk", "Freshdesk"]
    },
    {
      title: "Networking",
      icon: <Network className="h-5 w-5" />,
      skills: ["Cisco Packet Tracer", "Wireshark", "VPN Clients", "Network Diagnostics"]
    },
    {
      title: "Security",
      icon: <Shield className="h-5 w-5" />,
      skills: ["Antivirus Software", "Firewalls", "Multi-factor Authentication (MFA)"]
    },
    {
      title: "Hardware Diagnostics",
      icon: <Wrench className="h-5 w-5" />,
      skills: ["Device Manager", "System Preferences", "BIOS/UEFI Configuration"]
    },
    {
      title: "Database & Scripting",
      icon: <Database className="h-5 w-5" />,
      skills: ["SQL Basics", "PowerShell", "Bash/Shell Scripting"]
    },
    {
      title: "Software Management",
      icon: <Download className="h-5 w-5" />,
      skills: ["Microsoft SCCM", "Intune", "Software Deployment"]
    },
    {
      title: "Cloud Services",
      icon: <Cloud className="h-5 w-5" />,
      skills: ["AWS/Azure Basics", "Microsoft 365 Admin", "Cloud Storage Solutions"]
    },
    {
      title: "Virtualization",
      icon: <Computer className="h-5 w-5" />,
      skills: ["VMware Workstation", "Hyper-V"]
    },
    {
      title: "Backup & Recovery",
      icon: <Save className="h-5 w-5" />,
      skills: ["Acronis True Image", "Windows System Restore", "Backup Exec"]
    },
    {
      title: "Documentation & Monitoring",
      icon: <FileText className="h-5 w-5" />,
      skills: ["Confluence", "Nagios", "SolarWinds"]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-8 px-4 sm:px-6 lg:px-8">
      {/* Header Section */}
      <div className="max-w-4xl mx-auto">
        <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
          <Avatar className="h-24 w-24">
            <AvatarImage src="/placeholder.svg" alt="Profile Picture" />
            <AvatarFallback>
              <User className="h-12 w-12" />
            </AvatarFallback>
          </Avatar>
          <div className="text-center sm:text-left">
            <h1 className="text-4xl font-bold text-gray-900">Your Name</h1>
            <p className="text-xl text-gray-600 mt-2">Professional Title</p>
            <div className="flex gap-4 mt-4 justify-center sm:justify-start">
              <a href="mailto:your.email@example.com" className="text-gray-600 hover:text-gray-900">
                <Mail className="h-5 w-5" />
              </a>
              <a href="https://github.com" className="text-gray-600 hover:text-gray-900">
                <Github className="h-5 w-5" />
              </a>
              <a href="https://linkedin.com" className="text-gray-600 hover:text-gray-900">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>

      {/* About Section */}
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

      {/* Experience Section */}
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

      {/* Education Section */}
        <Card className="mb-8">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <GraduationCap className="h-5 w-5" />
              Education
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold">Degree Name</h3>
              <p className="text-gray-600">University Name • Graduation Year</p>
              <p className="text-gray-600 mt-2">
                Additional details about your education, achievements, or relevant coursework.
              </p>
            </div>
          </CardContent>
        </Card>

      {/* Skills Section */}
      <Card>
        <CardHeader>
          <CardTitle>Technical Skills</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {skillCategories.map((category) => (
              <div key={category.title} className="space-y-3">
                <div className="flex items-center gap-2 font-semibold">
                  {category.icon}
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
    </div>
  );
};

export default Index;
