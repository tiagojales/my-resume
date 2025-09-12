// app/layout.tsx
import { SidebarProvider, SidebarTrigger } from "@/components/ui/sidebar"
import { AppSidebar } from "@/components/app-sidebar"
import "./globals.css"

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="pt-BR">
      <body>
        <SidebarProvider>
          <div className="flex">
            <AppSidebar />
            <div className="flex-1">
              {/* Botão para abrir/fechar no mobile ou colapso */}
              <SidebarTrigger />
              <main>{children}</main>
            </div>
          </div>
        </SidebarProvider>
      </body>
    </html>
  )
}
