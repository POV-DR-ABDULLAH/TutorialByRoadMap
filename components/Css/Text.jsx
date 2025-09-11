import React from 'react'

const Text = () => {
  return (
    <div className="space-y-6">
        <div className="bg-muted px-4 py-3 rounded-lg border border-border">
          <p className="text-sm text-muted-foreground">Materi yang akan dibahas:</p>
          <p className="font-semibold text-foreground text-lg">Text </p>
        </div>
  
        <div className="min-h-[265px] gap-10">
          <ul className="list-disc pl-6 space-y-3 text-gray-800">
            <li>Text di css itu kita bisa dekorasi bisa  di atur besar nya jaraknya dll</li>
            <li>macam-macam text ada text-align, text-decoration, text-transform, dan text-shadow</li>
          </ul>
        </div>  

        <div className="bg-muted px-4 py-3 rounded-lg border border-border">
          <p className="text-sm text-muted-foreground">Contoh nya di link</p>
          <a target="_blank" href="https://github.com/POV-DR-ABDULLAH/SourceTutorialPrg-Fn/blob/main/Css/Text/main.html" className="font-semibold text-foreground text-lg">Source : https://github.com/POV-DR-ABDULLAH/SourceTutorialPrg-Fn/blob/main/Css/Text/main.html</a>
        </div>
      </div>
  )
}

export default Text