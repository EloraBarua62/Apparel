import AdminHeader from "../../template/Shared/AdminHeader/AdminHeader";
import AdminDashboard from '../../template/AdminDashboard/AdminDashboard'

export default function Template({ children }: { children: React.ReactNode }) {
  return (
    <div style={{ width: "100%", height: "100vh" }}>
      <AdminHeader />
      <div className="dashboard_template_design">
        <AdminDashboard />
        {children}
      </div>
    </div>
  );
}
