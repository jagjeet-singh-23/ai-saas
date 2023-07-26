import { LucideIcon } from "lucide-react";

interface HeadingProps {
  title: string;
  description: string;
  icon: LucideIcon;
  iconColor?: string;
  bgColor?: string;
}

const Heading: React.FC<HeadingProps> = ({
  description,
  icon,
  title,
  bgColor,
  iconColor,
}) => {
  return <div>Heading</div>;
};

export default Heading;
