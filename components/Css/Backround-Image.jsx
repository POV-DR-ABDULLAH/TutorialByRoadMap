import React from 'react'

const Backround = () => {
  return (
        <div className="space-y-6">
                <div className="bg-muted px-4 py-3 rounded-lg border border-border">
                  <p className="text-sm text-muted-foreground">Materi yang akan dibahas:</p>
                  <p className="font-semibold text-foreground text-lg">Backround - Backround-image</p>
                </div>
          
                <div className="min-h-[265px] gap-10">
                  <ul className="list-disc pl-6 space-y-3 text-gray-800">
                    <li>Backround itu ada dua yg menggunakan warna dan gambar na biasa nya di dipake di latar belakang</li>
                    <li>macam-macam backround yg menggunakan warna ada backround-color, backround-height, dll</li>
                    <li>macam-macam backround yg menggunakan gambar ada backround-image, backround-repeat, backround-position, backround-size, dll</li>
                  </ul>
                </div>  
        
                <div className="bg-muted px-4 py-3 rounded-lg border border-border">
                  <p className="text-sm text-muted-foreground">Contoh nya di link</p>
                  <a target="_blank" href="https://github.com/POV-DR-ABDULLAH/SourceTutorialPrg-Fn/blob/main/Css/Backround/main.html" className="font-semibold text-foreground text-lg">Source : https://github.com/POV-DR-ABDULLAH/SourceTutorialPrg-Fn/blob/main/Css/Backround/main.html</a>
                </div>
              </div>
  )
}

export default Backround