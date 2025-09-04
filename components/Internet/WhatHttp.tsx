export default function WhatHttp() {
  return (
    <div className="space-y-6">
      <div className="bg-muted px-4 py-3 rounded-lg border border-border">
        <p className="text-sm text-muted-foreground">Materi yang akan dibahas:</p>
        <p className="font-semibold text-foreground text-lg">Apa itu Http?</p>
      </div>

      <div className="min-h-[365px] gap-10">
        <ul className="list-disc pl-6 space-y-3 text-gray-800">
          <li>HTTP (Hypertext Transfer Protocol) adalah protokol yang digunakan untuk mengakses website</li>
          <li>nah http ini harus ada jika kita ingin membuka web apa lagi kita menggunakan client(browser) untuk mengakses web</li>
          <li>http itu seperti requerment untuk membuka web kpn kita tidak menggunakan http maka web itu tidak bisa di akses</li>
        </ul>
      </div>
    </div>
  )
}