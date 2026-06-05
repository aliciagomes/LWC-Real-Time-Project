import { LightningElement } from 'lwc';

export default class AccountChild1 extends LightningElement {

    searchTextChild1;

    handleChange(event){
        //Salva string que foi incluída no input
        this.searchTextChild1=event.target.value;

    }
        
    handleClick(event){
     //Passa variavel para componente pai
     const searchEvent=new CustomEvent('getsearchevent',{detail:this.searchTextChild1});
     this.dispatchEvent(searchEvent);
    }
}