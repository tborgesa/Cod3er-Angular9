import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phone'
})
export class PhonePipe implements PipeTransform {

  transform(phone: string) {
    if (phone) {
      const value = phone.toString().replace(/\D/g, '');

      let foneFormatado = '';

      switch (true) {
        case (value.length > 12):
          foneFormatado = value.replace(/(\d{2})?(\d{2})?(\d{5})?(\d{4})/, '+$1 ($2) $3-$4');
          break;
        case (value.length > 11):
          foneFormatado = value.replace(/(\d{2})?(\d{2})?(\d{4})?(\d{4})/, '+$1 ($2) $3-$4');
          break;
        case (value.length > 10):
          foneFormatado = value.replace(/(\d{2})?(\d{5})?(\d{4})/, '($1) $2-$3');
          break;
        case (value.length > 9):
          foneFormatado = value.replace(/(\d{2})?(\d{4})?(\d{4})/, '($1) $2-$3');
          break;
        case (value.length > 5):
          foneFormatado = value.replace(/^(\d{2})?(\d{4})?(\d{0,4})/, '($1) $2-$3');
          break;
        case (value.length > 1):
          foneFormatado = value.replace(/^(\d{2})?(\d{0,5})/, '($1) $2');
          break;
        default:
          if (phone !== '') { foneFormatado = value.replace(/^(\d*)/, '($1'); }
          break;
      }

      return foneFormatado;
    }
  }

}
