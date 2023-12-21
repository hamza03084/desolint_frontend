import axios from "axios";
import { getSession } from "next-auth/react";

const baseURL = `${process.env.NEXT_PUBLIC_BASE_URL}`;
const apiInstance = axios.create({ baseURL });
apiInstance.interceptors.request.use(async (request) => {
  const session = await getSession();
  if (session) {
    request.headers.Authorization = `Bearer ${session.accessToken}`;
  }
  return request;
});

export default apiInstance;
