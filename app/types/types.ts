export interface NavLink {
  id: number;
  title: string;
  path: string;
}

export interface feature {
  id: number;
  title: string;
  text: string;
}

export interface User {
  id: string;
  email: string;
  username: string;
  password: string;
  isAdmin?: boolean | false;
}
