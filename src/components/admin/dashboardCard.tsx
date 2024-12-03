import { Calendar, DollarSign, FileText, Users } from "lucide-react";


const Dashboard = ({ title, value, icon: Icon, trend }: any) => (
  <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
    <div className="flex items-center justify-between mb-4">
      <div className="bg-red-100 p-3 rounded-full">
        <Icon className="h-6 w-6 text-red-600" />
      </div>
      {trend !== undefined && (
        <span className={`text-sm font-semibold ${trend >= 0 ? 'text-green-500' : 'text-red-500'}`}>
          {trend > 0 ? '+' : ''}{trend}%
        </span>
      )}
    </div>
    <h3 className="text-lg font-semibold text-gray-700 mb-1">{title}</h3>
    <p className="text-2xl font-bold text-gray-900">{value}</p>
  </div>
);

const ConsultationRow = ({ customer, date, type, status }: any) => (
  <tr className="hover:bg-gray-50">
    <td className="py-4 px-6">{customer}</td>
    <td className="py-4 px-6">{date}</td>
    <td className="py-4 px-6">{type}</td>
    <td className="py-4 px-6">
      <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
        status === 'Completed' ? 'bg-green-100 text-green-800' :
        status === 'Scheduled' ? 'bg-blue-100 text-blue-800' :
        'bg-yellow-100 text-yellow-800'
      }`}>
        {status}
      </span>
    </td>
  </tr>
);

const DashboardCard = () => {
  return (
    <div className="bg-gray-100 min-h-screen flex">
      <div className="lg:ml-64 flex-1 flex flex-col">
        <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-100">
          <div className="container mx-auto px-6 py-8">
            <h1 className="text-3xl font-semibold text-gray-800 mb-6">Dashboard</h1>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <Dashboard title="Total Customers" value="1,234" icon={Users} trend={5.2} />
              <Dashboard title="Consultations" value="56" icon={FileText} trend={-2.1} />
              <Dashboard title="Upcoming Appointments" value="12" icon={Calendar} trend={0} />
              <Dashboard title="Revenue" value="$9,876" icon={DollarSign} trend={7.8} />
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="flex items-center justify-between px-6 py-4 border-b">
                <h2 className="text-xl font-semibold text-gray-800">Recent Consultations</h2>
                <button className="text-red-600 hover:text-red-800 font-semibold">View All</button>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead className="bg-gray-50">
                    <tr className="text-left text-gray-600">
                      <th className="py-3 px-6 font-semibold">Customer</th>
                      <th className="py-3 px-6 font-semibold">Date</th>
                      <th className="py-3 px-6 font-semibold">Type</th>
                      <th className="py-3 px-6 font-semibold">Status</th>
                    </tr>
                  </thead>
                  <tbody>
                    <ConsultationRow customer="John Doe" date="2023-06-15" type="Koi Selection" status="Completed" />
                    <ConsultationRow customer="Jane Smith" date="2023-06-16" type="Pond Design" status="Scheduled" />
                    <ConsultationRow customer="Bob Johnson" date="2023-06-17" type="Full Feng Shui" status="In Progress" />
                    <ConsultationRow customer="Alice Brown" date="2023-06-18" type="Koi Health" status="Scheduled" />
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

export default DashboardCard;
