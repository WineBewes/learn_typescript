describe('arrow function', () => {

  test('does not create new scope of "this"', () => {

    
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