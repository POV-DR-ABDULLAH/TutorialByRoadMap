export default function BrowosersHowWork() {
    return (
      <div className="space-y-6">
        <div className="bg-muted px-4 py-3 rounded-lg border border-border">
          <p className="text-sm text-muted-foreground">Materi yang akan dibahas:</p>
          <p className="font-semibold text-foreground text-lg">Browser & Bagaimana ia bekerja?</p>
        </div>
  
        <div className="min-h-[365px] gap-10">
          <ul className="list-disc pl-6 space-y-3 text-gray-800">
            <li>Browser(client) adalah alat yang digunakan untuk mengakses website</li>
            <li>jika kita ingin mengakses web kita harus menggunakan client(browser) seperti chrome, firefox, dll</li>
            <li>browser ini sangat berguna, jika kita tidak mengguanakan browser maka tampilan web kita itu seperti code html. nah browser ini yg akan mengubah kode tersebut menjadi tampilan yg bisa di lihat</li>
          </ul>
        </div>
      </div>
    )
  }