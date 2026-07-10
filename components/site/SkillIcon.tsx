import { 
  SiTypescript, 
  SiJavascript, 
  SiReact, 
  SiNextdotjs, 
  SiNodedotjs, 
  SiSupabase, 
  SiPostgresql, 
  SiTailwindcss, 
  SiFramer, 
  SiGit, 
  SiFigma,
  SiShadcnui
} from "react-icons/si";
import { Database } from "lucide-react";

export function SkillIcon({ name, className }: { name: string; className?: string }) {
  switch (name.toLowerCase()) {
    case "typescript":
      return <SiTypescript className={className} />;
    case "javascript":
      return <SiJavascript className={className} />;
    case "react":
      return <SiReact className={className} />;
    case "next.js":
      return <SiNextdotjs className={className} />;
    case "node.js":
      return <SiNodedotjs className={className} />;
    case "supabase":
      return <SiSupabase className={className} />;
    case "postgresql":
      return <SiPostgresql className={className} />;
    case "sql":
      return <Database className={className} />;
    case "tailwind css":
      return <SiTailwindcss className={className} />;
    case "framer motion":
      return <SiFramer className={className} />;
    case "git":
      return <SiGit className={className} />;
    case "figma":
      return <SiFigma className={className} />;
    case "shadcn/ui":
      return <SiShadcnui className={className} />;
    default:
      return null;
  }
}
