export abstract class HttpHelper {
  public static async fetchAsJson<Response>(
    input: RequestInfo,
    init?: RequestInit,
  ): Promise<Response> {
    const response = await fetch(input, init);
    const responseText = await response.text();
    const result: Response = JSON.parse(responseText);
    return result;
  }
}
