
import { Link } from "react-router-dom";

interface TrainingMenuProps {
  onClick?: () => void;
  className?: string;
  mobile?: boolean;
}

export const TrainingMenu = ({ onClick, className = "", mobile = false }: TrainingMenuProps) => {
  const items = [
    { title: "Nosework", path: "/training/nosework" },
    { title: "Obedience", path: "/training/obedience" },
    { title: "Dog School", path: "/training/dog-school" },
    { title: "Puppy Kindergarten", path: "/training/puppy-kindergarten" },
    { title: "Socialisation Walks", path: "/training/socialisation-walks" },
  ];

  return (
    <div className={className}>
      {items.map((item) => (
        <Link
          key={item.path}
          to={item.path}
          className={`block px-4 py-2 hover:bg-muted rounded-md transition-colors ${
            mobile ? "text-base" : ""
          }`}
          onClick={onClick}
        >
          {item.title}
        </Link>
      ))}
    </div>
  );
};
