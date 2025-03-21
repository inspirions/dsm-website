import { Card, CardContent, CardFooter } from "@/components/ui/card"

interface TestimonialCardProps {
  quote: string
  author: string
  role: string
  company: string
}

export default function TestimonialCard({ quote, author, role, company }: TestimonialCardProps) {
  return (
    <Card className="flex flex-col">
      <CardContent className="pt-6">
        <div className="mb-4 text-2xl">"</div>
        <p className="text-lg italic">{quote}</p>
      </CardContent>
      <CardFooter className="flex flex-col items-start">
        <div className="font-semibold">{author}</div>
        <div className="text-sm text-slate-500 dark:text-slate-400">
          {role}, {company}
        </div>
      </CardFooter>
    </Card>
  )
}

