import { Card } from "@/components/ui/card"

export default function HowWork() {
  return (
    <div className="space-y-6">
      <div className="bg-muted px-4 py-3 rounded-lg border border-border">
        <p className="text-sm text-muted-foreground">Materi yang akan dibahas:</p>
        <p className="font-semibold text-foreground text-lg">Bagaimana Internet bekerja?</p>
      </div>

      <div className="min-h-[365px] gap-10">
        <ul className="list-disc pl-6 space-y-3 text-gray-800">
          <li>Internet adalah jaringan komputer yang terhubung dengan komputer lain</li>
          <li>Jika kita ingin mengakses website, maka komputer kita harus terlebih dahulu terhubung dengan Internet dan setelah itu komputer kita akan mengakses web server tersebut</li>
        </ul>
      </div>
    </div>
  )
}
