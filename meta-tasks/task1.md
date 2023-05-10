### Task 1

The database consists of 3 different tables, `users`, `parcs` and `bookings`. 

All the columns across each of the tables use `varchar` as their type, with no specified character maximum. Setting character limits for some fields could be a useful tool for fields like ids, where the maximum length is known. The advantage of this would be that postgres would error if you tried to add a longer string (potentially by mistake / caused by a bug). A disadvantage would be this length could not be easily changed if the ID generation system was changed & needed more character storage.

Neither `users` and `parcs` rely on any other entity within the database. However, the `bookings` table has columns which contain both `user` and `parc` ids. There are no relations set up on this table - adding constraints of foreign keys for the `user` and `parc` columns back to the `id` fields in their respective tables would add safety to the data by:
- Ensuring that any reference to a `user` or `parc` in the `bookings` table is always a valid ID of each entity
- Ensuring that no user or parc could be deleted without first deleting the bookings data.
