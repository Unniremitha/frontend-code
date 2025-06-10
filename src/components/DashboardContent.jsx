export default function DashboardContent() {
  return (
    <div className="p-6 space-y-4">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white shadow rounded-2xl p-4">
          <h3 className="text-lg font-semibold text-gray-700">Civil Registartion</h3>
          <p className="text-2xl font-bold text-pink-600">1,200</p>
        </div>
        <div className="bg-white shadow rounded-2xl p-4">
          <h3 className="text-lg font-semibold text-gray-700">Property Tax</h3>
          <p className="text-2xl font-bold text-pink-600">23,000</p>
        </div>
        <div className="bg-white shadow rounded-2xl p-4">
          <h3 className="text-lg font-semibold text-gray-700">Building Permit</h3>
          <p className="text-2xl font-bold text-pink-600">312</p>
        </div>
      </div>
    </div>
  );
}
