import React from 'react'

const BorderOutline = () => {
  return (
    <div className="space-y-6">
                <div className="bg-muted px-4 py-3 rounded-lg border border-border">
                  <p className="text-sm text-muted-foreground">Materi yang akan dibahas:</p>
                  <p className="font-semibold text-foreground text-lg">Border & Outline </p>
                </div>
          
                <div className="min-h-[265px] gap-10">
                  <ul className="list-disc pl-6 space-y-3 text-gray-800">
                    <li>Border Seperti yg kita ketahui border itu yg digunakan untuk membungkus satu elemnt dan border itu bisa di atur warna, lebar, dll</li>
                    <li>Nah ada yg nama nya Outline yg dimn dia itu gak akan menggeser elment nya dia itu gak mangmbil space beda dengan border dia itu mnagmbil space dan menggeser elment</li>
                    <li>macam-macam border ada border-color, border-width, border-style, border-radius, dll</li>
                    <li>macam-macam outline ada outline-color, outline-width, outline-style, dll</li>
                  </ul>
                </div>  
        
                <div className="bg-muted px-4 py-3 rounded-lg border border-border">
                  <p className="text-sm text-muted-foreground">Contoh nya di link</p>
                  <a target="_blank" href="https://github.com/POV-DR-ABDULLAH/SourceTutorialPrg-Fn/blob/main/Css/Border&Outline/main.html" className="font-semibold text-foreground text-lg">Source : https://github.com/POV-DR-ABDULLAH/SourceTutorialPrg-Fn/blob/main/Css/Border&Outline/main.html</a>
                </div>
              </div>
  )
}

export default BorderOutline