import { InMemoryDbService } from 'angular-in-memory-web-api';

export class TestData implements InMemoryDbService {
    createDb(){
        let StudentDetails = [
            {id:1 , name:"sai"},
            {id:1 , name:"bindu"},
            {id:1 , name:"geethu"}
        ];
        return{students:StudentDetails};

    }
}
