export default function WhatDomainName() {
  return (
    <div className="space-y-6">
      <div className="bg-muted px-4 py-3 rounded-lg border border-border">
        <p className="text-sm text-muted-foreground">Materi yang akan dibahas:</p>
        <p className="font-semibold text-foreground text-lg">Apa itu Domain Name?</p>
      </div>

      <div className="min-h-[365px] gap-10">
        <ul className="list-disc pl-6 space-y-3 text-gray-800">
          <li>Domain Name adalah alamat yang digunakan untuk mengakses website</li>
          <li>Domain Name itu seperti https://github.com/</li>
          <li>sebenarnya web itu menggunakan IP address(http://192.168.1.1/) tapi karna itu sangat susah di ingat maka ad nama nya domain name kita hanya tinggal mengingat domain name saja tidak harus menggunakan IP</li>
        </ul>
      </div>
    </div>
  )
}
