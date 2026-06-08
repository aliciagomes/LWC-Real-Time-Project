import { LightningElement, api, wire } from 'lwc';
import getAccounts from '@salesforce/apex/AccountClass.getAccounts';

export default class AccountChild2 extends LightningElement {
    @api searchTextChild2;

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

    rows=[
        {Id:'23', Name:'Parag Jambhulkar'},
        {Id:'30', Name:'Mayur Chavan'},
        {Id:'33', Name:'Yogesh Handge'},
        {Id:'40', Name:'Manish Jansari'}
    ]

    currentId;
    currentName;

    handleRowAction(event)
    {
        if(event.detail.action.value=='view_contacts')
        {
        this.currentId=event.detail.row.Id;
        this.currentName=event.detail.row.Name;
        }
    }

    @wire(getAccounts, {searchTextClass:'$searchTextChild2'}) accountRecords;

}