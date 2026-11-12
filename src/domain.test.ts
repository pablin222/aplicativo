import {describe,it,expect} from 'vitest';
import {calcular,ordenarRanking,normalizar} from './domain';
describe('domínio',()=>{
it('calcula a média ponderada',()=>expect(calcular([5,4,3,2])).toBe(3.75));
it('rejeita notas fora de 1 a 5',()=>expect(()=>calcular([0,5,5,5])).toThrow());
it('normaliza acentos',()=>expect(normalizar('Extensão')).toBe('extensao'));
it('ranking requer amostra mínima',()=>{const r=ordenarRanking([{id_projeto:'NAC-001',media:5,quantidade:2,medias_criterios:[],atualizado_em:''}],5);expect(r[0].posicao).toBeNull();});
});