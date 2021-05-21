/*
In order to make a class, use the following format:

class <Class Name>() {

    constructor(<Contructor Args>) {

        this.<Object>;

    }

    ...Additional Functionality

}

In order to declare a Instance of a class, type:

let <Instance Name> = new <Class Name>(<Constructor Args>);
*/

// Examples:

class myClass {

    constructor() {

        this.type = 'myClass';

    }

    printSomething(info) {

        console.log(info);

    }

}