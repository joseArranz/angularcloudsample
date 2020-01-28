import { Component } from '@angular/core';
import { environment } from '../environments/environment';
import { AppComponentService } from './app.component.service';
const EventSource: any = window['EventSource'];
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angularcloudsample';
  enviroment = environment.enviroment;
  dataServiceSpring;
  dataServiceSpringkafka;
  dataServiceSpringkafkavecibing;
  evtSource;
  constructor(private appComponentService: AppComponentService) {
    
  }

  callServiceSpring() {
    console.log("Call Service Spring");
    this.appComponentService.getData()
      .subscribe((data: any) => {
        console.log("recive data ::: ");
        console.log(data);
        this.dataServiceSpring = data;
      });
  }
  callServiceSpringkafka() {
    console.log("Call Service Spring kafka");
    this.appComponentService.getDataKafka()
      .subscribe((data: any) => {
        console.log("recive data ::: ");        
        console.log(data);
        this.dataServiceSpringkafka = data;
      });
  }

  callServiceSpringkafkaReciving() {
    this.evtSource = new EventSource(environment.serviceKafkaUrl + environment.servicekafkaRecivingPath, { withCredentials: false });    
    var self =  this;
    this.evtSource.onmessage = (e) => {
      
      self.dataServiceSpringkafkavecibing = e.data;
      console.log('connection message');
      console.log(e.data);
    }
    this.evtSource.onerror = (e) => {
      
      console.log('connection error');
      console.log(e);
      self.evtSource.close();
    }
    this.evtSource.onopen = (e) => {
      
      self.dataServiceSpringkafkavecibing = e.data;
      console.log('connection open');
      console.log(e);
    }
  }

  asd() {
    console.log("Call Service Spring kafka Reciving");
    this.appComponentService.getDataKafkaSubscribe()
      .subscribe((data: any) => {
        console.log("recive data kafka  ::: " + data);
        console.log(data);
        this.dataServiceSpringkafkavecibing = data;
      });
  }



}
