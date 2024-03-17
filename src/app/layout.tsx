export const metadata = {
  title: 'GDSC - DSU',
  description: 'Google Developer Student Club - DHA SUffa University',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
