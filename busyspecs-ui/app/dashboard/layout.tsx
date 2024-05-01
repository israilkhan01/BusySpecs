import Header from "./Header"
import SideBar from "./SideBar"
import "./layout.css"
export default function DashboardLayout({
    children, // will be a page or nested layout
  }: {
    children: React.ReactNode
  }) {
    return (
      <section>
        {/* Include shared UI here e.g. a header or sidebar */}
           <Header/>
            <div className="user">
                <SideBar />
                { children}
            </div>
      </section>
    )
  }