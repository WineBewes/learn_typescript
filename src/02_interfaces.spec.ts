interface ITest {
  naam: string,
  getIets(): string;
}

class Test implements ITest {
  naam: string;
  getIets(): string {
    throw new Error("Method not implemented.");
  }
}

// verschil met type alias
type GetIetsAnders = () => string;

describe('interfaces', () => {

  test('can define function', () => {


  });


});