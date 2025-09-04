export default function DNSHowWork() {
    return (
      <div className="space-y-6">
        <div className="bg-muted px-4 py-3 rounded-lg border border-border">
          <p className="text-sm text-muted-foreground">Materi yang akan dibahas:</p>
          <p className="font-semibold text-foreground text-lg">DNS & Bagaimana DNS bekerja?</p>
        </div>
  
        <div className="min-h-[365px] gap-10">
          <ul className="list-disc pl-6 space-y-3 text-gray-800">
            <li>DNS (Domain Name System) adalah sistem yang digunakan untuk mengakses website</li>
            <li>nah DNS ini berguna jika kita membuka web yg dimana kita menggunakan domain name seperti google.com nah dia akn mencocokkan dengan IP address nya</li>
            <li>nah setelah mencocokkan Domain name dengan IP address dan jika hasilnya cocok maka web itu bisa di akses</li>
          </ul>
        </div>
      </div>
    )
  }