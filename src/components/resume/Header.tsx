import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Mail, User, Github, Linkedin } from "lucide-react";

const Header = () => (
  <div className="flex flex-col sm:flex-row items-center gap-6 mb-8">
    <Avatar className="h-24 w-24">
      <AvatarImage src="/lovable-uploads/0006fba3-f602-4b69-bca6-b69de2c351f3.png" alt="Gregory de la Cruz" />
      <AvatarFallback>
        <User className="h-12 w-12" />
      </AvatarFallback>
    </Avatar>
    <div className="text-center sm:text-left">
      <h1 className="text-4xl font-bold text-gray-900">Gregory de la Cruz</h1>
      <p className="text-xl text-gray-600 mt-2">IT SUPPORT PROFESSIONAL</p>
      <div className="flex gap-4 mt-4 justify-center sm:justify-start">
        <a href="mailto:your.email@example.com" className="text-gray-600 hover:text-gray-900">
          <Mail className="h-5 w-5" />
        </a>
        <a href="https://github.com/gregorydelacruz" className="text-gray-600 hover:text-gray-900">
          <Github className="h-5 w-5" />
        </a>
        <a href="https://www.linkedin.com/in/gregorydelacruz/" className="text-gray-600 hover:text-gray-900">
          <Linkedin className="h-5 w-5" />
        </a>
      </div>
    </div>
  </div>
);

export default Header;