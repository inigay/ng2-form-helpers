import {Pipe, PipeTransform} from '@angular/core'

@Pipe({name: 'phone'})
class PhonePipe implements PipeTransform 
{
    transform(value: any)
    {
        if(value.length >= 10)
            value = value.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");

        return value;
    }
}

export default PhonePipe;