import { LightningElement, api, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountClass.getAccounts';
import { MessageContext, publish } from 'lightning/messageService';
import ComrevoChannel from '@salesforce/messageChannel/ComrevoChannel__c';

export default class AccountChild2 extends LightningElement {
    @api searchTextChild2;
    @wire (MessageContext) messageContext;

    columns=[
        {label: 'Id', fieldName:'Id'},
        {label: 'Name', fieldName:'Name'},
        {label:'Actions', fieldName:'Actions', type:'button', typeAttributes:
        {
            label:'View Contacts',
            value:'view_contacts'
        }
    }
    ]

    //[] defines array
    //{} defines object


    currentId;
    currentName;

    handleRowAction(event)
    {
        if(event.detail.action.value=='view_contacts')
        {
        this.currentId=event.detail.row.Id;
        this.currentName=event.detail.row.Name;

        const payload= 
        {
            accountId: event.detail.row.Id,
            accountName: event.detail.row.Name
        };

        publish(this.messageContext, ComrevoChannel ,payload);

        }

        
    }

    @wire(getAccounts, {searchTextClass:'$searchTextChild2'}) accountRecords;

}