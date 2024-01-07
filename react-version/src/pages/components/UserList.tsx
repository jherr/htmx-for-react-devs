import React from "react";

import type { User } from "../types";

export default function UserList({ users }: { users: User[] }) {
  return (
    <table width="100%" className="text-sm">
      <thead>
        <tr>
          <th>First</th>
          <th>Last</th>
          <th>Email</th>
          <th>Phone</th>
          <th>Job</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <tr key={user.id}>
            <td>{user.first}</td>
            <td>{user.last}</td>
            <td>{user.email}</td>
            <td>{user.phone}</td>
            <td>{user.job}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
}
