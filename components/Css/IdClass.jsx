import React from 'react'

const IdClass = () => {
  return (
    <div className="space-y-6">
        <div className="bg-muted px-4 py-3 rounded-lg border border-border">
          <p className="text-sm text-muted-foreground">Materi yang akan dibahas:</p>
          <p className="font-semibold text-foreground text-lg">Id, Class & multiple class</p>
          <p className="text-foreground text-lg">bisa di buka source nya dulu supaya gampang di mengerti</p>
        </div>
  
        <div className="min-h-[265px] gap-10">
          <ul className="list-disc pl-6 space-y-3 text-gray-400">
            <li>id itu sangat berguna misal ketika kita ingin mengatur warna, nah misal kita mempunyai 2 p na yg mau kita berikan warna hanya satu kita tinggal beri id ke salah satu dari mereka</li>
            <li>id juga berguna ketika kita menggunakan a href</li>
          </ul>
          <br />
          <ul className="list-disc pl-6 space-y-3 text-gray-600">
            <li>class sama seperti id tapi class bisa digunakan lebih dari satu</li>
            <li>misal kita ingin atur warna nya mereka sama na itu bisa dan kita juga bisa menambahkan lebih dari satu class</li>
          </ul>
          <br />
          <ul className="list-disc pl-6 space-y-3 text-gray-800">
            <li>class multiple udah di bahas di atas tadi y itu bisa di gunakan lebih dari satu class</li>
            <li>misal kita suadah mengatur warna pada class dengan warna yg sama di 2 p dan kita ingin mengatur besar font nya na kita tinggal tambahkan clas dan selamat yg satu beda font satu ny juga sm</li>
          </ul>
        </div>  

        <div className="bg-muted px-4 py-3 rounded-lg border border-border">
          <p className="text-sm text-muted-foreground">Contoh nya di link</p>
          <a target="_blank" href="https://github.com/POV-DR-ABDULLAH/SourceTutorialPrg-Fn/blob/main/Css/IdClassMultiple/main.html" className="font-semibold text-foreground text-lg">Source : https://github.com/POV-DR-ABDULLAH/SourceTutorialPrg-Fn/blob/main/Css/IdClassMultiple/main.html</a>
        </div>
      </div>
  )
}

export default IdClass