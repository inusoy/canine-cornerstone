
import { useNavigate } from "react-router-dom";
import { services } from "@/components/ServicesSection";
import { blogPosts } from "@/pages/blog/[slug]";
import {
  CommandDialog,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
  CommandList,
} from "@/components/ui/command";

interface SearchDialogProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
}

export const SearchDialog = ({ open, onOpenChange }: SearchDialogProps) => {
  const navigate = useNavigate();

  return (
    <CommandDialog open={open} onOpenChange={onOpenChange}>
      <CommandInput placeholder="Search trainings and blog posts..." />
      <CommandList>
        <CommandEmpty>No results found.</CommandEmpty>
        <CommandGroup heading="Training Programs">
          {services.map((service) => (
            <CommandItem
              key={service.link}
              onSelect={() => {
                onOpenChange(false);
                navigate(service.link);
              }}
            >
              <div className="flex flex-col">
                <span>{service.title}</span>
                <span className="text-sm text-muted-foreground">
                  {service.description}
                </span>
              </div>
            </CommandItem>
          ))}
        </CommandGroup>
        <CommandGroup heading="Blog Posts">
          {blogPosts.map((post) => (
            <CommandItem
              key={post.slug}
              onSelect={() => {
                onOpenChange(false);
                navigate(`/blog/${post.slug}`);
              }}
            >
              <div className="flex flex-col">
                <span>{post.title}</span>
                <div className="flex gap-2 mt-1">
                  {post.tags.map((tag) => (
                    <span
                      key={tag}
                      className="text-xs text-muted-foreground bg-muted px-2 py-0.5 rounded-full"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
};
