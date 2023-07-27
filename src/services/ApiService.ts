import { AxiosInstance } from 'axios';
import { AxiosConfig } from './AxiosConfig';
/**
 * Implementa Princípio da Responsabilidade Única (SRP)
 */
export class ApiService {
  private httpRequest: AxiosInstance;
  
  constructor() {
    this.httpRequest = AxiosConfig.getInstance(); 
  }

  public get(endpoint: string) {
    return this.httpRequest.get(endpoint)
  }
}