export class Student {
    full_name: string = '';
    date_of_birth: string = '';
    address: string = '';
    phone: string = '';

    constructor(
        _full_name: string,
        _date_of_birth: string,
        _address: string,
        _phone: string) {
        
        if (_full_name === '' || _date_of_birth === '' || _address === '' || _phone === '') {
            throw new Error('undefined values');
        }else{
            this.full_name = _full_name;
            this.date_of_birth = _date_of_birth;
            this.address = _address;
            this.phone = _phone;
        } 
    }
}