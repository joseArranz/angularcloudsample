import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';


@Injectable()
export class AppComponentService {
  constructor(private http: HttpClient) { }

  getData(){
    console.log("Calling spring ::: " +environment.serviceUrl + environment.servicePath);
    return this.http.get(environment.serviceUrl + environment.servicePath);
  }
  getDataKafka(){    
    console.log("Calling spring kafka ::: " +environment.serviceKafkaUrl + environment.servicekafkaPath);
    return this.http.get(environment.serviceKafkaUrl + environment.servicekafkaPath);
  }
  getDataKafkaSubscribe(){    
    console.log("Reciving spring kafka ::: " +environment.serviceKafkaUrl + environment.servicekafkaRecivingPath);
    return this.http.get(environment.serviceKafkaUrl + environment.servicekafkaRecivingPath);
  }
}