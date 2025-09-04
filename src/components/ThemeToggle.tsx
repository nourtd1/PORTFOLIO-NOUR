"use client"

import * as React from "react"
import { Moon, Sun, Monitor } from "lucide-react"
import { useTheme } from "next-themes"
import { motion } from "framer-motion"

import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

export function ThemeToggle() {
  const { setTheme, theme } = useTheme()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <motion.div
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <Button 
            variant="ghost" 
            size="icon"
            className="relative w-10 h-10 rounded-xl hover:bg-muted/50 transition-all duration-300 group"
          >
            <motion.div
              className="relative w-5 h-5"
              animate={{ rotate: theme === 'dark' ? 180 : 0 }}
              transition={{ duration: 0.3 }}
            >
              <Sun className="h-5 w-5 rotate-0 scale-100 transition-all duration-300 dark:-rotate-90 dark:scale-0 text-amber-500" />
              <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all duration-300 dark:rotate-0 dark:scale-100 text-blue-500 top-0 left-0" />
            </motion.div>
            <span className="sr-only">Changer le thème</span>
          </Button>
        </motion.div>
      </DropdownMenuTrigger>
      <DropdownMenuContent 
        align="end" 
        className="w-48 bg-background/95 backdrop-blur-xl border border-border/50 shadow-xl rounded-xl p-2"
      >
        <DropdownMenuItem 
          onClick={() => setTheme("light")}
          className="flex items-center gap-3 cursor-pointer hover:bg-muted/50 transition-all duration-200 rounded-lg p-3 group"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <Sun className="h-4 w-4 text-amber-500" />
          </motion.div>
          <span className="font-medium">Mode Clair</span>
          {theme === 'light' && (
            <motion.div 
              className="ml-auto w-2 h-2 bg-primary rounded-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2 }}
            />
          )}
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("dark")}
          className="flex items-center gap-3 cursor-pointer hover:bg-muted/50 transition-all duration-200 rounded-lg p-3 group"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <Moon className="h-4 w-4 text-blue-500" />
          </motion.div>
          <span className="font-medium">Mode Sombre</span>
          {theme === 'dark' && (
            <motion.div 
              className="ml-auto w-2 h-2 bg-primary rounded-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2 }}
            />
          )}
        </DropdownMenuItem>
        <DropdownMenuItem 
          onClick={() => setTheme("system")}
          className="flex items-center gap-3 cursor-pointer hover:bg-muted/50 transition-all duration-200 rounded-lg p-3 group"
        >
          <motion.div
            whileHover={{ scale: 1.1 }}
            transition={{ duration: 0.2 }}
          >
            <Monitor className="h-4 w-4 text-purple-500" />
          </motion.div>
          <span className="font-medium">Système</span>
          {theme === 'system' && (
            <motion.div 
              className="ml-auto w-2 h-2 bg-primary rounded-full"
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2 }}
            />
          )}
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
