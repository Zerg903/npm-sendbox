import { User } from '../models/domains';

// Api functions
// ------------------------

export async function fetchUsersAsync(quantity: number, throwError: boolean = false): Promise<User[]> {

  const url = throwError
    ? 'https://far-far-away.com?per_page=' + quantity
    : 'https://reqres.in/api/users?per_page=' + quantity;

  const res = await fetch(url);
  const json = (await res.json()) as JsonResult;

  return json.data.map(jsonMapper);
}

// Api helpers
// ------------------------

type JsonResult = {
  data: Array<{
    id: number,
    first_name: string,
    last_name: string,
    avatar: string,
  }>
};

const jsonMapper = (item): User => {
  return {
    id: item.id,
    firstName: item.first_name,
    lastName: item.last_name,
    avatar: item.avatar,
  };
};