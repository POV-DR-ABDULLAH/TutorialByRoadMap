import React from 'react'

const MaxMinHeightWidth = () => {
  return (
    <div className="space-y-6">
                <div className="bg-muted px-4 py-3 rounded-lg border border-border">
                  <p className="text-sm text-muted-foreground">Materi yang akan dibahas:</p>
                  <p className="font-semibold text-foreground text-lg">Max & Min - Height & Width</p>
                </div>
          
                <div className="min-h-[265px] gap-10">
                  <ul className="list-disc pl-6 space-y-3 text-gray-800">
                    <li>Max & Min - Height & Width itu kita bisa mengatur lebar atau tinggi nya dan mengatur max lebar atau tinggi nya</li>
                    <li>nah seperti yg kita ketahui width itu lebar dan height itu tinggi</li>
                    <li>nah kalo min-width itu minimal lebar nya dan kalo min-height itu minimal tinggi</li>
                    <li>nah kalo max-width itu maximal lebar nya dan kalo max-height itu maximal tinggi nya</li>
                  </ul>
                </div>  
        
                <div className="bg-muted px-4 py-3 rounded-lg border border-border">
                  <p className="text-sm text-muted-foreground">Contoh nya di link</p>
                  <a target="_blank" href="https://github.com/POV-DR-ABDULLAH/SourceTutorialPrg-Fn/blob/main/Css/MaxMin/main.html" className="font-semibold text-foreground text-lg">Source : https://github.com/POV-DR-ABDULLAH/SourceTutorialPrg-Fn/blob/main/Css/MaxMin/main.html</a>
                </div>
              </div>
  )
}

export default MaxMinHeightWidth