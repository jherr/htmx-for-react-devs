import React, { useState, useEffect } from "react";

import type { User } from "../types";

import UserList from "./UserList";

export default function Users() {
  const [page, setPage] = useState(1);
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    fetch(`/users/${page}.json`)
      .then((res) => res.json())
      .then((res) => setUsers(res as User[]));
  }, [page]);

  return (
    <>
      <div className="flex">
        <div>Page</div>{" "}
        {[1, 2, 3].map((page) => (
          <a
            href="#"
            className="w-10 h-10 flex items-center justify-center border border-white mx-2"
            onClick={() => setPage(page)}
            key={page}
          >
            {page}
          </a>
        ))}
      </div>

      <UserList users={users} />
    </>
  );
}
