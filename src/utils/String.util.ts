export class StringUtil {
  static tiraAcentos(palavra: string) {
    return palavra.normalize('NFD').replace(/[\u0300-\u036f]/g, '');
  }
}
