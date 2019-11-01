import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
    name:'join'
})
export class JoinPipe implements PipeTransform {
    transform (arr: Array<string>, separador: string, openClose: string): string {
        return openClose[0] + arr.join(separador) + openClose[1];
    }
}