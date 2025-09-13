// components/app-sidebar.tsx
import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import {
  Home,
  GraduationCap,
  Briefcase,
  Award,
  BookOpen,
  FolderGit2,
  Wrench,
  Github,
  Linkedin,
  PhoneCall,
} from "lucide-react"
import Link from "next/link"
// ou qualquer ícone que você use

export function AppSidebar() {
  return (
    <Sidebar side="left" variant="sidebar" collapsible="icon">
      <SidebarHeader>
        <div className="p-4 text-lg font-bold text-center">Tiago Jales</div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive>
                <Link href="/">
                  <Home className="flex items-center gap-2" />
                  <span>Home</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive>
                <Link href="/education">
                  <GraduationCap className="flex items-center gap-2" />
                  <span>Formação</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive>
                <Link href="/experience">
                  <Briefcase className="flex items-center gap-2" />
                  <span>Experiência</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive>
                <Link href="/skills">
                  <Wrench className="flex items-center gap-2" />
                  <span>Habilidades</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive>
                <Link href="/certifications">
                  <Award className="flex items-center gap-2" />
                  <span>Certificações</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive>
                <Link href="/courses">
                  <BookOpen className="flex items-center gap-2" />
                  <span>Cursos</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive>
                <Link href="/projects">
                  <FolderGit2 className="flex items-center gap-2" />
                  <span>Projetos</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive>
                <Link href="/contact">
                  <PhoneCall className="flex items-center gap-2" />
                  <span>Contato</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive>
                <Link href="https://www.linkedin.com/in/tiago-jales-118886121/" target="_blank">
                  <Linkedin className="flex items-center gap-2" />
                  <span>LinkedIn</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>

            <SidebarMenuItem>
              <SidebarMenuButton asChild isActive>
                <Link href="https://github.com/tiagojales" target="_blank">
                  <Github className="flex items-center gap-2" />
                  <span>Github</span>
                </Link>
              </SidebarMenuButton>
            </SidebarMenuItem>
          </SidebarMenu>          
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <div className="p-4">Versão: 0.0.2</div>
      </SidebarFooter>
    </Sidebar>
  )
}
