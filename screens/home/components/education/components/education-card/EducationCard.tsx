import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle, Badge } from "@/ui"
import { EducationEntry } from '@/screens/home/components/education/types';

const EducationCard = ({ entry }: { entry: EducationEntry }) => {
  return (
    <Card className="overflow-hidden">
      <CardHeader className="pb-2">
        <div className="flex items-center gap-4">
          <Image
            src={entry.logo}
            alt={`${entry.institution} logo`}
            width={80}
            height={80}
            className="rounded-full"
          />
          <div>
            <CardTitle className="text-xl mb-1">{entry.institution}</CardTitle>
            <p className="text-sm text-muted-foreground">{entry.years}</p>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <h4 className="font-semibold mb-2">{entry.degree}</h4>
        <p className="text-sm mb-2">GPA: {entry.gpa}</p>
        <div className="flex flex-wrap gap-2">
          {entry.achievements.map((achievement, i) => (
            <Badge key={i} variant="secondary">{achievement}</Badge>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}

export default EducationCard;
