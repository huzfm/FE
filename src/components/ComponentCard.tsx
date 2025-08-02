// components/ComponentCard.tsx

import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

export default function ComponentCard({
  title,
  description,
  command,
}: {
  title: string;
  description: string;
  command: string;
}) {
  return (
    <Card className="border-gray-200 shadow-sm">
      <CardHeader>
        <CardTitle className="text-black">{title}</CardTitle>
        <CardDescription className="text-gray-600">
          {description}
        </CardDescription>
      </CardHeader>
      <CardContent>
        <div className="bg-gray-50 rounded-lg p-4 font-mono text-sm border border-gray-200">
          <div className="text-gray-500 mb-2"># Install {title}</div>
          <div className="text-black font-medium">{command}</div>
        </div>
      </CardContent>
    </Card>
  );
}
