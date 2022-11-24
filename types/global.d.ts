declare global {
  interface Date {
    format(pattern: string): string
  }
}

export {}
