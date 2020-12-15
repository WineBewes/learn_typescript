describe('arrow function', () => {

  test('ignores scope of "this"', () => {

    
    const receptEen = {
      naam: 'groentesoep',
      print: function() {
          console.log(this);
      }
    }

    receptEen.print();
    

    const receptTwee = {
      naam: 'tomatensoep',
      print: () => {
        console.log(this);
      }
    }

    receptTwee.print();

  });
});