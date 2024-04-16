'use client'

import React, { Children } from 'react'
import { ThemeProvider } from 'next-theme';

export default function Providers({ children }) {
    return (
        <ThemeProvider attribute="class" defaultTheme="dark">
        <div className='text-gray-700 dark:text-gray-200 dark:bg-gray-700 min-h-screen select-none transition-colors duration-300'>
          {children}
        </div>
      </ThemeProvider>
    )
}
