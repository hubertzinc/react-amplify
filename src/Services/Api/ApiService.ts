import { fetchAuthSession } from "aws-amplify/auth";

export interface IApiService {
  get<T>(endpoint: string): Promise<T>;
  // post<T>(endpoint: string, body: unknown): Promise<T>;
}

export class ApiService implements IApiService {
  private baseUrl: string = "https://localhost:6050";

  constructor() {
    fetchAuthSession().then(res => {
      console.log(res);
    });

  }

  public async get<T>(endpoint: string): Promise<T> {
    const authHeader = await this.getAuthHeader();
    const options = {
      method: "GET",
      headers: {
        ...{ "Content-Type": "application/json" },
        ...{ "Authorization": authHeader },
      },
    };

    return fetch(`${this.baseUrl}${endpoint}`, options)
      .then((res) => {
        if (res.ok) {
          return res.json();
        }

        throw new Error("Failed to fetch data");
      })
      .catch((error) => {
        throw error;
      });
  }

  private async getAuthHeader(): Promise<string> {
    const session = await fetchAuthSession();
    return "Bearer " + session.tokens?.accessToken;
  }
}
