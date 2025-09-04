import { Card } from "@/components/ui/card"

export default function WebBrowserDiagram() {
  return (
    <div className="space-y-6">
      <div className="bg-muted px-4 py-3 rounded-lg border border-border">
        <p className="text-sm text-muted-foreground">Materi yang akan dibahas:</p>
        <p className="font-semibold text-foreground text-lg">Diagram Web Browser</p>
      </div>

      <div className="flex items-center justify-center min-h-[365px] gap-8">
        <div className="flex flex-col items-center">
          <div className="text-lg font-semibold mb-4 text-foreground">Komputer</div>
          <Card className="w-48 h-32 bg-red-200 border-2 border-blue-400 flex items-center justify-center">
            <div className="text-center">
              <div className="font-semibold text-foreground">Web</div>
              <div className="font-semibold text-foreground">Browser</div>
            </div>
          </Card>
        </div>

        <div className="flex items-center">
          <div className="w-16 h-0.5 bg-foreground"></div>
          <div className="w-0 h-0 border-l-8 border-l-foreground border-y-4 border-y-transparent ml-1"></div>
        </div>

        <div className="flex flex-col items-center">
          <Card className="w-32 h-20 bg-green-200 border-2 border-green-400 rounded-full flex items-center justify-center mb-4">
            <div className="font-semibold text-foreground">Internet</div>
          </Card>
        </div>

        <div className="flex items-center">
          <div className="w-16 h-0.5 bg-foreground"></div>
          <div className="w-0 h-0 border-l-8 border-l-foreground border-y-4 border-y-transparent ml-1"></div>
        </div>

        <div className="flex flex-col items-center">
          <div className="text-lg font-semibold mb-4 text-foreground">Komputer</div>
          <Card className="w-48 h-32 bg-orange-200 border-2 border-orange-400 flex items-center justify-center">
            <div className="text-center">
              <div className="font-semibold text-foreground">Web Server</div>
            </div>
          </Card>
        </div>
      </div>
    </div>
  )
}
