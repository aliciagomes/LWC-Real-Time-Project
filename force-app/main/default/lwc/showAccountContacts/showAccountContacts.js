import { MessageContext, subscribe, unsubscribe } from 'lightning/messageService';
import { LightningElement, wire } from 'lwc';
import ComrevoChannel from '@salesforce/messageChannel/ComrevoChannel__c';

export default class ShowAccountContacts extends LightningElement {
 
    subscription = null;
    @wire (MessageContext) messageContext;
    accountId;
    accountName;
    
    connectedCallback()
    {
      this.handleSubscribe();
    }

    disconnectedCallback()
    {
      this.handleUnsubscribe();
    }

    handleSubscribe()
    {

        if(!this.subscription)
        {
            this.subscription=subscribe(this.messageContext, ComrevoChannel ,
                (parameter)=> 
                    {
                        this.accountId=parameter.accountId;
                        this.accountName=parameter.accountName;
                    }
            );
        }
    }

    handleUnsubscribe()
    {
        unsubscribe(this.subscription);
        this.subscription=null;
        
    }
} 