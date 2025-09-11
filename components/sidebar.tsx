"use client"

import { X, BookOpen, Globe } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"

interface SidebarProps {
  isOpen: boolean
  onClose: () => void
  onCourseSelect: (course: string) => void
  currentCourse: string
}

export default function Sidebar({ isOpen, onClose, onCourseSelect, currentCourse }: SidebarProps) {
  const courses = [
    {
      id: "internet",
      name: "Internet",
      icon: <Globe className="w-5 h-5" />,
      description: "Belajar tentang jaringan internet dan web browser",
    },
    {
      id: "html",
      name: "HTML",
      icon: <BookOpen className="w-5 h-5" />,
      description: "Belajar dasar-dasar HTML dan struktur web",
    },
    {
      id: "css",
      name: "CSS",
      icon: <BookOpen className="w-5 h-5" />,
      description: "Belajar dasar-dasar CSS dan struktur web",
    },
  ]

  return (
    <>
      {/* Backdrop */}
      {isOpen && <div className="fixed inset-0 bg-black/50 z-40 transition-opacity" onClick={onClose} />}

      {/* Sidebar */}
      <div
        className={`fixed top-0 right-0 h-full w-80 bg-card border-l border-border z-50 transform transition-transform duration-300 ease-in-out ${isOpen ? "translate-x-0" : "translate-x-full"}`}
      >
        <div className="p-6">
          {/* Header */}
          <div className="flex items-center justify-between mb-6">
            <h2 className="text-xl font-bold text-foreground">Pilih Course</h2>
            <Button variant="ghost" size="icon" onClick={onClose}>
              <X className="w-5 h-5" />
            </Button>
          </div>

          {/* Course List */}
          <div className="space-y-4">
            {courses.map((course) => (
              <Card
                key={course.id}
                className={`p-4 cursor-pointer transition-all hover:shadow-md ${
                  currentCourse === course.id
                    ? "bg-accent border-accent text-accent-foreground"
                    : "bg-card hover:bg-muted/50"
                }`}
                onClick={() => {
                  onCourseSelect(course.id)
                  onClose()
                }}
              >
                <div className="flex items-start gap-3">
                  <div className="mt-1">{course.icon}</div>
                  <div>
                    <h3 className="font-semibold text-lg">{course.name}</h3>
                    <p className="text-sm text-muted-foreground mt-1">{course.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </>
  )
}
