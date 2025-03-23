import * as React from "react"
import { Link } from "react-router-dom"
import { cn } from "@/lib/utils"

interface LogoProps extends React.HTMLAttributes<HTMLDivElement> {
  /**
   * Show the text alongside the logo
   * @default true
   */
  showText?: boolean
  /**
   * Size of the logo image
   * @default "default"
   */
  size?: "sm" | "default" | "lg" | "lg2" | "lg3" | "lg4" | "lg5"
  /**
   * Link to navigate to when clicking the logo
   * @default "/"
   */
  to?: string
  /**
   * Additional className for the logo image
   */
  imageClassName?: string
  /**
   * Additional className for the text container
   */
  textClassName?: string
  /**
   * Whether the logo is on a primary background
   * @default false
   */
  onPrimaryBg?: boolean
}

const Logo = React.forwardRef<HTMLDivElement, LogoProps>(
  ({
    showText = true,
    size = "default",
    to = "/",
    className,
    imageClassName,
    textClassName,
    onPrimaryBg = false,
    ...props
  }, ref) => {
    const sizeClasses = {
      sm: "h-6 w-6",
      default: "h-8 w-8",
      lg: "h-10 w-10",
      lg2: "h-12 w-12",
      lg3: "h-14 w-14",
      lg4: "h-16 w-16",
      lg5: "h-18 w-18",
    }

    return (
      <div 
        ref={ref} 
        className={cn("flex items-center space-x-4", className)} 
        {...props}
      >
        <Link to={to} className="flex items-center space-x-4">
          <img 
            src="/lovable-uploads/23489cfb-856c-4f3f-908f-3aa9d5cb11b8.png" 
            alt="Szczek Szczek Logo" 
            className={cn(sizeClasses[size], imageClassName)}
          />
          
          {showText && (
            <div className={cn("flex flex-col", textClassName)}>
              <span className={cn(
                "font-josefin text-xl leading-tight uppercase", 
                onPrimaryBg && "text-primary-foreground"
              )}>
                Szczek Szczek
              </span>
              <span className={cn(
                "font-josefin text-xs tracking-wide", 
                onPrimaryBg ? "text-primary-foreground/80" : "text-muted-foreground"
              )}>
                Marta Stach
              </span>
            </div>
          )}
        </Link>
      </div>
    )
  }
)
Logo.displayName = "Logo"

export { Logo }
