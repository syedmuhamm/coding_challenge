import axios from "axios";
import { Startup, StartupDTO } from "../../Types/Startup";
import StartupMapper from "./Startup.mapper";

export class StartupHttpService {


  public static async showData = ()=> () {
    const showDataRes = axios.get(`/api/startups/`);
    console.log(showDataRes);
  }

  public static async getStartupById(id: string | number): Promise<Startup> {
    const response = await axios.get<StartupDTO>(`/api/startups/${id}`);
    console.log(response);
    return StartupMapper.map(response.data);
  }
}
