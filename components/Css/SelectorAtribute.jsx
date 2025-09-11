import React from 'react'

const SelectorAtribute = () => {
  return (
    <div className="space-y-6">
        <div className="bg-muted px-4 py-3 rounded-lg border border-border">
          <p className="text-sm text-muted-foreground">Materi yang akan dibahas:</p>
          <p className="font-semibold text-foreground text-lg">Selector Atribute CSS</p>
        </div>
  
        <div className="min-h-[265px] gap-10">
          <ul className="list-disc pl-6 space-y-3 text-gray-800">
            <li>Selector atribute itu kita memilih elemen html berdasarkan atribut nya</li>
            <li>macam-macam selector atribute ada selector attribute tanpa value, selector attribute value, dan selector attribute tanpa tag atau pakai clas</li>
          </ul>
        </div>  

        <div className="bg-muted px-4 py-3 rounded-lg border border-border">
          <p className="text-sm text-muted-foreground">Contoh nya di link</p>
          <a target="_blank" href="https://github.com/POV-DR-ABDULLAH/SourceTutorialPrg-Fn/blob/main/Css/SelectorAtribut/main.html" className="font-semibold text-foreground text-lg">Source : https://github.com/POV-DR-ABDULLAH/SourceTutorialPrg-Fn/blob/main/Css/SelectorAtribut/main.html</a>
        </div>
      </div>
  )
}

export default SelectorAtribute