const data = [
  {
    name: "Jane Cooper",
    title: "Regional Paradigm Technician",
    email: "jane.cooper@example.com",
  },
  {
    name: "Cody Fisher",
    title: "Product Directives Officer",
    email: "codi.fisher@example.com",
  },
  {
    name: "Leonard Krasner",
    title: "Senior Designer",
    email: "leonard.krasner@example.com",
  },
  {
    name: "Emily Selman",
    title: "VP, Hardware Engineer",
    email: "emily.selman@example.com",
  },
  {
    name: "Anna Roberts",
    title: "Chief Strategy Officer",
    email: "anna.roberts@example.com",
  },
];

export default function Table() {
  return (
    <table className="mx-auto">
      <thead className=" pl-5 bg-slate-100 border-b-gray-200 border-b-[1px]">
        <th className="text-left px-2 py-1">Name</th>
        <th className="text-left px-2 py-1">Title</th>
        <th className="text-left px-2 py-1">Email</th>
      </thead>
      <tbody>
        {data.map((employee) => (
          <tr className="odd:bg-white even: bg-slate-100">
            <td className="pl-2 py-2 px-2">{employee.name}</td>
            <td className="pl-2 py-2 px-2">{employee.title}</td>
            <td className="pl-2 py-2 px-2">{employee.email}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}