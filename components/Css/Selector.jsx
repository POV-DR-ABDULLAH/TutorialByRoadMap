import React from 'react'

const Selector = () => {
  return (
    <div className="space-y-6">
        <div className="bg-muted px-4 py-3 rounded-lg border border-border">
          <p className="text-sm text-muted-foreground">Materi yang akan dibahas:</p>
          <p className="font-semibold text-foreground text-lg">Selector CSS</p>
        </div>
  
        <div className="min-h-[265px] gap-10">
          <ul className="list-disc pl-6 space-y-3 text-gray-800">
            <li>Selector itu kita memilih elemen html dan ada bnyak macam selector</li>
            <li>macam-macam selector ada tag selector, id selector, class selector, list selector, dan selector descendent</li>
          </ul>
        </div>  

        <div className="bg-muted px-4 py-3 rounded-lg border border-border">
          <p className="text-sm text-muted-foreground">Contoh nya di link</p>
          <a target="_blank" href="https://github.com/POV-DR-ABDULLAH/SourceTutorialPrg-Fn/blob/main/Css/Selector/main.html" className="font-semibold text-foreground text-lg">Source : https://github.com/POV-DR-ABDULLAH/SourceTutorialPrg-Fn/blob/main/Css/Selector/main.html</a>
        </div>
      </div>
  )
}

export default Selector