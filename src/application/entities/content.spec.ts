import { Content } from "./content"

describe('Notification Content', () => {
  it('should be able to create a notification content', () => {
    const content = new Content('Voce recebeu uma nova solicitacao');
  
    expect(content).toBeTruthy();
  });
  
  it('not should be able to create a notification content within less than 5 characters', () => {
    expect(() => new Content('aaa')).toThrow();
  });
  
  it('not should be able to create a notification content within more than 240 characters', () => {
    expect(() => new Content('a'.repeat(241))).toThrow();
  });
})