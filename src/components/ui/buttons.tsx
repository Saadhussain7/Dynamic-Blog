import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "../../lib/utils";

// Define button varients using `cva´
const buttonVarients = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring:ring disabled:pointer-events-none disable:opacity-50",
    {
     variants: {
            varient: {
                default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
                destructive: "bg-destruction text-destruction-foreground shadow-sm hover:bg-destructive/90",
                outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
                secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
                ghost: "hover:bg-accent hover:text-accent-foreground",
                link: "text-primary underline-offset-4 hover:underline",
            },
            size: {
                default: "h-9 px-4 py-2",
                sm: "h-8 rounded md text-x5",
                lg: "h-10 rounded-md px-8",
                icon: "h-9 w-9",
            },
        },
        defaultVariants: {
            varient: "default",
            size: "default",
        },
    }
);


export interface ButtonProps
    extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    varient?: "default" | "destructive" | "outline" | "secondary" | "ghost" | "link";
    size?: "default" | "sm" | "lg" | "icons";
    asChild?: boolean;
}


const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, varient = "default", size = "deafult", asChild = false, ...props }, ref) => {
        const Comp = "button";
        return (
            <Comp
                className={cn(buttonVarients({ varient, size, className }))}
                ref={ref}
                {...props}
            />
        )
    }
);


Button.displayName = "Button";
export { Button, buttonVarients };
