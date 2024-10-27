import { Injectable } from '@angular/core';
import { HttpClient, HttpParams, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
// import { createHash } from 'crypto';

@Injectable({
  providedIn: 'root'
})
export class ConfigService{
  private facebookApiUrl = 'https://graph.facebook.com/v12.0/341576715711996/events';
  private accessToken = 'EAAV9uLcX5y4BOwFMFzb9ykYblJ3s6ZAMZCEpreV7EJeiKMxFrhEtSqAN4ZBUux4bvWaJ6RaybUXJvaL33BCtqoNYYrpvR7On8it5WQNM9RWz58Htq5EKr2TFwkoVRcoS1bhotqDQkinKZBwYlZACCdbZC8Xs5ALs8iIpWpA2IIz7DD5x1kbdx9fC35MVLfvIP8ywZDZD';

  constructor(private http: HttpClient) {}

  sendEvent(eventName: string, eventData: any) {
    const headers = new HttpHeaders({
      Authorization: `Bearer ${this.accessToken}`,
      'Content-Type': 'application/json'
    });
    
    const body = {
      data: [
        {
          event_name: eventName,
          event_time: Math.floor(Date.now() / 1000),
          user_data: {
            em: this.hashEmail(eventData.email)
          },
          custom_data: eventData
        }
      ]
    };

    return this.http.post(this.facebookApiUrl, body, { headers });
  }

  private hashEmail(email: string): string {
    return email;
  }
}


  // private apiUrl = 'https://graph.facebook.com/v12.0/341576715711996/events';
  // private accessToken = 'EAAV9uLcX5y4BOwFMFzb9ykYblJ3s6ZAMZCEpreV7EJeiKMxFrhEtSqAN4ZBUux4bvWaJ6RaybUXJvaL33BCtqoNYYrpvR7On8it5WQNM9RWz58Htq5EKr2TFwkoVRcoS1bhotqDQkinKZBwYlZACCdbZC8Xs5ALs8iIpWpA2IIz7DD5x1kbdx9fC35MVLfvIP8ywZDZD';

  // constructor(private http: HttpClient) {}
  
  // trackEvent(eventName: string, eventData: any, userData: any): Observable<any> {
  //   // const hashedUserData = {
  //   //   email: this.hashValue(userData.email),
  //   //   phone: this.hashValue(userData.phone),
  //   //   // Adicione mais campos conforme necessário
  //   // };

  //   const eventPayload = {
  //     data: [
  //       {
  //         event_name: eventName,
  //         event_time: Math.floor(Date.now() / 1000), 
  //         action_source: 'website',
  //         // user_data: hashedUserData,
  //         custom_data: eventData,
  //       },
  //     ],
  //   };

  //   const params = new HttpParams().set('access_token', this.accessToken); 

  //   return this.http.post(this.apiUrl, eventPayload, { params });
  // }

  // // private hashValue(value: string): string {
  // //   if (!value) return '';
  // //   const hash = createHash('md5');
  // //   hash.update(value);
  // //   return hash.digest('hex');
  // // }

// }
