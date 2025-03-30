
import { useNavigate } from "react-router-dom";
import { allProducts } from "@/data/products";
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
      <CommandInput placeholder="Wyszukaj szkolenia..." />
      <CommandList>
        <CommandEmpty>Brak wyników.</CommandEmpty>
        <CommandGroup heading="Programy szkoleniowe">
          {allProducts.map((product) => (
            <CommandItem
              key={product.id}
              onSelect={() => {
                onOpenChange(false);
                navigate(product.link);
              }}
            >
              <div className="flex flex-col">
                <span>{product.title}</span>
                <span className="text-sm text-muted-foreground">
                  {product.description}
                </span>
              </div>
            </CommandItem>
          ))}
        </CommandGroup>
      </CommandList>
    </CommandDialog>
  );
};
