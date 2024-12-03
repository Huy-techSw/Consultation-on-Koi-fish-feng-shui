import DashboardCard from '../components/admin/dashboardCard'
import HeaderAdmin from '../components/admin/headerAdmin'
import SideBarAdmin from '../components/admin/sideBarAdmin'


const AdminPage = () => {
  return (
    <div>
        <SideBarAdmin/>
        <HeaderAdmin/>
        <DashboardCard/>
    </div>
  )
}

export default AdminPage