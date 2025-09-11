import React from 'react'

const What = () => {
  return (
    <div className="space-y-6">
        <div className="bg-muted px-4 py-3 rounded-lg border border-border">
          <p className="text-sm text-muted-foreground">Materi yang akan dibahas:</p>
          <p className="font-semibold text-foreground text-lg">Pengenalan CSS</p>
        </div>
  
        <div className="min-h-[265px] gap-10">
          <ul className="list-disc pl-6 space-y-3 text-gray-800">
            <li>CSS adalah bahasa yang digunakan untuk membuat tampilan website</li>
            <li>Singaktan CSS adalah Cascading Style Sheet</li>
            <li>nah maksudnya yg mengatur tampilan itu sperti mangatur besar hurufnya, mangatur biar posisi nya di kanan, dll</li>
          </ul>
        </div>  

        <div className="bg-muted px-4 py-3 rounded-lg border border-border">
          <p className="text-sm text-muted-foreground">Contoh nya di link</p>
          <a target="_blank" href="https://github.com/POV-DR-ABDULLAH/SourceTutorialPrg-Fn/blob/main/Css/WhatIsCss/main.html" className="font-semibold text-foreground text-lg">Source : https://github.com/POV-DR-ABDULLAH/SourceTutorialPrg-Fn/blob/main/Css/WhatIsCss/main.html</a>
        </div>
      </div>
  )
}

export default What