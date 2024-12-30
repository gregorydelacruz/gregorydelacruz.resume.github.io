import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, User, Github, Linkedin } from "lucide-react";

const Header = () => (
  <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
    <Avatar className="h-24 w-24">
      <AvatarImage src="/placeholder.svg" alt="Profile Picture" />
      <AvatarFallback>
        <User className="h-12 w-12" />
      </AvatarFallback>
    </Avatar>
    <div className="text-center sm:text-left">
      <h1 className="text-4xl font-bold text-gray-900">Gregory de la Cruz</h1>
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
);

export default Header;