import { LightningElement,api } from 'lwc';

export default class AccountChild2 extends LightningElement {
    @api searchTextChild2;
    columns = [
        {label: 'Id', fieldName:'Id'},
        {label: 'Name', fieldName:'Name'},
        {label: 'Actions', fieldName:'Actions', type:'button', typeAttributes:
        {
          label:'View Contacts',
          value:'view_contacts'
        }
    }
    ]
    rows =[
        {Id:'1', Name:'Maria'},
        {Id:'2', Name:'Rachel'},
        {Id:'3', Name:'Kamys'},
        {Id:'4', Name:'Lucas'}

    ]
    //defines array - []
    //defines object - {}

    currentId;
    currentName;
    //Pegando Id e name da conta para buscar contatos
    handleRowAction(event){
        if(event.detail.action.value=='view_contacts'){
        this.currentId = event.detail.row.Id;
        this.currentName = event.detail.row.Name;
        }

    }
}