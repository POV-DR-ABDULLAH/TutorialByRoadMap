"use client"

import { useState } from "react"
import { ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import Sidebar from "@/components/sidebar"

// Internet course components
import HowWork from "@/components/Internet/HowWork"
import WhatHttp from "@/components/Internet/WhatHttp"
import WhatDomainName from "@/components/Internet/WhatDomainName"
import DNSHowWork from "@/components/Internet/DNSHowWork"
import WhatHosting from "@/components/Internet/WhatHosting"
import BrowosersHowWork from "@/components/Internet/BrowosersHowWork"

// HTML course components
import PengenalanHtml from "@/components/html/network-architecture"
import HtmlDataFlowDiagram from "@/components/html/PengenalanHtml"
import HtmlWebBrowserDiagram from "@/components/html/web-browser-diagram"

const courses = {
  internet: [
    {
      id: 1,
      title: "Apa yg dilakukan Internet?",
      component: <HowWork />,
    },
    {
      id: 2,
      title: "Apa itu HTTP?",
      component: <WhatHttp />,
    },
    {
      id: 3,
      title: "Apa itu Domain Name?",
      component: <WhatDomainName />,
    },
    {
      id: 4,
      title: "Apa itu Hosting?",
      component: <WhatHosting />,
    },
    {
      id: 5,
      title: "DNS & Bagaimana ia bekerja?",
      component: <DNSHowWork />,
    },
    {
      id: 6,
      title: "Browser & Bagaimana ia bekerja?",
      component: <BrowosersHowWork />,
    },
  ],
  html: [
    {
      id: 1,
      title: "Pengenalan HTML",
      component: <PengenalanHtml />,
    },
    {
      id: 2,
      title: "HTML Data Flow",
      component: <HtmlDataFlowDiagram />,
    },
    {
      id: 3,
      title: "HTML Browser Rendering",
      component: <HtmlWebBrowserDiagram />,
    },
  ],
  // css: [
  //   {
  //     id: 1,
  //     title: "CSS Network Architecture",
  //     component: <CssNetworkArchitecture />,
  //   },
  //   {
  //     id: 2,
  //     title: "CSS Data Flow",
  //     component: <CssDataFlowDiagram />,
  //   },
  //   {
  //     id: 3,
  //     title: "CSS Browser Rendering",
  //     component: <CssWebBrowserDiagram />,
  //   },
  // ],
  // js: [
  //   {
  //     id: 1,
  //     title: "JS Network Architecture",
  //     component: <JsNetworkArchitecture />,
  //   },
  //   {
  //     id: 2,
  //     title: "JS Data Flow",
  //     component: <JsDataFlowDiagram />,
  //   },
  //   {
  //     id: 3,
  //     title: "JS Browser Rendering",
  //     component: <JsWebBrowserDiagram />,
  //   },
  // ],
}

export default function DiagramBrowser() {
  const [currentCourse, setCurrentCourse] = useState("internet")
  const [currentIndex, setCurrentIndex] = useState(0)
  const [isAnimating, setIsAnimating] = useState(false)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  const currentDashboards = courses[currentCourse as keyof typeof courses]

  const goToPrevious = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === 0 ? currentDashboards.length - 1 : prevIndex - 1))
      setIsAnimating(false)
    }, 150)
  }

  const goToNext = () => {
    if (isAnimating) return
    setIsAnimating(true)
    setTimeout(() => {
      setCurrentIndex((prevIndex) => (prevIndex === currentDashboards.length - 1 ? 0 : prevIndex + 1))
      setIsAnimating(false)
    }, 150)
  }

  const handleCourseSelect = (course: string) => {
    setCurrentCourse(course)
    setCurrentIndex(0) // Reset to first lesson when switching courses
  }

  const handleColorBarClick = () => {
    setSidebarOpen(true)
  }

  return (
    <div className="min-h-screen bg-background">
      <header className="bg-card border-b border-border p-4">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-2">
            <div
              className="w-8 h-1 bg-gradient-to-r from-blue-500 via-green-500 to-orange-500 rounded-full cursor-pointer hover:opacity-80 transition-opacity"
              onClick={handleColorBarClick}
            ></div>
            <h1 className="text-2xl font-bold text-foreground capitalize">{currentCourse}</h1>
          </div>
          <div className="text-accent font-bold text-xl">Abdullah</div>
        </div>
      </header>

      <Sidebar
        isOpen={sidebarOpen}
        onClose={() => setSidebarOpen(false)}
        onCourseSelect={handleCourseSelect}
        currentCourse={currentCourse}
      />

      {/* Main content area with navigation */}
      <main className="relative max-w-7xl mx-auto p-8">
        {/* Left navigation arrow */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-accent hover:bg-accent/90 text-accent-foreground border-accent"
          onClick={goToPrevious}
          disabled={isAnimating}
        >
          <ChevronLeft className="h-6 w-6" />
        </Button>

        {/* Dashboard content */}
        <div
          className={`transition-all duration-300 ease-in-out ${isAnimating ? "opacity-50 transform translate-x-2" : "opacity-100 transform translate-x-0"}`}
        >
          <Card className="bg-card border-border shadow-lg">
            <div className="p-8">{currentDashboards[currentIndex].component}</div>
          </Card>
        </div>

        {/* Right navigation arrow */}
        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-accent hover:bg-accent/90 text-accent-foreground border-accent"
          onClick={goToNext}
          disabled={isAnimating}
        >
          <ChevronRight className="h-6 w-6" />
        </Button>

        {/* Dashboard indicator */}
        <div className="flex justify-center mt-6 gap-2">
          {currentDashboards.map((_, index) => (
            <div
              key={index}
              className={`w-3 h-3 rounded-full transition-colors ${index === currentIndex ? "bg-accent" : "bg-muted"}`}
            />
          ))}
        </div>
      </main>
    </div>
  )
}
