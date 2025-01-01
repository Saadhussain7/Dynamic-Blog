import * as React from "react"
import { cn } from '../../lib/utils'

const Card = React.forwardRef<
HTMLDivElement,
React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) =>(
    <div
    ref={ref}
    className={cn(
        "rounded-xl border bg-card text-card-foreground shadow",
        className
    )}
    {...props}/>
 )) 

 Card.displayName = "Card"

 const CardHeader = React.forwardRef<
 HTMLDivElement,
 React.HTMLAttributes<HTMLDivElement>
 > (({ className, ...props }, ref) => (
    <div
    ref={ref}
    className={cn ("flex flex-col space-y-1.5 p-6", className)}
    {... props}/>
 ))

 CardHeader.displayName = "CardHeader"

 const CardTitle = React.forwardRef<
    HTMLParagraphElement,
    React.HTMLAttributes<HTMLHeadingElement>
    > (({ className, ...props }, ref) =>(
        <h3
        ref={ref}
        className={cn ("font-semibold leadinf-none tracking-tight", className)}
        {...props}/>
    ))
CardTitle.displayName = "CardTitle"



const CardDiscription = React.forwardRef<
   HTMLParagraphElement,
   React.HTMLAttributes<HTMLParagraphElement>
   > (({ className, ...props }, ref) =>(
       <p
       ref={ref}
       className={cn ("text-sm text-muted-foreground", className)}
       {...props}/>
   ))
CardDiscription.displayName = "CardDescription"

const CardContent = React.forwardRef<
HTMLDivElement,
React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div ref ={ref}
    className={cn ("pt-6 pt-0", className)}
    {...props}/>
))

CardContent.displayName ="CardContent"


const CardFooter = React.forwardRef<
HTMLDivElement,
React.HTMLAttributes<HTMLDivElement>
>(({ className, ...props }, ref) => (
    <div ref ={ref}
    className={cn (" flex items-center pt-6 pt-0", className)}
    {...props}/>
))
CardFooter.displayName = "CardFooter"

export {Card, CardHeader, CardTitle, CardDiscription, CardContent, CardFooter}