import { 
  Monitor, Command, MessageSquare, Network, Shield, Wrench,
  Database, Download, Cloud, Computer, Save, FileText,
  Search, Settings, Code, Key, Globe, Server,
  Zap, Terminal, HardDrive, Lock, Headphones
} from "lucide-react";

export const skillCategories = [
  {
    title: "Operating Systems",
    icon: Monitor,
    skills: [
      "Windows: Installation, troubleshooting, and administration",
      "Linux: Command line usage, troubleshooting, and configuration"
    ]
  },
  {
    title: "Productivity and Collaboration Tools",
    icon: MessageSquare,
    skills: [
      "Microsoft Office Suite",
      "Google Workspace",
      "Remote Support Tools (TeamViewer, AnyDesk, LogMeIn)"
    ]
  },
  {
    title: "Ticketing and Help Desk Software",
    icon: FileText,
    skills: [
      "ServiceNow",
      "JIRA Service Management",
      "Zendesk",
      "Freshdesk"
    ]
  },
  {
    title: "Networking Tools",
    icon: Network,
    skills: [
      "Cisco Packet Tracer",
      "Wireshark",
      "Ping and Tracert/Traceroute",
      "VPN Clients"
    ]
  },
  {
    title: "Security and Endpoint Protection",
    icon: Shield,
    skills: [
      "Antivirus Software",
      "Firewalls",
      "Multi-factor Authentication (MFA)"
    ]
  },
  {
    title: "Hardware Diagnostic Tools",
    icon: Wrench,
    skills: [
      "Device Manager",
      "System Preferences",
      "BIOS/UEFI"
    ]
  },
  {
    title: "Database and Scripting",
    icon: Terminal,
    skills: [
      "SQL Basics",
      "PowerShell",
      "Bash/Shell Scripting"
    ]
  },
  {
    title: "Software Management",
    icon: Download,
    skills: [
      "Microsoft SCCM/Intune",
      "Software compatibility troubleshooting",
      "Application updates"
    ]
  },
  {
    title: "Cloud Services",
    icon: Cloud,
    skills: [
      "AWS/Azure Basics",
      "OneDrive, Google Drive",
      "Microsoft 365 Admin Center"
    ]
  },
  {
    title: "Virtualization",
    icon: Server,
    skills: [
      "VMware Workstation",
      "Hyper-V"
    ]
  },
  {
    title: "Backup and Recovery",
    icon: Save,
    skills: [
      "Acronis True Image",
      "Windows System Restore",
      "Backup Exec"
    ]
  },
  {
    title: "IT Documentation and Monitoring",
    icon: Search,
    skills: [
      "Confluence",
      "Nagios",
      "SolarWinds"
    ]
  },
  {
    title: "Professional Skills",
    icon: Headphones,
    skills: [
      "Technical communication",
      "Problem-solving",
      "ITIL best practices"
    ]
  }
];